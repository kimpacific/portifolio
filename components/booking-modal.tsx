'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from '@/components/ui/dialog'
import { ContactMethodSelector } from '@/components/contact-method-selector'
import { BookingForm } from '@/components/booking-form'

interface BookingModalProps {
  open: boolean
  onOpenChange: (open: boolean) => void
}

export function BookingModal({ open, onOpenChange }: BookingModalProps) {
  const [selectedMethod, setSelectedMethod] = useState<string>('')

  const handleMethodSelect = (method: string) => {
    setSelectedMethod(method)
  }

  const handleClose = () => {
    setSelectedMethod('')
    onOpenChange(false)
  }

  return (
    <Dialog open={open} onOpenChange={handleClose}>
      <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="text-2xl font-semibold">Book a Call</DialogTitle>
          <DialogDescription>
            Choose your preferred method to get in touch with me
          </DialogDescription>
        </DialogHeader>

        {!selectedMethod ? (
          <div className="mt-6">
            <ContactMethodSelector
              selectedMethod={selectedMethod}
              setSelectedMethod={handleMethodSelect}
            />
          </div>
        ) : (
          <div className="mt-6">
            <motion.button
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              onClick={() => setSelectedMethod('')}
              className="mb-4 text-sm text-gray-600 hover:text-gray-900 flex items-center gap-2"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
              Back to selection
            </motion.button>
            <BookingForm method={selectedMethod} onSuccess={handleClose} />
          </div>
        )}
      </DialogContent>
    </Dialog>
  )
}
