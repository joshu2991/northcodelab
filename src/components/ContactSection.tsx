'use client'

import { useEffect, useRef, useState } from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { 
  Mail, 
  MapPin, 
  Send,
  Linkedin,
  Twitter,
  Instagram
} from 'lucide-react'
import { Button } from './Button'

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger)
}

export function ContactSection() {
  const { inView } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  })

  const sectionRef = useRef<HTMLDivElement>(null)
  const formRef = useRef<HTMLFormElement>(null)
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [error, setError] = useState('')

  useEffect(() => {
    if (inView) {
      const ctx = gsap.context(() => {
        if (sectionRef.current?.children) {
          gsap.fromTo(
            sectionRef.current.children,
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
      }, sectionRef)

      return () => ctx.revert()
    }
  }, [inView])

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setError('')
    
    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      })

      if (response.ok) {
        // Redirect to thank you page
        window.location.href = '/thank-you'
      } else {
        const data = await response.json()
        setError(data.error || 'Failed to send message')
      }
    } catch {
      setError('Network error. Please try again.')
    } finally {
      setIsSubmitting(false)
    }
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
      icon: MapPin,
      title: 'Location',
      value: 'Vancouver, Canada',
      href: 'https://maps.app.goo.gl/S6kqax6VNQprUTbR6',
    },
  ]

  const socialLinks = [
    { icon: Linkedin, href: '#', label: 'LinkedIn' },
    { icon: Twitter, href: '#', label: 'Twitter' },
    { icon: Instagram, href: '#', label: 'Instagram' }  ]

  return (
    <section
      ref={sectionRef}
      id="contact"
      className="py-24 px-4 sm:px-6 lg:px-8 relative overflow-hidden"
    >
      {/* Background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/4 w-96 h-96 rounded-full blur-3xl blur-blue" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 rounded-full blur-3xl blur-purple" />
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
            <span className="text-gradient">Let&apos;s Build</span>
            <br />
            <span className="text-gradient-blue">Something Together</span>
          </h2>
          <p className="text-xl md:text-2xl text-secondary max-w-3xl mx-auto leading-relaxed">
            Ready to transform your ideas into digital reality? Let&apos;s start the conversation.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Contact form */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="glass-effect rounded-3xl p-8 relative"
          >
            <h3 className="text-2xl font-bold text-primary mb-6">Send us a message</h3>
            
            {error && (
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                className="mb-6 p-4 rounded-xl bg-red-500/10 border border-red-500/20 text-red-400 text-sm"
              >
                {error}
              </motion.div>
            )}
            
            {/* Crystal Loader Overlay */}
            {isSubmitting && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="absolute inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm rounded-3xl"
              >
                <div className="text-center">
                  <div className="relative">
                    {/* Crystal Loader */}
                    <div className="w-16 h-16 mx-auto mb-4 relative">
                      <div className="absolute inset-0 rounded-full bg-gradient-to-r from-purple-500/20 to-pink-500/20 animate-pulse"></div>
                      <div className="absolute inset-2 rounded-full bg-gradient-to-r from-blue-500/20 to-cyan-500/20 animate-pulse delay-75"></div>
                      <div className="absolute inset-4 rounded-full bg-gradient-to-r from-green-500/20 to-emerald-500/20 animate-pulse delay-150"></div>
                      <div className="absolute inset-0 flex items-center justify-center">
                        <div className="w-8 h-8 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                      </div>
                    </div>
                    
                    <h3 className="text-xl font-semibold text-white mb-2">Sending Message...</h3>
                    <p className="text-gray-300 text-sm">Please wait while we deliver your message</p>
                  </div>
                </div>
              </motion.div>
            )}
            
            {!isSubmitting && (
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
                      className="w-full px-4 py-3 rounded-xl text-primary placeholder-tertiary focus:outline-none focus:ring-2 focus:border-transparent transition-all duration-300 contact-form-input"
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
                      className="w-full px-4 py-3 rounded-xl text-primary placeholder-tertiary focus:outline-none focus:ring-2 focus:border-transparent transition-all duration-300 contact-form-input"
                      placeholder="your@email.com"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-secondary mb-2">
                    Subject *
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-xl text-primary placeholder-tertiary focus:outline-none focus:ring-2 focus:border-transparent transition-all duration-300 contact-form-input"
                    placeholder="Project inquiry, consultation, etc."
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
                    className="w-full px-4 py-3 rounded-xl text-primary placeholder-tertiary focus:outline-none focus:ring-2 focus:border-transparent transition-all duration-300 resize-none contact-form-input"
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
                We&apos;re always excited to hear about new projects and opportunities. 
                Whether you have a specific idea in mind or just want to explore possibilities, 
                we&apos;re here to help bring your vision to life.
              </p>
            </div>

            {/* Contact details */}
            <div className="space-y-6">
              {contactInfo.map((info) => (
                <motion.a
                  key={info.title}
                  href={info.href}
                  whileHover={{ x: 10 }}
                  className="flex items-center gap-4 p-4 glass-effect rounded-xl hover:border-white/20 transition-all duration-300 group"
                >
                  <div className="w-12 h-12 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300 contact-info-icon">
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
