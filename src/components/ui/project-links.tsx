import Link from 'next/link'
import { ArrowSquareOutIcon } from '@phosphor-icons/react'

type ProjectLinksProps = {
  githubUrl: string
  liveUrl?: string
}

export function ProjectLinks({ githubUrl, liveUrl }: ProjectLinksProps) {
  return (
    <div className="mt-6 flex justify-end gap-3">
      {liveUrl && (
        <Link
          href={liveUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 rounded-md border border-zinc-800 px-4 py-2 text-sm text-zinc-300 hover:bg-zinc-900"
        >
          Ver projeto
          <ArrowSquareOutIcon className="h-4 w-4" />
        </Link>
      )}

      <Link
        href={githubUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center gap-2 rounded-md border border-zinc-800 px-4 py-2 text-sm text-zinc-300 hover:bg-zinc-900"
      >
        GitHub
        <ArrowSquareOutIcon className="h-4 w-4" />
      </Link>
    </div>
  )
}
