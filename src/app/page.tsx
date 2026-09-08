import { Contact } from '@/components/contact'
import { Header } from '@/components/header'
import { Profile } from '@/components/profile'
import { Projects } from '@/components/projects/projects'
import { Stacks } from '@/components/stacks/stacks'

async function delay(ms: number) {
  await new Promise(resolve => setTimeout(resolve, ms))
}

export default async function Home() {
  await delay(5000)
  return (
    <>
      <div className="min-h-screen pt-24">
        <Header />
        <main className="max-w-6xl mx-auto px-4 py-10">
          <div className="grid gap-10 lg:grid-cols-2">
            <Profile />

            <div className="flex flex-col gap-6">
              <h2 className="text-sm font-medium uppercase tracking-widest text-zinc-500">
                Stacks
              </h2>
              <Stacks />
            </div>
          </div>

          <section id="projetos" className="mt-10 scroll-mt-24">
            <h2 className="text-sm font-medium uppercase tracking-widest text-zinc-500">
              Projetos
            </h2>

            <div className="grid gap-6 mt-4 sm:grid-cols-2 lg:grid-cols-3">
              <Projects />
            </div>
          </section>

          <section id="contato" className="mt-10 scroll-mt-24">
            <Contact />
          </section>
        </main>
      </div>
    </>
  )
}
