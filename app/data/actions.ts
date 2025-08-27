"use server";

import { sql } from "@vercel/postgres";
import { revalidatePath } from "next/cache";
import { sendTelegramMessage } from "../utils/telegram";
import { WeddingGuest } from "../../lib/definitions";

export type State = {
  errors?: {
    [key: string]: string[];
  };
  message?: string | null;
};

export async function updateRSVP(
  id: string,
  prevState: State,
  formData: FormData,
) {
  try {
    // Get the current RSVP data to get guest IDs
    const { getRsvpById } = await import("./wedding");
    const currentRsvp = await getRsvpById(id);

    if (!currentRsvp) {
      return {
        errors: {},
        message: "RSVP not found",
      };
    }

    // Update each guest's attendance, dinner selection, and dietary restrictions based on form data
    for (const guest of currentRsvp.guests) {
      const welcomePartyAttendance =
        formData.get(`welcome_party_${guest.id}`) === "yes";
      const weddingAttendance = formData.get(`wedding_${guest.id}`) === "yes";
      const dinnerSelection =
        (formData.get(`dinner_${guest.id}`) as string) || "";
      const dietaryRestrictions =
        (formData.get(`dietary_restrictions_${guest.id}`) as string) || "";

      await sql`
                UPDATE wedding_guests
                SET
                    is_attending_wedding = ${weddingAttendance},
                    is_attending_welcome_party = ${welcomePartyAttendance},
                    food_selection = ${dinnerSelection},
                    dietary_restrictions = ${dietaryRestrictions}
                WHERE id = ${guest.id}
            `;
    }

    // Get optional information
    const stay = (formData.get("stay") as string) || "";
    const song = (formData.get("song") as string) || "";

    // Update RSVP table with optional information
    await sql`
            UPDATE wedding_rsvps
            SET
                stay = ${stay},
                song = ${song},
                updated_count = updated_count + 1,
                last_updated = CURRENT_TIMESTAMP
            WHERE id = ${id}
        `;

    // Revalidate the page to show updated data
    revalidatePath(`/rsvp/${id}`);

    // Send Telegram message with detailed RSVP information
    const rsvpMessage = `🎉 RSVP Updated!
    ${currentRsvp.guests
      .map(
        (guest: WeddingGuest) => `
• ${guest.first_name} ${guest.last_name}
  - Wedding: ${guest.is_attending_wedding ? "✅ Yes" : "❌ No"}
  - Welcome Party: ${guest.is_attending_welcome_party ? "✅ Yes" : "❌ No"}
  - Food: ${guest.food_selection || "Not specified"}
  ${guest.dietary_restrictions ? `- Dietary Restrictions: ${guest.dietary_restrictions}` : ""}`,
      )
      .join("")}

🏨 Accommodation: ${currentRsvp.stay || "Not specified"}
🎵 Song Request: ${currentRsvp.song || "Not specified"}
      `;

    await sendTelegramMessage(rsvpMessage);

    return {
      errors: {},
      message: "RSVP updated successfully!",
    };
  } catch (error) {
    console.error("Error updating RSVP:", error);
    return {
      errors: {},
      message: "Failed to update RSVP. Please try again.",
    };
  }
}
