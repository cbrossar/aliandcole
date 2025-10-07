"use server";

import { sql } from "@vercel/postgres";
import { WeddingRsvp } from "@/lib/definitions";

export async function searchWeddingGuests(searchTerm: string) {
  try {
    const result = await sql`
            WITH matching_rsvps AS (
                SELECT DISTINCT wr.id as rsvp_id
                FROM wedding_guests wg
                JOIN wedding_rsvps wr ON wg.wedding_rsvp_fk = wr.id
                WHERE 
                    LOWER(wg.first_name) LIKE LOWER(${`%${searchTerm}%`}) 
                    OR LOWER(wg.last_name) LIKE LOWER(${`%${searchTerm}%`})
                    OR LOWER(CONCAT(wg.first_name, ' ', wg.last_name)) LIKE LOWER(${`%${searchTerm}%`})
            )
            SELECT 
                wr.id as rsvp_id,
                wr.counter,
                wr.stay,
                wr.song,
                json_agg(
                    json_build_object(
                        'id', wg.id,
                        'first_name', wg.first_name,
                        'last_name', wg.last_name,
                        'is_attending_wedding', wg.is_attending_wedding,
                        'is_attending_welcome_party', wg.is_attending_welcome_party,
                        'is_attending_after_party', wg.is_attending_after_party,
                        'food_selection', wg.food_selection,
                        'dietary_restrictions', wg.dietary_restrictions
                    ) ORDER BY wg.first_name
                ) as guests
            FROM wedding_rsvps wr
            JOIN wedding_guests wg ON wg.wedding_rsvp_fk = wr.id
            JOIN matching_rsvps mr ON wr.id = mr.rsvp_id
            GROUP BY wr.id, wr.counter, wr.stay, wr.song
            ORDER BY wr.counter
        `;

    return result.rows;
  } catch (error) {
    console.error("Error searching wedding guests:", error);
    throw error;
  }
}

export async function getRsvpById(id: string) {
  try {
    const result = await sql`
            SELECT 
                wr.id as rsvp_id,
                wr.counter,
                wr.stay,
                wr.song,
                wr.last_updated,
                wr.updated_count,
                json_agg(
                    json_build_object(
                        'id', wg.id,
                        'first_name', wg.first_name,
                        'last_name', wg.last_name,
                        'is_attending_wedding', wg.is_attending_wedding,
                        'is_attending_welcome_party', wg.is_attending_welcome_party,
                        'is_attending_after_party', wg.is_attending_after_party,
                        'food_selection', wg.food_selection,
                        'dietary_restrictions', wg.dietary_restrictions,
                        'is_invited_to_thursday_dinner', wg.is_invited_to_thursday_dinner,
                        'is_attending_thursday_dinner', wg.is_attending_thursday_dinner
                    ) ORDER BY wg.first_name
                ) as guests
            FROM wedding_rsvps wr
            LEFT JOIN wedding_guests wg ON wg.wedding_rsvp_fk = wr.id
            WHERE wr.id = ${id}
            GROUP BY wr.id, wr.counter, wr.stay, wr.song, wr.last_updated, wr.updated_count
        `;

    return result.rows[0] || null;
  } catch (error) {
    console.error("Error getting RSVP by id:", error);
    throw error;
  }
}

export async function updateRsvp(rsvp: WeddingRsvp) {
  console.log("Updating RSVP:", rsvp);
  try {
    //update guests
    for (const guest of rsvp.guests) {
      console.log("Updating guest:", guest);
      await sql`
                UPDATE wedding_guests
                SET
                    is_attending_wedding = ${guest.is_attending_wedding},
                    is_attending_welcome_party = ${guest.is_attending_welcome_party},
                    is_attending_after_party = ${guest.is_attending_after_party},
                    food_selection = ${guest.food_selection},
                    dietary_restrictions = ${guest.dietary_restrictions}
                WHERE id = ${guest.id}
            `;
    }

    //update rsvp
    await sql`
            UPDATE wedding_rsvps
            SET
                stay = ${rsvp.stay},
                song = ${rsvp.song}
            WHERE id = ${rsvp.id}
        `;

    return rsvp;
  } catch (error) {
    console.error("Error updating RSVP:", error);
    throw error;
  }
}

export async function getRsvps() {
  // TODO only fetch guest names and ids
  try {
    const result = await sql`
        SELECT 
        wr.id as rsvp_id,
        json_agg(
            json_build_object(
            'id', wg.id,
            'first_name', wg.first_name,
            'last_name', wg.last_name
            ) ORDER BY wg.first_name
        ) as guests
        FROM wedding_rsvps wr
        LEFT JOIN wedding_guests wg ON wg.wedding_rsvp_fk = wr.id
        GROUP BY wr.id
        ORDER BY (
        SELECT MIN(wg2.last_name) 
        FROM wedding_guests wg2 
        WHERE wg2.wedding_rsvp_fk = wr.id
        )
    `;
    return result.rows;
  } catch (error) {
    console.error("Error getting RSVPs:", error);
    throw error;
  }
}
