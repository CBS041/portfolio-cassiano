import { GithubGraphQLResponse, GithubRepo } from '@/lib/types'
import { NextResponse } from 'next/server'

const GITHUB_API_URL = 'https://api.github.com'
const GITHUB_GRAPHQL_URL = 'https://api.github.com/graphql'

const query = `
  query GetPinnedRepositories($login: String!) {
    user(login: $login) {
      pinnedItems(first: 6, types: REPOSITORY) {
        nodes {
          ... on Repository {
            databaseId
            name
            url
            description

            primaryLanguage {
              name
            }

            repositoryTopics(first: 20) {
              nodes {
                topic {
                  name
                }
              }
            }

            stargazerCount
            forkCount
            createdAt
            isArchived
            isFork
            diskUsage
          }
        }
      }
    }
  }
`

export async function GET() {
  try {
    const owner = process.env.NEXT_PUBLIC_AUTHOR_GITHUB
    const token = process.env.GITHUB_TOKEN

    if (!owner) {
      return NextResponse.json(
        {
          error: 'NEXT_PUBLIC_AUTHOR_GITHUB não configurada'
        },
        { status: 500 }
      )
    }

    if (!token) {
      return NextResponse.json(
        {
          error: 'GITHUB_TOKEN não configurado'
        },
        { status: 500 }
      )
    }

    const response = await fetch(GITHUB_GRAPHQL_URL, {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        Authorization: `Bearer ${token}`,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        query,
        variables: {
          login: owner
        }
      }),
      next: {
        revalidate: 3600
      }
    })

    if (!response.ok) {
      return NextResponse.json(
        {
          error: `GitHub retornou status ${response.status}`
        },
        { status: response.status }
      )
    }

    const result = (await response.json()) as GithubGraphQLResponse

    if (result.errors?.length) {
      console.error('[api/github] GraphQL error:', result.errors)

      return NextResponse.json(
        {
          error: 'Falha ao consultar os repositórios fixados'
        },
        { status: 502 }
      )
    }

    const nodes = result.data?.user?.pinnedItems.nodes ?? []

    const repositories: GithubRepo[] = nodes
      .filter(repo => !repo.isArchived && !repo.isFork)
      .map(repo => ({
        id: repo.databaseId,
        name: repo.name,
        html_url: repo.url,
        description: repo.description,
        language: repo.primaryLanguage?.name ?? null,
        topics: repo.repositoryTopics.nodes.map(item => item.topic.name),
        stargazers_count: repo.stargazerCount,
        forks_count: repo.forkCount,
        created_at: repo.createdAt,
        archived: repo.isArchived,
        fork: repo.isFork,
        size: repo.diskUsage ?? 0
      }))

    return NextResponse.json(repositories, {
      headers: {
        'Cache-Control': 'public, s-maxage=3600, stale-while-revalidate=86400'
      }
    })
  } catch (error) {
    console.error('[api/github] erro:', error)

    return NextResponse.json(
      {
        error: 'Falha ao buscar repositórios fixados'
      },
      { status: 500 }
    )
  }
}
