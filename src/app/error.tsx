'use client'

import { useEffect } from 'react'

export default function Error({
  error,
  reset
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  useEffect(() => {
    console.error(error)
  }, [error])

  return (
    <main className="flex min-h-screen items-center justify-center bg-[#0a0a0a] px-4">
      <div className="w-full max-w-md text-center">
        <p className="text-sm font-medium uppercase tracking-widest text-zinc-500">
          Erro
        </p>

        <h1 className="mt-3 text-2xl font-medium text-zinc-100">
          Algo deu errado
        </h1>

        <p className="mt-3 text-sm leading-relaxed text-zinc-400">
          Ocorreu um erro inesperado ao carregar esta página. Tente novamente.
        </p>

        <button
          onClick={() => reset()}
          className="mt-6 rounded-md border border-zinc-800 bg-zinc-950 px-4 py-2 text-sm text-zinc-300 transition hover:border-zinc-700 hover:text-zinc-100"
        >
          Tentar novamente
        </button>
      </div>
    </main>
  )
}
