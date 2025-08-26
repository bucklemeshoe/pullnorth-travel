"use client"

import { useState, useEffect } from "react"
import { ChevronLeft, ChevronRight } from "lucide-react"

const experiences = [
  {
    title: "Formula One Tours",
    description:
      "VIP access to the world's most prestigious racing circuits with paddock passes and exclusive hospitality.",
    image: "/formula-1-racing-circuit-luxury-experience.png",
    webp: "/formula-1-racing-circuit-luxury-experience.webp",
  },
  {
    title: "Music & Culture Festivals",
    description:
      "Behind-the-scenes access to world-renowned festivals with artist meet-and-greets and premium accommodations.",
    image: "/images/experiences/luxury-music-festival-vip-experience.webp",
    fallback: "/images/experiences/luxury-music-festival-vip-experience.png",
  },
  {
    title: "Wellness Retreats",
    description: "Transformative wellness journeys at the world's most exclusive spas and healing sanctuaries.",
    image: "/images/experiences/luxury-wellness-retreat-spa-experience.webp",
    fallback: "/images/experiences/luxury-wellness-retreat-spa-experience.png",
  },
  {
    title: "Italian Wine Country",
    description: "Private tastings at legendary vineyards with master sommeliers and exclusive cellar experiences.",
    image: "/images/experiences/luxury-italian-vineyard-wine-tasting-experience.webp",
    fallback: "/images/experiences/luxury-italian-vineyard-wine-tasting-experience.png",
  },
  {
    title: "Northern Lights Glamping",
    description:
      "Luxury glass igloos and heated tents for the ultimate aurora viewing experience in pristine wilderness.",
    image: "/images/experiences/luxury-northern-lights-glamping-glass-igloo.webp",
    fallback: "/images/experiences/luxury-northern-lights-glamping-glass-igloo.png",
  },
]

export default function ExperiencesGrid() {
  const [currentIndex, setCurrentIndex] = useState(0)
  
  // Responsive cards to show
  const getCardsToShow = () => {
    if (typeof window !== 'undefined') {
      if (window.innerWidth < 640) return 1 // Mobile
      if (window.innerWidth < 1024) return 2 // Tablet
      return 3 // Desktop
    }
    return 3 // Default
  }
  
  const [cardsToShow, setCardsToShow] = useState(getCardsToShow())
  const maxIndex = Math.max(0, experiences.length - cardsToShow)

  // Update cards to show on resize
  useEffect(() => {
    const handleResize = () => {
      setCardsToShow(getCardsToShow())
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

  return (
    <section className="py-20 sm:py-30 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="font-montserrat text-3xl sm:text-4xl lg:text-[41px] font-bold text-[#3e3e3e] mb-6 leading-[54px]">Signature Experiences</h2>
          <p className="text-lg sm:text-xl text-slate-600 max-w-3xl mx-auto">
            Curated adventures that create lasting memories<br />
            and exclusive access to the extraordinary
          </p>
        </div>

        <div className="relative">
          {/* Navigation Buttons */}
          <button
            onClick={goToPrevious}
            disabled={currentIndex === 0}
            className="absolute left-2 sm:left-0 top-1/2 -translate-y-1/2 -translate-x-2 sm:-translate-x-4 z-10 bg-[#255156] rounded-[99px] p-2 sm:p-3 shadow-lg hover:shadow-xl transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            <ChevronLeft className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
          </button>

          <button
            onClick={goToNext}
            disabled={currentIndex >= maxIndex}
            className="absolute right-2 sm:right-0 top-1/2 -translate-y-1/2 translate-x-2 sm:translate-x-4 z-10 bg-[#255156] rounded-[99px] p-2 sm:p-3 shadow-lg hover:shadow-xl transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            <ChevronRight className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
          </button>

          {/* Carousel Container */}
          <div className="overflow-hidden w-full pb-5 pl-5 sm:pb-6 sm:pl-6 lg:pb-8 lg:pl-8">
            <div
              className="flex gap-4 sm:gap-6 lg:gap-8 transition-transform duration-500 ease-in-out"
              style={{ 
                transform: `translateX(-${currentIndex * (cardsToShow === 1 ? 100 : cardsToShow === 2 ? 50 : 33.33)}%)` 
              }}
            >
              {experiences.map((experience, index) => (
                <div
                  key={index}
                  className="bg-white rounded-2xl shadow-xl overflow-hidden group hover:shadow-2xl transition-all duration-300 w-full sm:w-80 lg:w-96 flex-shrink-0"
                >
                  <div className="aspect-[5/3] overflow-hidden">
                    <picture>
                      <source srcSet={experience.image} type="image/webp" />
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
    </section>
  )
}
