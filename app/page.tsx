'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import Navbar from '@/components/navbar'
import HeroSection from '@/components/hero-section'
import BrandInfo from '@/components/brand-info'
import Footer from '@/components/footer'
import ImageGallery from '@/components/image-gallery'

export default function Home() {
  return (
    <main className="w-full overflow-x-hidden">
      <Navbar />
      <HeroSection />
      <ImageGallery />
      <BrandInfo />
      <Footer />
    </main>
  )
}
