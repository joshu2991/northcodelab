'use client'

import { useEffect, useRef } from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { FileText, Linkedin, Mail, CheckCircle } from 'lucide-react'
import { Button } from './Button'

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger)
}

export function AboutSection() {
  const { inView } = useInView({
    threshold: 0.2,
    triggerOnce: true,
  })

  const getIconClass = (color: string) => {
    switch (color) {
      case 'var(--accent-primary)': return 'value-icon-primary'
      case 'var(--accent-secondary)': return 'value-icon-secondary'
      case 'var(--accent-tertiary)': return 'value-icon-tertiary'
      case 'var(--accent-emerald)': return 'value-icon-emerald'
      default: return 'value-icon-primary'
    }
  }

  const getHoverClass = (color: string) => {
    switch (color) {
      case 'var(--accent-primary)': return 'value-hover-primary'
      case 'var(--accent-secondary)': return 'value-hover-secondary'
      case 'var(--accent-tertiary)': return 'value-hover-tertiary'
      case 'var(--accent-emerald)': return 'value-hover-emerald'
      default: return 'value-hover-primary'
    }
  }

  const sectionRef = useRef<HTMLDivElement>(null)
  const textRef = useRef<HTMLDivElement>(null)
  const cardsRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (inView) {
      const ctx = gsap.context(() => {
        // Text animation
        if (textRef.current?.children) {
          gsap.fromTo(
            textRef.current.children,
            { y: 50, opacity: 0 },
            {
              y: 0,
              opacity: 1,
              duration: 0.8,
              stagger: 0.2,
              ease: 'power3.out',
            }
          )
        }

        // Cards animation
        if (cardsRef.current?.children) {
          gsap.fromTo(
            cardsRef.current.children,
            { y: 100, opacity: 0, rotationY: 15 },
            {
              y: 0,
              opacity: 1,
              rotationY: 0,
              duration: 1,
              stagger: 0.2,
              ease: 'power3.out',
            }
          )
        }
      }, sectionRef)

      return () => ctx.revert()
    }
  }, [inView])

  const highlights = [
    {
      text: 'Reduced HR processing time by 80% using Laravel + AI automation',
      color: 'var(--accent-primary)',
    },
    {
      text: 'Optimized SQL queries from 13s to 1s',
      color: 'var(--accent-secondary)',
    },
    {
      text: 'Led a team of 4 developers managing multiple projects',
      color: 'var(--accent-tertiary)',
    },
  ]

  return (
    <section
      ref={sectionRef}
      id="about"
      className="py-24 px-4 sm:px-6 lg:px-8 relative overflow-hidden"
    >
      {/* Background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-0 w-96 h-96 rounded-full blur-3xl blur-blue" />
        <div className="absolute bottom-1/4 right-0 w-96 h-96 rounded-full blur-3xl blur-purple" />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section header */}
        <div ref={textRef} className="text-center mb-20">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl md:text-5xl lg:text-6xl font-bold font-space-grotesk mb-6"
          >
            <span className="text-gradient">About </span>
            <span className="text-gradient-blue">me</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl md:text-2xl text-secondary max-w-4xl mx-auto leading-relaxed mb-8"
          >
            Full Stack Developer with 5+ years of experience building scalable web platforms across Canada, Mexico, and Europe.
            <br /><br />
            Currently seeking full-time opportunities in Vancouver to work with teams that value:
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex flex-wrap justify-center gap-4 mb-8"
          >
            <span className="text-tertiary">• Clean, maintainable code</span>
            <span className="text-tertiary">• User-centric product development</span>
            <span className="text-tertiary">• Modern tech stacks (Laravel, React, AWS)</span>
            <span className="text-tertiary">• Continuous learning and growth</span>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="text-lg text-tertiary max-w-3xl mx-auto leading-relaxed mb-8"
          >
            I&apos;m authorized to work in Canada until August 2026 and available to start immediately.
          </motion.p>

          
        </div>

      </div>
    </section>
  )
}
