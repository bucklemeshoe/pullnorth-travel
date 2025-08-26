"use client"

import type React from "react"
import { useState } from "react"

const tripTypes = [
  "Ultra-Luxury Leisure",
  "Yachtie Lifestyle",
  "Corporate Incentive",
  "Inbound VIP South Africa",
  "Signature Experiences",
]

export default function SearchCard() {
  const [formData, setFormData] = useState({
    destination: "",
    type: "",
    startDate: "",
    endDate: "",
    guests: 2,
  })
  const [errors, setErrors] = useState<Record<string, string>>({})
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle")

  const validateForm = () => {
    const newErrors: Record<string, string> = {}

    if (!formData.destination.trim()) {
      newErrors.destination = "Destination is required"
    }

    if (!formData.type) {
      newErrors.type = "Please select a trip type"
    }

    if (!formData.startDate) {
      newErrors.startDate = "Start date is required"
    }

    if (!formData.endDate) {
      newErrors.endDate = "End date is required"
    }

    if (formData.startDate && formData.endDate && new Date(formData.endDate) < new Date(formData.startDate)) {
      newErrors.endDate = "End date must be after start date"
    }

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    if (validateForm()) {
      setIsSubmitting(true)
      setSubmitStatus("idle")

      try {
        // Submit to our API route
        const response = await fetch('/api/enquire', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            destination: formData.destination,
            tripType: formData.type,
            startDate: formData.startDate,
            endDate: formData.endDate,
            guests: formData.guests,
            submittedAt: new Date().toISOString(),
          }),
        })

        if (response.ok) {
          setSubmitStatus("success")
          // Reset form after successful submission
          setFormData({
            destination: "",
            type: "",
            startDate: "",
            endDate: "",
            guests: 2,
          })
          // Reset success message after 5 seconds
          setTimeout(() => setSubmitStatus("idle"), 5000)
        } else {
          setSubmitStatus("error")
        }
      } catch (error) {
        console.error('Form submission error:', error)
        setSubmitStatus("error")
      } finally {
        setIsSubmitting(false)
      }
    }
  }

  return (
    <div id="enquiry-form" className="bg-white/95 backdrop-blur-md rounded-3xl shadow-2xl p-8 max-w-lg mx-auto border border-white/20 relative z-[100]">
      <form 
        name="enquiry-form" 
        method="POST" 
        data-netlify="true"
        data-netlify-honeypot="bot-field"
        onSubmit={handleSubmit}
      >
        {/* Netlify form fields */}
        <input type="hidden" name="form-name" value="enquiry-form" />
        <div hidden>
          <input name="bot-field" />
        </div>
        <div className="space-y-6">
          {/* Destination - Full Width */}
          <div>
            <label className="block text-sm font-semibold text-[#3e3e3e] mb-3 text-left tracking-wide uppercase">
              Destination
            </label>
            <input
              type="text"
              name="destination"
              value={formData.destination}
              onChange={(e) => setFormData({ ...formData, destination: e.target.value })}
              placeholder="Where would you like to go?"
              className="w-full px-5 py-4 rounded-xl bg-white/80 border border-gray-200 text-gray-800 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-[#255156] focus:border-[#255156] transition-all duration-300"
              disabled={isSubmitting}
              required
            />
            {errors.destination && <p className="mt-2 text-sm text-red-600 font-medium">{errors.destination}</p>}
          </div>

          {/* Trip Type - Full Width */}
          <div>
            <label className="block text-sm font-semibold text-[#3e3e3e] mb-3 text-left tracking-wide uppercase">
              Trip Type
            </label>
            <select
              name="tripType"
              value={formData.type}
              onChange={(e) => setFormData({ ...formData, type: e.target.value })}
              className="w-full px-5 py-4 rounded-xl bg-white/80 border border-gray-200 text-gray-800 focus:outline-none focus:ring-2 focus:ring-[#255156] focus:border-[#255156] transition-all duration-300"
              disabled={isSubmitting}
              required
            >
              <option value="" className="text-muted-foreground">
                Select trip type
              </option>
              {tripTypes.map((type) => (
                <option key={type} value={type} className="text-foreground">
                  {type}
                </option>
              ))}
            </select>
            {errors.type && <p className="mt-2 text-sm text-red-600 font-medium">{errors.type}</p>}
          </div>

          {/* Start and End Date - Two Columns */}
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-semibold text-[#3e3e3e] mb-3 text-left tracking-wide uppercase">
                Start
              </label>
              <input
                type="date"
                name="startDate"
                value={formData.startDate}
                onChange={(e) => setFormData({ ...formData, startDate: e.target.value })}
                className="w-full px-5 py-4 rounded-xl bg-white/80 border border-gray-200 text-gray-800 focus:outline-none focus:ring-2 focus:ring-[#255156] focus:border-[#255156] transition-all duration-300"
                disabled={isSubmitting}
                required
              />
              {errors.startDate && <p className="mt-2 text-sm text-red-600 font-medium">{errors.startDate}</p>}
            </div>

            <div>
              <label className="block text-sm font-semibold text-[#3e3e3e] mb-3 text-left tracking-wide uppercase">
                End
              </label>
              <input
                type="date"
                name="endDate"
                value={formData.endDate}
                onChange={(e) => setFormData({ ...formData, endDate: e.target.value })}
                className="w-full px-5 py-4 rounded-xl bg-white/80 border border-gray-200 text-gray-800 focus:outline-none focus:ring-2 focus:ring-[#255156] focus:border-[#255156] transition-all duration-300"
                disabled={isSubmitting}
                required
              />
              {errors.endDate && <p className="mt-2 text-sm text-red-600 font-medium">{errors.endDate}</p>}
            </div>
          </div>

          {/* Guests - Full Width */}
          <div>
            <label className="block text-sm font-semibold text-[#3e3e3e] mb-3 text-left tracking-wide uppercase">
              Guests
            </label>
            <input
              type="hidden"
              name="guests"
              value={formData.guests}
            />
            <div className="flex items-center justify-center space-x-4 bg-white/80 border border-gray-200 rounded-xl px-5 py-4">
              <button
                type="button"
                onClick={() => setFormData({ ...formData, guests: Math.max(1, formData.guests - 1) })}
                className="w-10 h-10 rounded-[99px] bg-[#255156] text-white hover:bg-[#1a3a3f] transition-all duration-300 flex items-center justify-center text-lg font-semibold hover:scale-110 disabled:opacity-50 disabled:cursor-not-allowed"
                disabled={isSubmitting}
              >
                −
              </button>
              <span className="text-foreground font-semibold text-xl w-8 text-center">{formData.guests}</span>
              <button
                type="button"
                onClick={() => setFormData({ ...formData, guests: formData.guests + 1 })}
                className="w-10 h-10 rounded-[99px] bg-[#255156] text-white hover:bg-[#1a3a3f] transition-all duration-300 flex items-center justify-center text-lg font-semibold hover:scale-110 disabled:opacity-50 disabled:cursor-not-allowed"
                disabled={isSubmitting}
              >
                +
              </button>
            </div>
          </div>

          {/* Status Messages */}
          {submitStatus === "success" && (
            <div className="p-4 bg-green-50 border border-green-200 rounded-xl">
              <p className="text-green-800 font-medium text-center">
                Thank you! Your enquiry has been submitted successfully. We'll be in touch soon.
              </p>
            </div>
          )}

          {submitStatus === "error" && (
            <div className="p-4 bg-red-50 border border-red-200 rounded-xl">
              <p className="text-red-800 font-medium text-center">
                Sorry, there was an error submitting your enquiry. Please try again or contact us directly.
              </p>
            </div>
          )}

          {/* Submit Button */}
          <div className="pt-4 relative z-[100]">
            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full bg-[#255156] text-white px-8 py-4 font-semibold text-lg hover:bg-[#1a3a3f] transition-all duration-300 premium-shadow rounded-[99px] tracking-wide hover:scale-105 relative z-[100] disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100"
            >
              {isSubmitting ? "Submitting..." : "Send Enquiry"}
            </button>
          </div>
        </div>
      </form>
    </div>
  )
}
