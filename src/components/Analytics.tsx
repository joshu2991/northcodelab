'use client'

import { useEffect } from 'react'
import Script from 'next/script'

export function Analytics() {
  useEffect(() => {
    // Google Analytics 4 setup
    if (typeof window !== 'undefined' && process.env.NODE_ENV === 'production') {
      // Initialize Google Analytics
      window.gtag = window.gtag || function(...args: unknown[]) {
        (window.gtag.q = window.gtag.q || []).push(args)
      }
      
      window.gtag('js', new Date())
      window.gtag('config', process.env.NEXT_PUBLIC_GA_ID || 'G-XXXXXXXXXX', {
        page_title: document.title,
        page_location: window.location.href,
      })
    }
  }, [])

  if (process.env.NODE_ENV !== 'production') {
    return null
  }

  return (
    <>
      {/* Google Analytics */}
      <Script
        strategy="afterInteractive"
        src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GA_ID || 'G-XXXXXXXXXX'}`}
      />
      
      {/* Google Tag Manager */}
      <Script
        id="gtm"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
            new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
            j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
            'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
            })(window,document,'script','dataLayer','${process.env.NEXT_PUBLIC_GTM_ID || 'GTM-XXXXXXX'}');
          `,
        }}
      />
    </>
  )
}

// SEO Performance Monitoring
export function SEOMonitoring() {
  useEffect(() => {
    if (typeof window !== 'undefined') {
      // Monitor Core Web Vitals
      const observer = new PerformanceObserver((list) => {
        for (const entry of list.getEntries()) {
          if (entry.entryType === 'largest-contentful-paint') {
            //console.log('LCP:', entry.startTime)
          }
          if (entry.entryType === 'first-input') {
            const firstInputEntry = entry as PerformanceEventTiming
            //console.log('FID:', firstInputEntry.processingStart - firstInputEntry.startTime)
          }
          if (entry.entryType === 'layout-shift') {
            const layoutShiftEntry = entry as PerformanceEntry & { value: number }
            //console.log('CLS:', layoutShiftEntry.value)
          }
        }
      })

      observer.observe({ entryTypes: ['largest-contentful-paint', 'first-input', 'layout-shift'] })

      // Monitor page load performance
      window.addEventListener('load', () => {
        const navigation = performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming
        //console.log('Page Load Time:', navigation.loadEventEnd - navigation.fetchStart)
        //console.log('DOM Content Loaded:', navigation.domContentLoadedEventEnd - navigation.fetchStart)
      })

      return () => observer.disconnect()
    }
  }, [])

  return null
}

// Declare gtag function for TypeScript
declare global {
  interface Window {
    gtag: {
      (...args: unknown[]): void
      q: unknown[]
    }
  }
}
