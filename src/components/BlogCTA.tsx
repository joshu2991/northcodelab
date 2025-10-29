'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { Button } from './Button'

export function BlogCTA() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-100px' }}
      transition={{ duration: 0.8 }}
      className="border-t-2 border-primary/20 pt-8 mt-12"
    >
      <div className="card-primary p-8 md:p-10 rounded-2xl">
        <h3 className="text-2xl md:text-3xl font-bold font-space-grotesk mb-4">
          <span className="text-gradient">Let&apos;s Work</span>
          <br />
          <span className="text-gradient-blue">Together</span>
        </h3>
        
        <p className="text-lg md:text-xl text-secondary mb-8 leading-relaxed">
          I&apos;m currently seeking full-time Full Stack Developer opportunities. 
          If you&apos;re looking for someone who can optimize database performance, integrate modern APIs, 
          and build production-ready systems, let&apos;s connect.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4">
          <Link href="/resume">
            <Button 
              size="lg"
              variant="primary"
              className="w-full sm:w-auto"
            >
              View My Resume
            </Button>
          </Link>
          
          <Link href="/#contact">
            <Button 
              size="lg"
              variant="secondary"
              className="w-full sm:w-auto"
            >
              Get In Touch
            </Button>
          </Link>
        </div>
      </div>
    </motion.div>
  )
}

