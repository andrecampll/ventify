import './globals.css'

import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { Toaster } from 'sonner'

import { Footer } from '@/components/footer'
import { Header } from '@/components/header'
import { ArtistsProvider } from '@/hooks/use-artists'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
})

export const metadata: Metadata = {
  title: {
    template: '%s | Ventify',
    default: 'Home',
  },
  description: 'Ventify music management',
  icons: {
    icon: '/logo.png',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html className={inter.variable} lang="en">
      <body className={`${inter.className} bg-background antialiased`}>
        <ArtistsProvider>
          <Header />

          <main className="mb-8 min-h-[84vh] px-4 md:px-12">
            <div className="m-auto max-w-5xl">{children}</div>
          </main>

          <Footer />
        </ArtistsProvider>
        <Toaster richColors />
      </body>
    </html>
  )
}
