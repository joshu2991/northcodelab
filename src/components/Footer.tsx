'use client'

import { motion } from 'framer-motion'
import { Heart, ArrowUp } from 'lucide-react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { OptimizedImage } from './OptimizedImage'

export function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <footer className="relative bg-black/50 backdrop-blur-sm border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          {/* Brand */}
          <div className="lg:col-span-2">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="mb-4">
                <OptimizedImage
                  src="/logo/logo_slogan_white.png"
                  alt="Jose Trueba - Full Stack Developer | Vancouver, BC"
                  width={200}
                  height={120}
                  className="h-24 w-auto"
                  priority
                  quality={95}
                />
              </div>
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
                  <Heart className="w-4 h-4 fill-current text-error" />
                </motion.div>
                <span>by Jose Trueba</span>
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
                {[
                  { name: 'About', href: '#about' },
                  { name: 'Services', href: '#services' },
                  { name: 'Solutions', href: '#solutions' },
                  { name: 'Portfolio', href: '#portfolio' },
                  { name: 'Contact', href: '#contact' }
                ].map((link) => (
                  <li key={link.name}>
                    <a
                      href={link.href}
                      className="text-tertiary hover:text-primary transition-colors duration-200"
                    >
                      {link.name}
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
              <h4 className="text-lg font-semibold text-primary mb-4">Skills</h4>
              <ul className="space-y-2">
                {['Web Development', 'Backend Development', 'E-commerce', 'Performance Optimization', 'Design & Wireframing', 'Consulting'].map((service) => (
                  <li key={service}>
                    <a
                      href="#services"
                      className="text-tertiary hover:text-primary transition-colors duration-200 cursor-pointer"
                    >
                      {service}
                    </a>
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>

          {/* Contact Info */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.25 }}
            >
              <h4 className="text-lg font-semibold text-primary mb-4">Contact</h4>
              <div className="flex items-center gap-4">
                <motion.a
                  href="mailto:hello@northcodelab.com"
                  whileHover={{ scale: 1.15, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  className="text-tertiary hover:text-primary transition-colors duration-200"
                  aria-label="Email: hello@northcodelab.com"
                  title="Email: hello@northcodelab.com"
                >
                  <FontAwesomeIcon icon={faEnvelope} className="footer-icon" />
                </motion.a>
                <motion.a
                  href="https://www.linkedin.com/in/josehumbertotrueba"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.15, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  className="text-tertiary hover:text-primary transition-colors duration-200"
                  aria-label="LinkedIn Profile"
                  title="LinkedIn: linkedin.com/in/josehumbertotrueba"
                >
                  <FontAwesomeIcon icon={faLinkedin} className="footer-icon" />
                </motion.a>
                <motion.a
                  href="https://github.com/joshu2991"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.15, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  className="text-tertiary hover:text-primary transition-colors duration-200"
                  aria-label="GitHub Profile"
                  title="GitHub: github.com/joshu2991"
                >
                  <FontAwesomeIcon icon={faGithub} className="footer-icon" />
                </motion.a>
              </div>
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
            © 2025 North Code Lab. All rights reserved.
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
