export type GithubRepo = {
  id: number
  name: string
  html_url: string
  description: string | null
  language: string | null
  topics: string[]
  stargazers_count: number
  forks_count: number
  created_at: string
  archived: boolean
  fork: boolean
  size: number
}

export type GithubGraphQLResponse = {
  data?: {
    user?: {
      pinnedItems: {
        nodes: Array<{
          databaseId: number
          name: string
          url: string
          description: string | null
          primaryLanguage: {
            name: string
          } | null
          repositoryTopics: {
            nodes: Array<{
              topic: {
                name: string
              }
            }>
          }
          stargazerCount: number
          forkCount: number
          createdAt: string
          isArchived: boolean
          isFork: boolean
          diskUsage: number | null
        }>
      }
    } | null
  }
  errors?: Array<{
    message: string
  }>
}

export interface AccordionContextType {
  openTitle: string | null
  setOpenTitle: (title: string | null) => void
}
