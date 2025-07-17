"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import { Parallax } from "react-scroll-parallax"
import { books } from "../data/books"
import BookCard from "./BookCard"

function BookRecommendations() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.1 })

  return (
    <section className="py-20 px-6 relative overflow-hidden" ref={ref}>
      <Parallax translateY={[10, -10]} className="absolute right-0 top-0 opacity-10 z-0">
        <div className="w-96 h-96 rounded-full bg-gray-200" />
      </Parallax>

      <Parallax translateY={[-10, 10]} className="absolute left-0 bottom-0 opacity-10 z-0">
        <div className="w-64 h-64 rounded-full bg-gray-200" />
      </Parallax>

      <div className="max-w-6xl mx-auto relative z-10">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Curated Recommendations</h2>
          <p className="text-xl text-gray-700 max-w-2xl mx-auto">
            Explore our handpicked selection of books that have captivated readers around the world.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {books.map((book, index) => (
            <BookCard key={book.id} book={book} index={index} />
          ))}
        </div>
      </div>
    </section>
  )
}

export default BookRecommendations
