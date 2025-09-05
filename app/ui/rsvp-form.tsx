"use client";

import { WeddingRsvp, WeddingGuest } from "@/lib/definitions";
import { useActionState, useState, useTransition } from "react";
import { updateRSVP } from "../data/actions";

export default function EditRSVPForm({ rsvp }: { rsvp: WeddingRsvp }) {
  const initialState = { message: "", errors: {} };
  const updateRSVPWithId = updateRSVP.bind(null, rsvp.id);
  const [state, dispatch] = useActionState(updateRSVPWithId, initialState);
  const [, startTransition] = useTransition();

  // Track wedding attendance for each guest to show/hide dinner selection
  const [weddingAttendance, setWeddingAttendance] = useState<{
    [key: string]: boolean;
  }>(
    rsvp.guests.reduce(
      (acc, guest) => {
        acc[guest.id] = guest.is_attending_wedding === true;
        return acc;
      },
      {} as { [key: string]: boolean },
    ),
  );

  const handleWeddingAttendanceChange = (
    guestId: string,
    isAttending: boolean,
  ) => {
    setWeddingAttendance((prev) => ({
      ...prev,
      [guestId]: isAttending,
    }));
  };

  const [formError, setFormError] = useState<string | null>(null);
  const [invalidFields, setInvalidFields] = useState<Set<string>>(new Set());

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const form = e.target as HTMLFormElement;

    // Check for missing required fields
    const missingFields: string[] = [];
    const newInvalidFields = new Set<string>();

    rsvp.guests.forEach((guest, index) => {
      const welcomePartyField = form.querySelector(
        `input[name="welcome_party_${guest.id}"]:checked`,
      ) as HTMLInputElement;
      const weddingField = form.querySelector(
        `input[name="wedding_${guest.id}"]:checked`,
      ) as HTMLInputElement;
      const afterPartyField = form.querySelector(
        `input[name="after_party_${guest.id}"]:checked`,
      ) as HTMLInputElement;

      if (!welcomePartyField) {
        missingFields.push(`${guest.first_name} ${guest.last_name} - Welcome Party attendance`);
        newInvalidFields.add(`welcome_party_${guest.id}`);
      }

      if (!weddingField) {
        missingFields.push(`${guest.first_name} ${guest.last_name} - Wedding attendance`);
        newInvalidFields.add(`wedding_${guest.id}`);
      }

      if (!afterPartyField) {
        missingFields.push(`${guest.first_name} ${guest.last_name} - After Party attendance`);
        newInvalidFields.add(`after_party_${guest.id}`);
      }

      // Check dinner selection only if attending wedding
      if (weddingField?.value === "yes") {
        const dinnerField = form.querySelector(
          `select[name="dinner_${guest.id}"]`,
        ) as HTMLSelectElement;
        if (!dinnerField || dinnerField.value === "") {
          missingFields.push(`${guest.first_name} ${guest.last_name} - Dinner selection`);
          newInvalidFields.add(`dinner_${guest.id}`);
        }
      }
    });

    if (missingFields.length > 0) {
      const errorMessage = `Please complete the following required fields:\n${missingFields.join("\n")}`;
      setFormError(errorMessage);
      setInvalidFields(newInvalidFields);
      return;
    }

    setFormError(null);
    setInvalidFields(new Set());
    const formData = new FormData(form);

    startTransition(() => {
      dispatch(formData);
    });
  };

  const isFieldInvalid = (fieldName: string) => invalidFields.has(fieldName);

  return (
    <div
      className="min-h-screen"
      style={{ backgroundColor: "rgb(245, 241, 235)" }}
    >
      <div className="max-w-2xl mx-auto px-6 py-12">
        <form onSubmit={handleSubmit} className="space-y-12">
          {/* Welcome Party Section */}
          <div className="bg-white/60 rounded-lg p-8 shadow-sm">
            <h2 className="text-2xl font-['Alice',serif] text-[#8E9B8E] mb-2">
              Welcome Party
            </h2>
            <div className="border-t-2 border-gray-400 mb-6"></div>

            <div className="space-y-6">
              {rsvp.guests.map((guest: WeddingGuest, index) => (
                <div
                  key={`welcome_${guest.id}`}
                  className={`${isFieldInvalid(`welcome_party_${guest.id}`) ? "border-l-4 border-red-500 pl-4" : ""} ${index < rsvp.guests.length - 1 ? "border-b-2 border-gray-400 pb-6" : ""}`}
                >
                  <div className="flex justify-between items-center py-3">
                    <span className="text-black font-['Almarai']">
                      {guest.first_name} {guest.last_name}
                    </span>
                    <div className="flex space-x-6">
                      <label className="flex items-center cursor-pointer">
                        <input
                          type="radio"
                          name={`welcome_party_${guest.id}`}
                          value="yes"
                          defaultChecked={
                            guest.is_attending_welcome_party === true
                          }
                          className="mr-2 text-[#8E9B8E] focus:ring-[#8E9B8E]"
                        />
                        <span className="text-black font-['Almarai']">
                          Will Attend
                        </span>
                      </label>
                      <label className="flex items-center cursor-pointer">
                        <input
                          type="radio"
                          name={`welcome_party_${guest.id}`}
                          value="no"
                          defaultChecked={
                            guest.is_attending_welcome_party === false
                          }
                          className="mr-2 text-[#8E9B8E] focus:ring-[#8E9B8E]"
                        />
                        <span className="text-black font-['Almarai']">
                          Will Not Attend
                        </span>
                      </label>
                    </div>
                  </div>
                  {isFieldInvalid(`welcome_party_${guest.id}`) && (
                    <p className="text-red-600 text-sm mt-1 font-['Almarai']">
                      Please select an option
                    </p>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Wedding Section */}
          <div className="bg-white/60 rounded-lg p-8 shadow-sm">
            <h2 className="text-2xl font-['Alice',serif] text-[#8E9B8E] mb-2">
              Wedding
            </h2>
            <div className="border-t-2 border-gray-400 mb-6"></div>

            <div className="space-y-6">
              {rsvp.guests.map((guest: WeddingGuest, index) => (
                <div
                  key={`wedding_${guest.id}`}
                  className={`space-y-4 ${index < rsvp.guests.length - 1 ? "border-b-2 border-gray-400 pb-6" : ""}`}
                >
                  {/* Wedding Attendance */}
                  <div
                    className={`${isFieldInvalid(`wedding_${guest.id}`) ? "border-l-4 border-red-500 pl-4" : ""}`}
                  >
                    <div className={`flex justify-between items-center py-3 ${weddingAttendance[guest.id] ? 'border-b border-gray-300' : ''}`}>
                      <span className="text-black font-['Almarai']">
                        {guest.first_name} {guest.last_name}
                      </span>
                      <div className="flex space-x-6">
                        <label className="flex items-center cursor-pointer">
                          <input
                            type="radio"
                            name={`wedding_${guest.id}`}
                            value="yes"
                            defaultChecked={guest.is_attending_wedding === true}
                            onChange={(e) =>
                              handleWeddingAttendanceChange(
                                guest.id,
                                e.target.value === "yes",
                              )
                            }
                            className="mr-2 text-[#8E9B8E] focus:ring-[#8E9B8E]"
                          />
                          <span className="text-black font-['Almarai']">
                            Will Attend
                          </span>
                        </label>
                        <label className="flex items-center cursor-pointer">
                          <input
                            type="radio"
                            name={`wedding_${guest.id}`}
                            value="no"
                            defaultChecked={
                              guest.is_attending_wedding === false
                            }
                            onChange={(e) =>
                              handleWeddingAttendanceChange(
                                guest.id,
                                e.target.value === "yes",
                              )
                            }
                            className="mr-2 text-[#8E9B8E] focus:ring-[#8E9B8E]"
                          />
                          <span className="text-black font-['Almarai']">
                            Will Not Attend
                          </span>
                        </label>
                      </div>
                    </div>
                    {isFieldInvalid(`wedding_${guest.id}`) && (
                      <p className="text-red-600 text-sm mt-1 font-['Almarai']">
                        Please select an option
                      </p>
                    )}
                  </div>

                  {/* Wedding Dinner Selection - Only show if attending wedding */}
                  {weddingAttendance[guest.id] && (
                    <div
                      className={`${isFieldInvalid(`dinner_${guest.id}`) ? "border-l-4 border-red-500 pl-4" : ""}`}
                    >
                      <div className="flex justify-between items-center py-3 border-b border-gray-300">
                        <span className="!text-black font-['Almarai']">
                          Meal selection
                        </span>
                        <select
                          name={`dinner_${guest.id}`}
                          defaultValue={guest.food_selection || ""}
                          className="bg-gray-200 border border-gray-300 text-black font-['Almarai'] focus:outline-none focus:ring-2 focus:ring-[#8E9B8E] focus:border-[#8E9B8E] cursor-pointer w-32 text-left rounded px-2 py-1"
                        >
                          <option value="">Select...</option>
                          <option value="beef">Beef</option>
                          <option value="fish">Fish</option>
                          <option value="vegetarian">Vegetarian</option>
                        </select>
                      </div>
                      {isFieldInvalid(`dinner_${guest.id}`) && (
                        <p className="text-red-600 text-sm mt-1 font-['Almarai']">
                          Please select a meal option
                        </p>
                      )}
                    </div>
                  )}

                  {/* Dietary Restrictions - Only show if attending wedding */}
                  {weddingAttendance[guest.id] && (
                    <div className="py-3">
                      <span className="!text-black font-['Almarai']">
                        Dietary restrictions?
                      </span>
                      <input
                        type="text"
                        name={`dietary_restrictions_${guest.id}`}
                        defaultValue={guest.dietary_restrictions || ""}
                        placeholder="Enter any restrictions..."
                        className="w-full mt-2 bg-transparent border-none text-black font-['Almarai'] focus:outline-none placeholder-gray-700"
                      />
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* After Party Section */}
          <div className="bg-white/60 rounded-lg p-8 shadow-sm">
            <h2 className="text-2xl font-['Alice',serif] text-[#8E9B8E] mb-2">
              After Party
            </h2>
            <div className="border-t-2 border-gray-400 mb-6"></div>

            <div className="space-y-6">
              {rsvp.guests.map((guest: WeddingGuest, index) => (
                <div
                  key={`after_party_${guest.id}`}
                  className={`${isFieldInvalid(`after_party_${guest.id}`) ? "border-l-4 border-red-500 pl-4" : ""} ${index < rsvp.guests.length - 1 ? "border-b-2 border-gray-400 pb-6" : ""}`}
                >
                  <div className="flex justify-between items-center py-3">
                    <span className="text-black font-['Almarai']">
                      {guest.first_name} {guest.last_name}
                    </span>
                    <div className="flex space-x-6">
                      <label className="flex items-center cursor-pointer">
                        <input
                          type="radio"
                          name={`after_party_${guest.id}`}
                          value="yes"
                          defaultChecked={
                            guest.is_attending_after_party === true
                          }
                          className="mr-2 text-[#8E9B8E] focus:ring-[#8E9B8E]"
                        />
                        <span className="text-black font-['Almarai']">
                          Will Attend
                        </span>
                      </label>
                      <label className="flex items-center cursor-pointer">
                        <input
                          type="radio"
                          name={`after_party_${guest.id}`}
                          value="no"
                          defaultChecked={
                            guest.is_attending_after_party === false
                          }
                          className="mr-2 text-[#8E9B8E] focus:ring-[#8E9B8E]"
                        />
                        <span className="text-black font-['Almarai']">
                          Will Not Attend
                        </span>
                      </label>
                    </div>
                  </div>
                  {isFieldInvalid(`after_party_${guest.id}`) && (
                    <p className="text-red-600 text-sm mt-1 font-['Almarai']">
                      Please select an option
                    </p>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Optional Information Section */}
          <div className="bg-white/60 rounded-lg p-8 shadow-sm">
            <h2 className="text-2xl font-['Alice',serif] text-[#8E9B8E] mb-2">
              Optional Information
            </h2>
            <div className="border-t-2 border-gray-400 mb-6"></div>

            <div className="space-y-4">
              {/* Where are you staying */}
              <div className="py-3 border-b border-gray-300">
                <span className="!text-black font-['Almarai']">
                  Where are you staying?
                </span>
                <input
                  type="text"
                  name="stay"
                  defaultValue={rsvp.stay || ""}
                  placeholder="Hotel name, Airbnb, etc."
                  className="w-full mt-2 bg-transparent border-none text-black font-['Almarai'] focus:outline-none placeholder-gray-700"
                />
              </div>

              {/* Song request */}
              <div className="py-3 border-b border-gray-300">
                <span className="!text-black font-['Almarai']">
                  Song request for the wedding
                </span>
                <input
                  type="text"
                  name="song"
                  defaultValue={rsvp.song || ""}
                  placeholder="Artist - Song Title"
                  className="w-full mt-2 bg-transparent border-none text-black font-['Almarai'] focus:outline-none placeholder-gray-700"
                />
              </div>
            </div>
          </div>

          {/* Submit Button */}
          <div className="text-center pt-8">
            <button
              type="submit"
              className="bg-[#8E9B8E] hover:bg-[#7A8A7A] text-white font-['Almarai'] font-medium px-12 py-4 rounded-full transition-colors duration-200 cursor-pointer text-lg"
            >
              Submit RSVP
            </button>

            {/* Status Messages */}
            {state.message && (
              <p
                className={`font-['Almarai'] font-medium mt-4 ${
                  state.message.includes("successfully")
                    ? "text-green-600"
                    : "text-red-600"
                }`}
              >
                {state.message.includes("successfully") ? "✓ " : "✗ "}
                {state.message}
              </p>
            )}

            {/* Form Error Message */}
            {formError && (
              <div className="text-red-600 font-['Almarai'] font-medium bg-red-50 border border-red-200 rounded-lg p-4 mt-4">
                <p className="font-semibold mb-2">
                  Please complete the following required fields:
                </p>
                <ul className="list-disc list-inside space-y-1 text-sm">
                  {formError
                    .split("\n")
                    .slice(1)
                    .map((field, index) => (
                      <li key={index}>{field}</li>
                    ))}
                </ul>
              </div>
            )}
          </div>
        </form>
      </div>
    </div>
  );
}
