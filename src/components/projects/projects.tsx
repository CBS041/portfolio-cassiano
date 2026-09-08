'use client'

import { useQuery } from '@tanstack/react-query'
import { ProjectDialog } from './project-dialog'
import { ProjectCardSkeleton } from './project-card-skeleton'

import { GithubRepo } from '@/lib/types'

export function Projects() {
  const { data: repositories, isLoading } = useQuery<GithubRepo[]>({
    queryKey: ['repositories'],
    queryFn: async () => {
      const res = await fetch('/api/github')
      if (!res.ok) throw new Error('Erro ao buscar repositórios')
      return res.json()
    },
    staleTime: 1000 * 60 * 60
  })

  if (isLoading) {
    return (
      <>
        {Array.from({ length: 6 }).map((_, index) => (
          <ProjectCardSkeleton key={index} />
        ))}
      </>
    )
  }

  return (
    <>
      {repositories?.map(repo => {
        const imageUrl = `https://opengraph.githubassets.com/1/${process.env.NEXT_PUBLIC_AUTHOR_GITHUB}/${repo.name}`

        return (
          <ProjectDialog
            key={repo.id}
            name={repo.name}
            description={repo.description}
            topics={repo.topics ?? []}
            githubUrl={repo.html_url}
            imageUrl={imageUrl}
          />
        )
      })}
    </>
  )
}
