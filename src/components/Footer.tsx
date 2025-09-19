'use client'

import { motion } from 'framer-motion'
import { Heart, ArrowUp } from 'lucide-react'

export function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <footer className="relative bg-black/50 backdrop-blur-sm border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="md:col-span-2">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h3 className="text-2xl font-bold text-gradient-blue font-space-grotesk mb-4">
                North Code Lab
              </h3>
              <p className="text-tertiary leading-relaxed mb-6 max-w-md">
                Building the future of digital experiences through innovation, 
                creativity, and cutting-edge technology.
              </p>
              <div className="flex items-center gap-2 text-tertiary">
                <span>Made with</span>
                <motion.div
                  animate={{ scale: [1, 1.2, 1] }}
                  transition={{ duration: 1, repeat: Infinity }}
                >
                  <Heart className="w-4 h-4 fill-current" style={{ color: 'var(--error)' }} />
                </motion.div>
                <span>by North Code Lab</span>
              </div>
            </motion.div>
          </div>

          {/* Quick Links */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
            >
              <h4 className="text-lg font-semibold text-primary mb-4">Quick Links</h4>
              <ul className="space-y-2">
                {['About', 'Services', 'Portfolio', 'Contact'].map((link) => (
                  <li key={link}>
                    <a
                      href={`#${link.toLowerCase()}`}
                      className="text-tertiary hover:text-primary transition-colors duration-200"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>

          {/* Services */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <h4 className="text-lg font-semibold text-primary mb-4">Services</h4>
              <ul className="space-y-2">
                {['Web Development', 'Mobile Apps', 'E-commerce', 'UI/UX Design'].map((service) => (
                  <li key={service}>
                    <span className="text-tertiary hover:text-primary transition-colors duration-200 cursor-pointer">
                      {service}
                    </span>
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>
        </div>

        {/* Bottom section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="mt-12 pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4"
        >
          <div className="text-tertiary text-sm">
            © 2024 North Code Lab. All rights reserved.
          </div>
          
          <div className="flex items-center gap-6">
            <div className="text-tertiary text-sm">
              Privacy Policy
            </div>
            <div className="text-tertiary text-sm">
              Terms of Service
            </div>
          </div>

          {/* Scroll to top button */}
          <motion.button
            whileHover={{ scale: 1.1, y: -2 }}
            whileTap={{ scale: 0.95 }}
            onClick={scrollToTop}
            className="w-10 h-10 glass-effect rounded-full flex items-center justify-center hover:border-white/20 transition-all duration-300"
            aria-label="Scroll to top"
          >
            <ArrowUp className="w-4 h-4 text-primary" />
          </motion.button>
        </motion.div>
      </div>
    </footer>
  )
}
