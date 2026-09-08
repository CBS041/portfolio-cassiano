export function ProjectCardSkeleton() {
  return (
    <article className="flex h-full animate-pulse flex-col rounded-lg border border-zinc-800 bg-zinc-950 p-4">
      <div className="mb-4 h-40 w-full shrink-0 rounded-md border border-zinc-800 bg-zinc-900" />

      <div className="h-4 w-2/3 rounded bg-zinc-800" />

      <div className="mt-3 space-y-2">
        <div className="h-3 w-full rounded bg-zinc-800" />
        <div className="h-3 w-5/6 rounded bg-zinc-800" />
      </div>

      <div className="mt-4 flex gap-2">
        <div className="h-3 w-12 rounded bg-zinc-800" />
        <div className="h-3 w-16 rounded bg-zinc-800" />
        <div className="h-3 w-14 rounded bg-zinc-800" />
      </div>
    </article>
  )
}
