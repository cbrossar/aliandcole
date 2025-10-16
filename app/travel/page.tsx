"use client";

import Image from "next/image";
import { FadeInOnScroll } from "../components/FadeInOnScroll";

export default function Travel() {
  return (
    <div className="w-full min-h-screen">
      <FadeInOnScroll direction="up" duration={1000}>
        <div className="w-full h-screen md:h-screen px-4 md:px-8">
          <div className="relative w-full h-full">
            {/* Mobile Image */}
            <Image
              src="/images/travel/cole-and-ali-crop-2.jpeg"
              alt="Travel - Cole and Ali"
              fill
              className="object-cover rounded-lg md:hidden"
              priority
            />
            {/* Desktop Image */}
            <Image
              src="/images/travel/cole-and-ali-crop.jpeg"
              alt="Travel - Cole and Ali"
              fill
              className="object-cover rounded-lg hidden md:block"
              priority
            />
            <div className="absolute bottom-4 left-4 md:bottom-8 md:left-8 right-4 md:right-auto">
              <h1 className="text-white text-3xl sm:text-4xl md:text-5xl lg:text-[58px] font-['Alice',serif] leading-tight">
                Travel
              </h1>
            </div>
          </div>
        </div>
      </FadeInOnScroll>

      {/* Main Content Area */}
      <div
        className="flex-1 px-4 sm:px-6 md:px-8 py-8 sm:py-12 md:py-16"
        style={{ backgroundColor: "rgb(248, 245, 239)" }}
      >
        <div className="max-w-6xl mx-auto">
          <h2
            className="text-2xl sm:text-3xl md:text-4xl font-semibold mb-6 sm:mb-8 font-['Alice',serif] text-center"
            style={{ color: "#659eb2" }}
          >
            Where to Stay
          </h2>
          <div className="mb-8 sm:mb-12 md:mb-16">
            <p className="text-center max-w-3xl font-['Alice',serif] mx-auto text-gray-700 text-base sm:text-lg leading-relaxed px-2 sm:px-0">
              We&apos;ve rounded up a few hotel options in Istanbul to make your
              stay easy and enjoyable. All of these are on or near the Bosphorus
              and close to our wedding events, so you&apos;ll be right in the
              heart of the celebration.
            </p>
          </div>

          {/* Hotel Recommendations */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 md:gap-12">
            {/* The Ciragan Palace */}
            <div className="flex flex-col items-center text-center bg-white rounded-xl shadow-sm p-4 sm:p-6 hover:shadow-md transition-shadow duration-300">
              <div className="w-full h-48 sm:h-56 bg-gray-200 rounded-lg mb-4 sm:mb-6 overflow-hidden">
                <img
                  src="/images/travel/kempinski-3.avif"
                  alt="Çırağan Palace Kempinski"
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="text-xl sm:text-2xl font-serif mb-3 sm:mb-4 text-gray-800">
                Çırağan Palace Kempinski
              </h3>
              <p className="text-sm sm:text-sm text-left mb-4 sm:mb-6 text-gray-600 leading-relaxed">
                If you want the full experience, stay where we&apos;re getting
                married! The Çırağan Palace is a former Ottoman palace right on
                the Bosphorus, with stunning views, gardens, and plenty of
                history. We&apos;ll have a special room block here soon!
              </p>
              <p className="text-sm sm:text-sm text-left mb-4 sm:mb-6 text-gray-600 leading-relaxed">
                Please find our room block in the link below!
              </p>
              <a
                href="https://www.kempinski.com/en/booking/select_room?hotelId=3161&clearBookingParams=1&room1Adults=2&startDate=2026-06-04&endDate=2026-06-07&promoCode=ALEX260604"
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 sm:px-8 py-2 sm:py-3 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors bg-white font-medium text-gray-700 inline-block text-sm sm:text-base"
              >
                View
              </a>
            </div>

            {/* The Stay */}
            <div className="flex flex-col items-center text-center bg-white rounded-xl shadow-sm p-4 sm:p-6 hover:shadow-md transition-shadow duration-300">
              <div className="w-full h-48 sm:h-56 bg-gray-200 rounded-lg mb-4 sm:mb-6 overflow-hidden">
                <img
                  src="/images/travel/stay.png"
                  alt="The Stay hotel"
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="text-xl sm:text-2xl font-serif mb-3 sm:mb-4 text-gray-800">
                The Stay
              </h3>
              <p className="text-sm sm:text-sm text-left mb-4 sm:mb-6 text-gray-600 leading-relaxed">
                A smaller, stylish spot with a modern vibe. The Stay is cozy but
                chic, with thoughtful details and a great location for exploring
                the city. Perfect if you&apos;re looking for something more
                laid-back but still polished.
              </p>
              <a
                href="https://www.thestay.com.tr/the-stay-bosphorus-hotel.aspx"
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 sm:px-8 py-2 sm:py-3 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors bg-white font-medium text-gray-700 inline-block text-sm sm:text-base"
              >
                View
              </a>
            </div>

            {/* The Swiss Hotel */}
            <div className="flex flex-col items-center text-center bg-white rounded-xl shadow-sm p-4 sm:p-6 hover:shadow-md transition-shadow duration-300">
              <div className="w-full h-48 sm:h-56 bg-gray-200 rounded-lg mb-4 sm:mb-6 overflow-hidden">
                <img
                  src="/images/travel/swiss.png"
                  alt="The Swiss Hotel"
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="text-xl sm:text-2xl font-serif mb-3 sm:mb-4 text-gray-800">
                Swissôtel The Bosphorus
              </h3>
              <p className="text-sm sm:text-sm text-left mb-4 sm:mb-6 text-gray-600 leading-relaxed">
                A classic favorite in Istanbul — Swissôtel has beautiful
                Bosphorus views, a huge spa, and lots of restaurants. It&apos;s
                a great mix of luxury and convenience, and a wonderful home base
                for the weekend.
              </p>
              <a
                href="https://www.swissotel.com/hotels/istanbul/"
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 sm:px-8 py-2 sm:py-3 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors bg-white font-medium text-gray-700 inline-block text-sm sm:text-base"
              >
                View
              </a>
            </div>
          </div>
        </div>

        {/* How to Get There Section */}
        <div className="mt-16 sm:mt-20 md:mt-24">
          <h2
            className="text-2xl sm:text-3xl md:text-4xl font-semibold mb-6 sm:mb-8 font-['Alice',serif] text-center"
            style={{ color: "#659eb2" }}
          >
            How to Get There
          </h2>
          <div className="mb-8 sm:mb-12 md:mb-16">
            <p className="text-center max-w-3xl font-['Alice',serif] mx-auto text-gray-700 text-base sm:text-lg leading-relaxed px-2 sm:px-0">
              Istanbul is well-connected to major cities around the world.
              Here&apos;s everything you need to know about getting to our
              wedding destination.
            </p>
          </div>

          {/* Flight Icon */}
          <div className="flex justify-center mb-0">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              role="img"
              className="zui-svg-icon"
              width="64px"
              height="64px"
              viewBox="0 0 26 32"
              color="currentColor"
              fill="transparent"
              style={{
                width: "64px",
                height: "64px",
                color: "rgb(96, 91, 72)",
                marginBottom: "24px",
              }}
              aria-labelledby="Airplane Outline15"
            >
              <title id="Airplane Outline15">Airplane Outline</title>
              <path
                d="m13.03 25.609-5.4968 2.9182v-1.9917l2.8485-2.9689v-7.0538l-9.9295 3.8672v-1.9227l9.981-7.2204v-7.4903s0.0019-0.84173 0.4864-1.5667c0.361-0.54007 0.9897-1.0153 2.085-1.0296 0.0085-3.3e-4 0.017-3e-4 0.0254-2.5e-4 0.0085-5e-5 0.017-8e-5 0.0254-8e-5 1.0954 0.01459 1.7241 0.48986 2.0851 1.0299 0.4845 0.72498 0.4864 1.5667 0.4864 1.5667v7.4903l9.981 7.2204v1.9227l-9.9295-3.8672v7.0538l2.8485 2.9689v1.9917l-5.4969-2.9182z"
                clipRule="evenodd"
                fillRule="evenodd"
                stroke="currentColor"
                strokeLinejoin="round"
                strokeWidth=".52147"
              ></path>
            </svg>
          </div>

          {/* Airport Subheader */}
          <div className="text-center mb-6">
            <h3 className="text-2xl sm:text-3xl font-bold text-gray-800 tracking-wide font-['Alice',serif]">
              ISTANBUL AIRPORT (IST)
            </h3>
          </div>

          {/* Airport Information */}
          <div className="mb-8 sm:mb-12 md:mb-16">
            <p className="text-center max-w-3xl font-['Alice',serif] mx-auto text-gray-700 text-base sm:text-lg leading-relaxed px-2 sm:px-0">
              Istanbul has two main airports: Istanbul Airport (IST) on the
              European side and Sabiha Gökçen (SAW) on the Asian side. We
              recommend flying into Istanbul Airport (IST). It&apos;s the
              city&apos;s main international hub, with the widest selection of
              direct flights and the most convenient access to central Istanbul
              and our wedding events. For the best experience, we also suggest
              flying with Turkish Airlines, which offers many nonstop routes to
              IST and is consistently ranked among the world&apos;s top
              airlines.
            </p>
          </div>

          {/* Car Icon */}
          <div className="flex justify-center mb-0">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="64px"
              height="64px"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="0.5"
              strokeLinecap="round"
              strokeLinejoin="round"
              style={{ color: "rgb(96, 91, 72)", marginBottom: "24px" }}
            >
              {/* Car body */}
              <path d="M3 17h18v-3a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v3z" />
              {/* Windshield */}
              <path d="M7 15V9h10v6" />
              {/* Wheels */}
              <circle cx="7" cy="17" r="2" />
              <circle cx="17" cy="17" r="2" />
              {/* Taxi roof sign */}
              <rect x="10" y="6" width="4" height="2" rx="0.5" />
              {/* Taxi sign text lines */}
              <line x1="10.5" y1="6.5" x2="13.5" y2="6.5" />
              <line x1="10.5" y1="7.5" x2="13.5" y2="7.5" />
            </svg>
          </div>

          {/* Airport Subheader */}
          <div className="text-center mb-6">
            <h3 className="text-2xl sm:text-3xl font-bold text-gray-800 tracking-wide font-['Alice',serif]">
              TRANSPORTATION
            </h3>
          </div>

          {/* Transportation Information */}
          <div className="mb-8 sm:mb-12 md:mb-16">
            <p className="text-center max-w-3xl font-['Alice',serif] mx-auto text-gray-700 text-base sm:text-lg leading-relaxed px-2 sm:px-0 mb-4">
              Taxis and ride apps like Uber are both available from Istanbul
              Airport. If you take a taxi, be sure to ask the driver to turn on
              the meter, otherwise they may try to give you a flat tourist price
              that&apos;s much higher. A metered taxi from IST to the Bosphorus
              hotels should typically cost around 800–1,200 TL ($25–40 USD),
              depending on traffic. The ride usually takes 45–60 minutes.
            </p>
            <p className="text-center max-w-3xl font-['Alice',serif] mx-auto text-gray-700 text-base sm:text-lg leading-relaxed px-2 sm:px-0">
              If you would like to set up an airport transfer to the Çırağan
              Palace in advance, please reach out to our contact Gizem at{" "}
              <a
                href="mailto:concierge.ciraganpalace@kempinski.com"
                className="text-blue-600 hover:text-blue-800 underline"
              >
                concierge.ciraganpalace@kempinski.com
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
