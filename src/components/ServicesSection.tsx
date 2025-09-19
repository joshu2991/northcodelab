'use client'

import { useEffect, useRef } from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { 
  Code2, 
  Smartphone, 
  Globe, 
  Database, 
  Palette, 
  Zap,
  ArrowRight,
  CheckCircle,
  Headphones
} from 'lucide-react'
import { Button } from './Button'

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger)
}

export function ServicesSection() {
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  })

  const sectionRef = useRef<HTMLDivElement>(null)
  const servicesRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (inView) {
      const ctx = gsap.context(() => {
        if (servicesRef.current?.children) {
          gsap.fromTo(
            servicesRef.current.children,
            { 
              y: 100, 
              opacity: 0, 
              rotationX: 15,
              transformOrigin: 'center bottom'
            },
            {
              y: 0,
              opacity: 1,
              rotationX: 0,
              duration: 1,
              stagger: 0.15,
              ease: 'power3.out',
            }
          )
        }
      }, sectionRef)

      return () => ctx.revert()
    }
  }, [inView])

  const services = [
    {
      icon: Code2,
      title: 'Web Development',
      description: 'Modern websites and applications tailored to your business goals.',
      features: ['Custom business websites', 'Landing pages and portfolios', 'Web apps with secure user access', 'API integrations'],
      color: 'from-gray-400 to-gray-600',
    },
    {
      icon: Database,
      title: 'Backend Development',
      description: 'Powerful and scalable server-side solutions.',
      features: ['Database design & management', 'Secure authentication & roles', 'Automation & integrations', 'Scalable architecture'],
      color: 'from-gray-500 to-gray-700',
    },
    {
      icon: Globe,
      title: 'E-commerce Solutions',
      description: 'Online stores designed to grow with your business.',
      features: ['Product & inventory management', 'Secure payment gateways', 'Custom checkout flows', 'Analytics & reporting'],
      color: 'from-gray-600 to-gray-800',
    },
    {
      icon: Zap,
      title: 'Performance Optimization',
      description: 'Faster, more reliable websites that drive results.',
      features: ['Speed optimization', 'SEO & Core Web Vitals', 'Monitoring & maintenance', 'Cloud hosting setup'],
      color: 'from-gray-400 to-gray-600',
    },
    {
      icon: Palette,
      title: 'Design & Wireframing Support',
      description: 'Streamlined, modern design powered by AI tools and UI kits.',
      features: ['Wireframes & mockups (AI-assisted)', 'Responsive layouts', 'Consistent design systems', 'User flow mapping'],
      color: 'from-gray-500 to-gray-700',
    },
    {
      icon: Headphones,
      title: 'Consulting & Support',
      description: 'Expert guidance and quick solutions for your digital needs.',
      features: ['Technical consulting & audits', 'Troubleshooting & bug fixes', 'Optimizing existing websites', 'Best-practice recommendations'],
      color: 'from-gray-600 to-gray-800',
    },
  ]

  return (
    <section
      ref={sectionRef}
      id="services"
      className="py-24 px-4 sm:px-6 lg:px-8 relative overflow-hidden"
    >
      {/* Background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/4 w-96 h-96 rounded-full blur-3xl" style={{ backgroundColor: 'var(--blur-blue)' }} />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 rounded-full blur-3xl" style={{ backgroundColor: 'var(--blur-gray)' }} />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold font-space-grotesk mb-6">
            <span className="text-gradient">Our Services</span>
          </h2>
          <p className="text-xl md:text-2xl text-secondary max-w-3xl mx-auto leading-relaxed">
            Comprehensive digital solutions tailored to your business needs.
          </p>
        </motion.div>

        {/* Services grid */}
        <div ref={servicesRef} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              whileHover={{ 
                y: -15, 
                scale: 1.02,
                transition: { duration: 0.3 }
              }}
              className="group relative"
            >
              <div className="card-primary rounded-3xl p-8 h-full hover:shadow-primary transition-all duration-500 group-hover:border-hover">
                {/* Icon */}
                <div className={`w-16 h-16 bg-gradient-to-br ${service.color} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <service.icon className="w-8 h-8 text-white" />
                </div>

                {/* Content */}
                <h3 className="text-2xl font-bold text-primary mb-4 group-hover:text-gradient-blue transition-colors">
                  {service.title}
                </h3>
                
                <p className="text-tertiary mb-6 leading-relaxed">
                  {service.description}
                </p>

                {/* Features */}
                <div className="space-y-2 mb-6">
                  {service.features.map((feature) => (
                    <div key={feature} className="flex items-center gap-2 text-sm text-secondary">
                      <CheckCircle className="w-4 h-4 flex-shrink-0" style={{ color: 'var(--success)' }} />
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>

                {/* Hover gradient overlay */}
                <div className={`absolute inset-0 rounded-3xl bg-gradient-to-br ${service.color} opacity-0 group-hover:opacity-5 transition-opacity duration-300`} />
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-center mt-20"
        >
          <div className="glass-effect rounded-3xl p-12 max-w-4xl mx-auto">
            <h3 className="text-3xl md:text-4xl font-bold font-space-grotesk mb-6">
              <span className="text-gradient">Ready to Transform</span>
              <br />
              <span className="text-gradient-blue">Your Digital Presence?</span>
            </h3>
            
            <p className="text-xl text-secondary mb-8 leading-relaxed">
              Let's discuss your project and create something extraordinary together.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg">
                Start Your Project
              </Button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
