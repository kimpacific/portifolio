'use client'

import { motion } from 'framer-motion'
import { Music } from 'lucide-react'

export function PlaylistCard() {
  const songs = [
    {
      id: 1,
      title: 'Digital Dreams',
      artist: 'Synthwave Collective',
      description: 'Inspiring electronic beats perfect for deep work and creative sessions',
      colorClass: 'from-purple-500 to-pink-500',
      link: 'https://open.spotify.com'
    },
    {
      id: 2,
      title: 'Code Flow',
      artist: 'Lo-Fi Beats',
      description: 'Relaxing lo-fi hip hop tracks for focused programming',
      colorClass: 'from-blue-500 to-cyan-500',
      link: 'https://open.spotify.com'
    },
    {
      id: 3,
      title: 'Innovation Wave',
      artist: 'Tech Sounds',
      description: 'Modern music for startups and tech enthusiasts',
      colorClass: 'from-orange-500 to-red-500',
      link: 'https://open.spotify.com'
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
          <Music className="w-5 h-5 text-[#FF7F0A]" />
          <h2 className="text-2xl font-semibold">My Music Playlist</h2>
        </div>
        <p className="text-[#9B9B9B]">Curated tracks that inspire my work</p>
      </div>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
      >
        {songs.map((song) => (
          <motion.a
            key={song.id}
            href={song.link}
            target="_blank"
            rel="noopener noreferrer"
            variants={cardVariants}
            whileHover={{ y: -8 }}
            className="group h-full block"
          >
            <div className="h-full rounded-2xl overflow-hidden bg-white/80 border border-[#E5E5EA] shadow-xl hover:shadow-2xl transition-all duration-300 p-6 flex flex-col">
              <motion.div
                whileHover={{ scale: 1.02 }}
                className="w-full h-32 rounded-xl bg-gradient-to-br from-purple-500 to-pink-500 mb-4 flex items-center justify-center"
              >
                <Music className="w-12 h-12 text-white opacity-80" />
              </motion.div>

              <h3 className="text-lg font-semibold text-black mb-1 group-hover:text-[#FF7F0A] transition-colors">{song.title}</h3>
              <p className="text-sm text-[#9B9B9B] mb-3">{song.artist}</p>
              <p className="text-xs text-[#666666] mb-4 flex-grow">{song.description}</p>

              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="w-full py-2 bg-[#1DB954] text-white rounded-full text-xs font-semibold hover:bg-[#1ed760]"
              >
                Listen on Spotify
              </motion.button>
            </div>
          </motion.a>
        ))}
      </motion.div>
    </motion.section>
  )
}
