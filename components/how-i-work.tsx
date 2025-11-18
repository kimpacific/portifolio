'use client'

import { motion } from 'framer-motion'
import { useState } from 'react'

const steps = [
  {
    number: '01',
    title: 'Discovery Call',
    description: 'In the first stage, we\'ll have a Discovery Call to discuss your goals, needs, and project requirements. This helps us align our vision and set the foundation for a successful collaboration.',
  },
  {
    number: '02',
    title: 'Research & Strategy',
    description: 'We dive deep into market research and develop a comprehensive strategy tailored to your needs.',
  },
  {
    number: '03',
    title: 'Design & Prototyping',
    description: 'Creative design concepts and interactive prototypes to bring your vision to life.',
  },
  {
    number: '04',
    title: 'Development',
    description: 'Building the solution with cutting-edge technology and best practices.',
  },
  {
    number: '05',
    title: 'Launch & Support',
    description: 'Deployment and ongoing support to ensure success.',
  },
]

export function HowIWork() {
  const [expanded, setExpanded] = useState(0)

  return (
    <motion.section
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
      className="max-w-4xl mx-auto px-6 py-16"
    >
      <h2 className="text-3xl md:text-4xl font-light mb-12 title-underline text-[#FF7F0A]">How I work</h2>

      <div className="space-y-3">
        {steps.map((step, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: idx * 0.05 }}
            viewport={{ once: true }}
          >
            <motion.button
              onClick={() => setExpanded(expanded === idx ? -1 : idx)}
              whileHover={{ backgroundColor: 'rgb(249, 249, 249)' }}
              className="w-full text-left border border-[#E5E5EA] rounded-2xl p-6 transition-all hover:apple-shadow"
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-4">
                  <span className="text-2xl font-semibold text-[#FF7F0A]">{step.number}</span>
                  <h3 className="text-lg font-medium">{step.title}</h3>
                </div>
                <motion.svg
                  animate={{ rotate: expanded === idx ? 180 : 0 }}
                  className="w-5 h-5 text-[#9B9B9B]"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                </motion.svg>
              </div>

              <motion.div
                initial={false}
                animate={{ height: expanded === idx ? 'auto' : 0, opacity: expanded === idx ? 1 : 0 }}
                transition={{ duration: 0.3 }}
                className="overflow-hidden"
              >
                <p className="text-[#9B9B9B] mt-4 leading-relaxed">{step.description}</p>
              </motion.div>
            </motion.button>
          </motion.div>
        ))}
      </div>
    </motion.section>
  )
}
