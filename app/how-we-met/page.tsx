import Image from 'next/image';

export default function HowWeMet() {
  return (
    <div className="w-full min-h-screen">
      <div className="w-full h-screen p-8">
        <div className="relative w-full h-full">
          <Image
            src="/images/how-we-met/popsicle.jpg"
            alt="How we met - couple sharing a popsicle"
            fill
            className="object-cover rounded-lg"
            priority
          />
          <div className="absolute bottom-8 left-8">
            <h1 className="text-white text-6xl font-light">How we met</h1>
          </div>
        </div>
      </div>
      <div className="px-8 pb-16">
        <p className="text-right text-lg leading-relaxed max-w-2xl ml-auto">
          We both went to USC—Cole studied computer science, and Ali was in the school of medicine. Night of the UCLA game, we shared an uber to a dance party in Silver Lake. The stamps inked across our wrists read, &ldquo;Be Dirty, Dance Clean.&rdquo; And that we did. The rest is history.
        </p>
      </div>
    </div>
  );
} 