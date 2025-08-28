"use client"

import { useState, useEffect } from "react"
import { ChevronLeft, ChevronRight } from "lucide-react"

const experiences = [
  {
    title: "French Riviera Wine & Luxury Tour Series",
    description:
      "Five-star stays along the Riviera paired with exclusive wine tastings in Provence's famed estates.",
    image: "/images/experiences/french_riviera_1-1920w.avif",
    fallback: "/images/experiences/french_riviera_1-1920w.webp",
  },
  {
    title: "Formula One Tours",
    description:
      "VIP access to the world's most prestigious racing circuits with paddock passes and exclusive hospitality.",
    image: "/formula-1-racing-circuit-luxury-experience.avif",
    webp: "/formula-1-racing-circuit-luxury-experience.webp",
  },
  {
    title: "Music & Culture Festivals",
    description:
      "Behind-the-scenes access to world-renowned festivals with artist meet-and-greets and premium accommodations.",
    image: "/images/experiences/luxury-music-festival-vip-experience-1920w.avif",
    fallback: "/images/experiences/luxury-music-festival-vip-experience-1920w.webp",
  },
  {
    title: "Wellness Retreats",
    description: "Transformative wellness journeys at the world's most exclusive spas and healing sanctuaries.",
    image: "/images/experiences/luxury-wellness-retreat-spa-experience-1920w.avif",
    fallback: "/images/experiences/luxury-wellness-retreat-spa-experience-1920w.webp",
  },
  {
    title: "Italian Wine Country",
    description: "Private tastings at legendary vineyards with master sommeliers and exclusive cellar experiences.",
    image: "/images/experiences/luxury-italian-vineyard-wine-tasting-experience-1920w.avif",
    fallback: "/images/experiences/luxury-italian-vineyard-wine-tasting-experience-1920w.webp",
  },
  {
    title: "Northern Lights Glamping",
    description:
      "Luxury glass igloos and heated tents for the ultimate aurora viewing experience in pristine wilderness.",
    image: "/images/experiences/luxury-northern-lights-glamping-glass-igloo-1920w.avif",
    fallback: "/images/experiences/luxury-northern-lights-glamping-glass-igloo-1920w.webp",
  },
]

