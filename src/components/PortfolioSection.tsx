'use client'

import { useEffect, useRef } from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { Globe, ChevronRight } from 'lucide-react'
import Image from 'next/image'

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger)
}

export function PortfolioSection() {
  const { inView } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  })

  const sectionRef = useRef<HTMLDivElement>(null)
  const projectsRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (inView) {
      const ctx = gsap.context(() => {
        if (projectsRef.current?.children) {
          gsap.fromTo(
            projectsRef.current.children,
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
              stagger: 0.2,
              ease: 'power3.out',
            }
          )
        }
      }, sectionRef)

      return () => ctx.revert()
    }
  }, [inView])

  const projects = [
    {
      id: 1,
      title: 'Baking Platform',
      subtitle: 'Online Classes & Community Hub',
      description: 'A scalable baking education platform that combines on-demand courses, live video classes, and community interaction. Users can register, purchase access via Stripe, and learn through structured lessons with progress tracking and downloadable resources.',
      category: 'Education Platform',
      status: 'Live',
      year: '2025',
      liveUrl: 'https://baking.northcodelab.com',
      githubUrl: '#',
      technologies: ['Laravel 12', 'MySQL', 'AWS S3 & SES', 'Stripe', 'Tailwind CSS'],
      features: ['🔐 User Authentication & Roles', '💳 Stripe Payments & Subscriptions', '🎥 Video Conferencing for Live Classes', '📚 Course Management with Progress Tracking', '📄 Downloadable Documentation & Resources', '🌐 Scalable Architecture on AWS'],
      color: 'from-purple-500 to-pink-500',
      icon: '🍰',
      imagePath: '/portfolio/baking_h.png',
      imageOrientation: 'horizontal',
      imageAlt: 'Baking Platform - Online Classes & Community Hub Interface'
    },
    {
      id: 2,
      title: 'YouTube AI Insight',
      subtitle: 'AI-Powered Content Analysis for Parents',
      description: 'A Laravel + Vue.js application MVP that helps parents analyze YouTube content for their children using AI. Parents can paste any YouTube URL and instantly get AI-powered analysis showing whether content is educational, harmless fun, or concerning. Results are cached for 24 hours to optimize performance.',
      category: 'AI Platform',
      status: 'Live',
      year: '2025',
      liveUrl: 'https://parents.northcodelab.com',
      githubUrl: '#',
      technologies: ['Laravel', 'Vue.js + Inertia.js', 'MySQL', 'OpenAI API', 'YouTube Data API v3', 'Tailwind CSS'],
      features: ['🎥 Video Analysis - Instant AI-powered content analysis', '📊 Educational Scoring - See how educational, entertaining, or harmful content is', '📝 Transcript Analysis - AI analysis based on title, description, and transcript', '⏱️ Smart Caching - Results cached for 24 hours to avoid redundant API calls', '📋 Waitlist System - Join early access for future features', '🔒 Privacy-Focused - Anonymized data, never stores child identity'],
      color: 'from-orange-500 to-red-500',
      icon: '👨‍👩‍👧',
      imagePath: '/portfolio/parents-tracker.png',
      imageOrientation: 'horizontal',
      imageAlt: 'YouTube AI Insight - AI-Powered Content Analysis for Parents'
    },
    {
      id: 3,
      title: 'Care Platform',
      subtitle: 'Elderly Care & Health Management System',
      description: 'A digital health solution focused on elderly care, enabling families, caregivers, and doctors to manage medicines, monitor vital signs, and coordinate appointments. The system supports four user roles, each with tailored access, ensuring seamless collaboration between patients, caregivers, and medical professionals.',
      category: 'Healthcare',
      status: 'Live',
      year: '2025',
      liveUrl: 'https://care.northcodelab.com/',
      githubUrl: '#',
      technologies: ['React + Next.js', 'Node.js', 'MySQL', 'PHP Landing Page', 'Authentication & Role-based Access'],
      features: ['🧑‍⚕️ Multi-role System (patients, caregivers, doctors, admins)', '💊 Medication Management (reminders, logs, history)', '📅 Appointment Scheduling & Tracking', '❤️ Vital Signs Monitoring (data visualization & history)', '🔐 Secure Authentication & Role Permissions', '🌍 Landing Page + WebApp Integration'],
      color: 'from-blue-500 to-cyan-500',
      icon: '🏥',
      imagePath: '/portfolio/care_v.png',
      imageOrientation: 'vertical',
      imageAlt: 'Care Platform - Elderly Care & Health Management System Interface'
    },
    {
      id: 4,
      title: 'Health Solutions',
      subtitle: 'Telemedicine & Patient Management Platform',
      description: 'A full-stack telemedicine platform designed for doctors, patients, and healthcare providers, integrating consultations, patient management, and automated marketing in one place. Built with Laravel & Livewire, it enables both clinical and business workflows to scale smoothly.',
      category: 'Telemedicine',
      status: 'Live',
      year: '2025',
      liveUrl: 'https://health.northcodelab.com/',
      githubUrl: '#',
      technologies: ['Laravel + Livewire', 'MySQL', 'Stripe', 'AI-powered Chatbot', 'Email Automation & Marketing Tools'],
      features: ['🏥 Telemedicine & Virtual Consultations', '👨‍⚕️ Doctor & Patient Management (records, appointments, tracking)', '📈 Integrated Marketing & Lead Management', '💳 Payments with Stripe (consultations, subscriptions, packages)', '🤖 AI Chatbot for Patient Support', '📧 Email Campaigns & Automated Follow-ups'],
      color: 'from-green-500 to-emerald-500',
      icon: '💡',
      imagePath: '/portfolio/health_h.png',
      imageOrientation: 'horizontal',
      imageAlt: 'Health Solutions - Telemedicine & Patient Management Platform Interface'
    },
  ]

  return (
    <section
      ref={sectionRef}
      id="portfolio"
      className="py-16 sm:py-20 lg:py-24 px-4 sm:px-6 lg:px-8 relative"
    >
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-center mb-12 sm:mb-16"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold font-space-grotesk mb-4 sm:mb-6">
            <span className="text-gradient">
              Featured </span>
            <span className="text-gradient-blue">
              Projects
            </span>
          </h2>
          
          <p className="text-base sm:text-lg text-gray-300 max-w-3xl mx-auto leading-relaxed px-4">
            Professional digital solutions built with modern technologies
          </p>
        </motion.div>

        {/* Projects Grid */}
        <div ref={projectsRef} className="space-y-16 sm:space-y-20">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              className={`group ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} flex flex-col lg:flex items-start lg:items-center gap-8 sm:gap-10 lg:gap-12`}
            >
              {/* Project Content */}
              <div className="flex-1 space-y-4 sm:space-y-6 w-full">
                <div className="space-y-3 sm:space-y-4">
                  <div className="flex flex-wrap items-center gap-2 sm:gap-3 mb-3 sm:mb-4">
                    <span className="px-2 sm:px-3 py-1 rounded-full text-xs font-medium bg-gray-800/50 text-gray-300 border border-gray-700/50">
                      {project.category}
                    </span>
                    <span className="text-xs sm:text-sm text-gray-400">{project.year}</span>
                    <span className="px-2 sm:px-3 py-1 rounded-full text-xs font-medium bg-green-500/20 text-green-400 border border-green-500/30">
                      {project.status}
                    </span>
                  </div>
                  
                  <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white leading-tight">
                    {project.title}
                  </h3>
                  
                  <p className="text-base sm:text-lg text-gray-300 font-medium">
                    {project.subtitle}
                  </p>
                  
                  <p className="text-sm sm:text-base text-gray-400 leading-relaxed">
                    {project.description}
                  </p>
                </div>

                {/* Technologies */}
                <div className="space-y-2 sm:space-y-3">
                  <h4 className="text-xs sm:text-sm font-semibold text-white uppercase tracking-wide">Technologies</h4>
                  <div className="flex flex-wrap gap-1.5 sm:gap-2">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-2 sm:px-3 py-1 rounded text-xs font-medium bg-gray-800/30 text-gray-300 border border-gray-700/30"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Features */}
                <div className="space-y-2 sm:space-y-3">
                  <h4 className="text-xs sm:text-sm font-semibold text-white uppercase tracking-wide">Key Features</h4>
                  <div className="space-y-1.5 sm:space-y-2">
                    {project.features.map((feature) => (
                      <div key={feature} className="flex items-start gap-2 sm:gap-3">
                        <div className="w-1 h-1 sm:w-1.5 sm:h-1.5 rounded-full bg-gray-400 mt-1.5 sm:mt-2 flex-shrink-0" />
                        <span className="text-xs sm:text-sm text-gray-300 leading-relaxed">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>

              </div>

              {/* Project Image */}
              <div className={`flex-1 relative ${project.imageOrientation === 'vertical' ? 'w-full lg:w-auto flex justify-center' : 'w-full lg:w-auto'}`}>
                <div className={`relative rounded-lg sm:rounded-xl overflow-hidden bg-gray-900/30 border border-gray-800/50 p-2 sm:p-4 ${
                  project.imageOrientation === 'vertical' 
                    ? 'w-[225px] md:w-[355px]' 
                    : 'w-full'
                }`}>
                  <div className={`relative group/image ${
                    project.imageOrientation === 'vertical' 
                      ? 'h-[400px] sm:h-[500px] lg:h-[600px] w-[209px] md:w-[321px] mx-auto' 
                      : 'h-[188px] sm:h-[300px] w-full'
                  }`}>
                    <Image
                      src={project.imagePath}
                      alt={project.imageAlt}
                      fill
                      className="object-contain"
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 40vw"
                      priority={index < 2}
                      quality={90}
                    />
                    
                    {/* Hover Overlay with Button */}
                    <div className="absolute inset-0 bg-black/60 opacity-0 group-hover/image:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                      <motion.a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="inline-flex items-center gap-2 sm:gap-3 px-4 sm:px-6 py-2 sm:py-3 rounded-lg bg-white text-black font-semibold hover:bg-gray-100 transition-colors text-sm sm:text-base"
                      >
                        <Globe className="w-4 h-4 sm:w-5 sm:h-5" />
                        View Project
                        <ChevronRight className="w-4 h-4 sm:w-5 sm:h-5" />
                      </motion.a>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  )
}
