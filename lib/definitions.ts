export type WeddingGuest = {
  id: string;
  first_name: string;
  last_name: string;
  is_attending_wedding: boolean | null;
  is_attending_welcome_party: boolean | null;
  is_attending_after_party: boolean | null;
  food_selection: string | null;
  dietary_restrictions: string | null;
};

export type WeddingRsvp = {
  id: string;
  counter: number;
  stay: string;
  song: string;
  last_updated: Date;
  updated_count: number;
  guests: WeddingGuest[];
};
