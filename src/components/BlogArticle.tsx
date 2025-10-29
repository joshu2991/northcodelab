'use client'

import { motion } from 'framer-motion'
import { ArrowLeft, Calendar, Clock } from 'lucide-react'
import Link from 'next/link'
import { ReactNode } from 'react'

interface BlogArticleProps {
  article: {
    title: string
    date: string
    readTime: string
    content: ReactNode
  }
}

export function BlogArticle({ article }: BlogArticleProps) {
  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 relative overflow-hidden min-h-screen">
      {/* Background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-0 w-96 h-96 rounded-full blur-3xl blur-blue opacity-20" />
        <div className="absolute bottom-1/4 right-0 w-96 h-96 rounded-full blur-3xl blur-purple opacity-20" />
      </div>

      <div className="max-w-4xl mx-auto relative z-10">
        {/* Back link */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-8"
        >
          <Link
            href="/#blog"
            className="inline-flex items-center gap-2 text-tertiary hover:text-primary transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Back to Articles</span>
          </Link>
        </motion.div>

        {/* Article header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="mb-12"
        >
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold font-space-grotesk mb-6">
            <span className="text-gradient">{article.title}</span>
          </h1>
          
          <div className="flex items-center gap-6 text-tertiary">
            <div className="flex items-center gap-2">
              <Calendar className="w-4 h-4" />
              <span>{article.date}</span>
            </div>
            <div className="flex items-center gap-2">
              <Clock className="w-4 h-4" />
              <span>{article.readTime}</span>
            </div>
          </div>
        </motion.div>

        {/* Article content */}
        <motion.article
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="glass-effect rounded-2xl p-8 md:p-12"
        >
          <div className="blog-content">
            {article.content}
          </div>
        </motion.article>
      </div>
    </section>
  )
}

