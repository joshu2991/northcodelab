'use client'

import { useEffect, useRef } from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { 
  Code2, 
  Globe, 
  Database, 
  Palette, 
  Zap,
  CheckCircle,
  Headphones
} from 'lucide-react'
import { Button } from './Button'

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger)
}

export function ServicesSection() {
  const { inView } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  })

  const getIconClass = (color: string) => {
    switch (color) {
      case 'var(--accent-primary)': return 'service-icon-primary'
      case 'var(--accent-secondary)': return 'service-icon-secondary'
      case 'var(--accent-tertiary)': return 'service-icon-tertiary'
      case 'var(--accent-emerald)': return 'service-icon-emerald'
      case 'var(--accent-gray)': return 'service-icon-gray'
      default: return 'service-icon-primary'
    }
  }

  const getHoverClass = (color: string) => {
    switch (color) {
      case 'var(--accent-primary)': return 'service-hover-primary'
      case 'var(--accent-secondary)': return 'service-hover-secondary'
      case 'var(--accent-tertiary)': return 'service-hover-tertiary'
      case 'var(--accent-emerald)': return 'service-hover-emerald'
      case 'var(--accent-gray)': return 'service-hover-gray'
      default: return 'service-hover-primary'
    }
  }

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
      title: 'Full Stack Development',
      description: 'Building modern web applications that scale with your business.',
      features: ['Custom web applications with complex user flows', 'Landing pages and marketing sites optimized for conversion', 'Secure authentication systems with role-based access', 'Third-party API integrations (Stripe, Google, OpenAI, etc.)'],
      color: 'var(--accent-primary)',
    },
    {
      icon: Database,
      title: 'Backend Development',
      description: 'Server-side solutions designed for performance and reliability.',
      features: ['Database design, optimization, and query tuning (13s → 1s optimization)', 'Authentication systems and authorization logic', 'Process automation that saves time (40h → 8h reduction achieved)', 'Scalable architecture using AWS (EC2, S3, Lambda, Load Balancers)'],
      color: 'var(--accent-secondary)',
    },
    {
      icon: Globe,
      title: 'E-commerce & Payments',
      description: 'Payment systems that handle real transactions securely.',
      features: ['Stripe and PayPal integration for subscriptions and one-time payments', 'Product catalogs, inventory management, and order processing', 'Custom checkout flows optimized for conversion', 'Transaction reporting and analytics dashboards'],
      color: 'var(--accent-tertiary)',
    },
    {
      icon: Zap,
      title: 'Performance & Optimization',
      description: 'Making applications faster, more reliable, and cost-effective.',
      features: ['Page speed optimization and Core Web Vitals improvements', 'SQL query optimization and database indexing strategies', 'SEO implementation and technical audits', 'Cloud infrastructure setup and cost optimization'],
      color: 'var(--accent-primary)',
    },
    {
      icon: Palette,
      title: 'Frontend Development',
      description: 'User interfaces that are intuitive, responsive, and accessible.',
      features: ['Vue and React/Next.js applications with modern state management', 'Responsive layouts using Tailwind CSS and custom designs', 'Component libraries and design systems', 'Mobile-first development approaches'],
      color: 'var(--accent-secondary)',
    },
    {
      icon: Headphones,
      title: 'AI Integration & Automation',
      description: 'Leveraging AI to solve real business problems.',
      features: ['ChatGPT API integration for content analysis and automation', 'AI-powered features that improve user experience', 'Workflow automation using Python (spaCy, automation scripts)', 'Data processing and reporting automation'],
      color: 'var(--accent-tertiary)',
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
        <div className="absolute top-0 left-1/4 w-96 h-96 rounded-full blur-3xl blur-blue" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 rounded-full blur-3xl blur-gray" />
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
            <span className="text-gradient">Technical Skills & Expertise</span>
          </h2>
          <p className="text-xl md:text-2xl text-secondary max-w-3xl mx-auto leading-relaxed">
          Technical expertise and proven results across the full development lifecycle.
          </p>
        </motion.div>

        {/* Services grid */}
        <div ref={servicesRef} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service) => (
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
                <div className={`w-16 h-16 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 ${getIconClass(service.color)}`}>
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
                      <CheckCircle className="w-4 h-4 flex-shrink-0 text-success" />
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>

                {/* Hover gradient overlay */}
                <div className={`absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-10 transition-opacity duration-300 ${getHoverClass(service.color)}`} />
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  )
}
