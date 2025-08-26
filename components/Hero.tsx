"use client"

import { useState, useEffect } from "react"
import SearchCard from "./SearchCard"

const heroImages = [
  {
    src: "/images/hero/pexels-pixabay-271681.webp",
    srcSet: "/images/hero/pexels-pixabay-271681-400w.webp 400w, /images/hero/pexels-pixabay-271681-800w.webp 800w, /images/hero/pexels-pixabay-271681-1200w.webp 1200w, /images/hero/pexels-pixabay-271681-1920w.webp 1920w",
    fallback: "/images/hero/pexels-pixabay-271681.jpg"
  },
  {
    src: "/images/hero/pexels-anetta-kolesnikova-2154382947-33605105.webp",
    srcSet: "/images/hero/pexels-anetta-kolesnikova-2154382947-33605105-400w.webp 400w, /images/hero/pexels-anetta-kolesnikova-2154382947-33605105-800w.webp 800w, /images/hero/pexels-anetta-kolesnikova-2154382947-33605105-1200w.webp 1200w, /images/hero/pexels-anetta-kolesnikova-2154382947-33605105-1920w.webp 1920w",
    fallback: "/images/hero/pexels-anetta-kolesnikova-2154382947-33605105.jpg"
  },
  {
    src: "/images/hero/pexels-mikitayo-18156174.webp",
    srcSet: "/images/hero/pexels-mikitayo-18156174-400w.webp 400w, /images/hero/pexels-mikitayo-18156174-800w.webp 800w, /images/hero/pexels-mikitayo-18156174-1200w.webp 1200w, /images/hero/pexels-mikitayo-18156174-1920w.webp 1920w",
    fallback: "/images/hero/pexels-mikitayo-18156174.jpg"
  },
  {
    src: "/images/hero/pexels-osho-1001965.webp",
    srcSet: "/images/hero/pexels-osho-1001965-400w.webp 400w, /images/hero/pexels-osho-1001965-800w.webp 800w, /images/hero/pexels-osho-1001965-1200w.webp 1200w, /images/hero/pexels-osho-1001965-1920w.webp 1920w",
    fallback: "/images/hero/pexels-osho-1001965.jpg"
  }
]

export default function Hero() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => 
        prevIndex === heroImages.length - 1 ? 0 : prevIndex + 1
      )
    }, 5000) // Change image every 5 seconds

    return () => clearInterval(interval)
  }, [])

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden py-20">
      {/* Background Image Carousel */}
      <div className="absolute inset-0 z-0">
        {heroImages.map((image, index) => (
          <picture key={image.src}>
            <source
              srcSet={image.srcSet}
              type="image/webp"
            />
            <img
              src={image.fallback}
              alt={`Luxury travel background ${index + 1}`}
              className={`w-full h-full object-cover rounded-none transition-opacity duration-1000 ${
                index === currentImageIndex ? 'opacity-100' : 'opacity-0'
              } absolute inset-0`}
              loading={index === 0 ? "eager" : "lazy"}
            />
          </picture>
        ))}
        {/* Dark gradient overlay for better text readability */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/30 to-black/50" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="mb-16 pt-12">
          <p className="font-karla text-base md:text-lg lg:text-xl text-[#ffffff] mb-4 font-light">
            Welcome to Pull North Travel
          </p>
          <h1 className="font-montserrat text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-8 tracking-tight leading-[1.1] max-w-6xl mx-auto">
            Curators of Ultra‑<br />Luxury Journeys
          </h1>
          <p className="font-karla text-lg md:text-xl lg:text-2xl text-[#ffffff] max-w-[375px] md:max-w-[515px] mx-auto leading-relaxed font-light">
            World‑class experiences, thoughtfully curated for those who live without compromise.
          </p>
        </div>

        <div className="relative z-[100]">
          <SearchCard />
        </div>
      </div>
    </section>
  )
}
