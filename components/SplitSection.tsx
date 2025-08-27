export default function SplitSection() {
  return (
    <section className="py-30 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-center">
          <div className="order-2 lg:order-1 relative">
            <img
              src="/images/hero/pexels-melvinwahlin-2405648-1920w.webp"
              alt="Luxury yacht experience"
              className="w-full h-96 lg:h-[500px] object-cover rounded-none shadow-xl"
            />
            <div className="absolute -bottom-4 sm:-bottom-8 -left-4 sm:-left-8">
              <img
                src="/images/badges/pull_north-badge-1920w.webp"
                alt="Pull North Yachting"
                className="w-20 h-20 sm:w-32 sm:h-32 lg:w-40 lg:h-40 object-contain"
              />
            </div>
          </div>

          <div className="order-1 lg:order-2">
            <h2 className="font-montserrat text-3xl sm:text-4xl lg:text-[41px] font-bold text-[#3e3e3e] mb-6 leading-[54px]">Yachtie Lifestyle</h2>
            <p className="font-karla text-lg sm:text-xl text-[#3e3e3e]/70 mb-6 sm:mb-8 leading-relaxed">
              Embrace the freedom of the open seas with our curated maritime experiences, from intimate bareboat
              adventures to fully-crewed luxury expeditions.
            </p>

            <div className="space-y-6">
              <div>
                <h3 className="font-montserrat font-semibold text-[#3e3e3e] mb-2">Bareboat Charters</h3>
                <p className="font-karla text-[#3e3e3e]/70">
                  Captain your own vessel with premium yachts and expert navigation support
                </p>
              </div>

              <div>
                <h3 className="font-montserrat font-semibold text-[#3e3e3e] mb-2">Crewed & Cabin</h3>
                <p className="font-karla text-[#3e3e3e]/70">
                  Full-service luxury with professional crew and gourmet dining experiences
                </p>
              </div>

              <div>
                <h3 className="font-montserrat font-semibold text-[#3e3e3e] mb-2">On-Land Escapes</h3>
                <p className="font-karla text-[#3e3e3e]/70">
                  Seamless transitions from sea to shore with curated coastal experiences
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
