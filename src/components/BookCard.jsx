"use client"

import { motion } from "framer-motion"

function BookCard({ book, index }) {
  return (
    <motion.div
      className="bg-white border border-gray-100 rounded-lg overflow-hidden flex flex-col h-full"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        duration: 0.5,
        delay: index * 0.1,
        ease: "easeOut",
      }}
      whileHover={{ y: -5, transition: { duration: 0.2 } }}
    >
      <div className="h-48 overflow-hidden">
        <img
          src={book.coverImage || "/placeholder.svg"}
          alt={book.title}
          className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
        />
      </div>
      <div className="p-6 flex flex-col flex-grow">
        <h3 className="text-xl font-semibold mb-2 text-gray-900">{book.title}</h3>
        <p className="text-gray-600 mb-3 text-sm">{book.author}</p>
        <p className="text-gray-700 mb-4 flex-grow">{book.description}</p>
        <motion.button
          className="text-gray-900 font-medium inline-flex items-center border-b border-transparent hover:border-gray-900 transition-all pb-1 self-start"
          whileHover={{ x: 5 }}
          transition={{ type: "spring", stiffness: 400, damping: 10 }}
        >
          Read More
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-4 w-4 ml-1"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
          </svg>
        </motion.button>
      </div>
    </motion.div>
  )
}

export default BookCard
