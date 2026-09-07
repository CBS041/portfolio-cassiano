'use client'

import { useContext, useEffect, type ReactNode } from 'react' // Importe o useEffect
import { CaretDownIcon } from '@phosphor-icons/react'
import { AccordionContext } from '@/components/stack-accordion'

interface StackSectionProps {
  title: string
  children: ReactNode
  defaultOpen?: boolean
}

export function StackSection({
  title,
  children,
  defaultOpen = false
}: StackSectionProps) {
  const context = useContext(AccordionContext)

  if (!context) {
    throw new Error('StackSection must be used inside <StackAccordion>')
  }

  const { openTitle, setOpenTitle } = context
  const open = openTitle === title

  // ✅ CORRETO: Usa o useEffect para atualizar o estado após o render
  useEffect(() => {
    if (defaultOpen && openTitle === null) {
      setOpenTitle(title)
    }
  }, [defaultOpen, openTitle, title, setOpenTitle])

  function toggle() {
    setOpenTitle(open ? null : title)
  }

  return (
    <div className="col-span-full">
      <button
        type="button"
        onClick={toggle}
        aria-expanded={open}
        className="flex w-full items-center justify-between text-xs uppercase tracking-widest text-zinc-500 hover:text-zinc-300 transition cursor-pointer"
      >
        {title}
        <CaretDownIcon
          className={`h-4 w-4 transition-transform ${open ? 'rotate-180' : ''}`}
        />
      </button>

      <div
        className={`
          grid grid-cols-2 sm:grid-cols-3 gap-3
          overflow-hidden
          transition-all duration-300 ease-in-out
          ${open ? 'max-h-96 mt-3' : 'max-h-0'}
        `}
      >
        {children}
      </div>
    </div>
  )
}
