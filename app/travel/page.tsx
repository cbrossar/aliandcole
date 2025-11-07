"use client";

import Image from "next/image";
import { FadeInOnScroll } from "../components/FadeInOnScroll";
import { BiWalk } from "react-icons/bi";
import { LiaCarSideSolid } from "react-icons/lia";
import { FaMapMarkerAlt } from "react-icons/fa";
import { useState } from "react";

export default function Travel() {
  const [showBadBunnyGif, setShowBadBunnyGif] = useState(false);
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
            <div className="flex flex-col items-center text-center bg-white rounded-xl shadow-sm p-4 sm:p-6 hover:shadow-md transition-shadow duration-300">
              {/* The Ciragan Palace */}
              <div className="w-full h-48 sm:h-56 bg-gray-200 rounded-lg mb-4 sm:mb-6 overflow-hidden">
                <img
                  src="/images/travel/kempinski-3.avif"
                  alt="Çırağan Palace Kempinski"
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="text-xl sm:text-2xl font-serif mb-2 text-gray-800">
                Çırağan Palace Kempinski
              </h3>
              <div className="flex items-center justify-center gap-1 mb-3 sm:mb-4 text-sm font-normal text-gray-600">
                <FaMapMarkerAlt />
                <span>Venue</span>
              </div>
              <p className="text-sm sm:text-sm text-left mb-4 sm:mb-6 text-gray-600 leading-relaxed">
                If you want the full experience, stay where we&apos;re getting
                married! The Çırağan Palace is a former Ottoman palace right on
                the Bosphorus, with stunning views, gardens, and plenty of
                history.
              </p>
              <p className="text-sm sm:text-sm text-left mb-4 sm:mb-6 text-gray-600 leading-relaxed">
                Please find our room block in the link below! If you are
                interested in additional days, please let us know.
              </p>
              <a
                href="https://www.kempinski.com/en/booking/select_room?hotelId=3161&clearBookingParams=1&room1Adults=2&startDate=2026-06-04&endDate=2026-06-07&promoCode=ALEX260604"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-auto px-6 sm:px-8 py-2 sm:py-3 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors bg-white font-medium text-gray-700 inline-block text-sm sm:text-base"
              >
                View
              </a>
            </div>

            {/* The Radisson Blu Bosphorus Hotel */}
            <div className="flex flex-col items-center text-center bg-white rounded-xl shadow-sm p-4 sm:p-6 hover:shadow-md transition-shadow duration-300">
              <div className="w-full h-48 sm:h-56 bg-gray-200 rounded-lg mb-4 sm:mb-6 overflow-hidden">
                <img
                  src="/images/travel/radisson-blu.png"
                  alt="The Radisson Blu Bosphorus Hotel"
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="text-xl sm:text-2xl font-serif mb-2 text-gray-800">
                The Radisson Blu Bosphorus Hotel
              </h3>
              <div className="flex items-center justify-center gap-1 mb-3 sm:mb-4 text-sm font-normal text-gray-600">
                <BiWalk />
                <span>10 min walk</span>
              </div>
              <p className="text-sm sm:text-sm text-left mb-4 sm:mb-6 text-gray-600 leading-relaxed">
                With a prime location right next to the Çırağan Palace and on
                the Bosphorus, this modern hotel offers unbeatable convenience
                for wedding guests. The Radisson Blu Bosphorus Hotel features a
                large variety of room options at affordable prices, plus a spa
                and restaurant. This is a great option for most guests.
              </p>
              <a
                href="https://www.radissonhotels.com/en-us/hotels/radisson-blu-istanbul-bosphorus?facilitatorId=RHGSEM&cid=a%3Aps+b%3Aggl+c%3Aemea+i%3Abrand+e%3Ardb+d%3Aeerut+r%3Abrt+f%3Aen-US+g%3Aho+h%3ATRISTBOS+v%3Acf&gclsrc=aw.ds&gad_source=1&gad_campaignid=21322992130&gbraid=0AAAAADtKuEU1LoiGOx7vhcnktrlPSQ3cw&gclid=CjwKCAiAzrbIBhA3EiwAUBaUdb6VQFpGuY2dX-dyk7WGCZhMRbppM62AF4YLsWUKQK04r03qWPNyvxoCiRQQAvD_BwE"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-auto px-6 sm:px-8 py-2 sm:py-3 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors bg-white font-medium text-gray-700 inline-block text-sm sm:text-base"
              >
                View
              </a>
            </div>

            {/* Conrad Istanbul Bosphorus */}
            <div className="flex flex-col items-center text-center bg-white rounded-xl shadow-sm p-4 sm:p-6 hover:shadow-md transition-shadow duration-300">
              <div className="w-full h-48 sm:h-56 bg-gray-200 rounded-lg mb-4 sm:mb-6 overflow-hidden">
                <img
                  src="/images/travel/conrad.png"
                  alt="Conrad Istanbul Bosphorus"
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="text-xl sm:text-2xl font-serif mb-2 text-gray-800">
                Conrad Istanbul Bosphorus
              </h3>
              <div className="flex items-center justify-center gap-1 mb-3 sm:mb-4 text-sm font-normal text-gray-600">
                <BiWalk />
                <span>20 min walk</span>
              </div>
              <p className="text-sm sm:text-sm text-left mb-4 sm:mb-6 text-gray-600 leading-relaxed">
                Conveniently located close to the Çırağan Palace, this Hilton
                property offers stunning panoramic views of Istanbul and the
                Bosphorus from its hilltop setting. The Conrad Istanbul Bosphorus
                features a spa, indoor and outdoor pools, and a tennis club. Note
                that while it&apos;s very close to the palace, it&apos;s about a
                20 minute walk up a hill.
              </p>
              <a
                href="https://www.hilton.com/en/book/reservation/rooms/?ctyhocn=ISTHC&arrivalDate=2026-06-04&departureDate=2026-06-07&room1NumAdults=2&displayCurrency=USD&WT.mc_id=zINDA0EMEA1CI2OLX3ggl4ACBI_Advance_Traditional_Metasearch5ISTHCCI6MULTIBR7ML8i150895_122953832_9083689&utm_source=intlmeta&utm_medium=intlmeta&utm_campaign=googlehpa&gclid=CjwKCAiAzrbIBhA3EiwAUBaUdQSvHTEk4VQuZYFeMmu8f6VlqXzVx954_lOD6-5C9mHI-f8Ox9n6dhoCwjAQAvD_BwE&dsclid=74022629279281152&gad_source=7"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-auto px-6 sm:px-8 py-2 sm:py-3 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors bg-white font-medium text-gray-700 inline-block text-sm sm:text-base"
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
              <h3 className="text-xl sm:text-2xl font-serif mb-2 text-gray-800">
                Swissôtel The Bosphorus
              </h3>
              <div className="flex items-center justify-center gap-1 mb-3 sm:mb-4 text-sm font-normal text-gray-600">
                <LiaCarSideSolid />
                <span>15 min drive</span>
              </div>
              <p className="text-sm sm:text-sm text-left mb-4 sm:mb-6 text-gray-600 leading-relaxed">
                A classic favorite in Istanbul — Swissôtel has beautiful
                Bosphorus views, a huge spa, and lots of restaurants. It&apos;s
                a great mix of luxury and convenience, and a wonderful home base
                for the weekend. It will be a 15 minute drive to the Çırağan
                Palace.
              </p>
              <a
                href="https://www.swissotel.com/hotels/istanbul/"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-auto px-6 sm:px-8 py-2 sm:py-3 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors bg-white font-medium text-gray-700 inline-block text-sm sm:text-base"
              >
                View
              </a>
            </div>
            
            {/* Çırağan Hotel Bosphorus */}
            <div className="flex flex-col items-center text-center bg-white rounded-xl shadow-sm p-4 sm:p-6 hover:shadow-md transition-shadow duration-300">
              <div className="w-full h-48 sm:h-56 bg-gray-200 rounded-lg mb-4 sm:mb-6 overflow-hidden">
                <img
                  src="/images/travel/ciragan-hotel.png"
                  alt="Çırağan Hotel Bosphorus"
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="text-xl sm:text-2xl font-serif mb-2 text-gray-800">
                Çırağan Hotel Bosphorus
              </h3>
              <div className="flex items-center justify-center gap-1 mb-3 sm:mb-4 text-sm font-normal text-gray-600">
                <BiWalk />
                <span>5 min walk</span>
              </div>
              <p className="text-sm sm:text-sm text-left mb-4 sm:mb-6 text-gray-600 leading-relaxed">
                Located literally right behind the Çırağan Palace Kempinski, the
                Çırağan Hotel Bosphorus offers great convenience for wedding
                guests. This new, modern hotel is budget-friendly and just a short
                5 minute walk up a hill from the palace.
              </p>
              <a
                href="https://ciraganhotel.com/en/"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-auto px-6 sm:px-8 py-2 sm:py-3 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors bg-white font-medium text-gray-700 inline-block text-sm sm:text-base"
              >
                View
              </a>
            </div>
            
            {/* Sanasaryan Han Hotel, Old City */}
            <div className="flex flex-col items-center text-center bg-white rounded-xl shadow-sm p-4 sm:p-6 hover:shadow-md transition-shadow duration-300">
              <div className="w-full h-48 sm:h-56 bg-gray-200 rounded-lg mb-4 sm:mb-6 overflow-hidden">
                <img
                  src="/images/travel/sanasaryan.jpg"
                  alt="Sanasaryan Han Hotel, Old City"
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="text-xl sm:text-2xl font-serif mb-2 text-gray-800">
                Sanasaryan Han Hotel, Old City
              </h3>
              <div className="flex items-center justify-center gap-1 mb-3 sm:mb-4 text-sm font-normal text-gray-600">
                <LiaCarSideSolid />
                <span>30 min drive</span>
              </div>
              <p className="text-sm sm:text-sm text-left mb-4 sm:mb-6 text-gray-600 leading-relaxed">
                If you&apos;re looking for a luxurious stay in the old city near
                tourist attractions like the Hagia Sophia, Topkapi Palace, and
                Cisterns, this Marriott property is a wonderful choice. The
                Sanasaryan Han Hotel offers exceptional comfort and elegance. Please allow at least 30 minutes to drive to the Çırağan Palace from the hotel.
              </p>
              <a
                href="https://www.marriott.com/en-us/hotels/istlc-sanasaryan-han-a-luxury-collection-hotel-istanbul/overview/"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-auto px-6 sm:px-8 py-2 sm:py-3 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors bg-white font-medium text-gray-700 inline-block text-sm sm:text-base"
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
              className="zui-svg-icon airplane-icon cursor-pointer hover:scale-110 transition-transform duration-200"
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
              onClick={() => {
                const icon = document.querySelector(".airplane-icon");
                if (icon) {
                  icon.classList.add("fly-away");
                  setTimeout(() => {
                    icon.classList.remove("fly-away");
                  }, 4000);
                }
              }}
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

          {/* CSS Animation Styles */}
          <style jsx>{`
            @keyframes flyAway {
              0% {
                transform: translateX(0) translateY(0) rotate(0deg) scale(1);
                opacity: 1;
              }
              15% {
                transform: translateX(50px) translateY(-20px) rotate(15deg)
                  scale(0.8);
                opacity: 0.9;
              }
              30% {
                transform: translateX(150px) translateY(-40px) rotate(30deg)
                  scale(0.6);
                opacity: 0.7;
              }
              45% {
                transform: translateX(300px) translateY(-60px) rotate(45deg)
                  scale(0.4);
                opacity: 0.5;
              }
              60% {
                transform: translateX(500px) translateY(-80px) rotate(60deg)
                  scale(0.2);
                opacity: 0.3;
              }
              75% {
                transform: translateX(700px) translateY(-100px) rotate(75deg)
                  scale(0.1);
                opacity: 0.1;
              }
              90% {
                transform: translateX(900px) translateY(-120px) rotate(90deg)
                  scale(0.05);
                opacity: 0.05;
              }
              100% {
                transform: translateX(1000px) translateY(-140px) rotate(90deg)
                  scale(0.01);
                opacity: 0;
              }
            }

            @keyframes flyBack {
              0% {
                transform: translateX(1000px) translateY(-140px) rotate(90deg)
                  scale(0.01);
                opacity: 0;
              }
              5% {
                transform: translateX(900px) translateY(-170px) rotate(90deg)
                  scale(0.03);
                opacity: 0.03;
              }
              10% {
                transform: translateX(800px) translateY(-200px) rotate(90deg)
                  scale(0.05);
                opacity: 0.05;
              }
              15% {
                transform: translateX(700px) translateY(-230px) rotate(90deg)
                  scale(0.07);
                opacity: 0.07;
              }
              20% {
                transform: translateX(500px) translateY(-300px) rotate(90deg)
                  scale(0.1);
                opacity: 0.1;
              }
              25% {
                transform: translateX(350px) translateY(-325px) rotate(90deg)
                  scale(0.15);
                opacity: 0.15;
              }
              30% {
                transform: translateX(200px) translateY(-350px) rotate(90deg)
                  scale(0.2);
                opacity: 0.2;
              }
              35% {
                transform: translateX(50px) translateY(-325px) rotate(90deg)
                  scale(0.25);
                opacity: 0.25;
              }
              40% {
                transform: translateX(-100px) translateY(-300px) rotate(90deg)
                  scale(0.3);
                opacity: 0.3;
              }
              45% {
                transform: translateX(-200px) translateY(-250px) rotate(90deg)
                  scale(0.35);
                opacity: 0.35;
              }
              50% {
                transform: translateX(-300px) translateY(-200px) rotate(90deg)
                  scale(0.4);
                opacity: 0.4;
              }
              55% {
                transform: translateX(-350px) translateY(-150px) rotate(90deg)
                  scale(0.45);
                opacity: 0.45;
              }
              60% {
                transform: translateX(-400px) translateY(-100px) rotate(90deg)
                  scale(0.5);
                opacity: 0.5;
              }
              65% {
                transform: translateX(-375px) translateY(-50px) rotate(90deg)
                  scale(0.55);
                opacity: 0.55;
              }
              70% {
                transform: translateX(-350px) translateY(0px) rotate(90deg)
                  scale(0.6);
                opacity: 0.6;
              }
              75% {
                transform: translateX(-275px) translateY(25px) rotate(90deg)
                  scale(0.65);
                opacity: 0.65;
              }
              80% {
                transform: translateX(-200px) translateY(50px) rotate(90deg)
                  scale(0.7);
                opacity: 0.7;
              }
              85% {
                transform: translateX(-125px) translateY(35px) rotate(90deg)
                  scale(0.75);
                opacity: 0.8;
              }
              90% {
                transform: translateX(-50px) translateY(20px) rotate(90deg)
                  scale(0.8);
                opacity: 0.9;
              }
              95% {
                transform: translateX(-25px) translateY(10px) rotate(90deg)
                  scale(0.9);
                opacity: 0.95;
              }
              100% {
                transform: translateX(0) translateY(0) rotate(0deg) scale(1);
                opacity: 1;
              }
            }

            .airplane-icon.fly-away {
              animation:
                flyAway 2s ease-in-out forwards,
                flyBack 2s ease-in-out 2s forwards;
            }
          `}</style>

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
              className="cursor-pointer hover:scale-110 transition-transform duration-200"
              style={{ color: "rgb(96, 91, 72)", marginBottom: "24px" }}
              onClick={() => setShowBadBunnyGif(true)}
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
              Taxis and Uber are both available from Istanbul
              Airport. If you take a taxi, be sure to ask the driver to turn on
              the meter, otherwise they may try to give you a flat tourist price
              that&apos;s much higher. A metered taxi from IST to the Bosphorus
              hotels should cost around 2,300 TL (~$55 USD),
              depending on traffic. The ride usually takes 45–60 minutes.
            </p>
            <p className="text-center max-w-3xl font-['Alice',serif] mx-auto text-gray-700 text-base sm:text-lg leading-relaxed px-2 sm:px-0">
              If you would like to set up an airport transfer to the Çırağan
              Palace in advance, please reach out to{" "}
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

      {/* Bad Bunny GIF Popup */}
      {showBadBunnyGif && (
        <div
          className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50"
          onClick={() => setShowBadBunnyGif(false)}
        >
          <div
            className="bg-white rounded-lg p-4 max-w-md mx-4 shadow-xl"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex justify-between items-center mb-4">
              <button
                onClick={() => setShowBadBunnyGif(false)}
                className="text-gray-500 hover:text-gray-700 transition-colors"
              >
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <line x1="18" y1="6" x2="6" y2="18"></line>
                  <line x1="6" y1="6" x2="18" y2="18"></line>
                </svg>
              </button>
            </div>
            <div className="text-center">
              <Image
                src="/images/travel/bad-bunny-baile-inolvidable.gif"
                alt="Bad Bunny Baile Inolvidable"
                width={400}
                height={300}
                className="rounded-lg mx-auto"
              />
              <p className="text-gray-600 font-['Almarai'] mt-4 text-sm">
                ¡Prepárate para un baile inolvidable! 💃🕺
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
