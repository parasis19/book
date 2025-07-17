"use client"

import { motion } from "framer-motion"
import { Parallax } from "react-scroll-parallax"

function Hero() {
  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      <Parallax translateY={[-20, 20]} className="absolute inset-0 z-0">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1507842217343-583bb7270b66?ixlib=rb-1.2.1&auto=format&fit=crop&w=2000&q=80')",
            filter: "brightness(0.9)",
          }}
        />
      </Parallax>

      <div className="absolute inset-0 bg-white/60 z-10" />

      <div className="relative z-20 text-center px-4 max-w-3xl mx-auto">
        <motion.h1
          className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Discover Your Next Favorite Book
        </motion.h1>

        <motion.p
          className="text-xl text-gray-700 mb-8 max-w-2xl mx-auto"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          Curated recommendations tailored to your unique reading preferences, helping you find books that resonate with
          your interests and expand your horizons.
        </motion.p>

        <motion.button
          className="px-8 py-3 bg-gray-900 text-white rounded-md text-lg font-medium transition-all"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          whileHover={{ scale: 1.05, backgroundColor: "#000" }}
          whileTap={{ scale: 0.98 }}
        >
          Get Recommendations
        </motion.button>
      </div>
    </section>
  )
}

export default Hero
