import Image from 'next/image';

export default function HowWeMet() {
  return (
    <div className="w-full min-h-screen">
      <div className="w-full h-screen px-8">
        <div className="relative w-full h-full">
          <Image
            src="/images/how-we-met/popsicle.jpg"
            alt="How we met - couple sharing a popsicle"
            fill
            className="object-cover rounded-lg"
            priority
          />
          <div className="absolute bottom-8 left-8">
            <h1 className="text-white text-[58px] font-['Alice',serif]">How we met</h1>
          </div>
        </div>
      </div>
      <div className="px-8 pb-16">
        <p className="text-right text-lg leading-relaxed max-w-2xl ml-auto">
          We both went to USC—Cole studied computer science, and Ali was in the school of medicine. Night of the UCLA game, we shared an uber to a dance party in Silver Lake. The stamps inked across our wrists read, &ldquo;Be Dirty, Dance Clean.&rdquo; And that we did. The rest is history.
        </p>
      </div>
      {/* Spotify Player - order-3 on both mobile and desktop */}
      <div className="flex justify-center col-span-1 lg:col-span-6 order-3 lg:order-3">
            <div className="w-full max-w-sm lg:max-w-2xl">
              <iframe 
                style={{borderRadius:"12px"}} 
                src="https://open.spotify.com/embed/track/2cmRpmO04TLaKPzmAzySYZ?start=180" 
                width="100%" 
                height="80" 
                frameBorder="0" 
                allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" 
                loading="lazy">
              </iframe>
            </div>
          </div>
    </div>
  );
} 