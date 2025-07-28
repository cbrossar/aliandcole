"use client";

import { WeddingRsvp, WeddingGuest } from "@/lib/definitions";
import { useActionState, useState } from "react";
import { updateRSVP } from "../data/actions";

export default function EditRSVPForm({
    rsvp,
}: {
    rsvp: WeddingRsvp;
}) {
    const initialState = { message: "", errors: {} };
    const updateRSVPWithId = updateRSVP.bind(
        null,
        rsvp.id,
    );
    const [state, dispatch] = useActionState(
        updateRSVPWithId,
        initialState,
    );

    // Track wedding attendance for each guest to show/hide dinner selection
    const [weddingAttendance, setWeddingAttendance] = useState<{[key: string]: boolean}>(
        rsvp.guests.reduce((acc, guest) => {
            acc[guest.id] = guest.is_attending_wedding === true;
            return acc;
        }, {} as {[key: string]: boolean})
    );

    const handleWeddingAttendanceChange = (guestId: string, isAttending: boolean) => {
        setWeddingAttendance(prev => ({
            ...prev,
            [guestId]: isAttending
        }));
    };

    return (
        <div className="py-12" style={{backgroundColor: 'rgb(248, 232, 224)'}}>
            {/* Centered Header */}
            <div className="text-center mb-12">
                <h2 className="text-3xl lg:text-4xl font-['Alice',serif] text-gray-800">
                    Please RSVP for your party
                </h2>
            </div>

            <div className="px-8 lg:px-16 py-8">
                <div className="max-w-2xl mx-auto">
                    <form action={dispatch} className="space-y-8">
                            {/* Guest Blocks */}
                    <div className="space-y-6">
                        {rsvp.guests.map((guest: WeddingGuest, index: number) => (
                            <div key={guest.id} className="bg-white/80 rounded-lg p-6 shadow-sm border border-gray-200">
                                <h3 className="text-xl font-['Alice',serif] mb-4 text-gray-800">
                                    Guest {index + 1}
                                </h3>
                                
                                                                    <div className="space-y-6">
                                        {/* Name Field */}
                                        <div className="mb-6">
                                            <label className="block text-base font-medium mb-2 font-['Almarai'] text-gray-700">
                                                Name
                                            </label>
                                            <input
                                                type="text"
                                                defaultValue={`${guest.first_name} ${guest.last_name}`}
                                                readOnly
                                                className="w-full px-3 py-2 bg-gray-100 border border-gray-300 rounded-md text-gray-800 cursor-not-allowed text-base"
                                            />
                                        </div>

                                                                        {/* Welcome Party Attendance */}
                                    <div className="mb-6">
                                                                                <label className="block text-base font-medium mb-3 font-['Almarai'] text-gray-700">
                                            Will you attend the Welcome Party? <span className="text-red-500">*</span>
                                        </label>
                                        <div className="space-y-2">
                                            <label className="flex items-center">
                                                <input
                                                    type="radio"
                                                    name={`welcome_party_${guest.id}`}
                                                    value="yes"
                                                    defaultChecked={guest.is_attending_welcome_party === true}
                                                    required
                                                    className="mr-2 text-pink-600"
                                                />
                                                <span className="text-base font-['Almarai'] text-gray-700">Yes, I&apos;ll be there!</span>
                                            </label>
                                            <label className="flex items-center">
                                                <input
                                                    type="radio"
                                                    name={`welcome_party_${guest.id}`}
                                                    value="no"
                                                    defaultChecked={guest.is_attending_welcome_party === false}
                                                    required
                                                    className="mr-2 text-pink-600"
                                                />
                                                <span className="text-base font-['Almarai'] text-gray-700">Sorry, can&apos;t make it</span>
                                            </label>
                                        </div>
                                    </div>

                                    {/* Wedding Attendance */}
                                    <div className="mb-6">
                                        <label className="block text-base font-medium mb-3 font-['Almarai'] text-gray-700">
                                            Will you attend the Wedding? <span className="text-red-500">*</span>
                                        </label>
                                        <div className="space-y-2">
                                            <label className="flex items-center">
                                                <input
                                                    type="radio"
                                                    name={`wedding_${guest.id}`}
                                                    value="yes"
                                                    defaultChecked={guest.is_attending_wedding === true}
                                                    onChange={() => handleWeddingAttendanceChange(guest.id, true)}
                                                    required
                                                    className="mr-2 text-pink-600"
                                                />
                                                <span className="text-base font-['Almarai'] text-gray-700">Yes, I&apos;ll be there!</span>
                                            </label>
                                            <label className="flex items-center">
                                                <input
                                                    type="radio"
                                                    name={`wedding_${guest.id}`}
                                                    value="no"
                                                    defaultChecked={guest.is_attending_wedding === false}
                                                    onChange={() => handleWeddingAttendanceChange(guest.id, false)}
                                                    required
                                                    className="mr-2 text-pink-600"
                                                />
                                                <span className="text-base font-['Almarai'] text-gray-700">Sorry, can&apos;t make it</span>
                                            </label>
                                        </div>
                                    </div>

                                    {/* Wedding Dinner Selection - Only show if attending wedding */}
                                    {weddingAttendance[guest.id] && (
                                        <div className="mt-6 pt-6 border-t border-gray-200 space-y-6">
                                            {/* Dinner Selection */}
                                            <div>
                                                <label className="block text-base font-medium mb-3 font-['Almarai'] text-gray-700">
                                                    Wedding Dinner Selection <span className="text-red-500">*</span>
                                                </label>
                                                <div className="space-y-2">
                                                    <label className="flex items-center">
                                                        <input
                                                            type="radio"
                                                            name={`dinner_${guest.id}`}
                                                            value="beef"
                                                            defaultChecked={guest.food_selection === 'beef'}
                                                            required
                                                            className="mr-2 text-pink-600"
                                                        />
                                                        <span className="text-base font-['Almarai'] text-gray-700">Beef</span>
                                                    </label>
                                                    <label className="flex items-center">
                                                        <input
                                                            type="radio"
                                                            name={`dinner_${guest.id}`}
                                                            value="fish"
                                                            defaultChecked={guest.food_selection === 'fish'}
                                                            required
                                                            className="mr-2 text-pink-600"
                                                        />
                                                        <span className="text-base font-['Almarai'] text-gray-700">Fish</span>
                                                    </label>
                                                    <label className="flex items-center">
                                                        <input
                                                            type="radio"
                                                            name={`dinner_${guest.id}`}
                                                            value="vegetarian"
                                                            defaultChecked={guest.food_selection === 'vegetarian'}
                                                            required
                                                            className="mr-2 text-pink-600"
                                                        />
                                                        <span className="text-base font-['Almarai'] text-gray-700">Vegetarian</span>
                                                    </label>
                                                </div>
                                            </div>

                                            {/* Dietary Restrictions */}
                                            <div>
                                                <label className="block text-base font-medium mb-3 font-['Almarai'] text-gray-700">
                                                    Dietary Restrictions
                                                </label>
                                                <textarea
                                                    name={`dietary_restrictions_${guest.id}`}
                                                    defaultValue={guest.dietary_restrictions || ''}
                                                    placeholder="Please list any allergies or dietary restrictions..."
                                                    rows={3}
                                                    className="w-full px-3 py-2 border border-gray-300 rounded-md text-gray-800 placeholder-gray-500 font-['Almarai'] text-base resize-none focus:ring-2 focus:ring-pink-500 focus:border-pink-500"
                                                />
                                            </div>
                                        </div>
                                    )}
                                </div>
                            </div>
                        ))}
                                        </div>

                    {/* Optional Information Section */}
                    <div className="bg-white/80 rounded-lg p-6 shadow-sm border border-gray-200">
                        <h3 className="text-xl font-['Alice',serif] mb-6 text-gray-800">
                            Optional Information
                        </h3>
                        
                        <div className="space-y-6">
                            {/* Where are you staying */}
                            <div>
                                <label className="block text-base font-medium mb-2 font-['Almarai'] text-gray-700">
                                    Where are you staying? (Optional)
                                </label>
                                <input
                                    type="text"
                                    name="stay"
                                    defaultValue={rsvp.stay || ''}
                                    placeholder="Hotel name, Airbnb, etc."
                                    className="w-full px-3 py-2 border border-gray-300 rounded-md text-gray-800 placeholder-gray-500 font-['Almarai'] text-base focus:ring-2 focus:ring-pink-500 focus:border-pink-500"
                                />
                            </div>

                            {/* Song request */}
                            <div>
                                <label className="block text-base font-medium mb-2 font-['Almarai'] text-gray-700">
                                    Song request for the wedding (Optional)
                                </label>
                                <input
                                    type="text"
                                    name="song"
                                    defaultValue={rsvp.song || ''}
                                    placeholder="Artist - Song Title"
                                    className="w-full px-3 py-2 border border-gray-300 rounded-md text-gray-800 placeholder-gray-500 font-['Almarai'] text-base focus:ring-2 focus:ring-pink-500 focus:border-pink-500"
                                />
                            </div>
                        </div>
                    </div>

                    {/* Submit Button */}
                    <div className="text-center space-y-4">
                        <button
                            type="submit"
                            className="bg-gray-600 hover:bg-gray-700 text-white font-['Almarai'] font-medium px-8 py-3 rounded-lg transition-colors duration-200 cursor-pointer"
                        >
                            Submit RSVP
                        </button>

                        {/* Status Messages */}
                        {state.message && (
                            <p className={`font-['Almarai'] font-medium ${
                                state.message.includes('successfully') ? 'text-green-600' : 'text-red-600'
                            }`}>
                                {state.message.includes('successfully') ? '✓ ' : '✗ '}
                                {state.message}
                            </p>
                        )}
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}