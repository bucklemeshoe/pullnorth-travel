import Image from "next/image"

export default function Footer() {
  return (
    <footer className="bg-[#ffffff] py-30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-8">
          {/* Logo */}
          <div className="flex justify-center">
            <Image
              src="/images/pull-north-logo.webp"
              alt="Pull North Travel"
              width={200}
              height={56}
              className="h-14 w-auto"
            />
          </div>

          {/* Location */}
          <div>
            <h3 className="font-montserrat font-semibold text-[#3e3e3e] mb-4">Location</h3>
            <div className="font-karla text-slate-600 space-y-1">
              <p>36 East Pier Road</p>
              <p>V&A Waterfront</p>
              <p>Cape Town</p>
              <p>8001</p>
            </div>
          </div>

          {/* Opening Hours and Contact */}
          <div>
            <h3 className="font-montserrat font-semibold text-[#3e3e3e] mb-4">Opening Hours</h3>
            <div className="font-karla text-slate-600 space-y-1 mb-6">
              <p>Monday to Friday</p>
              <p>09:00 - 17:00</p>
            </div>
            
            <h3 className="font-montserrat font-semibold text-[#3e3e3e] mb-4">Contact Info</h3>
            <div className="font-karla text-slate-600 space-y-1">
              <p>
                <a 
                  href="tel:+27649039753" 
                  className="underline hover:text-[#255156] transition-colors duration-200"
                >
                  +27 64 903 9753
                </a>
              </p>
              <p>
                <a 
                  href="mailto:team@pullnorth.com" 
                  className="underline hover:text-[#255156] transition-colors duration-200"
                >
                  team@pullnorth.com
                </a>
              </p>
            </div>
          </div>
        </div>

        <div className="mt-8 text-center">
          <p className="font-karla text-base text-[#3e3e3e]">
            Ⓒ 2025 All Rights Are Reserved<br />
            Made with ❤️ by bucklemeshoe
          </p>
        </div>
      </div>
    </footer>
  )
}
