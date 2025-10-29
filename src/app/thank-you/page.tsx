'use client'

import { useEffect } from 'react'
import { motion } from 'framer-motion'
import { CheckCircle, ArrowLeft, Mail, Clock } from 'lucide-react'
import Link from 'next/link'
import { Navigation } from '@/components/Navigation'
import { Button } from '@/components/Button'
import { Footer } from '@/components/Footer'

export default function ThankYouPage() {
  useEffect(() => {
    // Clear any form data from session storage
    if (typeof window !== 'undefined') {
      sessionStorage.removeItem('contactFormData')
    }
  }, [])

  return (
    <main className="min-h-screen">
      <Navigation />
      
      {/* Main Content Section */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 relative overflow-hidden min-h-[calc(100vh-200px)] flex items-center">
        {/* Background elements */}
        <div className="absolute inset-0">
          <div className="absolute top-1/4 left-0 w-96 h-96 rounded-full blur-3xl blur-blue" />
          <div className="absolute bottom-1/4 right-0 w-96 h-96 rounded-full blur-3xl blur-purple" />
        </div>

        <div className="max-w-4xl mx-auto relative z-10 w-full">
          {/* Success Icon & Title */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            className="text-center mb-12"
          >
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ 
                duration: 0.6, 
                delay: 0.2,
                type: 'spring',
                stiffness: 200
              }}
              className="w-24 h-24 mx-auto mb-8 rounded-full glass-effect border-2 border-success flex items-center justify-center relative"
            >
              <div className="absolute inset-0 rounded-full bg-gradient-to-r from-success/20 to-emerald-500/20 animate-pulse" />
              <CheckCircle className="w-12 h-12 text-success relative z-10" />
            </motion.div>
            
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold font-space-grotesk mb-6">
              <span className="text-gradient">Message</span>
              <br />
              <span className="text-gradient-blue">Sent!</span>
            </h1>
            
            <p className="text-lg sm:text-xl md:text-2xl text-secondary max-w-2xl mx-auto leading-relaxed">
              Thank you for reaching out! I&apos;ve received your message and will get back to you within 24 hours.
            </p>
          </motion.div>

          {/* Status Cards */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-12"
          >
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="card-primary p-6 text-center group hover:scale-[1.02] transition-transform duration-300"
            >
              <div className="flex flex-col items-center gap-4 mb-4">
                <div className="w-12 h-12 rounded-xl glass-effect border border-accent-primary flex items-center justify-center group-hover:border-accent-secondary transition-colors">
                  <Mail className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-xl font-semibold text-primary">Email Sent</h3>
              </div>
              <p className="text-sm text-tertiary">
                Your message has been delivered successfully
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="card-primary p-6 text-center group hover:scale-[1.02] transition-transform duration-300"
            >
              <div className="flex flex-col items-center gap-4 mb-4">
                <div className="w-12 h-12 rounded-xl glass-effect border border-accent-secondary flex items-center justify-center group-hover:border-accent-primary transition-colors">
                  <Clock className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-xl font-semibold text-primary">Response Time</h3>
              </div>
              <p className="text-sm text-tertiary">
                I&apos;ll respond within 24 hours
              </p>
            </motion.div>
          </motion.div>

          {/* Action Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <Link href="/">
              <Button 
                size="lg"
                variant="primary"
                className="group w-full sm:w-auto"
              >
                <span className="flex items-center justify-center gap-3">
                  <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
                  Back to Home
                </span>
              </Button>
            </Link>
            
            <Link href="/#portfolio">
              <Button 
                size="lg"
                variant="secondary"
                className="w-full sm:w-auto"
              >
                Featured Projects
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
