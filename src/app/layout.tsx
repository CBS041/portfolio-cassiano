import type { Metadata } from 'next'
import { QueryProvider } from '@/components/query-provider'
import { Inter } from 'next/font/google'
import { cn } from '@/lib/utils'

import './globals.css'

const inter = Inter({ subsets: ['latin'], variable: '--font-sans' })

export const metadata: Metadata = {
  metadataBase: new URL('https://seu-dominio.com.br'), // Substitua pela URL oficial do seu portfólio
  title: {
    default: 'Cassiano | Desenvolvedor de Software & Portfólio',
    template: '%s | Cassiano'
  },
  description:
    'Portfólio profissional de Cassiano. Desenvolvedor de software especializado em aplicações web modernas, arquitetura escalável, React, Next.js e soluções B2B.',
  keywords: [
    'Desenvolvedor Full Stack',
    'Software Developer',
    'Next.js',
    'React',
    'TypeScript',
    'Portfólio',
    'Cassiano'
  ],
  authors: [{ name: 'Cassiano', url: 'https://cassianodev.vercel.app/' }],
  creator: 'Cassiano',
  publisher: 'Cassiano',
  formatDetection: {
    email: false,
    address: false,
    telephone: false
  },
  openGraph: {
    type: 'website',
    locale: 'pt_BR',
    url: 'https://cassianodev.vercel.app/',
    title: 'Cassiano | Desenvolvedor de Software & Portfólio',
    description:
      'Explore meus projetos, experiências e habilidades em desenvolvimento web moderno.',
    siteName: 'Portfólio de Cassiano',
    images: [
      {
        url: '/images/og-image.png', // Crie uma imagem de 1200x630px na pasta public
        width: 1200,
        height: 630,
        alt: 'Portfólio de Cassiano - Desenvolvedor de Software'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Cassiano | Desenvolvedor de Software',
    description:
      'Explore meus projetos e experiências em desenvolvimento web moderno.',
    images: ['/og-image.png']
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1
    }
  }
}

export default function RootLayout({ children }: LayoutProps<'/'>) {
  return (
    <html
      lang="pt-BR"
      suppressHydrationWarning
      className={cn('antialiased', 'font-sans', inter.variable)}
    >
      <body>
        <QueryProvider>{children}</QueryProvider>
      </body>
    </html>
  )
}
