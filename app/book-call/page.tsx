'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { motion } from 'framer-motion'
import { Header } from '@/components/header'
import { Footer } from '@/components/footer'
import { ArrowLeft, Mail, MessageCircle } from 'lucide-react'

export default function BookCallPage() {
  const router = useRouter()

  const methods = [
    {
      id: 'email',
      title: 'Gmail',
      icon: <Mail className="w-32 h-32 text-red-500" />,
      benefits: [
        'Comprehensive documentation',
        'Time to prepare thoughtful responses',
        'Perfect for detailed requirements',
        'Easy to reference and archive',
      ],
      link: `https://mail.google.com/mail/?view=cm&fs=1&to=pacifickimana@gmail.com&su=Let's%20Work%20Together&body=Hi%20Pacifique,%0A%0AI%20would%20like%20to%20discuss%20a%20project%20with%20you.`,
      isExternal: true,
    },
    {
      id: 'whatsapp',
      title: 'WhatsApp',
      icon: <MessageCircle className="w-32 h-32 text-green-500" />,
      benefits: [
        'Instant communication and quick replies',
        'Casual and approachable tone',
        'Great for clarifications and follow-ups',
        'Share files and media easily',
      ],
      link: `https://wa.me/250785928112?text=Hi%20Pacifique,%20I%20would%20like%20to%20discuss%20a%20project%20with%20you.`,
      isExternal: true,
    },
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: 'easeOut' },
    },
  }

  return (
    <main className="min-h-screen bg-white">
      <Header />
      
      <section className="max-w-6xl mx-auto px-6 py-12 md:py-20">
        {/* Back button */}
        <motion.button
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          onClick={() => router.back()}
          className="flex items-center gap-2 text-gray-600 hover:text-black mb-8 transition-colors"
        >
          <ArrowLeft className="w-5 h-5" />
          Back
        </motion.button>

        {/* Header section */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="text-center mb-16"
        >
          <motion.h1 variants={itemVariants} className="text-4xl md:text-5xl font-semibold mb-4">
            Choose Your Communication Method
          </motion.h1>
          <motion.p variants={itemVariants} className="text-lg text-gray-600 max-w-2xl mx-auto">
            Select the communication method that works best for your needs
          </motion.p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-20"
        >
          {methods.map((method) => (
            <motion.a
              key={method.id}
              href={method.link}
              target={method.isExternal ? '_blank' : undefined}
              rel={method.isExternal ? 'noopener noreferrer' : undefined}
              onClick={(e) => {
                if (!method.isExternal) {
                  e.preventDefault()
                  router.push(method.link)
                }
              }}
              variants={itemVariants}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="flex flex-col items-center cursor-pointer"
            >
              {/* Large icon */}
              <motion.div
                whileHover={{ y: -10 }}
                className="mb-6 transition-transform"
              >
                {method.icon}
              </motion.div>
              
              {/* Title */}
              <h2 className="text-2xl font-semibold text-center text-black mb-2">
                {method.title}
              </h2>
              
              {/* Underline accent */}
              <div className="h-1 w-12 bg-gradient-to-r from-orange-400 to-orange-500 rounded-full mb-8" />
            </motion.a>
          ))}
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
        >
          {methods.map((method) => (
            <motion.a
              key={`benefits-${method.id}`}
              href={method.link}
              target={method.isExternal ? '_blank' : undefined}
              rel={method.isExternal ? 'noopener noreferrer' : undefined}
              onClick={(e) => {
                if (!method.isExternal) {
                  e.preventDefault()
                }
              }}
              variants={itemVariants}
              whileHover={{ boxShadow: '0 12px 24px rgba(0, 0, 0, 0.1)' }}
              className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-2xl p-8 cursor-pointer transition-all"
            >
              <h3 className="text-lg font-semibold mb-6 text-black">Benefits</h3>
              
              <ul className="space-y-4">
                {method.benefits.map((benefit, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <div className="w-5 h-5 rounded-full bg-gradient-to-br from-orange-400 to-orange-500 flex items-center justify-center flex-shrink-0 mt-1">
                      <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <span className="text-gray-700 text-sm leading-relaxed">{benefit}</span>
                  </li>
                ))}
              </ul>

              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={(e) => {
                  e.preventDefault()
                  e.stopPropagation()
                  window.open(method.link, '_blank')
                }}
                className="w-full mt-6 py-3 rounded-lg font-semibold bg-gradient-to-r from-orange-400 to-orange-500 text-white hover:shadow-lg transition-all"
              >
                Connect via {method.title}
              </motion.button>
            </motion.a>
          ))}
        </motion.div>
      </section>

      <motion.div className="section-divider h-px bg-gradient-to-r from-transparent via-[#FF7F0A] to-transparent my-12" />

      <Footer />
    </main>
  )
}
