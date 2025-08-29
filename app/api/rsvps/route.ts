import { NextResponse } from "next/server";
import { getRsvps } from "@/app/data/wedding";

export async function GET() {
  try {
    const result = await getRsvps();

    return NextResponse.json(result);
  } catch (error) {
    console.error("Error fetching RSVPs:", error);
    return NextResponse.json(
      { error: "Failed to fetch RSVPs" },
      { status: 500 },
    );
  }
}
