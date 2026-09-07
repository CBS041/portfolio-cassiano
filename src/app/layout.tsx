import type { Metadata } from 'next'

import { QueryProvider } from '@/components/query-provider'
import { Inter } from 'next/font/google'
import { cn } from '@/lib/utils'

import './globals.css'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-sans'
})

export const metadata: Metadata = {
  metadataBase: new URL('https://cassianodev.vercel.app'),

  title: {
    default: 'Cassiano | Desenvolvedor de Software',
    template: '%s | Cassiano'
  },

  description:
    'Portfólio de Cassiano, desenvolvedor de software focado em aplicações web modernas, arquitetura escalável e soluções B2B com React, Next.js, TypeScript e Node.js.',

  keywords: [
    'Cassiano',
    'Desenvolvedor de Software',
    'Desenvolvedor Full Stack',
    'React',
    'Next.js',
    'TypeScript',
    'Node.js'
  ],

  authors: [
    {
      name: 'Cassiano',
      url: 'https://cassianodev.vercel.app'
    }
  ],

  creator: 'Cassiano',
  publisher: 'Cassiano',

  alternates: {
    canonical: '/'
  },

  category: 'technology',

  formatDetection: {
    email: false,
    address: false,
    telephone: false
  },

  openGraph: {
    type: 'website',
    locale: 'pt_BR',
    url: 'https://cassianodev.vercel.app',
    title: 'Cassiano | Desenvolvedor de Software',
    description:
      'Portfólio de Cassiano, desenvolvedor de software focado em aplicações web modernas e soluções B2B.',
    siteName: 'Portfólio de Cassiano',

    images: [
      {
        url: '/images/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Cassiano — Desenvolvedor de Software'
      }
    ]
  },

  twitter: {
    card: 'summary_large_image',
    title: 'Cassiano | Desenvolvedor de Software',
    description:
      'Portfólio de Cassiano, desenvolvedor de software focado em aplicações web modernas.',
    images: ['/images/og-image.png']
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

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Person',
  name: 'Cassiano',
  url: 'https://cassianodev.vercel.app',
  jobTitle: 'Desenvolvedor de Software',

  knowsAbout: [
    'TypeScript',
    'JavaScript',
    'React',
    'Next.js',
    'Node.js',
    'PostgreSQL',
    'Docker',
    'Software Engineering'
  ],

  sameAs: [
    'https://github.com/CBS041',
    'https://www.linkedin.com/in/cassiano-b-santos'
  ]
}

export default function RootLayout({ children }: LayoutProps<'/'>) {
  return (
    <html
      lang="pt-BR"
      suppressHydrationWarning
      className={cn('antialiased', 'font-sans', inter.variable)}
    >
      <body>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(jsonLd)
          }}
        />

        <QueryProvider>{children}</QueryProvider>
      </body>
    </html>
  )
}
