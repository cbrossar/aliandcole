import { getRsvpById } from "@/app/data/wedding";
import { notFound } from "next/navigation";


export default async function RsvpPage({ params }: { params: { id: string } }) {

    const id = (await params).id;
    const rsvp = await getRsvpById(id);

    if (!rsvp) {
        notFound();
    }
    return <div>RsvpPage {rsvp.counter}</div>;
}