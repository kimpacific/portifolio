'use client'

import { motion } from 'framer-motion'

const skills = [
  'JavaScript',
  'TypeScript',
  'Python',
  'C++',
  'Java',
  'React',
  'Next.js',
  'Node.js',
  'Tailwind CSS',
  'SQL',
  'NoSQL',
  'GraphQL',
]

export function Skills() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.05,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.4 },
    },
  }

  return (
    <section className="max-w-4xl mx-auto px-6 py-16">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="text-3xl md:text-4xl font-light mb-12"
      >
        Skills & Languages
      </motion.h2>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="flex flex-wrap gap-3"
      >
        {skills.map((skill, idx) => (
          <motion.div
            key={idx}
            variants={itemVariants}
            whileHover={{ scale: 1.05, y: -2 }}
            className="px-4 py-2 border border-[#E5E5EA] rounded-full text-sm font-medium hover:bg-gray-50 transition-colors cursor-default"
          >
            {skill}
          </motion.div>
        ))}
      </motion.div>
    </section>
  )
}
