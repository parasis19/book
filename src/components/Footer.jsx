"use client"

import { motion } from "framer-motion"

function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="py-12 px-6 border-t border-gray-100">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <motion.a
            href="/"
            className="text-xl font-semibold text-gray-900 mb-6 md:mb-0"
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 400, damping: 10 }}
          >
            Reed
          </motion.a>

          <nav className="mb-6 md:mb-0">
            <ul className="flex space-x-8">
              <li>
                <motion.a
                  href="#about"
                  className="text-gray-700 hover:text-gray-900 transition-colors"
                  whileHover={{ y: -2 }}
                >
                  About
                </motion.a>
              </li>
              <li>
                <motion.a
                  href="#contact"
                  className="text-gray-700 hover:text-gray-900 transition-colors"
                  whileHover={{ y: -2 }}
                >
                  Contact
                </motion.a>
              </li>
              <li>
                <motion.a
                  href="#privacy"
                  className="text-gray-700 hover:text-gray-900 transition-colors"
                  whileHover={{ y: -2 }}
                >
                  Privacy Policy
                </motion.a>
              </li>
            </ul>
          </nav>
        </div>

        <div className="mt-8 pt-8 border-t border-gray-100 text-center text-gray-600 text-sm">
          <p>&copy; {currentYear} Reed. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
