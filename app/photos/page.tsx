"use client";

import Image from "next/image";

const sections = [
  {
    title: "Welcome Party",
    href: "https://photos.app.goo.gl/GTdXVRTssw7nXnUm7",
    image: "/images/photos/welcome-party.jpg",
  },
  {
    title: "Ali's Preparations",
    href: "https://photos.app.goo.gl/zf6wZ3HbcxTdSrLJ9",
    image: "/images/photos/preparation.jpg",
  },
  {
    title: "Cole's Preparations",
    href: "https://photos.app.goo.gl/415Sn6ptTHxmATEm7",
    image: "/images/photos/coles-preparations.jpg",
  },
  {
    title: "Couple & Family",
    href: "https://photos.app.goo.gl/9BQKoRx2wQ8jssnJ7",
    image: "/images/photos/couple-family.jpg",
  },
  {
    title: "Decor & Ambiance",
    href: "https://photos.app.goo.gl/ndoAgK5TVx6o8RPN8",
    image: "/images/photos/decor-ambiance.jpg",
  },
  {
    title: "Cocktail & Guests",
    href: "https://photos.app.goo.gl/2mAFZ51Rs4dNT6DJ8",
    image: "/images/photos/cocktail-guests.jpg",
  },
  {
    title: "Ceremony",
    href: "https://photos.app.goo.gl/pALF8JTyVoW9dGsQ7",
    image: "/images/photos/ceremony.jpg",
  },
  {
    title: "Dance & Speeches",
    href: "https://photos.app.goo.gl/vjjski4mC2if2zpb9",
    image: "/images/photos/dance-speeches.jpg",
  },
  {
    title: "Cake",
    href: "https://photos.app.goo.gl/iJJnPrQWKeBcB4hn9",
    image: "/images/photos/cake.jpg",
  },
  {
    title: "Party",
    href: "https://photos.app.goo.gl/vLSFsBZAcFFnoWUUA",
    image: "/images/photos/party.jpg",
  },
  {
    title: "Wedding Video",
    href: "https://youtu.be/veuv4ttaa7Q",
    image: "/images/photos/video.jpg",
  },
];

export default function Photos() {
  return (
    <div className="w-full bg-[rgb(248,245,239)] -mt-16 md:-mt-20">
      <div className="flex flex-col gap-1.5 md:gap-2">
        {sections.map((section, index) => (
          <a
            key={section.href}
            href={section.href}
            target="_blank"
            rel="noopener noreferrer"
            className="group relative block h-[55vh] min-h-[280px] md:h-[75vh] w-full overflow-hidden"
          >
            <Image
              src={section.image}
              alt={section.title}
              fill
              className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
              sizes="100vw"
              priority={index === 0}
            />
            <div className="absolute inset-0 bg-black/25 transition-colors duration-500 group-hover:bg-black/35" />
            <div className="absolute inset-0 flex items-center justify-center px-6">
              <h2 className="text-center text-white text-2xl sm:text-3xl md:text-5xl lg:text-6xl font-['Alice',serif] tracking-[0.12em] uppercase drop-shadow-lg">
                {section.title}
              </h2>
            </div>
          </a>
        ))}
      </div>
    </div>
  );
}
