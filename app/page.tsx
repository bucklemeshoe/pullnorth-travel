import Hero from "@/components/Hero"
import FeatureCards from "@/components/FeatureCards"
import ExperiencesGrid from "@/components/ExperiencesGrid"
import SplitSection from "@/components/SplitSection"
import CorporateSection from "@/components/CorporateSection"
import InboundSection from "@/components/InboundSection"
import JourneyLine from "@/components/JourneyLine"
import CtaBanner from "@/components/CtaBanner"
import Footer from "@/components/Footer"

export default function HomePage() {
  return (
    <main className="min-h-screen">
      <div>
        <Hero />
        <FeatureCards />
        <ExperiencesGrid />
        <SplitSection />
        <CorporateSection />
        <InboundSection />
        <CtaBanner />
        <Footer />
      </div>
    </main>
  )
}
