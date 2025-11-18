'use client'

import { motion } from 'framer-motion'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  const footerLinks = [
    { name: 'About', href: '#' },
    { name: 'Contact', href: '#' },
    { name: 'Pricing', href: '#' },
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 10 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
      },
    },
  }

  return (
    <motion.footer
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={containerVariants}
      className="w-full bg-slate-900 dark:bg-black text-white py-12"
    >
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8 mb-8">
          {/* Brand */}
          <motion.div variants={itemVariants}>
            <p className="text-2xl font-bold">SiteZen</p>
          </motion.div>

          {/* Links */}
          <motion.div
            variants={containerVariants}
            className="flex flex-col sm:flex-row gap-6 md:gap-8 items-center"
          >
            {footerLinks.map((link) => (
              <motion.a
                key={link.name}
                href={link.href}
                variants={itemVariants}
                whileHover={{ color: '#3b82f6' }}
                className="hover:text-blue-500 transition-colors duration-200"
              >
                {link.name}
              </motion.a>
            ))}
          </motion.div>
        </div>

        {/* Copyright */}
        <motion.div
          variants={itemVariants}
          className="border-t border-gray-700 pt-8 text-center text-gray-400"
        >
          <p>© {currentYear} SiteZen. All rights reserved.</p>
        </motion.div>
      </div>
    </motion.footer>
  )
}
