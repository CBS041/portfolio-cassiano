'use client'

import { createContext, useState, type ReactNode } from 'react'

interface AccordionContextType {
  openTitle: string | null
  setOpenTitle: (title: string | null) => void
}

export const AccordionContext = createContext<AccordionContextType | null>(null)

export function StackAccordion({ children }: { children: ReactNode }) {
  const [openTitle, setOpenTitle] = useState<string | null>(null)

  return (
    <AccordionContext.Provider value={{ openTitle, setOpenTitle }}>
      {children}
    </AccordionContext.Provider>
  )
}
