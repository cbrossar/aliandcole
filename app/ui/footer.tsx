"use client";

import Image from "next/image";
import { useState } from "react";
import { FadeInOnScroll } from "../components/FadeInOnScroll";
import CountdownPopup from "../ui/countdown-popup";
// import { Pinyon_Script } from 'next/font/google'

export default function Footer() {
  const [isCountdownOpen, setIsCountdownOpen] = useState(false);
  return (
    <div
      className="w-full py-1 md:py-1.5 lg:py-2 relative border-t-8"
      style={{
        borderTopColor: "#659eb2",
        backgroundImage: "url(/images/white.jpg)",
        backgroundRepeat: "repeat",
      }}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-8 lg:px-12 text-center relative z-10">
        <FadeInOnScroll direction="up">
          {/* <h1 className="text-2xl md:text-3xl lg:text-4xl leading-tight" style={{ fontFamily: pinyonScript.style.fontFamily, color: '#6a6557' }}>
            Ali and Cole Brossart
          </h1>
          <p className="text-lg md:text-xl lg:text-2xl" style={{ fontFamily: pinyonScript.style.fontFamily, color: '#6a6557' }}>
            June 6, 2026
          </p> */}
          <div className="flex justify-center">
            <button
              onClick={() => setIsCountdownOpen(true)}
              className="transition-transform hover:scale-110 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-50 rounded-full p-2"
            >
              <Image
                src="/images/C-and-A.png"
                alt="C and A Logo"
                width={60}
                height={60}
                className="w-12 h-12 md:w-14 md:h-14 lg:w-16 lg:h-16 cursor-pointer"
              />
            </button>
          </div>
        </FadeInOnScroll>
      </div>
      
      {/* Countdown Popup */}
      <CountdownPopup 
        isOpen={isCountdownOpen} 
        onClose={() => setIsCountdownOpen(false)} 
      />
    </div>
  );
}
