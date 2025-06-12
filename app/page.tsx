import Image from "next/image";

export default function Home() {
  return (
    <div className="w-full min-h-screen px-6 md:px-8 lg:px-12 pt-8 md:pt-12 lg:pt-16">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-3 lg:grid-cols-6 gap-4 lg:gap-16 min-h-[80vh] pt-8 lg:pt-12">
          {/* Left side - Text content */}
          <div className="flex flex-col justify-start space-y-8 pt-8 lg:pt-36 col-span-1 lg:col-span-2">
            <div>
              <h1 className="text-xl md:text-5xl lg:text-6xl xl:text-7xl leading-tight text-[#333333] font-['Alice',serif]">
                Celebrating Ali & Cole
              </h1>
            </div>
          </div>

          {/* Right side - Image */}
          <div className="flex justify-center lg:justify-end col-span-2 lg:col-span-4">
            <div className="relative w-full max-w-sm lg:max-w-4xl xl:max-w-5xl">
              <Image 
                src="/images/home/wildflower.jpeg" 
                alt="Ali and Cole" 
                width={1000}
                height={1500}
                className="w-full h-auto rounded-lg shadow-lg object-cover aspect-[4/7] object-center"
                priority
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
