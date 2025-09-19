import Head from 'next/head'

interface SEOHeadProps {
  title?: string
  description?: string
  keywords?: string
  canonicalUrl?: string
  ogImage?: string
  ogType?: string
  twitterCard?: string
  noindex?: boolean
  structuredData?: object
}

export function SEOHead({
  title = 'North Code Lab - Professional Web Development Services | Vancouver, Canada',
  description = 'Professional web development, e-commerce solutions, and digital experiences. Expert Laravel, React, Next.js development in Vancouver, Canada. Custom websites, web applications, and digital transformation services.',
  keywords = 'web development Vancouver, custom web development, Laravel development, React development, Next.js development, e-commerce development, digital agency Canada, web design Vancouver, professional web services, custom web applications, web development company, digital transformation, web solutions, Vancouver web developer',
  canonicalUrl = 'https://northcodelab.com',
  ogImage = 'https://northcodelab.com/og-image.png',
  ogType = 'website',
  twitterCard = 'summary_large_image',
  noindex = false,
  structuredData
}: SEOHeadProps) {
  const defaultStructuredData = {
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
        "description": "Professional web development studio specializing in custom websites, web applications, and digital experiences. Based in Vancouver, Canada.",
        "foundingDate": "2024",
        "founders": [
          {
            "@type": "Person",
            "name": "North Code Lab Team"
          }
        ],
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
        "description": "Professional web development services in Vancouver, Canada. Specializing in custom websites, e-commerce solutions, and digital experiences.",
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
      },
      {
        "@type": "WebSite",
        "@id": "https://northcodelab.com/#website",
        "url": "https://northcodelab.com",
        "name": "North Code Lab",
        "description": "Professional web development services in Vancouver, Canada",
        "publisher": {
          "@id": "https://northcodelab.com/#organization"
        },
        "potentialAction": [
          {
            "@type": "SearchAction",
            "target": {
              "@type": "EntryPoint",
              "urlTemplate": "https://northcodelab.com/?s={search_term_string}"
            },
            "query-input": "required name=search_term_string"
          }
        ]
      },
      {
        "@type": "Service",
        "@id": "https://northcodelab.com/#services",
        "name": "Web Development Services",
        "description": "Professional web development, e-commerce solutions, and digital experiences",
        "provider": {
          "@id": "https://northcodelab.com/#organization"
        },
        "serviceType": "Web Development",
        "areaServed": {
          "@type": "Country",
          "name": "Canada"
        },
        "hasOfferCatalog": {
          "@type": "OfferCatalog",
          "name": "Web Development Services",
          "itemListElement": [
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Service",
                "name": "Custom Web Development",
                "description": "Custom websites and web applications built with modern technologies"
              }
            },
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Service",
                "name": "E-commerce Development",
                "description": "Online stores and e-commerce solutions with secure payment processing"
              }
            },
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Service",
                "name": "Performance Optimization",
                "description": "Website speed optimization and Core Web Vitals improvement"
              }
            }
          ]
        }
      }
    ]
  }

  const finalStructuredData = structuredData || defaultStructuredData

  return (
    <Head>
      {/* Basic Meta Tags */}
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <meta name="author" content="North Code Lab" />
      <meta name="robots" content={noindex ? "noindex,nofollow" : "index,follow"} />
      <meta name="googlebot" content="index,follow" />
      <meta name="bingbot" content="index,follow" />
      
      {/* Canonical URL */}
      <link rel="canonical" href={canonicalUrl} />
      
      {/* Open Graph Meta Tags */}
      <meta property="og:type" content={ogType} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={canonicalUrl} />
      <meta property="og:site_name" content="North Code Lab" />
      <meta property="og:image" content={ogImage} />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta property="og:image:alt" content="North Code Lab - Professional Web Development Services" />
      <meta property="og:locale" content="en_CA" />
      
      {/* Twitter Card Meta Tags */}
      <meta name="twitter:card" content={twitterCard} />
      <meta name="twitter:site" content="@northcodelab" />
      <meta name="twitter:creator" content="@northcodelab" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={ogImage} />
      <meta name="twitter:image:alt" content="North Code Lab - Professional Web Development Services" />
      
      {/* Additional SEO Meta Tags */}
      <meta name="theme-color" content="#00AEEF" />
      <meta name="msapplication-TileColor" content="#101010" />
      <meta name="apple-mobile-web-app-capable" content="yes" />
      <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
      <meta name="apple-mobile-web-app-title" content="North Code Lab" />
      
      {/* Language and Region */}
      <meta name="language" content="English" />
      <meta name="geo.region" content="CA-BC" />
      <meta name="geo.placename" content="Vancouver" />
      <meta name="geo.position" content="49.2827;-123.1207" />
      <meta name="ICBM" content="49.2827, -123.1207" />
      
      {/* Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(finalStructuredData, null, 2)
        }}
      />
      
      {/* Preconnect to external domains for performance */}
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      
      {/* DNS Prefetch for performance */}
      <link rel="dns-prefetch" href="//www.google-analytics.com" />
      <link rel="dns-prefetch" href="//www.googletagmanager.com" />
    </Head>
  )
}
