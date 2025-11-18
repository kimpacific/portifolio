'use client'

import { motion } from 'framer-motion'

const experiences = [
  {
    title: 'Software Engineer at Micorp',
    year: '2024',
    type: 'On-site',
    duration: 'Full-time',
  },
  {
    title: 'Social Media Marketing Specialist at Micorp',
    year: '2023',
    type: 'Hybrid',
    duration: 'Full-time',
  },
  {
    title: 'Junior Developer',
    year: '2022',
    type: 'Remote',
    duration: 'Full-time',
  },
]

export function ExperienceTimeline() {
  return (
    <section className="max-w-4xl mx-auto px-6 py-16">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="text-3xl md:text-4xl font-light mb-12 title-underline text-[#FF7F0A]"
      >
        My Experience
      </motion.h2>

      <div className="space-y-8">
        {experiences.map((exp, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: idx * 0.1 }}
            viewport={{ once: true }}
            className="flex gap-6 group"
          >
            <div className="flex flex-col items-center">
              <div className="w-3 h-3 rounded-full bg-[#FF7F0A] group-hover:scale-125 transition-transform group-hover:shadow-lg group-hover:shadow-[#FF7F0A]/50"></div>
              {idx < experiences.length - 1 && (
                <div className="w-0.5 h-20 bg-gradient-to-b from-[#FF7F0A] to-[#E5E5EA] mt-4"></div>
              )}
            </div>
            <div className="pb-8">
              <h3 className="text-lg font-medium mb-1 text-black">{exp.title}</h3>
              <p className="text-[#9B9B9B] text-sm">
                {exp.year} • {exp.type} • {exp.duration}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  )
}
