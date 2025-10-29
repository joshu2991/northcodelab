'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X } from 'lucide-react'
import Image from 'next/image'

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navItems = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Services', href: '#services' },
    { name: 'Solutions', href: '#solutions' },
    { name: 'Portfolio', href: '#portfolio' },
    { name: 'Blog', href: '#blog' },
    { name: 'Contact', href: '#contact' },
  ]

  return (
    <div className="fixed top-0 left-0 right-0 z-50 p-4">
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        className={`transition-all duration-500 ease-in-out rounded-2xl ${
          scrolled 
            ? 'glass-effect border-secondary shadow-lg max-w-4xl mx-auto' 
            : 'bg-transparent border-transparent max-w-7xl mx-auto'
        }`}
      >
        <div className="px-6">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="flex-shrink-0"
            >
              <a href="/" className="flex items-center gap-3">
                {/* Desktop: Show slogan logo, Mobile: Show icon logo */}
                <div className="hidden md:block">
                  <Image
                    src="/logo/logo_slogan_white.png"
                    alt="North Code Lab"
                    width={300}
                    height={60}
                    className="h-16 w-auto"
                  />
                </div>
                <div className="md:hidden">
                  <Image
                    src="/logo/logo_icon_white.png"
                    alt="North Code Lab"
                    width={60}
                    height={60}
                    className="h-12 w-12"
                  />
                </div>
              </a>
            </motion.div>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-6">
              {navItems.map((item) => (
                <motion.a
                  key={item.name}
                  href={item.href}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => {
                    setTimeout(() => {
                      const elementId = item.href.replace('#', '')
                      const element = document.getElementById(elementId)
                      if (element) {
                        element.scrollIntoView({ behavior: 'smooth' })
                      }
                    }, 100)
                  }}
                  className="text-secondary hover:text-primary px-2 py-2 text-xs font-medium transition-colors duration-200 relative group"
                >
                  {item.name}
                  <motion.div
                    className="absolute bottom-0 left-0 w-0 h-0.5 nav-underline"
                    whileHover={{ width: '100%' }}
                    transition={{ duration: 0.3 }}
                  />
                </motion.a>
              ))}
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <motion.button
              whileTap={{ scale: 0.95 }}
              onClick={() => setIsOpen(!isOpen)}
              className="text-secondary hover:text-primary p-2"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </motion.button>
          </div>
        </div>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden mt-4 glass-effect border-secondary rounded-xl overflow-hidden"
            >
              <div className="px-4 py-3 space-y-1">
                {navItems.map((item) => (
                  <motion.a
                    key={item.name}
                    href={item.href}
                    whileHover={{ x: 10 }}
                    onClick={() => {
                      setIsOpen(false)
                      setTimeout(() => {
                        const elementId = item.href.replace('#', '')
                        const element = document.getElementById(elementId)
                        if (element) {
                          element.scrollIntoView({ behavior: 'smooth' })
                        }
                      }, 100)
                    }}
                    className="text-secondary hover:text-primary block px-3 py-2 text-base font-medium transition-colors duration-200"
                  >
                    {item.name}
                  </motion.a>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
      </motion.nav>
    </div>
  )
}
