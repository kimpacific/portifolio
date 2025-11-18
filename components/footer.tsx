'use client'

import { motion } from 'framer-motion'

export function Footer() {
  return (
    <footer className="max-w-4xl mx-auto px-6 py-16 border-t border-[#E5E5EA]">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="flex flex-col md:flex-row items-center justify-between gap-8"
      >
        <div>
          <h3 className="text-lg font-semibold mb-2">Let's Connect</h3>
          <a href="mailto:hey@kimanapacifique.com" className="text-[#FF7F0A] hover:text-[#FF6B00] font-medium">
            hey@kimanapacifique.com
          </a>
        </div>

        <motion.div className="flex gap-6">
          {[
            { icon: 'GitHub', href: '#' },
            { icon: 'LinkedIn', href: '#' },
            { icon: 'X', href: '#' },
          ].map((social) => (
            <motion.a
              key={social.icon}
              href={social.href}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              className="w-8 h-8 rounded-full border border-[#E5E5EA] flex items-center justify-center text-[#9B9B9B] hover:border-black hover:text-black transition-colors"
              title={social.icon}
            >
              <span className="text-xs font-bold">{social.icon[0]}</span>
            </motion.a>
          ))}
        </motion.div>
      </motion.div>

      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        viewport={{ once: true }}
        className="text-center text-[#9B9B9B] text-xs mt-8 pt-8 border-t border-[#E5E5EA]"
      >
        © 2025 KIMANA Pacifique. All rights reserved.
      </motion.p>
    </footer>
  )
}
