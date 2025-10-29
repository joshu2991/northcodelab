'use client'

import { useEffect, useRef, useState } from 'react'
import { motion } from 'framer-motion'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { FileText, Code, Zap, Sparkles, ArrowRight } from 'lucide-react'
import { Button } from './Button'

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger)
}


export function HeroSection() {
  const heroRef = useRef<HTMLDivElement>(null)
  const titleRef = useRef<HTMLHeadingElement>(null)
  const subtitleRef = useRef<HTMLParagraphElement>(null)
  const ctaRef = useRef<HTMLDivElement>(null)
  const [displayedText, setDisplayedText] = useState('')
  const [isTyping, setIsTyping] = useState(true)
  const [showOtherElements, setShowOtherElements] = useState(false)

  const fullText = 'Jose Trueba'
  const descriptionRef = useRef<HTMLParagraphElement>(null)
  const featuresRef = useRef<HTMLDivElement>(null)

  // Typewriter effect
  useEffect(() => {
    let index = 0
    const typeInterval = setInterval(() => {
      if (index < fullText.length) {
        setDisplayedText(fullText.slice(0, index + 1))
        index++
      } else {
        // Keep cursor for a moment after typing is complete
        setTimeout(() => {
          setIsTyping(false)
          // Show other elements after typewriter is completely done
          setShowOtherElements(true)
        }, 500)
        clearInterval(typeInterval)
      }
    }, 50) // Much faster typing speed

    return () => clearInterval(typeInterval)
  }, [])

  useEffect(() => {
    if (showOtherElements) {
      const ctx = gsap.context(() => {
        // All elements fade in simultaneously after typewriter
        gsap.fromTo(
          [subtitleRef.current, descriptionRef.current, ctaRef.current, featuresRef.current],
          { opacity: 0 },
          { opacity: 1, duration: 0.8, ease: 'power2.out' }
        )
      }, heroRef)

      return () => ctx.revert()
    }
  }, [showOtherElements])

  return (
    <section
      ref={heroRef}
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden pt-24 will-change-auto"
    >
      {/* Static gradient background */}
      <div className="absolute inset-0 bg-gradient-hero" />

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
          className="space-y-8"
        >
          {/* Main title */}
          <h1
            ref={titleRef}
            className="text-5xl md:text-7xl lg:text-8xl font-space-grotesk leading-tight letter-spacing-tight font-weight-800"
            style={{ minHeight: '1.2em' }} // Prevent layout shift
          >
            <span className="text-gradient animate-gradient p-4">
              {displayedText}
              {isTyping && (
                <motion.span
                  animate={{ opacity: [1, 0, 1] }}
                  transition={{ duration: 0.6, repeat: Infinity }}
                  className="inline-block w-0.5 h-16 bg-white ml-2 vertical-align-text-top"
                />
              )}
            </span>
          </h1>

          {/* Subtitle */}
          <p
            ref={subtitleRef}
            className="text-xl md:text-2xl lg:text-3xl text-secondary max-w-4xl mx-auto leading-relaxed"
            style={{ opacity: 0 }}
          >
            <span className="text-gradient-blue font-semibold">Full Stack Developer</span> 
          </p>

          {/* Description */}
          <p
            ref={descriptionRef}
            className="text-lg md:text-xl text-tertiary max-w-3xl mx-auto leading-relaxed"
            style={{ opacity: 0 }}
          >
            Building scalable web platforms with Laravel, React, and AWS
            Currently seeking full-time opportunities in Vancouver
          </p>

          {/* CTA Buttons */}
          <div ref={ctaRef} className="flex flex-col sm:flex-row gap-6 justify-center items-center pt-8" style={{ opacity: 0 }}>
          <Button
                size="lg"
                onClick={() => window.location.href = '/resume'}
                className="flex items-center gap-2"
              >
                <FileText className="w-4 h-4" />
                <span>View Resume</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Button>
          </div>

        </motion.div>
      </div>

    </section>
  )
}
