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
    default: 'North Code Lab - Professional Web Development Services | Vancouver, Canada',
    template: '%s | North Code Lab'
  },
  description: 'Professional web development, MVP development, and AI chatbot integration services in Vancouver, Canada. Expert Laravel, React, Next.js development for startups, healthcare, and e-commerce. Custom websites, telemedicine platforms, and digital transformation solutions.',
  keywords: [
    'web development Vancouver',
    'custom web development',
    'Laravel development',
    'React development', 
    'Next.js development',
    'e-commerce development',
    'digital agency Canada',
    'web design Vancouver',
    'professional web services',
    'custom web applications',
    'web development company',
    'digital transformation',
    'web solutions',
    'Vancouver web developer',
    'Canada web development',
    'professional web design',
    'custom website development',
    'web application development',
    'e-commerce solutions',
    'digital experiences',
    'MVP development',
    'MVP development Vancouver',
    'minimum viable product development',
    'startup MVP development',
    'MVP web development',
    'AI chatbot development',
    'chatbot development Vancouver',
    'AI chatbot integration',
    'custom chatbot development',
    'telemedicine development',
    'telemedicine platform development',
    'healthcare web development',
    'healthcare app development',
    'patient management system',
    'healthcare software development',
    'telemedicine solutions',
    'AI-powered chatbot development',
    'conversational AI development',
    'chatbot integration services',
    'AI development Vancouver',
    'machine learning integration',
    'startup development services',
    'SaaS development',
    'SaaS platform development',
    'web application MVP',
    'mobile app MVP development',
    'full-stack development',
    'backend development Vancouver',
    'API development services',
    'database design and development',
    'cloud application development',
    'scalable web applications',
    'enterprise web development',
    'custom software development Vancouver'
  ],
  authors: [{ name: 'North Code Lab', url: 'https://northcodelab.com' }],
  creator: 'North Code Lab',
  publisher: 'North Code Lab',
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
    type: 'website',
    locale: 'en_CA',
    url: 'https://northcodelab.com',
    siteName: 'North Code Lab',
    title: 'North Code Lab - Professional Web Development Services | Vancouver, Canada',
    description: 'Professional web development, MVP development, and AI chatbot integration services in Vancouver, Canada. Expert Laravel, React, Next.js development for startups, healthcare, and e-commerce.',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'North Code Lab - Professional Web Development Services',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    site: '@northcodelab',
    creator: '@northcodelab',
    title: 'North Code Lab - Professional Web Development Services | Vancouver, Canada',
    description: 'Professional web development, MVP development, and AI chatbot integration services in Vancouver, Canada. Expert Laravel, React, Next.js development for startups, healthcare, and e-commerce.',
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
  classification: 'Web Development Services',
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
        "@type": "Organization",
        "@id": "https://northcodelab.com/#organization",
        "name": "North Code Lab",
        "url": "https://northcodelab.com",
        "logo": {
          "@type": "ImageObject",
          "url": "https://northcodelab.com/logo/logo_slogan_white.png",
          "width": 600,
          "height": 120
        },
        "description": "Professional web development studio specializing in MVP development, AI chatbot integration, custom websites, web applications, and digital experiences. Based in Vancouver, Canada.",
        "foundingDate": "2024",
        "contactPoint": {
          "@type": "ContactPoint",
          "telephone": "+1-604-000-0000",
          "contactType": "customer service",
          "email": "hello@northcodelab.com",
          "areaServed": "CA",
          "availableLanguage": "English"
        },
        "address": {
          "@type": "PostalAddress",
          "addressLocality": "Vancouver",
          "addressRegion": "BC",
          "addressCountry": "CA"
        },
        "sameAs": [
          "https://linkedin.com/company/north-code-lab",
          "https://twitter.com/northcodelab",
          "https://instagram.com/northcodelab"
        ]
      },
      {
        "@type": "LocalBusiness",
        "@id": "https://northcodelab.com/#localbusiness",
        "name": "North Code Lab",
        "image": "https://northcodelab.com/logo/logo_slogan_white.png",
        "description": "Professional web development services in Vancouver, Canada. Specializing in MVP development, AI chatbot integration, custom websites, e-commerce solutions, and digital experiences.",
        "url": "https://northcodelab.com",
        "telephone": "+1-604-000-0000",
        "email": "hello@northcodelab.com",
        "address": {
          "@type": "PostalAddress",
          "streetAddress": "Vancouver",
          "addressLocality": "Vancouver",
          "addressRegion": "BC",
          "postalCode": "V6B 1A1",
          "addressCountry": "CA"
        },
        "geo": {
          "@type": "GeoCoordinates",
          "latitude": 49.2827,
          "longitude": -123.1207
        },
        "openingHoursSpecification": {
          "@type": "OpeningHoursSpecification",
          "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
          "opens": "09:00",
          "closes": "17:00"
        },
        "priceRange": "$$",
        "serviceArea": {
          "@type": "GeoCircle",
          "geoMidpoint": {
            "@type": "GeoCoordinates",
            "latitude": 49.2827,
            "longitude": -123.1207
          },
          "geoRadius": "50000"
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