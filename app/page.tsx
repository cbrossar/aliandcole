"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import RsvpPopup from "./ui/rsvp-popup";
import { FadeInOnScroll } from "./components/FadeInOnScroll";
import { TypewriterText } from "./components/TypewriterText";
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
      <div className="w-full min-h-screen px-6 md:px-8 lg:px-12 pt-10 md:pt-16 lg:pt-24 pb-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 min-h-[80vh]">
          <div className="flex flex-col justify-start pt-4 lg:pt-20 col-span-1 lg:col-span-5 order-1">
            <FadeInOnScroll direction="left" delay={200}>
              <h1 className="text-4xl sm:text-5xl md:text-5xl lg:text-6xl xl:text-7xl leading-tight text-[#659eb2] font-['Alice',serif]">
                <TypewriterText
                  text={"Thank you for celebrating\nAli & Cole"}
                  speed={80}
                  delay={500}
                  className="block whitespace-pre-line"
                />
              </h1>
            </FadeInOnScroll>
          </div>

          <div className="flex justify-center lg:justify-end col-span-1 lg:col-span-7 order-2">
            <FadeInOnScroll direction="right" delay={400} className="w-full flex justify-center lg:justify-end">
              <div className="w-full max-w-[360px] md:max-w-[420px] lg:max-w-[480px]">
                <div className="relative aspect-[720/962] w-full overflow-hidden shadow-lg bg-black">
                  <video
                    src="/videos/teaser.mp4"
                    autoPlay
                    muted
                    loop
                    playsInline
                    controls
                    className="absolute inset-0 h-full w-full object-cover"
                    aria-label="Ali and Cole wedding teaser"
                  />
                </div>
                <div className="mt-6 text-center lg:text-right">
                  <Link
                    href="/photos"
                    className="text-[#659eb2] text-lg md:text-xl font-['Alice',serif] underline underline-offset-4 hover:opacity-80 transition-opacity"
                  >
                    More photos
                  </Link>
                </div>
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

          {/* Friday boat shuttles */}
          <div className="flex justify-center mt-12 md:mt-16">
            <FadeInOnScroll direction="up" delay={400}>
              <div className="text-white text-base md:text-lg lg:text-xl font-['Tangerine',cursive] text-center leading-relaxed italic tracking-wide">
                <p>Friday Welcome Party Boat Shuttles:</p>
                <p>6:30 – 7:00 PM depart from Çırağan docks</p>
                <p>10:15 – 11:00 PM head back to Çırağan</p>
              </div>
            </FadeInOnScroll>
          </div>

          {/* Pool message */}
          <div className="flex justify-center mt-8 md:mt-10">
            <FadeInOnScroll direction="up" delay={500}>
              <p className="text-white text-base md:text-lg lg:text-xl font-['Tangerine',cursive] text-center leading-relaxed italic tracking-wide whitespace-nowrap">
                Join us poolside at Çırağan on Sunday, we&apos;ll be there all
                day!
              </p>
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
