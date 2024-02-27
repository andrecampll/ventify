import './globals.css'

import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { Toaster } from 'sonner'

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
        {children}
        <Toaster richColors />
      </body>
    </html>
  )
}
