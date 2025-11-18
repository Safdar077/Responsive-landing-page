'use client'

import { motion } from 'framer-motion'

export default function BrandInfo() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: 'easeOut',
      },
    },
  }

  const paragraphs = [
    'SiteZen is dedicated to creating beautiful, responsive websites that work seamlessly across all devices. Our mission is to empower businesses with modern web solutions that drive growth and engagement.',
    'We believe that web design should be both functional and inspiring. Our team combines cutting-edge technology with creative excellence to deliver websites that not only look great but also perform exceptionally.',
    'With SiteZen, you get more than just a website. You get a partner committed to your success, providing ongoing support and optimization to ensure your digital presence continues to thrive.',
  ]

  return (
    <section className="w-full bg-white dark:bg-slate-950 py-16 md:py-24">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          variants={containerVariants}
        >
          <motion.h2
            variants={itemVariants}
            className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-12 text-center"
          >
            About SiteZen
          </motion.h2>

          <div className="space-y-6">
            {paragraphs.map((paragraph, index) => (
              <motion.p
                key={index}
                variants={itemVariants}
                className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed text-balance"
              >
                {paragraph}
              </motion.p>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
