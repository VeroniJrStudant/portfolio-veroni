import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { Providers } from './providers'
import FloatingScrollToTop from '@/components/FloatingScrollToTop'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Veroni - Desenvolvedor Full Stack',
  description: 'Portfólio profissional com projetos, tutoriais e experiências em desenvolvimento web e mobile',
  keywords: ['desenvolvedor', 'full stack', 'react', 'node.js', 'typescript', 'portfólio'],
  authors: [{ name: 'Veroni' }],
  creator: 'Veroni',
  openGraph: {
    title: 'Veroni - Desenvolvedor Full Stack',
    description: 'Portfólio profissional com projetos, tutoriais e experiências em desenvolvimento web e mobile',
    type: 'website',
    locale: 'pt_BR',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Veroni - Desenvolvedor Full Stack',
    description: 'Portfólio profissional com projetos, tutoriais e experiências em desenvolvimento web e mobile',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-BR" className="scroll-smooth">
      <body className={inter.className}>
        <Providers>
          <div className="min-h-screen bg-brown-950">
            {children}
            <FloatingScrollToTop />
          </div>
        </Providers>
      </body>
    </html>
  )
} 