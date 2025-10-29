'use client'

import { motion } from 'framer-motion'
import { Download, ArrowLeft } from 'lucide-react'
import { Button } from './Button'
import Link from 'next/link'

export function ResumeViewer() {
  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 relative overflow-hidden min-h-screen">
      {/* Background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-0 w-96 h-96 rounded-full blur-3xl blur-blue opacity-20" />
        <div className="absolute bottom-1/4 right-0 w-96 h-96 rounded-full blur-3xl blur-purple opacity-20" />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-8"
        >
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-tertiary hover:text-primary transition-colors mb-6"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Back to Home</span>
          </Link>
          
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-6">
            <div>
              <h1 className="text-4xl md:text-5xl font-bold font-space-grotesk mb-2">
                <span className="text-gradient">Resume</span>
              </h1>
              <p className="text-lg text-secondary">
                Jose Humberto Trueba - Full Stack Developer
              </p>
            </div>
            <Button
              size="lg"
              onClick={() => {
                const link = document.createElement('a')
                link.href = '/api/resume'
                link.download = 'Jose_Humberto_Trueba_Resume.pdf'
                link.click()
              }}
              className="flex items-center gap-2"
            >
              <Download className="w-5 h-5" />
              <span>Download PDF</span>
            </Button>
          </div>
        </motion.div>

        {/* PDF Viewer */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="glass-effect rounded-2xl p-4 md:p-6 overflow-hidden"
        >
          <div className="w-full" style={{ minHeight: '80vh' }}>
            <iframe
              src={`${typeof window !== 'undefined' ? window.location.origin : ''}/api/resume#toolbar=1&navpanes=1&scrollbar=1`}
              className="w-full h-[80vh] rounded-lg border-0"
              title="Resume PDF Viewer"
              style={{ border: '1px solid rgba(255, 255, 255, 0.1)' }}
              onError={() => {
                console.error('Failed to load PDF in iframe')
              }}
            />
          </div>
        </motion.div>
        
        {/* Alternative View Options */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-6 flex flex-wrap gap-4 justify-center"
        >
          <Button
            size="md"
            variant="secondary"
            onClick={() => window.open('/api/resume', '_blank')}
            className="flex items-center gap-2"
          >
            <span>Open in New Tab</span>
          </Button>
          <Button
            size="md"
            variant="secondary"
            onClick={() => {
              const link = document.createElement('a')
              link.href = '/api/resume'
              link.download = 'Jose_Humberto_Trueba_Resume.pdf'
              link.click()
            }}
            className="flex items-center gap-2"
          >
            <Download className="w-4 h-4" />
            <span>Download</span>
          </Button>
        </motion.div>

      </div>
    </section>
  )
}

