"use client"

import Link from "next/link"
import { useState } from "react"
import { Menu, X } from "lucide-react"
import Image from "next/image"

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false)

  const navItems = [
    { name: "Send Enquiry", href: "#enquiry-form" },
  ]

  return (
    <nav className="relative bg-background/98 backdrop-blur-md border-b border-border/50 premium-shadow">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <a href="https://www.pullnorthyachting.com/" target="_blank" rel="noopener noreferrer" className="flex items-center">
            <Image
              src="/images/pull-north-logo.png"
              alt="Pull North Yachting"
              width={192}
              height={54}
              className="h-12 w-auto"
              priority
            />
          </a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-10">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="font-karla text-black hover:text-accent transition-all duration-300 font-normal text-base leading-6"
              >
                {item.name}
              </Link>
            ))}
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-foreground hover:text-accent transition-colors p-2"
            >
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-4 pb-6 space-y-2 bg-card border-t border-border/30 luxury-gradient">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="font-karla block px-4 py-3 text-black hover:text-accent transition-all duration-300 font-normal text-base leading-6"
                  onClick={() => setIsOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}
