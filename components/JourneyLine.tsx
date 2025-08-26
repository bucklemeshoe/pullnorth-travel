export default function JourneyLine() {
  return (
    <div className="fixed left-1/2 transform -translate-x-1/2 w-1 h-screen z-0 pointer-events-none">
      {/* Full height journey line */}
      <svg
        className="absolute inset-0 w-full h-full"
        viewBox="0 0 4 1000"
        preserveAspectRatio="none"
      >
        {/* Vertical journey path starting from form bottom */}
        <path
          d="M 2 200 Q 2 250, 2 300 Q 2 350, 2 400 Q 2 450, 2 500 Q 2 550, 2 600 Q 2 650, 2 700 Q 2 750, 2 800 Q 2 850, 2 900 Q 2 950, 2 980"
          stroke="#ADCDFB"
          strokeWidth="2"
          fill="none"
          strokeLinecap="round"
          opacity="0.3"
        />
        
        {/* Journey markers at key points */}
        <circle cx="2" cy="200" r="2" fill="#ADCDFB" opacity="0.5" />
        <circle cx="2" cy="400" r="2" fill="#ADCDFB" opacity="0.5" />
        <circle cx="2" cy="600" r="2" fill="#ADCDFB" opacity="0.5" />
        <circle cx="2" cy="800" r="2" fill="#ADCDFB" opacity="0.5" />
        <circle cx="2" cy="980" r="2" fill="#ADCDFB" opacity="0.5" />
      </svg>
    </div>
  )
} 