export default function ExperiencesGrid() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [cardsToShow, setCardsToShow] = useState(3)
  const [isClient, setIsClient] = useState(false)
  const [touchStart, setTouchStart] = useState(0)
  const [touchEnd, setTouchEnd] = useState(0)

  // Responsive cards configuration
  const getCardsToShow = () => {
    if (typeof window !== 'undefined') {
      const width = window.innerWidth
      if (width < 640) return 1 // Mobile
      if (width < 1024) return 2 // Tablet
      if (width < 1280) return 3 // Desktop
      return 3 // Large desktop
    }
    return 3
  }

  // Calculate proper transform percentage
  const getTransformPercentage = () => {
    if (cardsToShow === 1) return currentIndex * 100
    if (cardsToShow === 2) return currentIndex * 50
    return currentIndex * (100 / 3)
  }

  const maxIndex = Math.max(0, experiences.length - cardsToShow)

  // Handle client-side mounting and resize
  useEffect(() => {
    setIsClient(true)
    setCardsToShow(getCardsToShow())

    const handleResize = () => {
      const newCardsToShow = getCardsToShow()
      setCardsToShow(newCardsToShow)
      // Reset index if it's beyond the new max
      setCurrentIndex(prev => Math.min(prev, Math.max(0, experiences.length - newCardsToShow)))
    }
    
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  const goToPrevious = () => {
    setCurrentIndex((prev) => Math.max(0, prev - 1))
  }

  const goToNext = () => {
    setCurrentIndex((prev) => Math.min(maxIndex, prev + 1))
  }

  // Touch event handlers for mobile swipe
  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchEnd(0) // Reset touchEnd
    setTouchStart(e.targetTouches[0].clientX)
  }

  const handleTouchMove = (e: React.TouchEvent) => {
    setTouchEnd(e.targetTouches[0].clientX)
  }

  const handleTouchEnd = () => {
    if (!touchStart || !touchEnd) return
    
    const distance = touchStart - touchEnd
    const isLeftSwipe = distance > 50
    const isRightSwipe = distance < -50

    if (isLeftSwipe && currentIndex < maxIndex) {
      goToNext()
    }
    if (isRightSwipe && currentIndex > 0) {
      goToPrevious()
    }
  }

  // Don't render until client-side to avoid hydration issues
  if (!isClient) {
    return (
      <section className="py-20 sm:py-30 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-montserrat text-3xl sm:text-4xl lg:text-[41px] font-bold text-[#3e3e3e] mb-6 leading-[54px]">Signature Experiences</h2>
            <p className="text-lg sm:text-xl text-slate-600 max-w-[375px] sm:max-w-[500px] mx-auto">
              Curated adventures that create lasting memories and exclusive access to the extraordinary
            </p>
          </div>
          <div className="h-96 bg-white/50 rounded-2xl animate-pulse"></div>
        </div>
      </section>
    )
  }

  return (
    <section className="py-20 sm:py-30 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="font-montserrat text-3xl sm:text-4xl lg:text-[41px] font-bold text-[#3e3e3e] mb-6 leading-[54px]">Signature Experiences</h2>
          <p className="text-lg sm:text-xl text-slate-600 max-w-[375px] sm:max-w-[500px] mx-auto">
            Curated adventures that create lasting memories and exclusive access to the extraordinary
          </p>
        </div>

        <div className="relative">
          {/* Navigation Buttons */}
          <button
            onClick={goToPrevious}
            disabled={currentIndex === 0}
            className="absolute left-2 sm:left-0 top-1/2 -translate-y-1/2 -translate-x-2 sm:-translate-x-4 z-20 bg-[#255156] rounded-full p-2 sm:p-3 shadow-lg hover:shadow-xl transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            <ChevronLeft className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
          </button>

          <button
            onClick={goToNext}
            disabled={currentIndex >= maxIndex}
            className="absolute right-2 sm:right-0 top-1/2 -translate-y-1/2 translate-x-2 sm:translate-x-4 z-20 bg-[#255156] rounded-full p-2 sm:p-3 shadow-lg hover:shadow-xl transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            <ChevronRight className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
          </button>

          {/* Mobile Carousel */}
          <div className="block sm:hidden">
            <div className="overflow-hidden mx-4">
              <div className="pb-8">
                <div
                  className="flex transition-transform duration-500 ease-in-out"
                  style={{ 
                    transform: `translateX(-${currentIndex * 100}%)`
                  }}
                  onTouchStart={handleTouchStart}
                  onTouchMove={handleTouchMove}
                  onTouchEnd={handleTouchEnd}
                >
                  {experiences.map((experience, index) => (
                    <div
                      key={index}
                      className="w-full flex-shrink-0"
                    >
                      <div className="bg-white rounded-2xl shadow-xl overflow-hidden group hover:shadow-2xl transition-all duration-300 mx-2">
                        <div className="aspect-[5/3] overflow-hidden">
                          <picture>
                            <source srcSet={experience.image} type="image/avif" />
                            <source srcSet={experience.fallback || experience.webp} type="image/webp" />
                            <img
                              src={experience.fallback || experience.image || "/placeholder.svg"}
                              alt={experience.title}
                              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                              loading="lazy"
                            />
                          </picture>
                        </div>
                        <div className="p-6">
                          <div>
                            <h3 className="font-serif text-lg font-semibold text-slate-900 mb-3">{experience.title}</h3>
                            <p className="text-sm text-slate-600 leading-relaxed">{experience.description}</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Desktop Carousel */}
          <div className="hidden sm:block">
            <div className="overflow-hidden">
              <div className="pb-8 px-6">
                <div
                  className="flex transition-transform duration-500 ease-in-out"
                  style={{ 
                    transform: `translateX(-${getTransformPercentage()}%)`,
                    gap: '24px',
                    paddingRight: '16px'
                  }}
                >
                  {experiences.map((experience, index) => (
                    <div
                      key={index}
                      className="flex-shrink-0 bg-white rounded-2xl shadow-xl overflow-hidden group hover:shadow-2xl transition-all duration-300"
                      style={{
                        width: cardsToShow === 2 ? 'calc(50% - 12px)' : 'calc(33.333% - 16px)'
                      }}
                    >
                      <div className="aspect-[5/3] overflow-hidden">
                        <picture>
                          <source srcSet={experience.image} type="image/avif" />
                          <source srcSet={experience.fallback || experience.webp} type="image/webp" />
                          <img
                            src={experience.fallback || experience.image || "/placeholder.svg"}
                            alt={experience.title}
                            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                            loading="lazy"
                          />
                        </picture>
                      </div>
                      <div className="p-6 sm:p-8">
                        <div>
                          <h3 className="font-serif text-lg sm:text-xl font-semibold text-slate-900 mb-3">{experience.title}</h3>
                          <p className="text-sm sm:text-base text-slate-600 leading-relaxed">{experience.description}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Carousel Indicators */}
          <div className="flex justify-center space-x-2 mt-6">
            {Array.from({ length: maxIndex + 1 }, (_, i) => (
              <button
                key={i}
                onClick={() => setCurrentIndex(i)}
                className={`w-2 h-2 rounded-full transition-all duration-200 ${
                  i === currentIndex 
                    ? 'bg-[#255156] w-6' 
                    : 'bg-slate-300 hover:bg-slate-400'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
