'use client'

import { AccordionContext } from '@/contexts/stack-context'
import { type ReactNode, useState } from 'react'

export function StackAccordion({ children }: { children: ReactNode }) {
  const [openTitle, setOpenTitle] = useState<string | null>(null)

  return (
    <AccordionContext.Provider value={{ openTitle, setOpenTitle }}>
      {children}
    </AccordionContext.Provider>
  )
}
