'use client'

import { useEffect, useRef } from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { Lightbulb, Target, Rocket, Users } from 'lucide-react'
import { Button } from './Button'

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger)
}

export function AboutSection() {
  const { ref, inView } = useInView({
    threshold: 0.2,
    triggerOnce: true,
  })

  const sectionRef = useRef<HTMLDivElement>(null)
  const textRef = useRef<HTMLDivElement>(null)
  const cardsRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (inView) {
      const ctx = gsap.context(() => {
        // Text animation
        gsap.fromTo(
          textRef.current?.children,
          { y: 50, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 0.8,
            stagger: 0.2,
            ease: 'power3.out',
          }
        )

        // Cards animation
        gsap.fromTo(
          cardsRef.current?.children,
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
      }, sectionRef)

      return () => ctx.revert()
    }
  }, [inView])

  const values = [
    {
      icon: Lightbulb,
      title: 'Innovation First',
      description: 'Every project is an experiment. We push boundaries and explore new possibilities in digital experiences.',
    },
    {
      icon: Target,
      title: 'Precision Execution',
      description: 'From concept to deployment, we ensure every detail is crafted with precision and purpose.',
    },
    {
      icon: Rocket,
      title: 'Scalable Solutions',
      description: 'We build for growth, creating digital experiences that scale with your business ambitions.',
    },
    {
      icon: Users,
      title: 'User-Centric',
      description: 'Every solution is designed with the end user in mind, ensuring meaningful and engaging experiences.',
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
        <div className="absolute top-1/4 left-0 w-96 h-96 rounded-full blur-3xl" style={{ backgroundColor: 'var(--blur-blue)' }} />
        <div className="absolute bottom-1/4 right-0 w-96 h-96 rounded-full blur-3xl" style={{ backgroundColor: 'var(--blur-purple)' }} />
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
            <span className="text-gradient">Where Innovation</span>
            <br />
            <span className="text-gradient-blue">Meets Execution</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl md:text-2xl text-secondary max-w-4xl mx-auto leading-relaxed"
          >
            At North Code Lab, we don't just write code — we craft digital experiences 
            that inspire, scale, and perform. Every project is an experiment. 
            Every solution, a discovery.
          </motion.p>
        </div>

        {/* Values grid */}
        <div ref={cardsRef} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {values.map((value, index) => (
            <motion.div
              key={value.title}
              whileHover={{ 
                y: -10, 
                scale: 1.02,
                transition: { duration: 0.3 }
              }}
              className="group relative"
            >
              <div className="card-primary rounded-2xl p-8 h-full hover:shadow-primary transition-all duration-300">
                <div className="flex flex-col items-center text-center space-y-4">
                  <div className="w-16 h-16 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300" style={{ background: 'linear-gradient(135deg, var(--accent-primary), var(--accent-tertiary))' }}>
                    <value.icon className="w-8 h-8 text-primary" />
                  </div>
                  
                  <h3 className="text-xl font-semibold text-primary group-hover:text-gradient-blue transition-colors">
                    {value.title}
                  </h3>
                  
                  <p className="text-tertiary leading-relaxed">
                    {value.description}
                  </p>
                </div>

                {/* Hover effect */}
                <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" style={{ background: 'linear-gradient(135deg, var(--blur-blue), var(--blur-purple))' }} />
              </div>
            </motion.div>
          ))}
        </div>


      </div>
    </section>
  )
}
