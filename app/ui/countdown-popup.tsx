"use client";

import { useState, useEffect } from "react";
import { X } from "lucide-react";

interface CountdownPopupProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function CountdownPopup({ isOpen, onClose }: CountdownPopupProps) {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    if (!isOpen) return;

    const weddingDate = new Date("2026-06-06T18:00:00").getTime();

    const updateCountdown = () => {
      const now = new Date().getTime();
      const difference = weddingDate - now;

      if (difference > 0) {
        const days = Math.floor(difference / (1000 * 60 * 60 * 24));
        const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((difference % (1000 * 60)) / 1000);

        setTimeLeft({ days, hours, minutes, seconds });
      } else {
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
      }
    };

    updateCountdown();
    const interval = setInterval(updateCountdown, 1000);

    return () => clearInterval(interval);
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div 
      className="fixed inset-0 flex items-center justify-center z-50 p-4"
      onClick={onClose}
    >
      {/* Simple countdown text with background */}
      <div 
        className="bg-yellow-400 rounded-lg shadow-lg px-8 py-6 text-center relative"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close button inside popup */}
        <button
          onClick={onClose}
          className="absolute top-2 right-2 text-gray-500 hover:text-gray-700 transition-colors"
        >
          <X size={20} />
        </button>

        <div className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-serif tracking-wide leading-tight" style={{ color: '#659eb2' }}>
          <div className="block md:inline">
            {timeLeft.days} days {timeLeft.hours} hours
          </div>
          <div className="block md:inline md:ml-2">
            {timeLeft.minutes} minutes {timeLeft.seconds} seconds
          </div>
        </div>
      </div>
    </div>
  );
}
