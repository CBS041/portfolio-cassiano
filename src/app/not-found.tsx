import Link from 'next/link'

export default function NotFound() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-zinc-950 px-6">
      <div className="w-full max-w-md text-center">
        <span className="text-8xl font-medium text-zinc-500">404</span>

        <h1 className="mt-3 text-3xl font-semibold tracking-tight text-zinc-100">
          Página não encontrada
        </h1>

        <p className="mt-3 text-sm leading-relaxed text-zinc-400">
          A página que você está procurando não existe ou foi movida.
        </p>

        <Link
          href="/"
          className="mt-6 inline-flex items-center rounded-md border border-zinc-800 bg-zinc-900 px-4 py-2 text-sm font-medium text-zinc-100 transition hover:border-zinc-700 hover:bg-zinc-800"
        >
          Voltar para o início
        </Link>
      </div>
    </main>
  )
}
