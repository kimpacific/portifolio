'use client'

import { motion } from 'framer-motion'

const projects = [
  {
    title: 'AI Chatbot Platform',
    description: 'Intelligent conversation system with natural language processing',
    technologies: ['React', 'TypeScript', 'Node.js', 'OpenAI API'],
  },
  {
    title: 'Portfolio Builder',
    description: 'No-code platform for creatives to build stunning portfolios',
    technologies: ['Next.js', 'Tailwind CSS', 'PostgreSQL', 'Stripe'],
  },
  {
    title: 'Full-stack E-commerce System',
    description: 'Complete shopping experience with inventory management',
    technologies: ['Next.js', 'React', 'TypeScript', 'Supabase'],
  },
  {
    title: 'Modern UI Dashboard',
    description: 'Analytics dashboard with real-time data visualization',
    technologies: ['React', 'Recharts', 'TypeScript', 'Tailwind'],
  },
  {
    title: 'Mobile App with API Integration',
    description: 'Cross-platform mobile application with backend integration',
    technologies: ['React Native', 'Node.js', 'Firebase', 'TypeScript'],
  },
  {
    title: 'Creative Landing Page',
    description: 'High-performance marketing site with custom animations',
    technologies: ['Next.js', 'Framer Motion', 'Tailwind CSS'],
  },
]

export function Projects() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
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
        className="text-3xl md:text-4xl font-light mb-12 title-underline text-[#FF7F0A]"
      >
        Projects
      </motion.h2>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="grid md:grid-cols-2 gap-6"
      >
        {projects.map((project, idx) => (
          <motion.div
            key={idx}
            variants={itemVariants}
            whileHover={{ y: -4 }}
            className="border border-[#E5E5EA] rounded-2xl p-6 hover:apple-shadow-lg transition-all"
          >
            <div className="w-full h-40 bg-linear-to-br from-gray-100 to-gray-50 rounded-lg mb-4 flex items-center justify-center">
              <span className="text-[#9B9B9B] text-sm">Project Image</span>
            </div>
            <h3 className="text-lg font-semibold mb-2">{project.title}</h3>
            <p className="text-[#9B9B9B] text-sm mb-4">{project.description}</p>
            <div className="flex flex-wrap gap-2 mb-4">
              {project.technologies.map((tech, i) => (
                <span key={i} className="px-3 py-1 bg-gray-100 text-xs rounded-full">
                  {tech}
                </span>
              ))}
            </div>
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="text-sm font-medium text-[#FF7F0A] hover:text-[#FF6B00] transition-colors"
            >
              View Project →
            </motion.button>
          </motion.div>
        ))}
      </motion.div>
    </section>
  )
}
