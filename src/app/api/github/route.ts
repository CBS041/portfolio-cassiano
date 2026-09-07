import { GithubRepo } from '@/lib/types'
import { NextResponse } from 'next/server'

export type GithubRepoData = {
  name: string
  description: string | null
  html_url: string
  topics: string[]
  language: string | null
  stargazers_count: number
  forks_count: number
  updated_at: string
}

const GITHUB_API_URL = 'https://api.github.com'

export async function GET() {
  try {
    const owner = process.env.NEXT_PUBLIC_AUTHOR_GITHUB

    if (!owner) {
      return NextResponse.json(
        {
          error: 'NEXT_PUBLIC_AUTHOR_GITHUB não configurada'
        },
        { status: 500 }
      )
    }

    const response = await fetch(
      `${GITHUB_API_URL}/users/${owner}/repos?per_page=100&sort=created&direction=desc`,
      {
        headers: {
          Accept: 'application/vnd.github+json',
          'X-GitHub-Api-Version': '2022-11-28',
          'User-Agent': owner,
          ...(process.env.GITHUB_TOKEN && {
            Authorization: `Bearer ${process.env.GITHUB_TOKEN}`
          })
        },
        next: {
          revalidate: 3600
        }
      }
    )

    if (!response.ok) {
      const status = response.status

      return NextResponse.json(
        {
          error: `GitHub retornou status ${status}`
        },
        { status }
      )
    }

    const data = await response.json()

    if (!Array.isArray(data)) {
      return NextResponse.json([])
    }

    const repos = data
      .filter((repo: GithubRepo) => {
        const isNotFork = repo.fork === false
        const isNotArchived = repo.archived !== true
        const hasContent = (repo.size ?? 0) > 0
        const isNotProfileReadme =
          repo.name.toLowerCase() !== owner.toLowerCase()

        return isNotFork && isNotArchived && hasContent && isNotProfileReadme
      })
      .slice(0, 6)

    return NextResponse.json(repos, {
      headers: {
        'Cache-Control': 'public, s-maxage=3600, stale-while-revalidate=86400'
      }
    })
  } catch (error) {
    console.error('[api/github] erro:', error)

    return NextResponse.json(
      {
        error: 'Falha ao buscar dados do GitHub'
      },
      { status: 500 }
    )
  }
}
