import { Users, Trophy, Target } from "lucide-react"

const corporateFeatures = [
  {
    icon: Users,
    title: "Executive Retreats",
    description: "Strategic planning sessions in inspiring locations with world-class amenities and privacy.",
  },
  {
    icon: Trophy,
    title: "Top-Performer Getaways",
    description: "Reward excellence with unforgettable experiences that motivate and inspire your best talent.",
  },
  {
    icon: Target,
    title: "Leadership Programs",
    description: "Transformative leadership development in extraordinary settings that foster growth and connection.",
  },
]

export default function CorporateSection() {
  return (
    <section className="py-30 text-white bg-[rgba(37,81,86,1)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="font-montserrat text-[41px] font-bold mb-6">Corporate Incentive Travel</h2>
          <p className="font-karla text-xl text-slate-300 max-w-3xl mx-auto">
            Elevate your team's performance with bespoke corporate experiences that inspire, reward, and strengthen
            professional relationships.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {corporateFeatures.map((feature, index) => (
            <div key={index} className="text-center">
              <div className="w-16 h-16 mx-auto mb-6 bg-white/10 rounded-2xl flex items-center justify-center">
                <feature.icon className="w-8 h-8 text-white" />
              </div>
              <h3 className="font-montserrat text-xl font-semibold mb-4">{feature.title}</h3>
              <p className="font-karla text-slate-300 leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
