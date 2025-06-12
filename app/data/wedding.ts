'use server'

import { sql } from '@vercel/postgres';

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
                        'is_attending_rehersal_dinner', wg.is_attending_rehersal_dinner
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
        console.error('Error searching wedding guests:', error);
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
                        'is_attending_rehersal_dinner', wg.is_attending_rehersal_dinner
                    ) ORDER BY wg.first_name
                ) as guests
            FROM wedding_rsvps wr
            LEFT JOIN wedding_guests wg ON wg.wedding_rsvp_fk = wr.id
            WHERE wr.id = ${id}
            GROUP BY wr.id, wr.counter, wr.stay, wr.song, wr.last_updated, wr.updated_count
        `;

        return result.rows[0] || null;
    } catch (error) {
        console.error('Error getting RSVP by id:', error);
        throw error;
    }
}