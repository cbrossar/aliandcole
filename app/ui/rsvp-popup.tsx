"use client";

import { searchWeddingGuests } from "@/app/data/wedding";
import { useState, useTransition } from "react";
import Link from "next/link";

interface Guest {
    id: string;
    first_name: string;
    last_name: string;
    is_attending_wedding: boolean | null;
    is_attending_rehersal_dinner: boolean | null;
}

interface RsvpGroup {
    rsvp_id: string;
    counter: number;
    stay: string | null;
    song: string | null;
    guests: Guest[];
}

interface RsvpPopupProps {
    onClose: () => void;
}

export default function RsvpPopup({ onClose }: RsvpPopupProps) {
    const [searchTerm, setSearchTerm] = useState("");
    const [searchResults, setSearchResults] = useState<RsvpGroup[]>([]);
    const [isPending, startTransition] = useTransition();
    const [hasSearched, setHasSearched] = useState(false);

    const handleSearch = () => {
        if (!searchTerm.trim()) return;
        
        startTransition(async () => {
            try {
                const results = await searchWeddingGuests(searchTerm);
                setSearchResults(results as RsvpGroup[]);
                setHasSearched(true);
            } catch (error) {
                console.error('Error searching guests:', error);
                setSearchResults([]);
                setHasSearched(true);
            }
        });
    };

    const handleKeyPress = (e: React.KeyboardEvent) => {
        if (e.key === 'Enter') {
            handleSearch();
        }
    };

    return (
        <div 
            className="fixed inset-0 flex items-center justify-center z-50 backdrop-blur-sm"
            onClick={onClose}
        >
            <div 
                className="bg-[rgb(248,245,239)] p-8 rounded-lg max-w-md w-full mx-4 relative shadow-lg border border-gray-200"
                onClick={(e) => e.stopPropagation()}
            >
                <button
                    onClick={onClose}
                    className="absolute top-4 right-4 text-[rgb(51,51,51)] hover:text-gray-700 text-xl font-bold"
                    aria-label="Close popup"
                >
                    ×
                </button>
                <h2 className="text-2xl font-bold mb-6 text-center text-[rgb(51,51,51)] font-['Alice',serif]">RSVP</h2>
                
                <div className="space-y-4">
                    <input
                        type="text"
                        placeholder="Enter your name"
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                        onKeyPress={handleKeyPress}
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[rgb(51,51,51)] bg-white text-[rgb(51,51,51)] font-['Almarai',sans-serif]"
                        disabled={isPending}
                    />
                    <button 
                        onClick={handleSearch}
                        disabled={isPending || !searchTerm.trim()}
                        className="w-full border border-[rgb(51,51,51)] rounded-full px-6 py-2 hover:bg-[rgb(51,51,51)] hover:text-white transition-colors text-[rgb(51,51,51)] font-['Almarai',sans-serif] font-medium disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                        {isPending ? 'Searching...' : 'Find RSVP'}
                    </button>
                </div>

                {/* Search Results */}
                {hasSearched && (
                    <div className="mt-6 space-y-4">
                        {searchResults.length > 0 ? (
                            <div>
                                <h3 className="font-semibold text-[rgb(51,51,51)] mb-3">Found RSVPs:</h3>
                                {searchResults.map((rsvp) => (
                                    <div key={rsvp.rsvp_id} className="p-3 border border-gray-200 rounded-lg mb-2">
                                        <div className="mb-2">
                                            {rsvp.guests.map((guest: Guest, index: number) => (
                                                <span key={guest.id} className="font-medium">
                                                    {guest.first_name} {guest.last_name}
                                                    {index < rsvp.guests.length - 1 ? " & " : ""}
                                                </span>
                                            ))}
                                        </div>
                                        <Link 
                                            href={`/rsvp/${rsvp.rsvp_id}`}
                                            onClick={onClose}
                                            className="mt-2 inline-block text-sm bg-[rgb(51,51,51)] text-white px-3 py-1 rounded-full hover:bg-gray-700 transition-colors"
                                        >
                                            Update RSVP
                                        </Link>
                                    </div>
                                ))}
                            </div>
                        ) : (
                            <div className="text-center text-gray-600">
                                <p>No RSVP found for &quot;{searchTerm}&quot;</p>
                                <p className="text-sm mt-1">Try searching by first name or last name</p>
                            </div>
                        )}
                    </div>
                )}
            </div>
        </div>
    );
}