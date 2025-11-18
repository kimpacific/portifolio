'use client'

import { motion } from 'framer-motion'

const marketingSkills = [
  {
    title: 'Lead Generation',
    description: 'Strategic campaigns to identify and attract high-quality leads through targeted outreach and conversion optimization.',
    points: ['Sales Funnel Optimization', 'Email Campaign Strategy', 'Lead Nurturing', 'Conversion Rate Optimization'],
  },
  {
    title: 'Social Media Marketing',
    description: 'Creating engaging content and building communities across platforms to drive brand awareness and customer engagement.',
    points: ['Content Strategy', 'Community Management', 'Analytics & Reporting', 'Social Advertising'],
  },
  {
    title: 'Brand Development',
    description: 'Building consistent brand identity and messaging to establish market presence and customer loyalty.',
    points: ['Brand Positioning', 'Content Creation', 'Visual Identity', 'Voice & Messaging'],
  },
  {
    title: 'Analytics & Growth',
    description: 'Data-driven insights and metrics to measure performance and drive sustainable business growth.',
    points: ['Performance Metrics', 'A/B Testing', 'Growth Hacking', 'Market Analysis'],
  },
]

export function MarketingExpertise() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  }

  return (
    <section className="max-w-4xl mx-auto px-6 py-16">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="text-3xl md:text-4xl font-light mb-4"
      >
        Marketing & Lead Generation Expertise
      </motion.h2>
      
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.1 }}
        viewport={{ once: true }}
        className="text-[#9B9B9B] mb-12 max-w-2xl"
      >
        Combining technical expertise with marketing acumen to drive business growth and customer engagement through strategic campaigns and data-driven insights.
      </motion.p>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="grid grid-cols-1 md:grid-cols-2 gap-6"
      >
        {marketingSkills.map((skill, idx) => (
          <motion.div
            key={idx}
            variants={cardVariants}
            whileHover={{ y: -6 }}
            className="p-6 border border-[#E5E5EA] rounded-2xl hover:border-[#FF7F0A] transition-all bg-white hover:shadow-lg"
          >
            <div className="flex items-start mb-3">
              <div className="w-2 h-2 bg-[#FF7F0A] rounded-full mt-2 mr-3"></div>
              <h3 className="text-lg font-semibold">{skill.title}</h3>
            </div>
            <p className="text-sm text-[#9B9B9B] mb-4">{skill.description}</p>
            <ul className="space-y-2">
              {skill.points.map((point, pidx) => (
                <li key={pidx} className="text-xs text-[#666] flex items-center">
                  <span className="w-1 h-1 bg-[#FF7F0A] rounded-full mr-2"></span>
                  {point}
                </li>
              ))}
            </ul>
          </motion.div>
        ))}
      </motion.div>
    </section>
  )
}
