'use client'

import { useEffect } from 'react'
import { usePathname } from 'next/navigation'
import Script from 'next/script'

export function Analytics() {
  const gaId = process.env.NEXT_PUBLIC_GA_ID
  const gtmId = process.env.NEXT_PUBLIC_GTM_ID
  const pathname = usePathname()

  // Track page views on route changes
  useEffect(() => {
    if (typeof window !== 'undefined' && window.gtag && gaId) {
      window.gtag('config', gaId, {
        page_path: pathname,
      })
    }
  }, [pathname, gaId])

  // Don't render anything if not in production or if GA ID is missing
  if (process.env.NODE_ENV !== 'production' || !gaId) {
    return null
  }

  return (
    <>
      {/* Initialize dataLayer and gtag function - Must load first */}
      <Script
        id="gtag-init"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${gaId}', {
              page_path: window.location.pathname,
            });
          `,
        }}
      />
      
      {/* Google Analytics 4 Script - Loads after init */}
      <Script
        id="gtag-script"
        strategy="afterInteractive"
        src={`https://www.googletagmanager.com/gtag/js?id=${gaId}`}
        onLoad={() => {
          // Ensure gtag is properly initialized after script loads
          if (typeof window !== 'undefined' && window.gtag && gaId) {
            window.gtag('config', gaId, {
              page_path: window.location.pathname,
            })
          }
        }}
      />
      
      {/* Google Tag Manager - Only load if GTM ID is provided */}
      {gtmId && (
        <Script
          id="gtm"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
              new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
              j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
              'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
              })(window,document,'script','dataLayer','${gtmId}');
            `,
          }}
        />
      )}
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
            // eslint-disable-next-line @typescript-eslint/no-unused-vars
            const _firstInputEntry = entry as PerformanceEventTiming
            //console.log('FID:', _firstInputEntry.processingStart - _firstInputEntry.startTime)
          }
          if (entry.entryType === 'layout-shift') {
            // eslint-disable-next-line @typescript-eslint/no-unused-vars
            const _layoutShiftEntry = entry as PerformanceEntry & { value: number }
            //console.log('CLS:', _layoutShiftEntry.value)
          }
        }
      })

      observer.observe({ entryTypes: ['largest-contentful-paint', 'first-input', 'layout-shift'] })

      // Monitor page load performance
      window.addEventListener('load', () => {
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        const _navigation = performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming
        //console.log('Page Load Time:', _navigation.loadEventEnd - _navigation.fetchStart)
        //console.log('DOM Content Loaded:', _navigation.domContentLoadedEventEnd - _navigation.fetchStart)
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
