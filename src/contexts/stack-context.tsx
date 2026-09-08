import { AccordionContextType } from '@/lib/types'
import { createContext } from 'react'

export const AccordionContext = createContext<AccordionContextType | null>(null)
