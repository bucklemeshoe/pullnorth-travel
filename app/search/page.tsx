import { Suspense } from "react"
import SearchResults from "@/components/SearchResults"

export default function SearchPage() {
  return (
    <div className="min-h-screen bg-slate-50 py-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8">
          <h1 className="font-serif text-4xl font-bold text-slate-900 mb-4">Your Journey Awaits</h1>
          <p className="text-lg text-slate-600">
            We're crafting your perfect luxury experience based on your preferences.
          </p>
        </div>

        <Suspense fallback={<div className="text-center">Loading your search...</div>}>
          <SearchResults />
        </Suspense>
      </div>
    </div>
  )
}
