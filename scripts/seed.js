const { db } = require("@vercel/postgres");

async function main() {
    const client = await db.connect();

    await createWeddingTables(client);

    await client.end();
}

async function createWeddingTables(client) {
    try {
        await client.sql`CREATE EXTENSION IF NOT EXISTS "uuid-ossp"`;

        const createWeddingRSVPsTable = await client.sql`
        CREATE TABLE IF NOT EXISTS wedding_rsvps (
            id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
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
            is_attending_wedding BOOLEAN,
            is_attending_rehersal_dinner BOOLEAN,
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


main();