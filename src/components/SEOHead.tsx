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
  title = 'Jose Trueba - Full Stack Developer | Vancouver, BC',
  description = 'Full Stack Developer seeking opportunities in Vancouver. Expertise in Laravel, React, AWS. Reduced SQL queries by 92%, built payment systems, led dev teams.',
  keywords = 'Jose Trueba, Full Stack Developer Vancouver, Laravel developer Vancouver, React developer Vancouver, hire full stack developer, software engineer Vancouver',
  canonicalUrl = 'https://northcodelab.com',
  ogImage = 'https://northcodelab.com/og-image.png',
  ogType = 'profile',
  twitterCard = 'summary_large_image',
  noindex = false,
  structuredData
}: SEOHeadProps) {
  const defaultStructuredData = {
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
        "@type": "WebSite",
        "@id": "https://northcodelab.com/#website",
        "url": "https://northcodelab.com",
        "name": "Jose Trueba - Portfolio",
        "description": "Portfolio website showcasing Full Stack Developer skills and projects",
        "publisher": {
          "@id": "https://northcodelab.com/#person"
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
      <meta name="author" content="Jose Trueba" />
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
      <meta property="og:site_name" content="Jose Trueba - Portfolio" />
      <meta property="og:image" content={ogImage} />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta property="og:image:alt" content="Jose Trueba - Full Stack Developer" />
      <meta property="og:locale" content="en_CA" />
      
      {/* Twitter Card Meta Tags */}
      <meta name="twitter:card" content={twitterCard} />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={ogImage} />
      <meta name="twitter:image:alt" content="Jose Trueba - Full Stack Developer" />
      
      {/* Additional SEO Meta Tags */}
      <meta name="theme-color" content="#00AEEF" />
      <meta name="msapplication-TileColor" content="#101010" />
      <meta name="apple-mobile-web-app-capable" content="yes" />
      <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
      <meta name="apple-mobile-web-app-title" content="Jose Trueba" />
      
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
