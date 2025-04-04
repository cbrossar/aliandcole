import Image from "next/image";

export default function Home() {
  return (
      <div className="w-full flex flex-col items-center">
        <div className="relative w-full">
          <Image 
            src="/images/ciragan.avif" 
            alt="Ciragan Palace" 
            width={1920}
            height={1080}
            className="w-full h-[50vh] object-cover"
          />
          <h1 className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-2xl md:text-[3.25rem] leading-tight md:leading-[3.25rem] text-white font-['HeleneHess-Regular','fallback-1','fallback-2','fallback-3',serif]">
            Ali + Cole
          </h1>
        </div>
      </div>
  );
}
