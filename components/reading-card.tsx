'use client'

import { motion } from 'framer-motion'
import { Book } from 'lucide-react'

export function ReadingCard() {
  const books = [
    {
      id: 1,
      title: 'The Complete Works of Design',
      author: 'Dieter Rams',
      description: 'Essential principles of good design and design thinking for the modern era',
      category: 'Design Philosophy',
      link: 'https://www.amazon.com'
    },
    {
      id: 2,
      title: 'Growth Hacking Secrets',
      author: 'Sean Ellis',
      description: 'Strategies for rapid user acquisition and product growth in startups',
      category: 'Marketing & Growth',
      link: 'https://www.amazon.com'
    },
    {
      id: 3,
      title: 'Social Media Marketing Mastery',
      author: 'Gary Vaynerchuk',
      description: 'Building authentic brands and engaging communities through social platforms',
      category: 'Social Media',
      link: 'https://www.amazon.com'
    }
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2, delayChildren: 0.1 }
    }
  }

  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  }

  return (
    <motion.section
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
      className="max-w-4xl mx-auto px-6 py-12"
    >
      <div className="mb-8">
        <div className="flex items-center gap-2 mb-2">
          <Book className="w-5 h-5 text-[#FF7F0A]" />
          <h2 className="text-2xl font-semibold">What I'm Reading</h2>
        </div>
        <p className="text-[#9B9B9B]">Books that shape my thinking and growth</p>
      </div>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
      >
        {books.map((book) => (
          <motion.a
            key={book.id}
            href={book.link}
            target="_blank"
            rel="noopener noreferrer"
            variants={cardVariants}
            whileHover={{ y: -8 }}
            className="group h-full block"
          >
            <div className="h-full rounded-2xl overflow-hidden bg-white/80 border border-[#E5E5EA] shadow-xl hover:shadow-2xl transition-all duration-300 p-6 flex flex-col">
              <motion.div
                whileHover={{ scale: 1.02 }}
                className="w-full h-40 rounded-lg bg-gradient-to-br from-orange-500 to-amber-500 mb-4 flex items-center justify-center"
              >
                <Book className="w-16 h-16 text-white opacity-80" />
              </motion.div>

              <div className="inline-block bg-[#FF7F0A]/10 text-[#FF7F0A] px-3 py-1 rounded-full text-xs font-semibold mb-3 w-fit">
                {book.category}
              </div>

              <h3 className="text-lg font-semibold text-black mb-1 group-hover:text-[#FF7F0A] transition-colors line-clamp-2">{book.title}</h3>
              <p className="text-sm text-[#9B9B9B] mb-3">by {book.author}</p>
              <p className="text-xs text-[#666666] mb-4 flex-grow">{book.description}</p>

              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="w-full py-2 bg-[#FF7F0A] text-white rounded-full text-xs font-semibold hover:bg-[#FF8F1A]"
              >
                View on Amazon
              </motion.button>
            </div>
          </motion.a>
        ))}
      </motion.div>
    </motion.section>
  )
}
