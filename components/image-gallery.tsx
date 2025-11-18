'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'

export default function ImageGallery() {
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
    hidden: { opacity: 0, scale: 0.95 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.8,
        ease: 'easeOut',
      },
    },
  }

  return (
    <section className="w-full py-16 sm:py-20 lg:py-24 px-4 sm:px-6 lg:px-8 bg-white dark:bg-slate-950">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-100px' }}
        variants={containerVariants}
        className="max-w-6xl mx-auto"
      >
        <motion.h2
          variants={itemVariants}
          className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-4 text-center text-balance"
        >
          Showcase Your Vision
        </motion.h2>

        <motion.p
          variants={itemVariants}
          className="text-lg text-gray-600 dark:text-gray-400 mb-12 text-center text-balance"
        >
          Beautiful, responsive imagery that adapts to any screen
        </motion.p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <motion.div
            variants={itemVariants}
            className="lg:col-span-2 lg:row-span-2 relative overflow-hidden rounded-lg shadow-lg"
          >
            <Image
              src="/modern-office.png"
              alt="Modern office workspace showcasing SiteZen design"
              width={600}
              height={600}
              className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
              priority
            />
          </motion.div>

          {[1, 2, 3].map((i) => (
            <motion.div
              key={i}
              variants={itemVariants}
              className="relative overflow-hidden rounded-lg shadow-lg aspect-square"
            >
              <Image
                src={`/modern-design-element-.jpg?height=300&width=300&query=modern%20design%20element%20${i}`}
                alt={`Design element ${i}`}
                width={300}
                height={300}
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
              />
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  )
}
