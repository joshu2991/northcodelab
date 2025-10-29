'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Plus, Minus } from 'lucide-react'

export function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  const faqs = [
    {
      question: "What technologies do you use for web development?",
      answer: "I use modern, industry-standard technologies including Laravel, React, Next.js, Node.js, TypeScript, and various databases like MySQL and PostgreSQL. My tech stack is chosen based on your project requirements, ensuring optimal performance, scalability, and maintainability."
    },
    {
      question: "How long does a typical web development project take?",
      answer: "Project timelines vary based on complexity and scope. A simple business website typically takes 3-7 days, while complex web applications can take over a month. I provide detailed project timelines during our initial consultation and keep you updated throughout the development process."
    },
    {
      question: "Do you provide ongoing maintenance and support?",
      answer: "Yes, I offer comprehensive maintenance and support packages. This includes regular updates, security patches, performance monitoring, bug fixes, and technical support. I believe in long-term partnerships and ensure your website continues to perform optimally."
    },
    {
      question: "Can you help with SEO and digital marketing?",
      answer: "Absolutely! I implement SEO best practices during development and can help with ongoing SEO optimization. I also work with trusted digital marketing partners to provide comprehensive online presence management, including content marketing, social media, and paid advertising."
    },
    {
      question: "What's included in your e-commerce solutions?",
      answer: "The e-commerce solutions include product catalog management, secure payment processing (Stripe, PayPal), inventory tracking, order management, customer accounts, shipping integration, tax calculation, and analytics. I also provide training on how to manage your online store."
    },
    {
      question: "Do you work with businesses outside of Vancouver?",
      answer: "Yes, I work with clients across Canada and internationally. While I'm based in Vancouver, I use modern collaboration tools and communication methods to work effectively with remote clients. I can accommodate different time zones and provide regular updates on project progress."
    },
    {
      question: "What makes your web development services different?",
      answer: "I focus on creating custom solutions tailored to your specific business needs, not one-size-fits-all templates. I combine technical expertise with business acumen, ensuring your website not only looks great but also drives real business results. I also provide comprehensive training and ongoing support."
    },
    {
      question: "How do you ensure website security?",
      answer: "Security is a top priority. I implement industry-standard security measures including SSL certificates, secure coding practices, regular security audits, data encryption, and compliance with privacy regulations. I also provide security monitoring and incident response services."
    },
    {
      question: "Can you redesign my existing website?",
      answer: "Yes, I specialize in website redesigns and modernizations. I can update your existing site with modern design, improved functionality, better performance, and enhanced user experience while preserving your content and SEO value."
    },
    {
      question: "What's your pricing structure?",
      answer: "The pricing is project-based and depends on scope, complexity, and timeline. I provide detailed quotes after understanding your requirements. I offer flexible payment options and can work within various budgets. Contact me for a free consultation and personalized quote."
    }
  ]

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-0 w-96 h-96 rounded-full blur-3xl blur-blue opacity-20" />
        <div className="absolute bottom-1/4 right-0 w-96 h-96 rounded-full blur-3xl blur-purple opacity-20" />
      </div>

      <div className="max-w-4xl mx-auto relative z-10">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold font-space-grotesk mb-6">
            <span className="text-gradient">Frequently Asked</span>
            <br />
            <span className="text-gradient-blue">Questions</span>
          </h2>
          <p className="text-xl md:text-2xl text-secondary max-w-3xl mx-auto leading-relaxed">
            Get answers to common questions about our web development services, 
            processes, and how we can help your business grow.
          </p>
        </motion.div>

        {/* FAQ Items */}
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="card-primary rounded-2xl overflow-hidden hover:shadow-primary transition-all duration-300"
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full px-8 py-6 text-left flex items-center justify-between group"
              >
                <h3 className="text-lg md:text-xl font-semibold text-primary group-hover:text-gradient-blue transition-colors pr-4">
                  {faq.question}
                </h3>
                <motion.div
                  animate={{ rotate: openIndex === index ? 45 : 0 }}
                  transition={{ duration: 0.3 }}
                  className="flex-shrink-0"
                >
                  {openIndex === index ? (
                    <Minus className="w-6 h-6 text-accent-primary" />
                  ) : (
                    <Plus className="w-6 h-6 text-tertiary group-hover:text-accent-primary transition-colors" />
                  )}
                </motion.div>
              </button>

              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                  >
                    <div className="px-8 pb-6">
                      <div className="border-t border-border/30 pt-6">
                        <p className="text-tertiary leading-relaxed">
                          {faq.answer}
                        </p>
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
