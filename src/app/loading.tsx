export default function Loading() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-[#0a0a0a]">
      <div
        className="h-10 w-10 animate-spin rounded-full border-4 border-zinc-700 border-t-white"
        role="status"
        aria-label="Carregando portfolio"
      />
    </main>
  )
}
