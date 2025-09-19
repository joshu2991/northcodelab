'use client'

import { useEffect } from 'react'

interface SEOContentProps {
  section: 'hero' | 'about' | 'services' | 'solutions' | 'portfolio' | 'contact'
}

export function SEOContent({ section }: SEOContentProps) {
  useEffect(() => {
    // Add structured data for specific sections
    const addSectionStructuredData = () => {
      let structuredData = {}

      switch (section) {
        case 'services':
          structuredData = {
            "@context": "https://schema.org",
            "@type": "Service",
            "name": "Web Development Services",
            "description": "Professional web development services including custom websites, e-commerce solutions, and web applications",
            "provider": {
              "@type": "Organization",
              "name": "North Code Lab",
              "url": "https://northcodelab.com"
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
                    "description": "Custom websites and web applications built with modern technologies like Laravel, React, and Next.js"
                  }
                },
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": "E-commerce Development",
                    "description": "Online stores and e-commerce solutions with secure payment processing and inventory management"
                  }
                },
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": "Performance Optimization",
                    "description": "Website speed optimization and Core Web Vitals improvement for better search rankings"
                  }
                }
              ]
            }
          }
          break

        case 'portfolio':
          structuredData = {
            "@context": "https://schema.org",
            "@type": "ItemList",
            "name": "Featured Projects",
            "description": "Professional web development projects showcasing our expertise in modern web technologies",
            "itemListElement": [
              {
                "@type": "CreativeWork",
                "name": "Baking Platform",
                "description": "Online Classes & Community Hub - A scalable baking education platform with video conferencing and progress tracking",
                "url": "https://baking.northcodelab.com",
                "creator": {
                  "@type": "Organization",
                  "name": "North Code Lab"
                },
                "about": "Education Platform",
                "keywords": "Laravel, MySQL, AWS, Stripe, Video Conferencing"
              },
              {
                "@type": "CreativeWork",
                "name": "Care Platform",
                "description": "Elderly Care & Health Management System with multi-role access and vital signs monitoring",
                "url": "https://care.northcodelab.com",
                "creator": {
                  "@type": "Organization",
                  "name": "North Code Lab"
                },
                "about": "Healthcare",
                "keywords": "React, Next.js, Node.js, MySQL, Authentication"
              },
              {
                "@type": "CreativeWork",
                "name": "Health Solutions",
                "description": "Telemedicine & Patient Management Platform with AI-powered chatbot and automated marketing",
                "url": "https://health.northcodelab.com",
                "creator": {
                  "@type": "Organization",
                  "name": "North Code Lab"
                },
                "about": "Telemedicine",
                "keywords": "Laravel, Livewire, Stripe, AI Chatbot, Email Automation"
              }
            ]
          }
          break

        case 'contact':
          structuredData = {
            "@context": "https://schema.org",
            "@type": "ContactPage",
            "name": "Contact North Code Lab",
            "description": "Get in touch with our professional web development team in Vancouver, Canada",
            "mainEntity": {
              "@type": "Organization",
              "name": "North Code Lab",
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
              }
            }
          }
          break

        default:
          return
      }

      // Remove existing structured data for this section
      const existingScript = document.querySelector(`script[data-section="${section}"]`)
      if (existingScript) {
        existingScript.remove()
      }

      // Add new structured data
      const script = document.createElement('script')
      script.type = 'application/ld+json'
      script.setAttribute('data-section', section)
      script.textContent = JSON.stringify(structuredData, null, 2)
      document.head.appendChild(script)
    }

    addSectionStructuredData()
  }, [section])

  return null
}

// SEO-optimized content components
export function SEOKeywords() {
  return (
    <div className="sr-only" aria-hidden="true">
      <h2>Professional Web Development Services in Vancouver, Canada</h2>
      <p>
        North Code Lab specializes in MVP development, AI chatbot integration, custom web development, 
        e-commerce solutions, and digital experiences. Our expert team provides Laravel development, 
        React development, Next.js development, and professional web design services in Vancouver, British Columbia.
      </p>
      <p>
        We offer comprehensive web solutions including MVP development, AI chatbot development, 
        custom websites, web applications, e-commerce development, telemedicine platforms, 
        performance optimization, and digital transformation services. Our Vancouver-based web development 
        company serves clients across Canada with professional web services and cutting-edge technology solutions.
      </p>
      <h3>Web Development Technologies</h3>
      <ul>
        <li>MVP Development - Minimum viable product development for startups</li>
        <li>AI Chatbot Development - Custom chatbot integration and AI-powered solutions</li>
        <li>Laravel Development - PHP framework for robust web applications</li>
        <li>React Development - Modern JavaScript library for user interfaces</li>
        <li>Next.js Development - Full-stack React framework for production</li>
        <li>E-commerce Development - Online stores with secure payment processing</li>
        <li>Telemedicine Development - Healthcare platforms and patient management systems</li>
        <li>Custom Web Applications - Tailored solutions for business needs</li>
        <li>Performance Optimization - Speed and Core Web Vitals improvement</li>
        <li>Digital Transformation - Modernizing business processes</li>
      </ul>
      <h3>Service Areas</h3>
      <p>
        Serving Vancouver, British Columbia, and clients across Canada. 
        Professional web development services available for businesses of all sizes.
      </p>
    </div>
  )
}
