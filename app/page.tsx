'use client'

import { Header } from '@/components/header'
import { Hero } from '@/components/hero'
import { ExperienceTimeline } from '@/components/experience-timeline'
import { Projects } from '@/components/projects'
import { Skills } from '@/components/skills'
import { Languages } from '@/components/languages'
import { MarketingExpertise } from '@/components/marketing-expertise'
import { WebImpactQuote } from '@/components/web-impact-quote'

import { HowIWork } from '@/components/how-i-work'
import { Footer } from '@/components/footer'
import { motion } from 'framer-motion'

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      <Header />
      <Hero />
      
      <motion.div className="section-divider h-px bg-linear-to-r from-transparent via-[#FF7F0A] to-transparent" />
      
      <ExperienceTimeline />
      
      <motion.div className="section-divider h-px bg-linear-to-r from-transparent via-[#FF7F0A] to-transparent" />
      
      <Projects />
      
      <motion.div className="section-divider h-px bg-linear-to-r from-transparent via-[#FF7F0A] to-transparent" />
      
      <Skills />
      <Languages />
      
      <motion.div className="section-divider h-px bg-linear-to-r from-transparent via-[#FF7F0A] to-transparent" />
      
      <MarketingExpertise />
      
      <WebImpactQuote />
      
      <motion.div className="section-divider h-px bg-linear-to-r from-transparent via-[#FF7F0A] to-transparent" />
      
   
      <HowIWork />
      
      <motion.div className="section-divider h-px bg-linear-to-r from-transparent via-[#FF7F0A] to-transparent" />
      
      <Footer />
    </main>
  )
}
