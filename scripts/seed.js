const { db } = require("@vercel/postgres");
const fs = require("fs");

async function main() {
    const client = await db.connect();

    await createWeddingTables(client);
    await seedWeddingTables(client);

    await client.end();
}

async function createWeddingTables(client) {
    try {
        await client.sql`CREATE EXTENSION IF NOT EXISTS "uuid-ossp"`;

        const createWeddingRSVPsTable = await client.sql`
        CREATE TABLE IF NOT EXISTS wedding_rsvps (
            id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
            counter INTEGER NOT NULL,
            stay TEXT,
            song TEXT,
            last_updated TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
            updated_count INTEGER DEFAULT 0
        )
        `;

        console.log("Wedding RSVPs table created successfully");

        const createWeddingGuestsTable = await client.sql`
        CREATE TABLE IF NOT EXISTS wedding_guests (
            id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
            first_name TEXT NOT NULL,
            last_name TEXT NOT NULL,
            is_attending_welcome_party BOOLEAN,
            is_attending_wedding BOOLEAN,
            is_attending_rehersal_dinner BOOLEAN,
            food_selection TEXT CHECK (food_selection IN ('beef', 'fish', 'vegetarian', '')),
            dietary_restrictions TEXT,
            wedding_rsvp_fk UUID REFERENCES wedding_rsvps(id)
        )
        `;

        console.log("Wedding guests table created successfully");

        return {
            createWeddingRSVPsTable,
            createWeddingGuestsTable
        }

    } catch (error) {
        console.error("Error creating wedding RSVPs table:", error);
    }
}

async function seedWeddingTables(client) {
    try {
        
        // read wedding-guests.csv and parse it into an array of objects
        const weddingGuests = fs.readFileSync("scripts/wedding-guests.csv", "utf8");
        const weddingGuestsArray = weddingGuests.split("\n").slice(1).map(line => {
            const [rsvp_counter, first_name, last_name] = line.split(",");
            return { rsvp_counter, first_name, last_name: last_name.replace(/\r$/, '') };
        });

        console.log(weddingGuestsArray);

        for (const guest of weddingGuestsArray) {
            const guestData = {
                counter: guest.rsvp_counter,
                first_name: guest.first_name,
                last_name: guest.last_name,
            }

            console.log(guestData);

            // check if rsvp row exists if not create it
            let rsvpResult = await client.sql`SELECT * FROM wedding_rsvps WHERE counter = ${guestData.counter}`;
            if (rsvpResult.rows.length === 0) {
                console.log(`RSVP ${guestData.counter} not found, creating...`);
                const rsvpData = {
                    counter: parseInt(guestData.counter),
                }

                rsvpResult = await client.sql`INSERT INTO wedding_rsvps (counter, stay, song) VALUES (${rsvpData.counter}, null, null)`;
                console.log(`RSVP ${guestData.counter} created`);

                rsvpResult = await client.sql`SELECT * FROM wedding_rsvps WHERE counter = ${guestData.counter}`;
            }

            await client.sql`INSERT INTO wedding_guests (first_name, last_name, is_attending_wedding, is_attending_rehersal_dinner, wedding_rsvp_fk) VALUES (${guestData.first_name}, ${guestData.last_name}, false, false, ${rsvpResult.rows[0].id})`;
            console.log(`Guest ${guest.first_name} ${guest.last_name} added to wedding_guests table with rsvp ${guestData.counter}`);
        }
    } catch (error) {
        console.error("Error seeding wedding tables:", error);
    }
}

main();