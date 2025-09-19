'use client'

import { useEffect, useRef, useState } from 'react'
import { motion } from 'framer-motion'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { ArrowRight, Code, Zap, Sparkles } from 'lucide-react'
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
  
  const fullText = 'North Code Lab'
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
            <span className="text-gradient animate-gradient">
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
            Building the future of{' '}
            <span className="text-gradient-blue font-semibold">digital experiences</span>
          </p>

          {/* Description */}
          <p
            ref={descriptionRef}
            className="text-lg md:text-xl text-tertiary max-w-3xl mx-auto leading-relaxed"
            style={{ opacity: 0 }}
          >
            A creative development studio where innovation meets execution. 
            We don't just write code — we craft digital experiences that inspire, scale, and perform.
          </p>

          {/* CTA Buttons */}
          <div ref={ctaRef} className="flex flex-col sm:flex-row gap-6 justify-center items-center pt-8" style={{ opacity: 0 }}>
            <Button
              size="lg"
              className="group"
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            >
              <span className="flex items-center gap-2">
                Start Your Project
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </span>
            </Button>
          </div>

          {/* Feature highlights */}
          <div
            ref={featuresRef}
            className="flex flex-wrap justify-center gap-8 pt-16"
            style={{ opacity: 0 }}
          >
            {[
              { icon: Code, text: 'Innovation' },
              { icon: Zap, text: 'Performance' },
              { icon: Sparkles, text: 'Creativity' },
            ].map(({ icon: Icon, text }, index) => (
              <div
                key={text}
                className="flex flex-col items-center gap-2 text-tertiary group"
              >
                <div className="w-12 h-12 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300 glass-effect">
                  <Icon className="w-6 h-6 text-white" />
                </div>
                <span className="text-sm font-medium group-hover:text-accent transition-colors">{text}</span>
              </div>
            ))}
          </div>
        </motion.div>
      </div>

    </section>
  )
}
