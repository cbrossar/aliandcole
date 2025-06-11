import Image from 'next/image';

export default function HowWeMet() {
  return (
    <div className="relative w-full h-screen">
      <Image
        src="/images/how-we-met/popsicle.jpg"
        alt="How we met - couple sharing a popsicle"
        fill
        className="object-cover"
        priority
      />
      <div className="absolute bottom-8 left-8">
        <h1 className="text-white text-6xl font-light">How we met</h1>
      </div>
    </div>
  );
} 