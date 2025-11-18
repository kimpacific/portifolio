'use client'

import { motion } from 'framer-motion'

interface ContactMethodSelectorProps {
  selectedMethod: string
  setSelectedMethod: (method: string) => void
}

export function ContactMethodSelector({ selectedMethod, setSelectedMethod }: ContactMethodSelectorProps) {
  const methods = [
    {
      id: 'meet',
      emoji: '📹',
      title: 'Google Meet',
      description: 'Schedule a live video call',
      color: 'from-blue-500 to-blue-600',
    },
    {
      id: 'email',
      emoji: '✉️',
      title: 'Email',
      description: 'Send an email to pacifickimana@gmail.com',
      color: 'from-purple-500 to-purple-600',
    },
    {
      id: 'whatsapp',
      emoji: '💬',
      title: 'WhatsApp',
      description: 'Quick chat on WhatsApp',
      color: 'from-green-500 to-green-600',
    },
  ]

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      {methods.map((m) => (
        <motion.button
          key={m.id}
          onClick={() => setSelectedMethod(m.id)}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className={`p-6 rounded-2xl border-2 transition-all text-left ${
            selectedMethod === m.id
              ? 'border-orange-500 bg-orange-50'
              : 'border-gray-200 bg-white hover:border-gray-300'
          }`}
        >
          <div className={`w-12 h-12 rounded-lg bg-gradient-to-br ${m.color} flex items-center justify-center text-white text-2xl mb-4`}>
            {m.emoji}
          </div>
          <h3 className="text-lg font-semibold mb-1">{m.title}</h3>
          <p className="text-sm text-gray-600">{m.description}</p>
        </motion.button>
      ))}
    </div>
  )
}
