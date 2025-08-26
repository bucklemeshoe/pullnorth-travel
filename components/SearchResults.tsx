"use client"

import { useSearchParams } from "next/navigation"
import { format } from "date-fns"

export default function SearchResults() {
  const searchParams = useSearchParams()

  const destination = searchParams.get("destination") || "Not specified"
  const type = searchParams.get("type") || "Not specified"
  const start = searchParams.get("start")
  const end = searchParams.get("end")
  const guests = searchParams.get("guests") || "1"

  const formatDate = (dateString: string | null) => {
    if (!dateString) return "Not specified"
    try {
      return format(new Date(dateString), "MMMM d, yyyy")
    } catch {
      return "Invalid date"
    }
  }

  return (
    <div className="bg-white rounded-2xl shadow-xl p-8 border border-slate-200">
      <h2 className="font-serif text-2xl font-bold text-slate-900 mb-6">Your Search Details</h2>

      <div className="grid md:grid-cols-2 gap-6">
        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-slate-700 mb-1">Destination</label>
            <p className="text-lg text-slate-900">{destination}</p>
          </div>

          <div>
            <label className="block text-sm font-medium text-slate-700 mb-1">Trip Type</label>
            <p className="text-lg text-slate-900">{type}</p>
          </div>
        </div>

        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-slate-700 mb-1">Travel Dates</label>
            <p className="text-lg text-slate-900">
              {formatDate(start)} - {formatDate(end)}
            </p>
          </div>

          <div>
            <label className="block text-sm font-medium text-slate-700 mb-1">Guests</label>
            <p className="text-lg text-slate-900">
              {guests} {Number.parseInt(guests) === 1 ? "guest" : "guests"}
            </p>
          </div>
        </div>
      </div>

      <div className="mt-8 p-6 bg-slate-50 rounded-xl">
        <h3 className="font-serif text-xl font-semibold text-slate-900 mb-2">What's Next?</h3>
        <p className="text-slate-600 mb-4">
          Our luxury travel specialists will review your preferences and craft a bespoke itinerary within 24 hours.
        </p>
        <button className="bg-slate-900 text-white px-6 py-3 rounded-2xl font-medium hover:bg-slate-800 transition-colors">
          Speak with a Specialist
        </button>
      </div>
    </div>
  )
}
