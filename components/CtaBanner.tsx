export default function CtaBanner() {
  return (
    <section className="py-30 text-white bg-[rgba(227,222,211,1)]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <img
          src="/images/badges/Screenshot+2025-01-14+at+09.20.23-removebg-preview-1920w.webp"
          alt="Pull North Travel"
          className="mx-auto mb-6 h-auto"
          style={{ width: '32px' }}
        />
        <h2 className="font-montserrat text-3xl sm:text-4xl lg:text-[48px] font-bold mb-6 text-[#3e3e3e] leading-tight sm:leading-[61px]">Where Luxury Meets Latitude</h2>
        <p className="font-karla text-xl md:text-2xl mb-12 leading-relaxed text-[#3e3e3e] max-w-[375px] sm:max-w-none mx-auto">
          Journeys with precision, privacy, and soul.
        </p>

        <a 
          href="#enquiry-form" 
          className="inline-block px-8 py-4 font-semibold text-lg hover:bg-[#1a3a3f] transition-colors shadow-lg rounded-[99px] bg-[#255156] text-white hover:scale-105"
        >
          Request Your Curated Itinerary
        </a>
      </div>
    </section>
  )
}
