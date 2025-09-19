'use client'

import { useEffect, useRef, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { ExternalLink, Github, Eye, ArrowRight } from 'lucide-react'
import { Button } from './Button'

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger)
}

export function PortfolioSection() {
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  })

  const getFilterClass = (color: string) => {
    switch (color) {
      case 'var(--accent-primary)': return 'portfolio-filter-active'
      case 'var(--accent-secondary)': return 'portfolio-filter-secondary'
      case 'var(--accent-tertiary)': return 'portfolio-filter-tertiary'
      case 'var(--accent-emerald)': return 'portfolio-filter-emerald'
      case 'var(--accent-gray)': return 'portfolio-filter-gray'
      default: return 'portfolio-filter-active'
    }
  }

  const sectionRef = useRef<HTMLDivElement>(null)
  const projectsRef = useRef<HTMLDivElement>(null)
  const [selectedCategory, setSelectedCategory] = useState('all')

  useEffect(() => {
    if (inView) {
      const ctx = gsap.context(() => {
        gsap.fromTo(
          projectsRef.current?.children,
          { 
            y: 100, 
            opacity: 0, 
            scale: 0.8,
          },
          {
            y: 0,
            opacity: 1,
            scale: 1,
            duration: 1,
            stagger: 0.1,
            ease: 'power3.out',
          }
        )
      }, sectionRef)

      return () => ctx.revert()
    }
  }, [inView])

  const categories = [
    { name: 'all', color: 'var(--accent-gray)' },
    { name: 'web', color: 'var(--accent-primary)' },
    { name: 'mobile', color: 'var(--accent-secondary)' },
    { name: 'ecommerce', color: 'var(--accent-tertiary)' },
    { name: 'design', color: 'var(--accent-emerald)' }
  ]

  const projects = [
    {
      id: 1,
      title: 'E-Commerce Platform',
      description: 'A modern, scalable e-commerce solution with advanced features and seamless user experience.',
      image: '/api/placeholder/600/400',
      category: 'ecommerce',
      tags: ['React', 'Node.js', 'MongoDB', 'Stripe'],
      liveUrl: '#',
      githubUrl: '#',
    },
    {
      id: 2,
      title: 'Mobile Banking App',
      description: 'Secure and intuitive mobile banking application with real-time transactions.',
      image: '/api/placeholder/600/400',
      category: 'mobile',
      tags: ['React Native', 'TypeScript', 'Firebase', 'Biometric Auth'],
      liveUrl: '#',
      githubUrl: '#',
    },
    {
      id: 3,
      title: 'SaaS Dashboard',
      description: 'Comprehensive analytics dashboard with real-time data visualization and reporting.',
      image: '/api/placeholder/600/400',
      category: 'web',
      tags: ['Next.js', 'D3.js', 'PostgreSQL', 'Redis'],
      liveUrl: '#',
      githubUrl: '#',
    },
    {
      id: 4,
      title: 'Brand Identity Design',
      description: 'Complete brand identity and design system for a tech startup.',
      image: '/api/placeholder/600/400',
      category: 'design',
      tags: ['Figma', 'Illustrator', 'Brand Strategy', 'Design System'],
      liveUrl: '#',
      githubUrl: '#',
    },
    {
      id: 5,
      title: 'Real Estate Platform',
      description: 'Property listing platform with virtual tours and advanced search capabilities.',
      image: '/api/placeholder/600/400',
      category: 'web',
      tags: ['Vue.js', 'Express', 'MySQL', 'WebRTC'],
      liveUrl: '#',
      githubUrl: '#',
    },
    {
      id: 6,
      title: 'Fitness Tracking App',
      description: 'Personal fitness companion with workout tracking and social features.',
      image: '/api/placeholder/600/400',
      category: 'mobile',
      tags: ['Flutter', 'Firebase', 'HealthKit', 'Social Features'],
      liveUrl: '#',
      githubUrl: '#',
    },
  ]

  const filteredProjects = selectedCategory === 'all' 
    ? projects 
    : projects.filter(project => project.category === selectedCategory)

  return (
    <section
      ref={sectionRef}
      id="portfolio"
      className="py-24 px-4 sm:px-6 lg:px-8 relative overflow-hidden"
    >
      {/* Background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-0 w-96 h-96 rounded-full blur-3xl blur-purple" />
        <div className="absolute bottom-1/4 right-0 w-96 h-96 rounded-full blur-3xl blur-blue" />
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
            <span className="text-gradient">Our Portfolio</span>
          </h2>
          <p className="text-xl md:text-2xl text-secondary max-w-3xl mx-auto leading-relaxed">
            Discover our latest projects and the innovative solutions we've created
          </p>
        </motion.div>

        {/* Category filter */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="flex flex-wrap justify-center gap-4 mb-16"
        >
          {categories.map((category) => (
            <motion.button
              key={category.name}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setSelectedCategory(category.name)}
              className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 ${
                selectedCategory === category.name
                  ? getFilterClass(category.color)
                  : 'btn-secondary'
              }`}
            >
              {category.name.charAt(0).toUpperCase() + category.name.slice(1)}
            </motion.button>
          ))}
        </motion.div>

        {/* Projects grid */}
        <div ref={projectsRef} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <AnimatePresence mode="wait">
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ 
                  y: -10, 
                  scale: 1.02,
                  transition: { duration: 0.3 }
                }}
                className="group relative"
              >
                <div className="card-primary rounded-3xl overflow-hidden h-full hover:shadow-primary transition-all duration-500 group-hover:border-hover">
                  {/* Project image */}
                  <div className="relative h-64 overflow-hidden">
                    <div className="w-full h-full flex items-center justify-center portfolio-project-bg">
                      <div className="text-6xl text-white/30">
                        {project.category === 'web' && '🌐'}
                        {project.category === 'mobile' && '📱'}
                        {project.category === 'ecommerce' && '🛒'}
                        {project.category === 'design' && '🎨'}
                      </div>
                    </div>
                    
                    {/* Overlay */}
                    <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-4">
                      <motion.a
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                        href={project.liveUrl}
                        className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white/30 transition-colors"
                      >
                        <ExternalLink className="w-5 h-5 text-white" />
                      </motion.a>
                      <motion.a
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                        href={project.githubUrl}
                        className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white/30 transition-colors"
                      >
                        <Github className="w-5 h-5 text-white" />
                      </motion.a>
                    </div>
                  </div>

                  {/* Project content */}
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-primary mb-2 group-hover:text-gradient-blue transition-colors">
                      {project.title}
                    </h3>
                    
                    <p className="text-tertiary mb-4 leading-relaxed">
                      {project.description}
                    </p>

                    {/* Tags */}
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.tags.map((tag) => (
                        <span
                          key={tag}
                          className="px-3 py-1 rounded-full text-xs text-secondary portfolio-tag"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    {/* View project button */}
                    <motion.button
                      whileHover={{ x: 5 }}
                      className="flex items-center gap-2 font-semibold transition-colors portfolio-link"
                      onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                    >
                      View Project
                      <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </motion.button>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
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
              <span className="text-gradient">Ready to Create</span>
              <br />
              <span className="text-gradient-blue">Something Amazing?</span>
            </h3>
            
            <p className="text-xl text-secondary mb-8 leading-relaxed">
              Let's bring your vision to life with our expertise and creativity.
            </p>

            <div className="flex justify-center">
              <Button 
                size="lg"
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              >
                Start Your Project
              </Button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
