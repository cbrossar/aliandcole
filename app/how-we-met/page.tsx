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
      <div className="px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
          <div></div>
          <div>
            <p className="text-left text-[22px] leading-relaxed font-['Alice',serif] mb-8">
              We both went to USC—Cole studied computer science, and Ali was in the school of medicine. Night of the UCLA game, we shared an uber to a dance party in Silver Lake. The stamps inked across our wrists read, &ldquo;Be Dirty, Dance Clean.&rdquo; And that we did. The rest is history.
            </p>
            {/* Spotify Player */}
            <div className="w-full">
              <iframe 
                style={{borderRadius:"12px"}} 
                src="https://open.spotify.com/embed/track/2cmRpmO04TLaKPzmAzySYZ" 
                width="100%" 
                height="80" 
                frameBorder="0" 
                allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" 
                loading="lazy">
              </iframe>
            </div>
          </div>
        </div>
      </div>
      
      {/* USC Graduation Section */}
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
              USC known as the &ldquo;University of Spoiled Children,&rdquo; and also where all of the greatest love stories begin.
            </p>
          </div>
        </div>
      </div>
      
      {/* The Proposal Section */}
      <div className="w-full h-screen px-8">
        <div className="relative w-full h-full">
          <Image
            src="/images/how-we-met/zion.jpg"
            alt="The Proposal - Zion National Park"
            fill
            className="object-cover rounded-lg"
          />
          <div className="absolute bottom-8 left-8">
            <h2 className="text-white text-[58px] font-['Alice',serif]">The Proposal</h2>
          </div>
        </div>
      </div>
      
      {/* Proposal Story Text */}
      <div className="px-8 py-16">
        <p className="text-lg leading-relaxed max-w-2xl">
          Cole took Ali upstate one weekend—complete with a spa day and a farm-to-table dinner. Ali wore her engagement dress that night convinced this was the moment. However, at a picnic the next day, just when she least expected it, Cole—crutches and all—gracefully got down on one knee. With tears in her eyes and string lights twinkling in the trees, Ali said yes. Back in the city, a surprise celebration with our closest friends and family was waiting.
        </p>
      </div>
      
      {/* Quote and Wedding Photo Section */}
      <div className="px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center max-w-6xl mx-auto">
          <div className="lg:pr-8">
          <blockquote className="text-[28px] leading-relaxed font-['Alice',serif]">
          We&apos;re going to completely change as people from 22 to 28. We&apos;ll either grow together or grow apart. We&apos;ll just have to wait and see.
            </blockquote>
            <p className="text-lg mt-4 italic">-Ali to Cole age 21</p>
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
      
      {/* Final Photos Section */}
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
    </div>
  );
} 