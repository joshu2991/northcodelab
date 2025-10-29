'use client'

import { motion } from 'framer-motion'
import { FileText, Linkedin, Github } from 'lucide-react'
import { Button } from './Button'

export function JobBanner() {
  return (
    <section className="py-8 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="glass-effect rounded-2xl p-6 md:p-8"
        >
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            {/* Main content */}
            <div className="flex-1 text-center md:text-left">
              <div className="flex items-center justify-center md:justify-start gap-2 mb-3">
                <span className="text-2xl">🔍</span>
                <p className="text-lg md:text-xl font-semibold text-primary">
                  Currently seeking full-time <span className="text-gradient-blue">Full Stack Developer</span> opportunities in Vancouver
                </p>
              </div>
              <p className="text-sm md:text-base text-secondary">
                Work permit valid until August 2026 | Available immediately
              </p>
            </div>

            {/* Action buttons */}
            <div className="flex flex-wrap items-center gap-3 justify-center">
              <Button
                size="md"
                onClick={() => window.location.href = '/resume'}
                className="flex items-center gap-2"
              >
                <FileText className="w-4 h-4" />
                <span>View Resume</span>
              </Button>
              <Button
                size="md"
                variant="secondary"
                onClick={() => window.open('https://www.linkedin.com/in/josehumbertotrueba', '_blank')}
                className="flex items-center gap-2"
              >
                <Linkedin className="w-4 h-4" />
                <span>LinkedIn</span>
              </Button>
              <Button
                size="md"
                variant="secondary"
                onClick={() => window.open('https://github.com/joshu2991', '_blank')}
                className="flex items-center gap-2"
              >
                <Github className="w-4 h-4" />
                <span>GitHub</span>
              </Button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

