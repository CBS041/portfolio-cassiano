import { NextRequest, NextResponse } from 'next/server'

type GithubTreeItem = {
  path: string
  type: 'blob' | 'tree'
}

type GithubTreeResponse = {
  tree: GithubTreeItem[]
}

type RepositoryAnalysis = {
  description: string
  features: string[]
  architecture: string
  technologies: string[]
}

const ANALYSIS_CACHE_SECONDS = 60 * 60 * 24
const MAX_FILES = 16
const MAX_FILE_SIZE = 8_000
const MAX_CONTEXT_SIZE = 60_000

const priorityFiles = [
  'README.md',
  'package.json',
  'pnpm-lock.yaml',
  'yarn.lock',
  'bun.lock',
  'bun.lockb',
  'docker-compose.yml',
  'docker-compose.yaml',
  'Dockerfile',
  'prisma/schema.prisma',
  'next.config.ts',
  'next.config.js',
  'tsconfig.json'
]

function githubHeaders() {
  return {
    Accept: 'application/vnd.github+json',
    'X-GitHub-Api-Version': '2022-11-28',
    ...(process.env.GITHUB_TOKEN
      ? { Authorization: `Bearer ${process.env.GITHUB_TOKEN}` }
      : {})
  }
}

function isRelevantSourceFile(path: string) {
  return /\.(ts|tsx|js|jsx|mjs|cjs|py|go|java|rs|sql|prisma|yml|yaml|json|md)$/i.test(
    path
  )
}

function isIgnoredPath(path: string) {
  return /(^|\/)(node_modules|\.next|dist|build|coverage|\.git)(\/|$)/.test(path)
}

function selectFiles(tree: GithubTreeItem[]) {
  const files = tree
    .filter(item => item.type === 'blob')
    .map(item => item.path)
    .filter(path => !isIgnoredPath(path) && isRelevantSourceFile(path))

  const selected = new Set<string>()

  for (const path of priorityFiles) {
    if (files.includes(path)) selected.add(path)
  }

  const sourceFiles = files
    .filter(path => path.startsWith('src/') || path.startsWith('app/'))
    .sort((a, b) => a.length - b.length)

  for (const path of sourceFiles) {
    if (selected.size >= MAX_FILES) break
    selected.add(path)
  }

  return Array.from(selected).slice(0, MAX_FILES)
}

async function fetchTextFile(owner: string, repo: string, branch: string, path: string) {
  const rawUrl = `https://raw.githubusercontent.com/${owner}/${repo}/${encodeURIComponent(branch)}/${path
    .split('/')
    .map(encodeURIComponent)
    .join('/')}`

  const response = await fetch(rawUrl, {
    headers: { Accept: 'text/plain' },
    next: { revalidate: ANALYSIS_CACHE_SECONDS }
  })

  if (!response.ok) return null

  const content = await response.text()
  return content.slice(0, MAX_FILE_SIZE)
}

function extractOutputText(response: any) {
  if (typeof response?.output_text === 'string') return response.output_text

  return response?.output
    ?.flatMap((item: any) => item.content ?? [])
    ?.find((item: any) => item.type === 'output_text')?.text
}

export async function GET(
  request: NextRequest,
  { params }: { params: Promise<{ repo: string }> }
) {
  const { repo } = await params
  const owner = process.env.NEXT_PUBLIC_AUTHOR_GITHUB
  const openaiKey = process.env.OPENAI_API_KEY

  if (!owner || !openaiKey) {
    return NextResponse.json(
      { error: 'Configuração da análise por IA incompleta.' },
      { status: 503 }
    )
  }

  if (!/^[a-zA-Z0-9._-]+$/.test(repo)) {
    return NextResponse.json({ error: 'Repositório inválido.' }, { status: 400 })
  }

  try {
    const repoResponse = await fetch(
      `https://api.github.com/repos/${owner}/${repo}`,
      {
        headers: githubHeaders(),
        next: { revalidate: ANALYSIS_CACHE_SECONDS }
      }
    )

    if (!repoResponse.ok) {
      return NextResponse.json(
        { error: 'Repositório não encontrado.' },
        { status: 404 }
      )
    }

    const repository = await repoResponse.json()
    const branch = repository.default_branch

    const treeResponse = await fetch(
      `https://api.github.com/repos/${owner}/${repo}/git/trees/${encodeURIComponent(branch)}?recursive=1`,
      {
        headers: githubHeaders(),
        next: { revalidate: ANALYSIS_CACHE_SECONDS }
      }
    )

    if (!treeResponse.ok) {
      return NextResponse.json(
        { error: 'Não foi possível ler a estrutura do repositório.' },
        { status: 502 }
      )
    }

    const tree = (await treeResponse.json()) as GithubTreeResponse
    const files = selectFiles(tree.tree ?? [])

    let context = `Repositório: ${owner}/${repo}\n\n`
    context += `Descrição do GitHub: ${repository.description ?? 'Sem descrição'}\n`
    context += `Linguagem principal: ${repository.language ?? 'Não informada'}\n\n`

    for (const path of files) {
      if (context.length >= MAX_CONTEXT_SIZE) break

      const content = await fetchTextFile(owner, repo, branch, path)
      if (!content) continue

      context += `\n===== ${path} =====\n${content}\n`
    }

    const openaiResponse = await fetch('https://api.openai.com/v1/responses', {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${openaiKey}`,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        model: process.env.OPENAI_MODEL || 'gpt-5.6-luna',
        store: false,
        input: [
          {
            role: 'system',
            content:
              'Você é um engenheiro de software analisando repositórios para um portfólio profissional. Analise somente evidências presentes no contexto fornecido. Nunca invente funcionalidades, tecnologias ou decisões arquiteturais. Escreva em português do Brasil, de forma objetiva e profissional. Retorne somente o JSON solicitado.'
          },
          {
            role: 'user',
            content: `Analise este repositório e gere uma apresentação técnica curta para aparecer em um ProjectDialog de portfólio.\n\n${context}`
          }
        ],
        text: {
          format: {
            type: 'json_schema',
            name: 'repository_analysis',
            strict: true,
            schema: {
              type: 'object',
              additionalProperties: false,
              properties: {
                description: { type: 'string' },
                features: {
                  type: 'array',
                  items: { type: 'string' },
                  minItems: 2,
                  maxItems: 5
                },
                architecture: { type: 'string' },
                technologies: {
                  type: 'array',
                  items: { type: 'string' },
                  minItems: 1,
                  maxItems: 8
                }
              },
              required: [
                'description',
                'features',
                'architecture',
                'technologies'
              ]
            }
          }
        }
      })
    })

    if (!openaiResponse.ok) {
      console.error('OpenAI analysis error:', await openaiResponse.text())
      return NextResponse.json(
        { error: 'Não foi possível analisar o repositório.' },
        { status: 502 }
      )
    }

    const response = await openaiResponse.json()
    const outputText = extractOutputText(response)

    if (!outputText) {
      return NextResponse.json(
        { error: 'A IA não retornou uma análise válida.' },
        { status: 502 }
      )
    }

    const analysis = JSON.parse(outputText) as RepositoryAnalysis

    return NextResponse.json(analysis, {
      headers: {
        'Cache-Control': `public, s-maxage=${ANALYSIS_CACHE_SECONDS}, stale-while-revalidate=604800`
      }
    })
  } catch (error) {
    console.error('Repository analysis error:', error)
    return NextResponse.json(
      { error: 'Erro interno ao analisar o repositório.' },
      { status: 500 }
    )
  }
}
