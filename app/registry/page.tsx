"use client";
import { FadeInOnScroll } from "../components/FadeInOnScroll";
import Image from "next/image";

export default function Registry() {
  return (
    <div className="w-full min-h-screen mb-16">
      <FadeInOnScroll direction="up" duration={1000}>
        <div className="w-full h-screen md:h-screen px-4 md:px-8">
          <div className="relative w-full h-full">
            <Image
              src="/images/registry/boot.JPG"
              alt="Registry - wedding boots"
              fill
              className="object-cover rounded-lg"
              priority
            />
            <div className="absolute bottom-4 left-4 md:bottom-8 md:left-8 right-4 md:right-auto">
              <h1 className="text-white text-3xl sm:text-4xl md:text-5xl lg:text-[58px] font-['Alice',serif] leading-tight">
                Registry
              </h1>
            </div>
          </div>
        </div>
      </FadeInOnScroll>

      <div className="text-center max-w-2xl mx-auto px-8 py-12 mt-16 bg-white/90 backdrop-blur-sm rounded-2xl shadow-lg">
        <p className="text-lg mb-4 font-['Alice',serif]">
          Your presence on our special day is the greatest present we could ask
          for.
        </p>
        <p className="text-lg mb-6 font-['Alice',serif]">
          If you wish to celebrate with a gift, our registry is below.
        </p>
        <p className="text-lg font-medium font-['Alice',serif] mb-8">
          xoxo Ali & Cole
        </p>
        <a
          href="https://www.zola.com/wedding/coleandali2026/registry"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block bg-[#659eb2] text-white px-8 py-3 rounded-lg font-['Alice',serif] text-lg hover:bg-[#7a8a7a] transition-colors duration-200"
        >
          View Our Registry
        </a>
      </div>
    </div>
  );
}
