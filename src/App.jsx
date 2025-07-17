"use client"

import { ParallaxProvider } from "react-scroll-parallax"
import Header from "./components/Header"
import Hero from "./components/Hero"
import BookRecommendations from "./components/BookRecommendations"
import Footer from "./components/Footer"

function App() {
  return (
    <ParallaxProvider>
      <div className="min-h-screen bg-white font-sans">
        <Header />
        <main>
          <Hero />
          <BookRecommendations />
        </main>
        <Footer />
      </div>
    </ParallaxProvider>
  )
}

export default App
