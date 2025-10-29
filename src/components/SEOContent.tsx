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
            "name": "Freelance Web Development Services",
            "description": "Freelance web development services available while seeking full-time opportunities. Expertise in Laravel, React, Next.js, and AWS.",
            "provider": {
              "@type": "Person",
              "name": "Jose Trueba",
              "url": "https://northcodelab.com",
              "jobTitle": "Full Stack Developer"
            },
            "serviceType": "Web Development",
            "areaServed": {
              "@type": "Country",
              "name": "Canada"
            },
            "availabilityStarts": "2024",
            "availabilityEnds": "2026"
          }
          break

        case 'portfolio':
          structuredData = {
            "@context": "https://schema.org",
            "@type": "ItemList",
            "name": "Portfolio Projects",
            "description": "Professional web development projects by Jose Trueba showcasing expertise in modern web technologies",
            "itemListElement": [
              {
                "@type": "CreativeWork",
                "name": "Baking Platform",
                "description": "Online Classes & Community Hub - A scalable baking education platform with video conferencing and progress tracking",
                "url": "https://baking.northcodelab.com",
                "creator": {
                  "@type": "Person",
                  "name": "Jose Trueba",
                  "jobTitle": "Full Stack Developer"
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
                  "@type": "Person",
                  "name": "Jose Trueba",
                  "jobTitle": "Full Stack Developer"
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
                  "@type": "Person",
                  "name": "Jose Trueba",
                  "jobTitle": "Full Stack Developer"
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
            "name": "Contact Jose Trueba",
            "description": "Get in touch with Jose Trueba, Full Stack Developer seeking opportunities in Vancouver, Canada",
            "mainEntity": {
              "@type": "Person",
              "name": "Jose Trueba",
              "jobTitle": "Full Stack Developer",
              "url": "https://northcodelab.com",
              "email": "hello@northcodelab.com",
              "sameAs": [
                "https://linkedin.com/in/josehumbertotrueba",
                "https://github.com/joshu2991"
              ],
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
      <h2>Jose Trueba - Full Stack Developer Portfolio in Vancouver, BC</h2>
      <p>
        Jose Trueba is a Full Stack Developer with 5+ years of experience seeking full-time opportunities in Vancouver, BC. 
        Specializes in Laravel, React, Next.js, AWS, and database optimization. Expert in building scalable web platforms, 
        reducing SQL query times by 92%, integrating payment systems, and leading development teams.
      </p>
      <p>
        Portfolio showcases expertise in full stack development including Laravel development, React development, 
        Next.js development, AWS cloud services, MySQL and PostgreSQL database optimization, Stripe payment integration, 
        and AI chatbot integration. Seeking employment opportunities with teams that value clean code, modern tech stacks, 
        and continuous learning.
      </p>
      <h3>Technical Skills and Expertise</h3>
      <ul>
        <li>Laravel Development - PHP framework for robust backend applications</li>
        <li>React Development - Modern JavaScript library for user interfaces</li>
        <li>Next.js Development - Full-stack React framework for production applications</li>
        <li>Node.js Development - Server-side JavaScript runtime</li>
        <li>AWS Cloud Services - Infrastructure and deployment on Amazon Web Services</li>
        <li>Database Optimization - Reduced SQL query times from 13s to 1s (92% improvement)</li>
        <li>Stripe Payment Integration - Secure payment processing systems</li>
        <li>AI Chatbot Integration - ChatGPT API integration with Laravel</li>
        <li>Performance Optimization - Speed and Core Web Vitals improvement</li>
        <li>Team Leadership - Led teams of 4+ developers across multiple projects</li>
      </ul>
      <h3>Location and Availability</h3>
      <p>
        Based in Vancouver, British Columbia, Canada. Work permit valid until August 2026. 
        Available for immediate start. Seeking full-time Full Stack Developer positions in Vancouver or remote within Canada.
      </p>
    </div>
  )
}
