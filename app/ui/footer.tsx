"use client";

import { FadeInOnScroll } from "../components/FadeInOnScroll";

export default function Footer() {
  return (
    <div
      className="w-full py-2 md:py-3 lg:py-4"
      style={{ backgroundColor: "rgb(221, 197, 118)" }}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-8 lg:px-12 text-center">
        <FadeInOnScroll direction="up">
          <h1 className="text-5xl md:text-6xl lg:text-7xl text-white font-['Alice',serif] leading-tight mb-4">
            06.06.2026
          </h1>
          <p className="text-white text-base md:text-lg">
            be there or be square. xo!
          </p>
        </FadeInOnScroll>
      </div>
    </div>
  );
}
