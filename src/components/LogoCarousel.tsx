'use client'

import { useEffect, useState, useRef } from 'react'
import { motion } from 'framer-motion'
import Image from 'next/image'

export function LogoCarousel() {
  const [shuffledLogos, setShuffledLogos] = useState<string[]>([])
  const [hoveredTech, setHoveredTech] = useState<string | null>(null)
  const timeoutRef = useRef<NodeJS.Timeout | null>(null)

  // Helper function to format technology names
  const formatTechName = (logo: string): string => {
    const name = logo.replace('.png', '')
    // Handle special cases
    const techNames: Record<string, string> = {
      'nextjs': 'Next.js',
      'chatgpt': 'ChatGPT',
      'mongodb': 'MongoDB',
      'mysql': 'MySQL',
      'php': 'PHP',
      'aws': 'Amazon Web Services',
      'chatbot': 'Chatbot',
      'figma': 'Figma',
      'github': 'GitHub',
      'laravel': 'Laravel',
      'node': 'Node.js',
      'nvidia': 'NVIDIA',
      'react': 'React',
      'stripe': 'Stripe',
      'tailwind': 'Tailwind CSS'
    }
    return techNames[name.toLowerCase()] || name.charAt(0).toUpperCase() + name.slice(1)
  }

  // Handle technology hover with delay on mouse leave
  const handleMouseEnter = (logo: string) => {
    // Clear any existing timeout
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current)
      timeoutRef.current = null
    }
    // Immediately show the technology name
    setHoveredTech(logo)
  }

  const handleMouseLeave = () => {
    // Clear any existing timeout
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current)
    }
    // Set a timeout to revert to "Technologies" after 2 seconds
    timeoutRef.current = setTimeout(() => {
      setHoveredTech(null)
      timeoutRef.current = null
    }, 2000)
  }

  // Shuffle logos on component mount and when page refreshes
  useEffect(() => {
    // List of all logo files from the icons folder
    const logoFiles = [
      'aws.png',
      'chatbot.png',
      'chatgpt.png',
      'figma.png',
      'github.png',
      'laravel.png',
      'mongodb.png',
      'mysql.png',
      'nextjs.png',
      'node.png',
      'nvidia.png',
      'php.png',
      'react.png',
      'stripe.png',
      'tailwind.png'
    ]
    
    const shuffled = [...logoFiles].sort(() => Math.random() - 0.5)
    setShuffledLogos(shuffled)

    // Cleanup timeout on unmount
    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current)
      }
    }
  }, [])

  // Create multiple sets of logos for seamless infinite scroll
  const createLogoSet = (logos: string[]) => {
    return [...logos, ...logos, ...logos] // Triple the logos for seamless loop
  }

  const logoSet = createLogoSet(shuffledLogos)

  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 relative overflow-hidden bg-gradient-to-r from-background via-background/95 to-background">
      {/* Background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/2 left-0 w-96 h-96 rounded-full blur-3xl blur-blue opacity-20" />
        <div className="absolute top-1/2 right-0 w-96 h-96 rounded-full blur-3xl blur-purple opacity-20" />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold font-space-grotesk mb-4">
            <span className="text-gradient">Powering Ideas With Technology</span>
          </h2>
          <p className="text-lg text-secondary max-w-2xl mx-auto">
            Cutting-edge tools and frameworks I use to bring ideas to life
          </p>
        </motion.div>

        {/* Logo carousel container */}
        <div className="relative">
          {/* Gradient overlays for smooth fade effect */}
          <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-background to-transparent z-10" />
          <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-background to-transparent z-10" />
          
          {/* Scrolling logos */}
          <div className="overflow-hidden">
            <motion.div
              className="flex items-center gap-12 py-8"
              animate={{
                x: [0, -100 * shuffledLogos.length] // Move by the width of one complete set
              }}
              transition={{
                x: {
                  repeat: Infinity,
                  duration: 30, // 30 seconds for one complete cycle
                  ease: 'linear'
                }
              }}
            >
              {logoSet.map((logo, index) => (
                <motion.div
                  key={`${logo}-${index}`}
                  className="flex-shrink-0 group"
                  whileHover={{ 
                    scale: 1.1,
                    transition: { duration: 0.2 }
                  }}
                  onMouseEnter={() => handleMouseEnter(logo)}
                  onMouseLeave={handleMouseLeave}
                >
                  <div className="relative w-12 h-12 md:w-16 md:h-16 lg:w-20 lg:h-20">
                    <Image
                      src={`/icons/${logo}`}
                      alt={logo.replace('.png', '').toUpperCase()}
                      fill
                      className="object-contain filter grayscale group-hover:grayscale-0 transition-all duration-300 opacity-70 group-hover:opacity-100"
                      sizes="(max-width: 768px) 48px, (max-width: 1024px) 64px, 80px"
                    />
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
          
          {/* Technology name display */}
          <motion.div
            key={hoveredTech || 'default'}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
            className="text-center mt-8"
          >
            <p className="text-xl md:text-2xl font-semibold text-gradient">
              {hoveredTech ? formatTechName(hoveredTech) : 'Technologies'}
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
