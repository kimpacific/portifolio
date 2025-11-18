'use client'

import { motion } from 'framer-motion'

export function WebImpactQuote() {
  return (
    <motion.section
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
      className="max-w-4xl mx-auto px-6 py-16"
    >
      <motion.div
        className="relative"
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        {/* Opening Quote */}
        <div className="text-8xl font-bold text-[#FF7F0A] opacity-30 leading-none mb-4">
          "
        </div>

        <div className="bg-gradient-to-br from-[#FFF5F0] to-[#FFF9F5] rounded-3xl p-8 md:p-12 border border-[#FF7F0A]/20">
          <p className="text-lg md:text-xl leading-relaxed text-[#333333] font-light">
            In today's digital landscape, a well-managed website is not just a digital presence—it's your most powerful lead generation engine. When strategically integrated with your social media platforms, it creates a seamless ecosystem that amplifies your brand message, nurtures relationships with your audience, and converts visitors into loyal clients. A professionally designed and optimized website, paired with consistent social media engagement, establishes credibility, builds trust, and ensures that every interaction with your brand is memorable. This integrated approach transforms casual browsers into qualified leads, maximizing your return on investment while building a sustainable foundation for long-term business growth in the competitive digital marketplace.
          </p>
        </div>

        {/* Closing Quote */}
        <div className="text-8xl font-bold text-[#FF7F0A] opacity-30 leading-none text-right mt-4">
          "
        </div>
      </motion.div>
    </motion.section>
  )
}
