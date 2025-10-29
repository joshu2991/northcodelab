import type { Metadata } from 'next'
import { Inter, Space_Grotesk } from 'next/font/google'
import './globals.css'
import { SmoothScrollProvider } from '@/components/SmoothScrollProvider'
import { Analytics, SEOMonitoring } from '@/components/Analytics'

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
  title: {
    default: 'Jose Trueba - Full Stack Developer | Vancouver, BC',
    template: '%s | Jose Trueba'
  },
  description: 'Full Stack Developer seeking opportunities in Vancouver. Expertise in Laravel, React, AWS. Reduced SQL queries by 92%, built payment systems, led dev teams.',
  keywords: [
    'Jose Trueba',
    'Full Stack Developer Vancouver',
    'Laravel developer Vancouver',
    'React developer Vancouver',
    'hire full stack developer',
    'software engineer Vancouver',
  ],
  authors: [{ name: 'Jose Trueba', url: 'https://northcodelab.com' }],
  creator: 'Jose Trueba',
  publisher: 'Jose Trueba',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://northcodelab.com'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    type: 'profile',
    locale: 'en_CA',
    url: 'https://northcodelab.com',
    siteName: 'Jose Trueba - Portfolio',
    title: 'Jose Trueba - Full Stack Developer | Vancouver, BC',
    description: 'Full Stack Developer seeking opportunities in Vancouver. Expertise in Laravel, React, AWS. Reduced SQL queries by 92%, built payment systems, led dev teams.',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Jose Trueba - Full Stack Developer',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Jose Trueba - Full Stack Developer | Vancouver, BC',
    description: 'Full Stack Developer seeking opportunities in Vancouver. Expertise in Laravel, React, AWS. Reduced SQL queries by 92%, built payment systems, led dev teams.',
    images: ['/og-image.png'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  icons: {
    icon: [
      { url: '/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
      { url: '/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
      { url: '/favicon.ico', sizes: 'any' }
    ],
    apple: [
      { url: '/apple-touch-icon.png', sizes: '180x180', type: 'image/png' }
    ],
    other: [
      { rel: 'mask-icon', url: '/safari-pinned-tab.svg', color: '#00AEEF' }
    ]
  },
  manifest: '/site.webmanifest',
  themeColor: '#00AEEF',
  category: 'technology',
  classification: 'Portfolio',
  other: {
    'geo.region': 'CA-BC',
    'geo.placename': 'Vancouver',
    'geo.position': '49.2827;-123.1207',
    'ICBM': '49.2827, -123.1207',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Person",
        "@id": "https://northcodelab.com/#person",
        "name": "Jose Trueba",
        "jobTitle": "Full Stack Developer",
        "url": "https://northcodelab.com",
        "image": "https://northcodelab.com/logo/logo_slogan_white.png",
        "description": "Full Stack Developer with 5+ years of experience building scalable web platforms. Seeking full-time opportunities in Vancouver, BC.",
        "email": "hello@northcodelab.com",
        "address": {
          "@type": "PostalAddress",
          "addressLocality": "Vancouver",
          "addressRegion": "BC",
          "addressCountry": "CA"
        },
        "sameAs": [
          "https://linkedin.com/in/josehumbertotrueba",
          "https://github.com/joshu2991"
        ],
        "knowsAbout": [
          "Laravel",
          "React",
          "Node.js",
          "AWS",
          "MySQL",
          "PostgreSQL",
          "PHP",
          "JavaScript",
          "TypeScript",
          "Next.js"
        ],
        "seeks": {
          "@type": "JobPosting",
          "title": "Full Stack Developer",
          "jobLocation": {
            "@type": "Place",
            "address": {
              "@type": "PostalAddress",
              "addressLocality": "Vancouver",
              "addressRegion": "BC",
              "addressCountry": "CA"
            }
          },
          "employmentType": "FULL_TIME"
        }
      },
      {
        "@type": "Organization",
        "@id": "https://northcodelab.com/#organization",
        "name": "Jose Trueba - Portfolio",
        "url": "https://northcodelab.com",
        "logo": {
          "@type": "ImageObject",
          "url": "https://northcodelab.com/logo/logo_slogan_white.png",
          "width": 600,
          "height": 120
        }
      }
    ]
  }

  return (
    <html lang="en" className={`${inter.variable} ${spaceGrotesk.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(structuredData, null, 2)
          }}
        />
      </head>
      <body className={`${inter.className} antialiased bg-black text-white overflow-x-hidden`}>
        <Analytics />
        <SEOMonitoring />
        <SmoothScrollProvider>
          {children}
        </SmoothScrollProvider>
      </body>
    </html>
  )
}