export type WeddingGuest = {
    id: string;
    first_name: string;
    last_name: string;
    is_attending_wedding: boolean;
    is_attending_rehersal_dinner: boolean;
    food_selection: string;
    dietary_restrictions: string;
}

export type WeddingRsvp = {
    id: string;
    counter: number;
    stay: string;
    song: string;
    last_updated: Date;
    updated_count: number;
    guests: WeddingGuest[];
}