import type { Metadata } from 'next'

import { QueryProvider } from '@/components/query-provider'
import { Inter } from 'next/font/google'
import { cn } from '@/lib/utils'
import { Analytics } from '@vercel/analytics/next'
import { SpeedInsights } from '@vercel/speed-insights/next'

import './globals.css'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-sans'
})

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_URL),

  title: {
    default: `${process.env.NEXT_PUBLIC_AUTHOR_NAME} | Desenvolvedor de Software`,
    template: `%s | ${process.env.NEXT_PUBLIC_AUTHOR_NAME}`
  },

  description: `Portfólio de ${process.env.NEXT_PUBLIC_AUTHOR_NAME}, desenvolvedor de software focado em aplicações web modernas, arquitetura escalável e soluções B2B com React, Next.js, TypeScript e Node.js.`,

  keywords: [
    process.env.NEXT_PUBLIC_AUTHOR_NAME,
    'Desenvolvedor de Software',
    'Desenvolvedor Full Stack',
    'React',
    'Next.js',
    'TypeScript',
    'Node.js'
  ],

  authors: [
    {
      name: process.env.NEXT_PUBLIC_AUTHOR_NAME,
      url: process.env.NEXT_PUBLIC_URL
    }
  ],

  creator: process.env.NEXT_PUBLIC_AUTHOR_NAME,
  publisher: process.env.NEXT_PUBLIC_AUTHOR_NAME,

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
    url: process.env.NEXT_PUBLIC_URL,
    title: `${process.env.NEXT_PUBLIC_AUTHOR_NAME} | Desenvolvedor de Software`,
    description: `Portfólio de ${process.env.NEXT_PUBLIC_AUTHOR_NAME}, desenvolvedor de software focado em aplicações web modernas e soluções B2B.`,
    siteName: `Portfólio de ${process.env.NEXT_PUBLIC_AUTHOR_NAME}`,

    images: [
      {
        url: '/images/og-image.png',
        width: 1200,
        height: 630,
        alt: `${process.env.NEXT_PUBLIC_AUTHOR_NAME} — Desenvolvedor de Software`
      }
    ]
  },

  twitter: {
    card: 'summary_large_image',
    title: `${process.env.NEXT_PUBLIC_AUTHOR_NAME} | Desenvolvedor de Software`,
    description: `Portfólio de ${process.env.NEXT_PUBLIC_AUTHOR_NAME}, desenvolvedor de software focado em aplicações web modernas.`,
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
  name: process.env.NEXT_PUBLIC_AUTHOR_NAME,
  url: process.env.NEXT_PUBLIC_URL,
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
    `https://github.com/${process.env.NEXT_PUBLIC_AUTHOR_GITHUB}`,
    `https://www.linkedin.com/in/${process.env.NEXT_PUBLIC_AUTHOR_LINKEDIN}`
  ]
}

type LayoutProps = {
  children: React.ReactNode
}

export default function RootLayout({ children }: LayoutProps) {
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
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  )
}
