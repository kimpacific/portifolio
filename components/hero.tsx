'use client'

import { useState } from 'react'
import Image from 'next/image'
import { motion, easeInOut, easeOut } from 'framer-motion'
import { useRouter } from 'next/navigation'


export function Hero() {
  
  const router = useRouter()

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: easeOut },
    },
  }

  // Floating bubbles animation variants
  const bubbleVariants = {
    animate: {
      y: [0, -30, 0],
      x: [0, 20, 0],
      transition: {
        duration: 6,
        repeat: Infinity,
        ease: easeInOut,
      },
    },
  }

  const bubbleVariants2 = {
    animate: {
      y: [0, -40, 0],
      x: [0, -15, 0],
      transition: {
        duration: 8,
        repeat: Infinity,
        ease: easeInOut,
        delay: 1,
      },
    },
  }

  const bubbleVariants3 = {
    animate: {
      y: [0, -25, 0],
      x: [0, 10, 0],
      transition: {
        duration: 7,
        repeat: Infinity,
        ease: easeInOut,
        delay: 2,
      },
    },
  }

  return (
    <section className="relative max-w-4xl mx-auto px-6 py-16 md:py-24 overflow-hidden">
      {/* Background Mesh */}
      <div className="absolute inset-0 opacity-30 pointer-events-none">
        <svg className="absolute top-0 left-0 w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="mesh" x="0" y="0" width="100" height="100" patternUnits="userSpaceOnUse">
              <circle cx="50" cy="50" r="1" fill="#FF7F0A" opacity="0.3" />
              <circle cx="20" cy="20" r="0.5" fill="#FF7F0A" opacity="0.2" />
              <circle cx="80" cy="80" r="0.5" fill="#FF7F0A" opacity="0.2" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#mesh)" />
        </svg>
      </div>

      {/* Floating Bubbles */}
      <motion.div
        variants={bubbleVariants}
        animate="animate"
        className="absolute top-20 left-10 w-20 h-20 rounded-full bg-linear-to-br from-orange-200/40 to-orange-300/40 blur-xl"
      />
      <motion.div
        variants={bubbleVariants2}
        animate="animate"
        className="absolute top-40 right-20 w-32 h-32 rounded-full bg-linear-to-br from-orange-100/30 to-orange-200/30 blur-2xl"
      />
      <motion.div
        variants={bubbleVariants3}
        animate="animate"
        className="absolute bottom-20 left-1/4 w-24 h-24 rounded-full bg-linear-to-br from-orange-200/35 to-orange-300/35 blur-xl"
      />
      <motion.div
        variants={bubbleVariants}
        animate="animate"
        className="absolute bottom-40 right-1/3 w-16 h-16 rounded-full bg-linear-to-br from-orange-100/40 to-orange-200/40 blur-lg"
      />

      {/* 2D Shapes */}
      <motion.div
        animate={{
          rotate: [0, 360],
          scale: [1, 1.1, 1],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "linear",
        }}
        className="absolute top-10 right-10 w-16 h-16 opacity-20"
      >
        <svg viewBox="0 0 100 100" className="w-full h-full">
          <polygon points="50,10 90,90 10,90" fill="#FF7F0A" />
        </svg>
      </motion.div>

      <motion.div
        animate={{
          rotate: [360, 0],
          scale: [1, 1.2, 1],
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
          ease: "linear",
        }}
        className="absolute bottom-10 left-10 w-12 h-12 opacity-15"
      >
        <svg viewBox="0 0 100 100" className="w-full h-full">
          <circle cx="50" cy="50" r="40" fill="none" stroke="#FF7F0A" strokeWidth="3" />
          <circle cx="50" cy="50" r="25" fill="#FF7F0A" />
        </svg>
      </motion.div>

      <motion.div
        animate={{
          y: [0, -20, 0],
          rotate: [0, 180, 360],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
        className="absolute top-1/2 right-1/4 w-8 h-8 opacity-20"
      >
        <svg viewBox="0 0 100 100" className="w-full h-full">
          <rect x="25" y="25" width="50" height="50" fill="#FF7F0A" />
        </svg>
      </motion.div>
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="text-center relative z-10"
      >
        <motion.div variants={itemVariants} className="mb-6 flex justify-center">
          <div className="w-24 h-24 md:w-32 md:h-32 rounded-full overflow-hidden border-2 border-gray-200">
            <Image 
              src="/profile.jpg" 
              alt="KIMANA Pacifique" 
              width={128} 
              height={128}
              className="w-full h-full object-cover"
            />
          </div>
        </motion.div>

        <motion.h1 variants={itemVariants} className="text-4xl md:text-5xl font-light mb-4 tracking-tight">
          Hi, I'm <span className="font-semibold">KIMANA Pacifique</span>
        </motion.h1>

        <motion.p variants={itemVariants} className="text-lg md:text-xl text-gray-600 mb-2">
           A <span className="text-black font-medium">Software Engineer & Social Media Marketing Specialist</span> at
        </motion.p>

        <motion.p variants={itemVariants} className="text-3xl md:text-4xl font-semibold mb-6" style={{ color: '#FF7F0A' }}>
          Micorp.
        </motion.p>

        <motion.div variants={itemVariants} className="flex items-center justify-center gap-3 mb-8">
          <div className="w-2 h-2 rounded-full bg-green-500"></div>
          <span className="text-sm font-medium">Open to work</span>
        </motion.div>

        <motion.div variants={itemVariants}>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => router.push('/book-call')}
            className="px-8 py-3 bg-black text-white rounded-full font-medium hover:bg-gray-900 transition-colors mb-8 relative z-10"
          >
            Book a call
          </motion.button>
        </motion.div>

        <motion.p variants={itemVariants} className="text-gray-600 max-w-xl mx-auto leading-relaxed relative z-10">
          Feel free to explore my portfolio and reach out — I'd love to connect!
        </motion.p>
      </motion.div>

      {/* BookingModal component is removed as it's no longer needed */}
    </section>
  )
}
