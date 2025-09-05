import { getRsvpById } from "@/app/data/wedding";
import { notFound } from "next/navigation";
import Image from "next/image";
import EditRSVPForm from "@/app/ui/rsvp-form";
import { WeddingRsvp } from "@/lib/definitions";

export default async function RsvpPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const id = (await params).id;
  const rsvpData = await getRsvpById(id);

  if (!rsvpData) {
    notFound();
  }

  // Transform the database result to match WeddingRsvp interface
  const rsvp: WeddingRsvp = {
    id: rsvpData.rsvp_id,
    counter: rsvpData.counter,
    stay: rsvpData.stay || "",
    song: rsvpData.song || "",
    last_updated: rsvpData.last_updated,
    updated_count: rsvpData.updated_count || 0,
    guests: rsvpData.guests,
  };

  return (
    <div className="min-h-screen w-full">
      {/* Header Section */}
      <div className="flex flex-col lg:flex-row min-h-[80vh] pt-8 bg-[#9fadb1] text-white relative">
        {/* Left side with decorative flowers */}
        <div className="flex-1 flex items-center justify-center p-4 lg:p-8 pb-16 lg:pb-20 order-2 lg:order-1">
          <div className="relative w-full max-w-xs lg:max-w-sm">
            <Image
              src="/images/rsvp/flowers.png"
              alt="Decorative flowers"
              width={400}
              height={600}
              className="w-full h-auto opacity-80"
            />
          </div>
        </div>

        {/* Right side with content */}
        <div className="flex-1 flex flex-col justify-center px-8 lg:px-16 order-1 lg:order-2">
          <div className="max-w-lg">
            <h1 className="text-4xl lg:text-6xl xl:text-7xl font-['Alice',serif] mb-6 lg:mb-8 text-white">
              RSVP
            </h1>

            <p className="text-lg lg:text-xl xl:text-2xl leading-relaxed font-['Almarai', serif] font-light mb-8 lg:mb-12 text-white">
              Whether you&apos;re coming for the whole weekend, or just the big
              day, we&apos;re excited to have you there. 
            </p>

            <p className="text-lg lg:text-xl xl:text-2xl leading-relaxed font-['Almarai', serif] font-light mb-8 lg:mb-12 text-white">
              Kindly respond by the first of March.
            </p>
          </div>
        </div>

        {/* Scroll arrow positioned at bottom */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
          <div className="animate-bounce">
            <svg
              className="w-6 h-6 text-white opacity-70"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M19 14l-7 7m0 0l-7-7m7 7V3"
              />
            </svg>
          </div>
        </div>
      </div>

      {/* RSVP Form Component */}
      <EditRSVPForm rsvp={rsvp} />
    </div>
  );
}
