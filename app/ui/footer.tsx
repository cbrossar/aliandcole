"use client";

import Image from "next/image";
import { FadeInOnScroll } from "../components/FadeInOnScroll";

export default function Footer() {
  return (
    <div className="w-full py-1 md:py-1.5 lg:py-2 relative">
      <Image
        src="/images/light-tulip-background.png"
        alt="Light tulip background"
        fill
        className="object-cover"
        priority
      />
      <div className="max-w-7xl mx-auto px-6 md:px-8 lg:px-12 text-center relative z-10">
        <FadeInOnScroll direction="up">
          <h1 className="text-2xl md:text-3xl lg:text-4xl text-white leading-tight" style={{ fontFamily: 'Palace Script MT, cursive' }}>
            Ali and Cole Brossart
          </h1>
          <p className="text-white text-lg md:text-xl lg:text-2xl" style={{ fontFamily: 'Palace Script MT, cursive' }}>
            06.06.26
          </p>
          <div className="flex justify-center">
            <Image
              src="/C-and-A.png"
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
