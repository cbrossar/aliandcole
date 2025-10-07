"use client";

import Image from "next/image";
import { FadeInOnScroll } from "../components/FadeInOnScroll";
import { Pinyon_Script } from 'next/font/google'

const pinyonScript = Pinyon_Script({ subsets: ['latin'], weight: '400' })


export default function Footer() {
  return (
    <div 
      className="w-full py-1 md:py-1.5 lg:py-2 relative border-t-8" 
      style={{ 
        borderTopColor: '#659eb2',
        backgroundImage: 'url(/images/white.jpg)',
        backgroundRepeat: 'repeat',
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
            <Image
              src="/images/C-and-A.png"
              alt="C and A Logo"
              width={60}
              height={60}
              className="w-12 h-12 md:w-14 md:h-14 lg:w-16 lg:h-16"
            />
          </div>
        </FadeInOnScroll>
      </div>
    </div>
  );
}
