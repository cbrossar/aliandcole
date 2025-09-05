"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

// Utility function to normalize text by removing special characters
const normalizeText = (text: string): string => {
  return text
    .toLowerCase()
    .normalize("NFD") // Decompose characters with diacritics
    .replace(/[\u0300-\u036f]/g, "") // Remove diacritics
    .replace(/[^a-z0-9\s]/g, "") // Remove all non-alphanumeric characters except spaces
    .trim();
};

interface Guest {
  id: string;
  first_name: string;
  last_name: string;
}

interface RsvpGroup {
  rsvp_id: string;
  guests: Guest[];
}

interface RsvpPopupProps {
  onClose: () => void;
}

export default function RsvpPopup({ onClose }: RsvpPopupProps) {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [allRsvps, setAllRsvps] = useState<RsvpGroup[]>([]);
  const [filteredRsvps, setFilteredRsvps] = useState<RsvpGroup[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [hasSearched, setHasSearched] = useState(false);

  // Fetch all RSVPs on component mount
  useEffect(() => {
    const fetchRsvps = async () => {
      try {
        const response = await fetch("/api/rsvps");
        if (!response.ok) {
          throw new Error("Failed to fetch RSVPs");
        }
        const data = await response.json();
        setAllRsvps(data);
      } catch (error) {
        console.error("Error fetching RSVPs:", error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchRsvps();
  }, []);

  const handleSearch = () => {
    if (!firstName.trim() && !lastName.trim()) {
      setFilteredRsvps([]);
      setHasSearched(false);
      return;
    }

    const normalizedFirstName = normalizeText(firstName);
    const normalizedLastName = normalizeText(lastName);

    const filtered = allRsvps.filter((rsvp) =>
      rsvp.guests.some((guest) => {
        const guestNormalizedFirstName = normalizeText(guest.first_name);
        const guestNormalizedLastName = normalizeText(guest.last_name);

        const firstNameMatch =
          guestNormalizedFirstName === normalizedFirstName;
        const lastNameMatch =
          normalizedLastName === guestNormalizedLastName;
        return firstNameMatch && lastNameMatch;
      }),
    );

    setFilteredRsvps(filtered);
    setHasSearched(true);
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === "Enter") {
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
          className="absolute top-4 right-4 text-[rgb(51,51,51)] hover:text-[rgb(51,51,51)] text-xl font-bold"
          aria-label="Close popup"
        >
          ×
        </button>
        <h2 className="text-2xl font-bold mb-6 text-center text-[rgb(51,51,51)] font-['Alice',serif]">
          RSVP
        </h2>

        <div className="space-y-4">
          <div className="grid grid-cols-2 gap-3">
            <input
              type="text"
              placeholder="First name"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
              onKeyDown={handleKeyPress}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[rgb(51,51,51)] bg-white text-[rgb(51,51,51)] font-['Almarai',sans-serif]"
              disabled={isLoading}
            />
            <input
              type="text"
              placeholder="Last name"
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
              onKeyDown={handleKeyPress}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-2 focus:ring-[rgb(51,51,51)] bg-white text-[rgb(51,51,51)] font-['Almarai',sans-serif]"
              disabled={isLoading}
            />
          </div>
          <button
            onClick={handleSearch}
            disabled={isLoading || !firstName.trim() || !lastName.trim()}
            className="w-full px-4 py-2 bg-[rgb(51,51,51)] text-white rounded-lg hover:bg-gray-700 disabled:opacity-50 disabled:cursor-not-allowed transition-colors font-['Almarai',sans-serif]"
          >
            Search
          </button>
        </div>

        {/* Search Results */}
        {hasSearched && (
          <div className="mt-6 space-y-4">
            {filteredRsvps.length > 0 ? (
              <div>
                <h3 className="font-semibold text-[rgb(51,51,51)] mb-3">
                  Found RSVPs:
                </h3>
                {filteredRsvps.map((rsvp: RsvpGroup) => (
                  <div
                    key={rsvp.rsvp_id}
                    className="p-3 border border-gray-200 rounded-lg mb-2"
                  >
                    <div className="mb-2">
                      {rsvp.guests.map((guest: Guest, index: number) => (
                        <span
                          key={guest.id}
                          className="font-medium text-[rgb(51,51,51)]"
                        >
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
              <div className="text-center text-[rgb(51,51,51)]">
                <p>
                  No RSVP found for &quot;{firstName.trim()} {lastName.trim()}
                  &quot;
                </p>
                <p className="text-sm mt-1">
                  Please check your spelling and try again
                </p>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
}
