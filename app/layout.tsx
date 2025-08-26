import type React from "react"
import { Montserrat, Karla } from "next/font/google"
import type { Metadata } from "next"
import "./globals.css"
import Navigation from "@/components/Navigation"

const montserrat = Montserrat({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-montserrat",
  weight: ["400", "500", "600", "700", "800"],
})

const karla = Karla({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-karla",
  weight: ["400", "500", "600", "700"],
})

export const metadata: Metadata = {
  title: "Pull North Travel - Curators of Ultra-Luxury Journeys",
  description:
    "World-class experiences, thoughtfully curated for those who live without compromise. Private aviation, elite villas, designer safaris, and insider access worldwide.",
  icons: {
    icon: '/images/pull-north-travel_favicon.png',
    shortcut: '/images/pull-north-travel_favicon.png',
    apple: '/images/pull-north-travel_favicon.png',
  },
  openGraph: {
    title: "Pull North Travel - Curators of Ultra-Luxury Journeys",
    description: "World-class experiences, thoughtfully curated for those who live without compromise.",
    images: ["/luxury-travel-hero-image.png"],
  },
    generator: 'v0.app'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${montserrat.variable} ${karla.variable} antialiased`}>
      <body className="font-karla bg-background text-foreground">
        <Navigation />
        {children}
      </body>
    </html>
  )
}
