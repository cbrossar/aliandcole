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
    <div className="min-h-screen w-full bg-[#4a4a4a] text-white">
      {/* Header Section */}
      <div className="flex min-h-screen">
        {/* Left side with decorative flowers */}
        <div className="flex-1 flex items-center justify-center p-8">
          <div className="relative w-full max-w-md">
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
        <div className="flex-1 flex flex-col justify-center px-8 lg:px-16">
          <div className="max-w-lg">
            <h1 className="text-6xl lg:text-7xl font-['Alice',serif] mb-8">
              RSVP
            </h1>

            <p className="text-xl lg:text-2xl leading-relaxed font-['Almarai', serif] font-light mb-12">
              Whether you&apos;re coming for the whole weekend, or just the big
              day, we&apos;re excited to have you there.
            </p>
          </div>
        </div>
      </div>

      {/* RSVP Form Component */}
      <EditRSVPForm rsvp={rsvp} />
    </div>
  );
}
