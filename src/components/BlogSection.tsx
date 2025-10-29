'use client'

import { motion } from 'framer-motion'
import { ArrowRight, Clock, Calendar } from 'lucide-react'
import Link from 'next/link'

export function BlogSection() {
  const articles = [
    {
      slug: 'how-i-reduced-sql-query-time',
      title: 'How I Reduced SQL Query Time from 13s to 1s',
      description: 'A deep dive into SQL optimization techniques, indexing strategies, and query refactoring that dramatically improved database performance in a production Laravel application.',
      readTime: '8 min read',
      date: 'January 2024',
      excerpt: 'Discover the optimization journey that transformed a critical database query from taking 13 seconds to just 1 second through strategic indexing, query optimization, and database architecture improvements.'
    },
    {
      slug: 'integrating-chatgpt-with-laravel',
      title: 'Integrating ChatGPT with Laravel: A Practical Guide',
      description: 'Step-by-step guide to integrating OpenAI\'s ChatGPT API with Laravel applications, including error handling, rate limiting, and best practices for production deployments.',
      readTime: '12 min read',
      date: 'December 2023',
      excerpt: 'Learn how to seamlessly integrate ChatGPT into your Laravel applications with real-world examples, proper error handling, and performance optimization strategies.'
    },
    {
      slug: 'building-stripe-payment-system',
      title: 'Building a Stripe Payment System: Lessons Learned',
      description: 'Real-world insights from implementing a comprehensive Stripe payment system, covering webhooks, subscription management, error handling, and security best practices.',
      readTime: '15 min read',
      date: 'November 2023',
      excerpt: 'Key lessons and best practices learned while building a production-ready Stripe payment integration, including handling webhooks, managing subscriptions, and ensuring transaction security.'
    },
  ]

  return (
    <section id="blog" className="py-24 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-0 w-96 h-96 rounded-full blur-3xl blur-blue opacity-20" />
        <div className="absolute bottom-1/4 right-0 w-96 h-96 rounded-full blur-3xl blur-purple opacity-20" />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold font-space-grotesk mb-6">
            <span className="text-gradient">Technical </span>
            <span className="text-gradient-blue">Articles</span>
          </h2>
          <p className="text-xl md:text-2xl text-secondary max-w-3xl mx-auto leading-relaxed">
            Insights and lessons learned from building production applications
          </p>
        </motion.div>

        {/* Articles grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {articles.map((article, index) => (
            <motion.div
              key={article.slug}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ 
                y: -10, 
                scale: 1.02,
                transition: { duration: 0.3 }
              }}
              className="group relative"
            >
              <Link href={`/blog/${article.slug}`}>
                <div className="card-primary rounded-2xl p-8 h-full hover:shadow-primary transition-all duration-300 group-hover:border-hover flex flex-col">
                  {/* Article meta */}
                  <div className="flex items-center gap-4 text-sm text-tertiary mb-4">
                    <div className="flex items-center gap-1">
                      <Calendar className="w-4 h-4" />
                      <span>{article.date}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Clock className="w-4 h-4" />
                      <span>{article.readTime}</span>
                    </div>
                  </div>

                  {/* Title */}
                  <h3 className="text-2xl font-bold text-primary mb-4 group-hover:text-gradient-blue transition-colors">
                    {article.title}
                  </h3>

                  {/* Description */}
                  <p className="text-tertiary mb-6 leading-relaxed flex-grow">
                    {article.excerpt}
                  </p>

                  {/* Read More */}
                  <div className="flex items-center gap-2 text-accent-primary group-hover:gap-3 transition-all">
                    <span className="font-semibold">Read More</span>
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <p className="text-lg text-secondary mb-6">
            More articles coming soon. Follow my journey as I share insights from building real-world applications.
          </p>
        </motion.div>
      </div>
    </section>
  )
}

