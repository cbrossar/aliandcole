"use client";

import Image from "next/image";
import { useState } from "react";
import RsvpPopup from "./ui/rsvp-popup";
import { FadeInOnScroll } from "./components/FadeInOnScroll";
import "./home.css";

export default function Home() {
  const [isRsvpPopupOpen, setIsRsvpPopupOpen] = useState(false);

  const openRsvpPopup = () => {
    setIsRsvpPopupOpen(true);
  };

  const closeRsvpPopup = () => {
    setIsRsvpPopupOpen(false);
  };

  return (
    <>
      <div className="w-full min-h-screen px-6 md:px-8 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-6 gap-1 lg:gap-16 min-h-[80vh]">
          {/* Text content - order-1 on mobile, order-1 on desktop */}
          <div className="flex flex-col justify-start space-y-0 lg:space-y-8 pt-4 pb-0 lg:pt-36 col-span-1 lg:col-span-2 order-1 lg:order-1">
            <FadeInOnScroll direction="left" delay={200}>
              <h1 className="text-5xl md:text-5xl lg:text-6xl xl:text-7xl leading-tight text-[#555555] font-['Alice',serif]">
                Celebrating
                <br />
                Ali & Cole
              </h1>
            </FadeInOnScroll>
          </div>

          {/* Image - order-2 on mobile, order-2 on desktop */}
          <div className="flex justify-center lg:justify-end col-span-1 lg:col-span-4 order-2 lg:order-2">
            <FadeInOnScroll direction="right" delay={400}>
              <div className="relative w-full max-w-sm lg:max-w-4xl xl:max-w-5xl">
                <Image
                  src="/images/home/look-back-edits.JPG"
                  alt="Ali and Cole"
                  width={1000}
                  height={1500}
                  className="w-full h-auto shadow-lg object-cover object-center"
                  priority
                />
              </div>
            </FadeInOnScroll>
          </div>
        </div>
      </div>

      {/* New section with green background */}
      <div
        className="w-full py-24 md:py-32 lg:py-40"
        style={{ backgroundColor: "#8eb0bd" }}
      >
        <div className="max-w-7xl mx-auto px-6 md:px-8 lg:px-12">
          {/* Top section - Flowers image and Wedding announcement */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center mb-16 md:mb-20 lg:mb-24">
            {/* Left side - Flowers image */}
            <FadeInOnScroll direction="left">
              <div className="flex justify-center lg:justify-start">
                <div className="relative w-full max-w-lg lg:max-w-xl xl:max-w-2xl">
                  <Image
                    src="/images/home/schedule-flowers.png"
                    alt="Flowers"
                    width={600}
                    height={600}
                    className="w-full h-auto object-cover"
                  />
                </div>
              </div>
            </FadeInOnScroll>

            {/* Right side - Wedding announcement */}
            <FadeInOnScroll direction="right" delay={200}>
              <div className="flex flex-col space-y-6 text-center lg:text-left">
                <h3 className="text-xl md:text-2xl lg:text-3xl text-white font-['Alice',serif] leading-relaxed">
                  We&apos;re getting married! Join us for a weekend of
                  celebration and love.
                </h3>
                <h1 className="text-5xl md:text-6xl lg:text-7xl xl:text-8xl text-white font-['Alice',serif] leading-tight">
                  06.06.2026
                </h1>
              </div>
            </FadeInOnScroll>
          </div>

          {/* Divider line */}
          <div className="border-t border-white opacity-50 mb-8"></div>

          {/* Weekend Details heading */}
          <div className="mt-24 mb-12 md:mb-16">
            <FadeInOnScroll direction="up">
              <h1 className="text-4xl md:text-5xl lg:text-6xl text-white font-['Alice',serif] text-center">
                Weekend Details
              </h1>
            </FadeInOnScroll>
          </div>

          {/* Schedule image */}
          <div className="flex justify-center">
            <FadeInOnScroll direction="up" delay={200}>
              <div className="relative w-full max-w-4xl">
                <Image
                  src="/images/home/schedule.png"
                  alt="Wedding Schedule"
                  width={800}
                  height={600}
                  className="w-full h-auto object-contain"
                />
              </div>
            </FadeInOnScroll>
          </div>
        </div>
      </div>

      {/* Full-width image section */}
      <div className="w-full">
        <FadeInOnScroll direction="none" duration={1000}>
          <div className="relative w-full h-screen">
            <Image
              src="/images/home/ciragan.avif"
              alt="Ciragan"
              fill
              className="object-cover"
              priority
            />
          </div>
        </FadeInOnScroll>
      </div>

      {/* RSVP section with green background */}
      <div className="w-full py-15" style={{ backgroundColor: "#8eb0bd" }}>
        <div className="max-w-7xl mx-auto px-6 md:px-8 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            {/* Left side - RSVP Flowers image */}
            <FadeInOnScroll direction="left">
              <div className="flex justify-center lg:justify-start">
                <div className="relative w-full max-w-lg lg:max-w-xl xl:max-w-2xl">
                  <Image
                    src="/images/home/rsvp-flowers.png"
                    alt="RSVP Flowers"
                    width={600}
                    height={600}
                    className="w-full h-auto object-cover"
                  />
                </div>
              </div>
            </FadeInOnScroll>

            {/* Right side - RSVP content */}
            <FadeInOnScroll direction="right" delay={200}>
              <div className="flex flex-col space-y-8 text-center lg:text-left">
                <h1 className="text-4xl md:text-5xl lg:text-6xl text-white font-['Alice',serif]">
                  RSVP
                </h1>
                <p className="text-white text-lg md:text-xl leading-relaxed">
                  We can&apos;t wait to celebrate with you! Please let us know
                  if you&apos;ll be joining us for our special weekend.
                </p>
                <div>
                  <button
                    onClick={openRsvpPopup}
                    className="rsvp-button inline-block px-12 py-5 text-lg md:text-xl font-bold rounded-full font-['Almarai'] text-white"
                  >
                    RSVP
                  </button>
                </div>
              </div>
            </FadeInOnScroll>
          </div>
        </div>
      </div>

      {/* RSVP Popup */}
      {isRsvpPopupOpen && <RsvpPopup onClose={closeRsvpPopup} />}
    </>
  );
}
