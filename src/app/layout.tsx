import type { Metadata } from 'next'
import { Inter, Space_Grotesk } from 'next/font/google'
import './globals.css'
import { SmoothScrollProvider } from '@/components/SmoothScrollProvider'

const inter = Inter({ 
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

const spaceGrotesk = Space_Grotesk({ 
  subsets: ['latin'],
  variable: '--font-space-grotesk',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'North Code Lab - Building the future of digital experiences',
  description: 'North Code Lab is a creative development studio where innovation meets execution. We craft digital experiences that inspire, scale, and perform.',
  keywords: 'web development, digital experiences, creative studio, innovation, technology',
  authors: [{ name: 'North Code Lab' }],
  viewport: 'width=device-width, initial-scale=1',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${inter.variable} ${spaceGrotesk.variable}`}>
      <body className={`${inter.className} antialiased bg-black text-white overflow-x-hidden`}>
        <SmoothScrollProvider>
          {children}
        </SmoothScrollProvider>
      </body>
    </html>
  )
}