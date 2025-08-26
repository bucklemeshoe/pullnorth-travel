export default function InboundSection() {
  return (
    <section className="py-30 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-20 items-center">
          <div className="space-y-8">
            <div>
              <h2 className="font-montserrat text-3xl sm:text-4xl lg:text-[41px] font-bold text-[#3e3e3e] mb-6 leading-[54px]">
                Inbound VIP to<br />South Africa
              </h2>
              <p className="font-karla text-lg sm:text-xl text-[#3e3e3e]/80 mb-8 sm:mb-10 leading-relaxed">
                Discover the rainbow nation through our insider lens, with exclusive access to South Africa's most
                treasured experiences and hidden gems.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8">
              <div className="space-y-4">
                <div className="flex items-center space-x-3 group">
                  <div className="w-2 h-2 bg-[#255156] rounded-full flex-shrink-0 group-hover:scale-125 transition-transform duration-200"></div>
                  <h3 className="font-montserrat font-semibold text-[#3e3e3e] text-lg">Big Five Safaris</h3>
                </div>
                <div className="flex items-center space-x-3 group">
                  <div className="w-2 h-2 bg-[#255156] rounded-full flex-shrink-0 group-hover:scale-125 transition-transform duration-200"></div>
                  <h3 className="font-montserrat font-semibold text-[#3e3e3e] text-lg">Exclusive Wine Estates</h3>
                </div>
                <div className="flex items-center space-x-3 group">
                  <div className="w-2 h-2 bg-[#255156] rounded-full flex-shrink-0 group-hover:scale-125 transition-transform duration-200"></div>
                  <h3 className="font-montserrat font-semibold text-[#3e3e3e] text-lg">Garden Route Adventures</h3>
                </div>
              </div>
              <div className="space-y-4">
                <div className="flex items-center space-x-3 group">
                  <div className="w-2 h-2 bg-[#255156] rounded-full flex-shrink-0 group-hover:scale-125 transition-transform duration-200"></div>
                  <h3 className="font-montserrat font-semibold text-[#3e3e3e] text-lg">Private Security Services</h3>
                </div>
                <div className="flex items-center space-x-3 group">
                  <div className="w-2 h-2 bg-[#255156] rounded-full flex-shrink-0 group-hover:scale-125 transition-transform duration-200"></div>
                  <h3 className="font-montserrat font-semibold text-[#3e3e3e] text-lg">Helicopter Transfers</h3>
                </div>
                <div className="flex items-center space-x-3 group">
                  <div className="w-2 h-2 bg-[#255156] rounded-full flex-shrink-0 group-hover:scale-125 transition-transform duration-200"></div>
                  <h3 className="font-montserrat font-semibold text-[#3e3e3e] text-lg">Personal Concierge</h3>
                </div>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
            <div className="space-y-6">
              <div className="group overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300">
                <img
                  src="/images/hero/pexels-chloekalaartist-1004639.jpg"
                  alt="African safari"
                  className="w-full h-64 object-cover rounded-none group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="group overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300">
                <img
                  src="/images/hero/pexels-pixabay-259547.jpg"
                  alt="Wine estate"
                  className="w-full h-64 object-cover rounded-none group-hover:scale-105 transition-transform duration-500"
                />
              </div>
            </div>
            <div className="space-y-6 pt-6 sm:pt-12">
              <div className="group overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300">
                <img
                  src="/images/hero/pexels-taryn-elliott-3889919.jpg"
                  alt="Garden Route"
                  className="w-full h-64 object-cover rounded-none group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="group overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300">
                <img
                  src="/images/hero/pexels-taryn-elliott-3889929.jpg"
                  alt="Cape Town aerial"
                  className="w-full h-64 object-cover rounded-none group-hover:scale-105 transition-transform duration-500"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
