'use client'

import { useEffect, useRef, useState } from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { 
  Mail, 
  Phone, 
  MapPin, 
  Send, 
  CheckCircle,
  Github,
  Linkedin,
  Twitter,
  Instagram
} from 'lucide-react'
import { Button } from './Button'

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger)
}

export function ContactSection() {
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  })

  const sectionRef = useRef<HTMLDivElement>(null)
  const formRef = useRef<HTMLFormElement>(null)
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    message: '',
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  useEffect(() => {
    if (inView) {
      const ctx = gsap.context(() => {
        gsap.fromTo(
          sectionRef.current?.children,
          { y: 50, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 0.8,
            stagger: 0.2,
            ease: 'power3.out',
          }
        )
      }, sectionRef)

      return () => ctx.revert()
    }
  }, [inView])

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 2000))
    
    setIsSubmitting(false)
    setIsSubmitted(true)
    
    // Reset form after 3 seconds
    setTimeout(() => {
      setIsSubmitted(false)
      setFormData({ name: '', email: '', company: '', message: '' })
    }, 3000)
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }))
  }

  const contactInfo = [
    {
      icon: Mail,
      title: 'Email',
      value: 'hello@northcodelab.com',
      href: 'mailto:hello@northcodelab.com',
    },
    {
      icon: Phone,
      title: 'Phone',
      value: '+1 (555) 123-4567',
      href: 'tel:+15551234567',
    },
    {
      icon: MapPin,
      title: 'Location',
      value: 'San Francisco, CA',
      href: '#',
    },
  ]

  const socialLinks = [
    { icon: Github, href: '#', label: 'GitHub' },
    { icon: Linkedin, href: '#', label: 'LinkedIn' },
    { icon: Twitter, href: '#', label: 'Twitter' },
    { icon: Instagram, href: '#', label: 'Instagram' },
  ]

  return (
    <section
      ref={sectionRef}
      id="contact"
      className="py-24 px-4 sm:px-6 lg:px-8 relative overflow-hidden"
    >
      {/* Background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/4 w-96 h-96 rounded-full blur-3xl" style={{ backgroundColor: 'var(--blur-blue)' }} />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 rounded-full blur-3xl" style={{ backgroundColor: 'var(--blur-purple)' }} />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold font-space-grotesk mb-6">
            <span className="text-gradient">Let's Build</span>
            <br />
            <span className="text-gradient-blue">Something Together</span>
          </h2>
          <p className="text-xl md:text-2xl text-secondary max-w-3xl mx-auto leading-relaxed">
            Ready to transform your ideas into digital reality? Let's start the conversation.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Contact form */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="glass-effect rounded-3xl p-8"
          >
            <h3 className="text-2xl font-bold text-primary mb-6">Send us a message</h3>
            
            {isSubmitted ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                className="text-center py-12"
              >
                <CheckCircle className="w-16 h-16 mx-auto mb-4" style={{ color: 'var(--success)' }} />
                <h4 className="text-xl font-semibold text-primary mb-2">Message Sent!</h4>
                <p className="text-tertiary">We'll get back to you within 24 hours.</p>
              </motion.div>
            ) : (
              <form ref={formRef} onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-secondary mb-2">
                      Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 rounded-xl text-primary placeholder-tertiary focus:outline-none focus:ring-2 focus:border-transparent transition-all duration-300"
                      style={{ 
                        backgroundColor: 'var(--bg-glass)', 
                        border: '1px solid var(--border-primary)',
                        '--tw-ring-color': 'var(--accent-primary)'
                      }}
                      placeholder="Your name"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-secondary mb-2">
                      Email *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 rounded-xl text-primary placeholder-tertiary focus:outline-none focus:ring-2 focus:border-transparent transition-all duration-300"
                      style={{ 
                        backgroundColor: 'var(--bg-glass)', 
                        border: '1px solid var(--border-primary)',
                        '--tw-ring-color': 'var(--accent-primary)'
                      }}
                      placeholder="your@email.com"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="company" className="block text-sm font-medium text-secondary mb-2">
                    Company
                  </label>
                  <input
                    type="text"
                    id="company"
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
                    placeholder="Your company"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-secondary mb-2">
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={6}
                    className="w-full px-4 py-3 rounded-xl text-primary placeholder-tertiary focus:outline-none focus:ring-2 focus:border-transparent transition-all duration-300 resize-none"
                    style={{ 
                      backgroundColor: 'var(--bg-glass)', 
                      border: '1px solid var(--border-primary)',
                      '--tw-ring-color': 'var(--accent-primary)'
                    }}
                    placeholder="Tell us about your project..."
                  />
                </div>

                <Button
                  type="submit"
                  disabled={isSubmitting}
                  size="lg"
                  className="w-full"
                >
                  {isSubmitting ? (
                    <>
                      <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                      Sending...
                    </>
                  ) : (
                    <>
                      Send Message
                      <Send className="w-5 h-5" />
                    </>
                  )}
                </Button>
              </form>
            )}
          </motion.div>

          {/* Contact info */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <div>
              <h3 className="text-2xl font-bold text-primary mb-6">Get in touch</h3>
              <p className="text-tertiary leading-relaxed mb-8">
                We're always excited to hear about new projects and opportunities. 
                Whether you have a specific idea in mind or just want to explore possibilities, 
                we're here to help bring your vision to life.
              </p>
            </div>

            {/* Contact details */}
            <div className="space-y-6">
              {contactInfo.map((info, index) => (
                <motion.a
                  key={info.title}
                  href={info.href}
                  whileHover={{ x: 10 }}
                  className="flex items-center gap-4 p-4 glass-effect rounded-xl hover:border-white/20 transition-all duration-300 group"
                >
                  <div className="w-12 h-12 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300" style={{ background: 'linear-gradient(135deg, var(--accent-primary), var(--accent-tertiary))' }}>
                    <info.icon className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="text-primary font-semibold group-hover:text-gradient-blue transition-colors">
                      {info.title}
                    </h4>
                    <p className="text-tertiary">{info.value}</p>
                  </div>
                </motion.a>
              ))}
            </div>

            {/* Social links */}
            <div>
              <h4 className="text-lg font-semibold text-primary mb-4">Follow us</h4>
              <div className="flex gap-4">
                {socialLinks.map((social) => (
                  <motion.a
                    key={social.label}
                    href={social.href}
                    whileHover={{ scale: 1.1, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                    className="w-12 h-12 glass-effect rounded-xl flex items-center justify-center hover:border-white/20 transition-all duration-300 group"
                    aria-label={social.label}
                  >
                    <social.icon className="w-5 h-5 text-tertiary group-hover:text-primary transition-colors" />
                  </motion.a>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
