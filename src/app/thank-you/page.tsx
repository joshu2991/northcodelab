'use client'

import { useEffect } from 'react'
import { motion } from 'framer-motion'
import { CheckCircle, ArrowLeft, Mail, Clock } from 'lucide-react'
import Link from 'next/link'
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
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-black">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/4 w-96 h-96 rounded-full blur-3xl bg-gradient-to-r from-purple-500/10 to-pink-500/10" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 rounded-full blur-3xl bg-gradient-to-r from-blue-500/10 to-cyan-500/10" />
      </div>

      <div className="relative z-10 min-h-screen flex flex-col">
        {/* Main Content */}
        <div className="flex-1 flex items-center justify-center px-4 sm:px-6 lg:px-8 py-16">
          <div className="max-w-2xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              className="mb-8"
            >
              <div className="w-20 h-20 mx-auto mb-6 rounded-full bg-gradient-to-r from-green-500 to-emerald-500 flex items-center justify-center">
                <CheckCircle className="w-10 h-10 text-white" />
              </div>
              
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold font-space-grotesk mb-6">
                <span className="text-gradient">
                  Message
                </span>
                <br />
                <span className="text-gradient-blue">
                  Sent!
                </span>
              </h1>
              
              <p className="text-lg sm:text-xl text-gray-300 mb-8 leading-relaxed">
                Thank you for reaching out! We&apos;ve received your message and will get back to you within 24 hours.
              </p>
            </motion.div>

            {/* Status Cards */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8"
            >
              <div className="card-primary p-4 sm:p-6 text-center">
                <div className="flex flex-col items-center gap-3 mb-3">
                  <div className="w-8 h-8 rounded-lg bg-gradient-to-r from-blue-500 to-cyan-500 flex items-center justify-center">
                    <Mail className="w-4 h-4 text-white" />
                  </div>
                  <h3 className="text-lg font-semibold text-white">Email Sent</h3>
                </div>
                <p className="text-sm text-gray-300">
                  Your message has been delivered to our team
                </p>
              </div>

              <div className="card-primary p-4 sm:p-6 text-center">
                <div className="flex flex-col items-center gap-3 mb-3">
                  <div className="w-8 h-8 rounded-lg bg-gradient-to-r from-purple-500 to-pink-500 flex items-center justify-center">
                    <Clock className="w-4 h-4 text-white" />
                  </div>
                  <h3 className="text-lg font-semibold text-white">Response Time</h3>
                </div>
                <p className="text-sm text-gray-300">
                  We&apos;ll respond within 24 hours
                </p>
              </div>
            </motion.div>

            {/* Action Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="flex flex-col sm:flex-row gap-4 justify-center"
            >
              <Link href="/">
                <Button 
                  size="lg"
                  className="group w-full sm:w-auto"
                >
                  <span className="flex items-center justify-center gap-3">
                    <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
                    Back to Home
                  </span>
                </Button>
              </Link>
              
              <Link href="/#portfolio">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="btn-secondary px-8 py-4 w-full sm:w-auto"
                >
                  Featured Projects
                </motion.button>
              </Link>
            </motion.div>

            {/* Additional Info */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="mt-12 p-6 rounded-xl bg-gray-900/30 border border-gray-800/50"
            >
              <h3 className="text-lg font-semibold text-white mb-3">What&apos;s Next?</h3>
              <div className="space-y-2 text-sm text-gray-300">
                <p>• We&apos;ll review your message and requirements</p>
                <p>• Our team will prepare a detailed response</p>
                <p>• We&apos;ll reach out to discuss your project further</p>
                <p>• If needed, we&apos;ll schedule a consultation call</p>
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <Footer />
    </div>
  )
}
