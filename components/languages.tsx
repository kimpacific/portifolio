'use client'

import { motion } from 'framer-motion'
import {
  JavaScriptIcon,
  TypeScriptIcon,
  PythonIcon,
  ReactIcon,
  NextJSIcon,
  NodeJSIcon,
  SQLIcon,
  TailwindIcon,
} from '@/components/tech-icons'

const languages = [
  { name: 'JavaScript', level: 'Expert', Icon: JavaScriptIcon, color: '#F7DF1E' },
  { name: 'TypeScript', level: 'Advanced', Icon: TypeScriptIcon, color: '#3178C6' },
  { name: 'Python', level: 'Advanced', Icon: PythonIcon, color: '#3776AB' },
  { name: 'React', level: 'Expert', Icon: ReactIcon, color: '#61DAFB' },
  { name: 'Next.js', level: 'Expert', Icon: NextJSIcon, color: '#000000' },
  { name: 'Node.js', level: 'Advanced', Icon: NodeJSIcon, color: '#339933' },
  { name: 'SQL', level: 'Advanced', Icon: SQLIcon, color: '#336791' },
  { name: 'CSS/Tailwind', level: 'Expert', Icon: TailwindIcon, color: '#06B6D4' },
]

export function Languages() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.08,
      },
    },
  }

  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
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
        Languages & Technologies
      </motion.h2>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4"
      >
        {languages.map((lang, idx) => {
          const IconComponent = lang.Icon
          return (
            <motion.div
              key={idx}
              variants={cardVariants}
              whileHover={{ y: -4, boxShadow: '0 8px 30px rgba(0,0,0,0.12)' }}
              className="p-4 border border-[#E5E5EA] rounded-2xl hover:border-[#FF7F0A] transition-all cursor-default bg-white"
            >
              <div className="mb-3 flex items-center justify-center" style={{ color: lang.color }}>
                <IconComponent />
              </div>
              <h3 className="font-semibold text-sm">{lang.name}</h3>
              <p className="text-xs text-[#9B9B9B] mt-1">{lang.level}</p>
            </motion.div>
          )
        })}
      </motion.div>
    </section>
  )
}
