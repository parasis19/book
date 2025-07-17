"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"

function Header() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 10
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled)
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => {
      window.removeEventListener("scroll", handleScroll)
    }
  }, [scrolled])

  return (
    <motion.header
      className={`fixed top-0 left-0 right-0 z-50 px-6 py-4 transition-all duration-300 ${
        scrolled ? "bg-white shadow-sm" : "bg-transparent"
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="max-w-6xl mx-auto flex justify-between items-center">
        <motion.a
          href="/"
          className="text-2xl font-semibold text-gray-900"
          whileHover={{ scale: 1.05 }}
          transition={{ type: "spring", stiffness: 400, damping: 10 }}
        >
          Reed
        </motion.a>
        <nav>
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
          </ul>
        </nav>
      </div>
    </motion.header>
  )
}

export default Header
