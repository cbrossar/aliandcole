"use client";

import Image from "next/image";
import { FadeInOnScroll } from "../components/FadeInOnScroll";

export default function HowWeMet() {
  return (
    <div className="w-full min-h-screen">
      <FadeInOnScroll direction="up" duration={1000}>
        <div className="w-full h-screen md:h-screen px-4 md:px-8">
          <div className="relative w-full h-full">
            <Image
              src="/images/how-we-met/popsicle.jpg"
              alt="How we met - couple sharing a popsicle"
              fill
              className="object-cover rounded-lg"
              priority
            />
            <div className="absolute bottom-4 left-4 md:bottom-8 md:left-8 right-4 md:right-auto">
              <h1 className="text-white text-3xl sm:text-4xl md:text-5xl lg:text-[58px] font-['Alice',serif] leading-tight">
                How we met
              </h1>
            </div>
          </div>
        </div>
      </FadeInOnScroll>
      <FadeInOnScroll direction="up" delay={200} duration={800}>
        <div className="px-8 py-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
            <div></div>
            <div>
              <p className="text-left text-[22px] leading-relaxed font-['Alice',serif] mb-8">
                We were both at USC — Cole in computer science, Ali in the
                School of Medicine. Senior year, after the UCLA game, we shared
                an Uber to a dance party in Silver Lake. The stamps inked across
                our wrists read, “Be Dirty, Dance Clean.” And that we did.
              </p>
              {/* Spotify Player */}
              <div className="w-full">
                <iframe
                  style={{ borderRadius: "12px" }}
                  src="https://open.spotify.com/embed/track/2cmRpmO04TLaKPzmAzySYZ"
                  width="100%"
                  height="80"
                  frameBorder="0"
                  allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                  loading="lazy"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </FadeInOnScroll>

      {/* USC Graduation Section */}
      <FadeInOnScroll direction="up" duration={800}>
        <div className="px-8 py-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center max-w-6xl mx-auto">
            <div className="relative aspect-[3/4] w-full max-w-md mx-auto lg:mx-0">
              <Image
                src="/images/how-we-met/graduation.jpg"
                alt="USC Graduation"
                fill
                className="object-cover rounded-lg"
              />
            </div>
            <div className="lg:pl-8">
              <p className="text-[28px] leading-relaxed font-['Alice',serif]">
                USC: where Fight On met happily ever after ✌️❤️
              </p>
            </div>
          </div>
        </div>
      </FadeInOnScroll>

      {/* The Proposal Section */}
      <FadeInOnScroll direction="up" duration={1000}>
        <div className="w-full h-screen md:h-screen px-4 md:px-8">
          <div className="relative w-full h-full">
            <Image
              src="/images/how-we-met/zion.jpg"
              alt="The Proposal - Zion National Park"
              fill
              className="object-cover rounded-lg"
            />
            <div className="absolute bottom-4 left-4 md:bottom-8 md:left-8 right-4 md:right-auto">
              <h2 className="text-white text-3xl sm:text-4xl md:text-5xl lg:text-[58px] font-['Alice',serif] leading-tight">
                The Proposal
              </h2>
            </div>
          </div>
        </div>
      </FadeInOnScroll>

      {/* Proposal Story Text */}
      <FadeInOnScroll direction="up" delay={200}>
        <div className="px-8 py-16">
          <p className="text-[22px] leading-relaxed max-w-2xl font-['Almarai']">
            Cole planned a weekend upstate, complete with a spa day and a
            farm-to-table dinner. Ali, certain this was the moment, wore her
            engagement dress that night. But the next afternoon, during a quiet
            picnic, just when she least expected it, Cole chucked his crutches
            and got down on one knee. With tears in her eyes and string lights
            twinkling in the trees, Ali said yes. Back in Brooklyn, a surprise
            celebration with their closest friends and family was waiting.
          </p>
        </div>
      </FadeInOnScroll>

      {/* Quote and Wedding Photo Section */}
      <FadeInOnScroll direction="up" duration={800}>
        <div className="px-8 py-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center max-w-6xl mx-auto">
            <div className="lg:pr-8">
              <blockquote className="text-[28px] leading-relaxed font-['Alice',serif]">
                We knew we&apos;d completely change from 21 to 30; the question
                was whether we&apos;d grow together or apart. Luckily, we grew
                together.
              </blockquote>
            </div>
            <div className="flex justify-end">
              <div className="relative aspect-[3/4] w-full max-w-md">
                <Image
                  src="/images/how-we-met/connors-wedding.jpg"
                  alt="Connor's Wedding"
                  fill
                  className="object-cover rounded-lg"
                />
              </div>
            </div>
          </div>
        </div>
      </FadeInOnScroll>

      {/* Final Photos Section */}
      <FadeInOnScroll direction="up" delay={300}>
        <div className="px-8 py-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start max-w-6xl mx-auto">
            <div className="relative aspect-[2/3] w-full h-[800px]">
              <Image
                src="/images/how-we-met/forehead.jpeg"
                alt="Forehead kiss"
                fill
                className="object-cover rounded-lg"
              />
            </div>
            <div className="lg:pl-8 flex justify-end">
              <div className="relative aspect-[4/3] w-full max-w-sm h-[300px]">
                <Image
                  src="/images/how-we-met/smiles.jpg"
                  alt="Smiles"
                  fill
                  className="object-cover rounded-lg"
                />
              </div>
            </div>
          </div>
        </div>
      </FadeInOnScroll>
    </div>
  );
}
