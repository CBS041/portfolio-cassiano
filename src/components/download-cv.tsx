import { DownloadIcon } from '@phosphor-icons/react'

export function DownloadCV() {
  return (
    <a href="/cv/cvCassiano2026.pdf" target="_blank" rel="noopener noreferrer">
      <button
        type="button"
        className="flex items-center gap-2 rounded-md border border-zinc-800 px-4 py-2 text-sm hover:bg-zinc-900 cursor-pointer"
      >
        <DownloadIcon size={16} />
        Download CV
      </button>
    </a>
  )
}
