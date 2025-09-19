'use client'

import { motion } from 'framer-motion'
import { Check, Clock, DollarSign, Users, Zap, Shield, Globe, Code, ArrowRight } from 'lucide-react'
import { Button } from './Button'

const packages = [
  {
    name: 'Starter Package',
    subtitle: 'Landing Page / Microsite',
    description: 'For entrepreneurs or small businesses that just need a quick online presence.',
    price: 'From $600 USD',
    delivery: '1–2 days',
    icon: Globe,
    color: 'from-blue-500 to-cyan-500',
    features: [
      '1 optimized Landing Page (up to 8 sections)',
      'Modern and responsive design',
      'Basic SEO + Google Analytics',
      'Contact or subscription form',
      'Hosting + domain (optional, additional cost)'
    ],
    popular: false
  },
  {
    name: 'Business Package',
    subtitle: 'Corporate Website',
    description: 'For companies looking for a professional website with multiple pages.',
    price: 'From $1,200 USD',
    delivery: '3–5 days',
    icon: Users,
    color: 'from-purple-500 to-pink-500',
    features: [
      'Up to 5 custom pages (Home, About, Services, Blog, Contact)',
      'Modern, mobile-optimized design',
      'Basic SEO + Sitemap',
      'Custom integrations as needed (forms, newsletter, maps, etc.)',
      'Open CMS so the client can manage their own content'
    ],
    popular: true
  },
  {
    name: 'Pro Package',
    subtitle: 'Simple Web Platform / MVP Lite',
    description: 'For startups that want to validate an idea with real users.',
    price: 'From $3,500 USD',
    delivery: '1–2 weeks',
    icon: Code,
    color: 'from-orange-500 to-red-500',
    features: [
      'Full website with user dashboard',
      'Login/registration system with basic roles',
      'Custom integrations as needed (payments, bookings, products, courses, etc.)',
      'Basic API for future growth',
      'Open CMS so the client can manage their own content'
    ],
    popular: false
  },
  {
    name: 'Enterprise Package',
    subtitle: 'Advanced MVP / Scalable Platform',
    description: 'For larger projects that require a robust and growth-ready solution.',
    price: 'From $7,000 USD',
    delivery: '3–4 weeks',
    icon: Shield,
    color: 'from-emerald-500 to-teal-500',
    features: [
      'Custom web platform with multiple roles and dashboards',
      'Custom integrations as needed',
      'Scalable architecture with support for many users',
      'Security, advanced SEO, and automatic backups',
      'Open CMS for content management'
    ],
    popular: false
  }
]

export function WebSolutionsSection() {
  return (
    <section id="solutions" className="relative py-20 overflow-hidden" style={{ background: 'linear-gradient(to bottom, var(--tertiary-gray), var(--primary-black))' }}>
      {/* Background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full blur-3xl" style={{ backgroundColor: 'var(--blur-blue)' }} />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 rounded-full blur-3xl" style={{ backgroundColor: 'var(--blur-purple)' }} />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold font-space-grotesk mb-6">
            <span className="text-gradient-blue">Web Solutions</span>
          </h2>
          <p className="text-xl md:text-2xl text-secondary max-w-3xl mx-auto leading-relaxed">
            Professional web development packages tailored to your business needs
          </p>
        </motion.div>

        {/* Packages Grid - Clean Professional Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-4 gap-6">
          {packages.map((pkg, index) => {
            const IconComponent = pkg.icon
            
            return (
              <motion.div
                key={pkg.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className={`relative group ${pkg.popular ? 'lg:scale-105 lg:z-10' : ''}`}
              >
                {/* Popular Badge */}
                {pkg.popular && (
                  <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 z-20">
                    <div className="text-primary px-4 py-1 rounded-lg text-xs font-semibold" style={{ background: 'linear-gradient(135deg, var(--accent-primary), var(--primary-black))' }}>
                      Most Popular
                    </div>
                  </div>
                )}

                <div                 className={`relative h-full backdrop-blur-sm border rounded-xl p-6 transition-all duration-300 hover:bg-glass-hover hover:border-hover ${
                  pkg.popular ? 'border-secondary shadow-lg' : 'border-primary'
                }`}
                style={{ 
                  backgroundColor: pkg.popular ? 'var(--bg-secondary)' : 'var(--bg-glass)',
                  boxShadow: pkg.popular ? '0 0 20px var(--shadow-secondary)' : 'none'
                }}>
                  {/* Header */}
                  <div className="text-center mb-6">
                    <div className={`inline-flex p-3 rounded-lg bg-gradient-to-r ${pkg.color} mb-4`}>
                      <IconComponent className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="text-xl font-bold text-primary mb-1">{pkg.name}</h3>
                    <p className="text-sm text-tertiary mb-3">{pkg.subtitle}</p>
                    <p className="text-xs text-muted leading-relaxed">{pkg.description}</p>
                  </div>

                  {/* Price */}
                  <div className="text-center mb-6">
                    <div className="text-3xl font-bold text-primary mb-1">{pkg.price}</div>
                    <div className="flex items-center justify-center gap-1 text-sm text-tertiary">
                      <Clock className="w-4 h-4" />
                      <span>Delivery in {pkg.delivery}</span>
                    </div>
                  </div>

                  {/* Features */}
                  <div className="mb-6">
                    <ul className="space-y-3">
                      {pkg.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-start gap-2">
                          <Check className="w-4 h-4 flex-shrink-0 mt-0.5" style={{ color: 'var(--success)' }} />
                          <span className="text-sm text-secondary">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </motion.div>
            )
          })}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <div className="glass-effect border-primary rounded-2xl p-8 max-w-4xl mx-auto">
            <h3 className="text-2xl md:text-3xl font-bold text-primary mb-4">
              Need a Custom Solution?
            </h3>
            <p className="text-secondary mb-6 max-w-2xl mx-auto">
              We also offer custom development services for unique projects that don't fit our standard packages. 
              Let's discuss your specific requirements.
            </p>
            <div className="flex justify-center">
              <Button size="lg">
                <span className="flex items-center gap-2">
                  Discuss Your Project
                </span>
              </Button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
