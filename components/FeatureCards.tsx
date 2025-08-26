import { Plane, Home, Camera, Globe } from "lucide-react"

const features = [
  {
    icon: Plane,
    title: "Private Aviation",
    description:
      "Seamless travel with our curated fleet of private jets and helicopters for ultimate convenience and privacy.",
  },
  {
    icon: Home,
    title: "Elite Villas & Lodges",
    description:
      "Handpicked luxury accommodations in the world's most exclusive destinations, from private islands to mountain retreats.",
  },
  {
    icon: Camera,
    title: "Designer African Safaris",
    description:
      "Bespoke wildlife experiences with expert guides, luxury camps, and unparalleled access to Africa's natural wonders.",
  },
  {
    icon: Globe,
    title: "Insider Access Worldwide",
    description:
      "Exclusive entry to private events, Michelin-starred restaurants, and cultural experiences unavailable to the public.",
  },
]

export default function FeatureCards() {
  return (
    <section className="py-30 bg-white relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <img
            src="/images/badges/Screenshot+2025-01-14+at+09.20.23.webp"
            alt="Pull North Travel"
            className="mx-auto mb-6 h-auto -mt-6"
            style={{ width: '32px' }}
          />
          <p className="font-karla text-sm text-slate-500 mb-2 uppercase tracking-wide">Four Foundations</p>
                      <h2 className="font-montserrat text-[41px] font-bold text-[#3e3e3e] mb-6 leading-[54px]">Our Pillars of Excellence</h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="text-center group hover:transform hover:scale-105 transition-all duration-300">
              <div className="w-16 h-16 mx-auto mb-6 rounded-2xl flex items-center justify-center group-hover:bg-slate-800 transition-colors bg-[rgba(37,81,86,1)]">
                <feature.icon className="w-8 h-8 text-white" />
              </div>
              <h3 className="font-montserrat text-xl font-semibold text-[#3e3e3e] mb-4">{feature.title}</h3>
              <p className="font-karla text-slate-600 leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
