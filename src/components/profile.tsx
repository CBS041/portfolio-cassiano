import Image from 'next/image'

export function Profile() {
  return (
    <div id="top" className="flex flex-col gap-6 scroll-mt-24">
      <div className="flex items-center gap-4">
        <Image
          className="rounded-lg border border-zinc-800/80"
          src="https://github.com/CBS041.png"
          width={96}
          height={96}
          alt="Imagem de perfil"
        />

        <div className="flex flex-col">
          <p className="text-xl font-medium text-zinc-100">Cassiano</p>
          <span className="text-sm text-zinc-400">
            Estudante de Engenharia de Software · Dev Full Stack
          </span>
        </div>
      </div>

      <div className="space-y-4 text-zinc-400 leading-relaxed">
        <p>
          Sou Cassiano Santos, estudante de Engenharia de Software. Desenvolvo
          com foco em <span className="text-zinc-200">Backend</span>,
          trabalhando principalmente com{' '}
          <span className="text-zinc-200">
            Node.js, TypeScript, APIs REST, PostgreSQL, Prisma e Redis
          </span>
          . No frontend, aplico{' '}
          <span className="text-zinc-200">React e Next.js</span> para fechar o
          ciclo completo das aplicações que construo.
        </p>

        <p>
          Estou em busca da minha primeira oportunidade na área, com disposição
          para aprender rápido e assumir desafios reais junto de um time.
        </p>
      </div>
    </div>
  )
}
