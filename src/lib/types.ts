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
