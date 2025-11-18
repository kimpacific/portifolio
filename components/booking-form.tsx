'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'

interface BookingFormProps {
  method: string
  onSuccess?: () => void
}

export function BookingForm({ method, onSuccess }: BookingFormProps) {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    try {
      if (method === 'meet') {
        await fetch('/api/send-meet-link', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ name, email, message }),
        })
      } else if (method === 'email') {
        await fetch('/api/send-email', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ name, email, message }),
        })
      } else if (method === 'whatsapp') {
        const phoneNumber = '250785928112'
        const whatsappMessage = `Hi, my name is ${name}. ${message}`
        const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(whatsappMessage)}`
        window.open(whatsappUrl, '_blank')
      }

      setIsSubmitted(true)
      setTimeout(() => {
        setName('')
        setEmail('')
        setMessage('')
        setIsSubmitted(false)
        if (onSuccess) {
          onSuccess()
        }
      }, 3000)
    } catch (error) {
      console.error('[v0] Error:', error)
    } finally {
      setIsSubmitting(false)
    }
  }

  if (isSubmitted) {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        className="p-8 bg-green-50 border-2 border-green-500 rounded-2xl text-center"
      >
        <div className="text-5xl mb-4">✓</div>
        <h3 className="text-2xl font-semibold mb-2 text-green-900">Success!</h3>
        <p className="text-green-700">
          {method === 'whatsapp'
            ? 'Redirected to WhatsApp!'
            : method === 'meet'
            ? 'Google Meet link sent to your email!'
            : 'Your message has been sent!'}
        </p>
      </motion.div>
    )
  }

  return (
    <motion.form
      onSubmit={handleSubmit}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="bg-gray-50 rounded-2xl p-8 space-y-6"
    >
      <div>
        <label className="block text-sm font-medium mb-2">Name</label>
        <input
          type="text"
          required
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-orange-500"
          placeholder="Your name"
        />
      </div>

      <div>
        <label className="block text-sm font-medium mb-2">Email</label>
        <input
          type="email"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-orange-500"
          placeholder="your@email.com"
        />
      </div>

      <div>
        <label className="block text-sm font-medium mb-2">Message</label>
        <textarea
          required
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          rows={4}
          className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-orange-500 resize-none"
          placeholder="Tell me about your project or idea..."
        />
      </div>

      <motion.button
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        type="submit"
        disabled={isSubmitting}
        className="w-full px-6 py-3 bg-black text-white rounded-lg font-medium hover:bg-gray-900 disabled:bg-gray-400 transition-colors"
      >
        {isSubmitting ? 'Sending...' : method === 'meet' ? 'Send & Get Meet Link' : method === 'whatsapp' ? 'Open WhatsApp' : 'Send Message'}
      </motion.button>
    </motion.form>
  )
}
