"use client"

import { useState } from "react"
import { ChevronLeft, ChevronRight } from "lucide-react"

const experiences = [
  {
    title: "Formula One Tours",
    description:
      "VIP access to the world's most prestigious racing circuits with paddock passes and exclusive hospitality.",
    image: "/formula-1-racing-circuit-luxury-experience.png",
  },
  {
    title: "Music & Culture Festivals",
    description:
      "Behind-the-scenes access to world-renowned festivals with artist meet-and-greets and premium accommodations.",
    image: "/luxury-music-festival-vip-experience.png",
  },
  {
    title: "Wellness Retreats",
    description: "Transformative wellness journeys at the world's most exclusive spas and healing sanctuaries.",
    image: "/luxury-wellness-retreat-spa-experience.png",
  },
  {
    title: "Italian Wine Country",
    description: "Private tastings at legendary vineyards with master sommeliers and exclusive cellar experiences.",
    image: "/luxury-italian-vineyard-wine-tasting-experience.png",
  },
  {
    title: "Northern Lights Glamping",
    description:
      "Luxury glass igloos and heated tents for the ultimate aurora viewing experience in pristine wilderness.",
    image: "/luxury-northern-lights-glamping-glass-igloo.png",
  },
]

export default function ExperiencesGrid() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const cardsToShow = 3
  const maxIndex = Math.max(0, experiences.length - cardsToShow)

  const goToPrevious = () => {
    setCurrentIndex((prev) => Math.max(0, prev - 1))
  }

  const goToNext = () => {
    setCurrentIndex((prev) => Math.min(maxIndex, prev + 1))
  }

  return (
    <section className="py-30 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="font-montserrat text-[41px] font-bold text-[#3e3e3e] mb-6">Signature Experiences</h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Curated adventures that create lasting memories<br />
            and exclusive access to the extraordinary
          </p>
        </div>

        <div className="relative">
          {/* Navigation Buttons */}
          <button
            onClick={goToPrevious}
            disabled={currentIndex === 0}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 z-10 bg-[#255156] rounded-[99px] p-3 shadow-lg hover:shadow-xl transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            <ChevronLeft className="w-6 h-6 text-white" />
          </button>

          <button
            onClick={goToNext}
            disabled={currentIndex >= maxIndex}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 z-10 bg-[#255156] rounded-[99px] p-3 shadow-lg hover:shadow-xl transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            <ChevronRight className="w-6 h-6 text-white" />
          </button>

          {/* Carousel Container */}
          <div className="overflow-hidden w-full h-[501px]">
            <div
              className="flex gap-8 transition-transform duration-500 ease-in-out h-[90%]"
              style={{ transform: `translateX(-${currentIndex * (400 + 32)}px)` }}
            >
              {experiences.map((experience, index) => (
                <div
                  key={index}
                  className="bg-white rounded-2xl shadow-xl overflow-hidden group hover:shadow-2xl transition-all duration-300 w-96 flex-shrink-0 h-full"
                >
                  <div className="aspect-[5/3] overflow-hidden">
                    <img
                      src={experience.image || "/placeholder.svg"}
                      alt={experience.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <div className="p-8">
                    <div>
                      <h3 className="font-serif text-xl font-semibold text-slate-900 mb-3">{experience.title}</h3>
                      <p className="text-slate-600 leading-relaxed">{experience.description}</p>
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
