"use client";

import { useEffect, useState } from "react";

interface SuccessPopupProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function SuccessPopup({ isOpen, onClose }: SuccessPopupProps) {
  const [showAnimation, setShowAnimation] = useState(false);

  useEffect(() => {
    if (isOpen) {
      // Small delay to ensure the popup is rendered before starting animation
      const timer = setTimeout(() => {
        setShowAnimation(true);
      }, 100);
      return () => clearTimeout(timer);
    } else {
      setShowAnimation(false);
    }
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-white/20 backdrop-blur-md flex items-center justify-center z-50">
      <div className="bg-white rounded-lg p-8 max-w-md mx-4 shadow-xl">
        {/* Success Icon with Animation */}
        <div className="text-center mb-6">
          <div className="relative inline-block">
            <div
              className={`w-16 h-16 mx-auto rounded-full bg-green-100 flex items-center justify-center transition-all duration-500 ${
                showAnimation ? "scale-100" : "scale-0"
              }`}
            >
              <svg
                className={`w-8 h-8 text-green-600 transition-all duration-700 ${
                  showAnimation ? "scale-100 opacity-100" : "scale-0 opacity-0"
                }`}
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                style={{
                  animation: showAnimation ? "checkmark 0.6s ease-in-out 0.3s both" : "none",
                }}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={3}
                  d="M5 13l4 4L19 7"
                />
              </svg>
            </div>
            {/* Ripple effect */}
            <div
              className={`absolute inset-0 rounded-full border-2 border-green-400 transition-all duration-1000 ${
                showAnimation ? "scale-150 opacity-0" : "scale-100 opacity-100"
              }`}
            />
          </div>
        </div>

        {/* Success Message */}
        <div className="text-center">
          <h3 className="text-xl font-['Alice',serif] text-[#659eb2] mb-4">
            Yaşasın!
          </h3>
          <p className="text-gray-700 font-['Almarai'] leading-relaxed mb-6">
            Your RSVP selections have successfully been recorded. Please feel free to update your selections until March 1st. We hope to see you in Istanbul!
          </p>
          
          {/* Close Button */}
          <button
            onClick={onClose}
            className="bg-[#659eb2] hover:bg-[#7A8A7A] text-white font-['Almarai'] font-medium px-8 py-3 rounded-full transition-colors duration-200 cursor-pointer"
          >
            Close
          </button>
        </div>
      </div>

      {/* CSS Animations */}
      <style jsx>{`
        @keyframes checkmark {
          0% {
            transform: scale(0);
            opacity: 0;
          }
          50% {
            transform: scale(1.2);
            opacity: 1;
          }
          100% {
            transform: scale(1);
            opacity: 1;
          }
        }
      `}</style>
    </div>
  );
}
