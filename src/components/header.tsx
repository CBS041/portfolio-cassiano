'use client'

import { useState } from 'react'
import { NavButton } from './ui/nav-button'
import { DownloadCV } from './download-cv'
import { ListIcon, XIcon as X } from '@phosphor-icons/react'

export function Header() {
  const [open, setOpen] = useState(false)

  function scrollTo(id: string) {
    setOpen(false)

    const section = document.getElementById(id)
    section?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-50 border-b border-zinc-800 bg-zinc-950/80 backdrop-blur">
        <div className="max-w-6xl mx-auto px-4 py-5 flex items-center justify-between">
          <div>
            <span className="text-lg font-semibold text-zinc-100">
              cassiano.
            </span>
            <span className="text-lg font-semibold text-zinc-600">dev</span>
          </div>

          <nav className="hidden md:flex gap-6 text-sm text-zinc-400">
            <NavButton
              label="Inicio"
              onClick={() => scrollTo('top')}
              className="hover:text-zinc-100 cursor-pointer"
            />
            <NavButton
              label="Projetos"
              onClick={() => scrollTo('projetos')}
              className="hover:text-zinc-100 cursor-pointer"
            />
            <NavButton
              label="Contato"
              onClick={() => scrollTo('contato')}
              className="hover:text-zinc-100 cursor-pointer"
            />

            <DownloadCV />
          </nav>

          <button
            type="button"
            onClick={() => setOpen(prev => !prev)}
            aria-label="Abrir menu"
            aria-expanded={open}
            className="md:hidden text-zinc-100"
          >
            {open ? <X /> : <ListIcon />}
          </button>
        </div>

        {open && (
          <div className="md:hidden border-t border-zinc-800 bg-zinc-950">
            <div className="max-w-6xl mx-auto px-4 py-5 flex flex-col gap-4">
              <NavButton
                label="Home"
                onClick={() => scrollTo('top')}
                className="text-zinc-400 hover:text-zinc-100 text-left"
              />
              <NavButton
                label="Projetos"
                onClick={() => scrollTo('projetos')}
                className="text-zinc-400 hover:text-zinc-100 text-left"
              />
              <NavButton
                label="Contato"
                onClick={() => scrollTo('contato')}
                className="text-zinc-400 hover:text-zinc-100 text-left"
              />
              <DownloadCV />
            </div>
          </div>
        )}
      </header>
    </>
  )
}
