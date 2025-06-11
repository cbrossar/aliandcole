import Image from "next/image";

export default function Home() {
  return (
    <div className="w-full min-h-screen pt-20 px-6 md:px-8 lg:px-12">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 min-h-[80vh] pt-8 lg:pt-12">
          {/* Left side - Text content */}
          <div className="flex flex-col justify-start space-y-8 pt-8 lg:pt-36">
            <div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl leading-tight text-[#333333] font-['Alice',serif]">
                Celebrating Ali & Cole
              </h1>
            </div>
          </div>

          {/* Right side - Image */}
          <div className="flex justify-center lg:justify-end ">
            <div className="relative w-full max-w-lg lg:max-w-xl xl:max-w-2xl">
              <Image 
                src="/images/home/wildflower.jpeg" 
                alt="Ali and Cole" 
                width={820}
                height={1380}
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
