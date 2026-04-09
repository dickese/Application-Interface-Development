import React, { useState } from 'react'

const DiscoverDialog = ({ isOpen, onClose, onNext, onSkip }) => {
  const [currentStep, setCurrentStep] = useState(0)
  const totalSteps = 3

  if (!isOpen) return null

  const handleNext = () => {
    if (currentStep < totalSteps - 1) {
      setCurrentStep(currentStep + 1)
    } else {
      onNext()
    }
  }

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-black/50 backdrop-blur-sm"
        onClick={onClose}
      />
      
      {/* Dialog */}
      <div className="relative z-10 w-full max-w-lg bg-white rounded-2xl shadow-2xl mx-4">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 transition-colors"
          aria-label="Close dialog"
        >
          {/* <X className="w-6 h-6" /> */}
        </button>

        {/* Content */}
        <div className="p-8 pt-10">
          {/* Title */}
          <h2 className="text-3xl font-bold text-pink-500 text-center mb-2">
            Discover Chefify
          </h2>
          
          {/* Subtitle */}
          <p className="text-gray-500 text-center text-sm mb-6">
            Easy and delicious cooking instructions right here. Start exploring now!
          </p>

          {/* Image */}
          <div className="rounded-xl overflow-hidden mb-6">
            <img
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-j3Rs9kAk6OaxCODspjfbvQ7CRhJlsy.png"
              alt="Delicious food dishes"
              className="w-full h-56 object-cover object-center"
              crossOrigin="anonymous"
            />
          </div>

          {/* Pagination Dots */}
          <div className="flex justify-center gap-2 mb-6">
            {Array.from({ length: totalSteps }).map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentStep(index)}
                className={`w-2 h-2 rounded-full transition-colors ${
                  index === currentStep 
                    ? "bg-pink-500" 
                    : "bg-gray-300 hover:bg-gray-400"
                }`}
                aria-label={`Go to step ${index + 1}`}
              />
            ))}
          </div>

          {/* Next Button */}
          <button
            onClick={handleNext}
            className="w-full py-3 bg-pink-500 hover:bg-pink-600 text-white font-medium rounded-full transition-colors"
          >
            Next
          </button>

          {/* Skip Link */}
          <button
            onClick={onSkip}
            className="w-full mt-3 text-pink-500 hover:text-pink-600 text-sm font-medium transition-colors"
          >
            Skip
          </button>
        </div>
      </div>
    </div>
  )
}

export default DiscoverDialog


