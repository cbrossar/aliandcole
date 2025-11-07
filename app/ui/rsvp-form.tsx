"use client";

import { WeddingRsvp, WeddingGuest } from "@/lib/definitions";
import { useActionState, useState, useTransition, useEffect } from "react";
import { updateRSVP } from "../data/actions";
import SuccessPopup from "./success-popup";

export default function EditRSVPForm({ rsvp }: { rsvp: WeddingRsvp }) {
  // Add CSS animation for fish swimming
  useEffect(() => {
    const style = document.createElement("style");
    style.textContent = `
      @keyframes swimRight {
        0% {
          transform: translateX(0) rotate(0deg);
          opacity: 1;
        }
        50% {
          transform: translateX(100px) rotate(10deg);
          opacity: 0.8;
        }
        100% {
          transform: translateX(200px) rotate(0deg);
          opacity: 0;
        }
      }
      @keyframes walkRight {
        0% {
          transform: translateX(0) rotate(0deg) scale(1);
          opacity: 1;
        }
        25% {
          transform: translateX(50px) rotate(-10deg) scale(1.1);
          opacity: 0.9;
        }
        50% {
          transform: translateX(100px) rotate(10deg) scale(1);
          opacity: 0.8;
        }
        75% {
          transform: translateX(150px) rotate(-5deg) scale(0.9);
          opacity: 0.6;
        }
        100% {
          transform: translateX(200px) rotate(0deg) scale(0.8);
          opacity: 0;
        }
      }
      @keyframes hopRight {
        0% {
          transform: translateX(0) translateY(0) rotate(0deg);
          opacity: 1;
        }
        20% {
          transform: translateX(40px) translateY(-10px) rotate(15deg);
          opacity: 0.9;
        }
        40% {
          transform: translateX(80px) translateY(0) rotate(-10deg);
          opacity: 0.8;
        }
        60% {
          transform: translateX(120px) translateY(-8px) rotate(10deg);
          opacity: 0.7;
        }
        80% {
          transform: translateX(160px) translateY(0) rotate(-5deg);
          opacity: 0.5;
        }
        100% {
          transform: translateX(200px) translateY(0) rotate(0deg);
          opacity: 0;
        }
      }
    `;
    document.head.appendChild(style);

    return () => {
      document.head.removeChild(style);
    };
  }, []);
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

  // Track meal selection animations
  const [mealAnimations, setMealAnimations] = useState<{
    [key: string]: string | null;
  }>({});

  const handleWeddingAttendanceChange = (
    guestId: string,
    isAttending: boolean,
  ) => {
    setWeddingAttendance((prev) => ({
      ...prev,
      [guestId]: isAttending,
    }));
  };

  const handleMealSelectionChange = (guestId: string, mealType: string) => {
    if (mealType === "fish" || mealType === "vegetarian") {
      setMealAnimations((prev) => ({
        ...prev,
        [guestId]: mealType,
      }));
      // Reset animation after 3 seconds
      setTimeout(() => {
        setMealAnimations((prev) => ({
          ...prev,
          [guestId]: null,
        }));
      }, 3000);
    }
  };

  const [formError, setFormError] = useState<string | null>(null);
  const [invalidFields, setInvalidFields] = useState<Set<string>>(new Set());
  const [showSuccessPopup, setShowSuccessPopup] = useState(false);
  const [submissionCount, setSubmissionCount] = useState(0);

  // Show success popup when form submission is successful
  useEffect(() => {
    if (state.message && state.message.includes("successfully")) {
      setShowSuccessPopup(true);
    }
  }, [submissionCount, state.message]);

  const handleCloseSuccessPopup = () => {
    setShowSuccessPopup(false);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const form = e.target as HTMLFormElement;

    // Check for missing required fields
    const missingFields: string[] = [];
    const newInvalidFields = new Set<string>();

    rsvp.guests.forEach((guest) => {
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
        missingFields.push(
          `${guest.first_name} ${guest.last_name} - Welcome Party attendance`,
        );
        newInvalidFields.add(`welcome_party_${guest.id}`);
      }

      if (!weddingField) {
        missingFields.push(
          `${guest.first_name} ${guest.last_name} - Wedding attendance`,
        );
        newInvalidFields.add(`wedding_${guest.id}`);
      }

      if (!afterPartyField) {
        missingFields.push(
          `${guest.first_name} ${guest.last_name} - After Party attendance`,
        );
        newInvalidFields.add(`after_party_${guest.id}`);
      }

      // Check Thursday dinner attendance if invited
      if (guest.is_invited_to_thursday_dinner) {
        const thursdayDinnerField = form.querySelector(
          `input[name="thursday_dinner_${guest.id}"]:checked`,
        ) as HTMLInputElement;
        if (!thursdayDinnerField) {
          missingFields.push(
            `${guest.first_name} ${guest.last_name} - Thursday Dinner attendance`,
          );
          newInvalidFields.add(`thursday_dinner_${guest.id}`);
        }
      }

      // Check dinner selection only if attending wedding
      if (weddingField?.value === "yes") {
        const dinnerField = form.querySelector(
          `select[name="dinner_${guest.id}"]`,
        ) as HTMLSelectElement;
        if (!dinnerField || dinnerField.value === "") {
          missingFields.push(
            `${guest.first_name} ${guest.last_name} - Dinner selection`,
          );
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
    setSubmissionCount((prev) => prev + 1);

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
          {/* Family Dinner Section - Only show if any guest is invited */}
          {rsvp.guests.some((guest) => guest.is_invited_to_thursday_dinner) && (
            <div className="bg-white/60 rounded-lg p-8 shadow-sm">
              <h2 className="text-2xl font-['Alice',serif] text-[#659eb2] mb-2 text-center">
                Dinner Party
              </h2>

              <div className="text-center mb-6 space-y-4">
                <div className="space-y-1">
                  <p className="text-black font-['Almarai'] text-lg">
                    Thursday, June 4, 2026 - 5pm
                  </p>
                  <p className="text-black font-['Almarai'] italic">
                    Hosted by Cole and Ali
                  </p>
                </div>
                <div className="space-y-1">
                  <p className="text-black font-['Almarai']">
                    <a
                      href="https://maps.app.goo.gl/gJx62AnpMTYKsrut9"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[#659eb2] hover:text-[#7A8A7A] underline"
                    >
                      Feriye Restaurant
                    </a>
                  </p>
                </div>
                <div className="space-y-1">
                  <p className="text-black font-['Almarai']">
                    Kindly join us for a family dinner to begin the
                    celebrations.
                  </p>
                </div>
              </div>
              <div className="border-t-2 border-gray-400 mb-6"></div>

              <div className="space-y-6">
                {rsvp.guests
                  .filter((guest) => guest.is_invited_to_thursday_dinner)
                  .map((guest: WeddingGuest, index, filteredGuests) => (
                    <div
                      key={`thursday_dinner_${guest.id}`}
                      className={`${isFieldInvalid(`thursday_dinner_${guest.id}`) ? "border-l-4 border-red-500 pl-4" : ""} ${index < filteredGuests.length - 1 ? "border-b-2 border-gray-400 pb-6" : ""}`}
                    >
                      <div className="py-3">
                        <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center space-y-3 sm:space-y-0">
                          <span className="text-black font-['Almarai']">
                            {guest.first_name} {guest.last_name}
                          </span>
                          <div className="flex flex-col sm:flex-row space-y-2 sm:space-y-0 sm:space-x-6">
                            <label className="flex items-center cursor-pointer">
                              <input
                                type="radio"
                                name={`thursday_dinner_${guest.id}`}
                                value="yes"
                                defaultChecked={
                                  guest.is_attending_thursday_dinner === true
                                }
                                className="mr-2 text-[#659eb2] focus:ring-[#659eb2]"
                              />
                              <span className="text-black font-['Almarai']">
                                Will Attend
                              </span>
                            </label>
                            <label className="flex items-center cursor-pointer">
                              <input
                                type="radio"
                                name={`thursday_dinner_${guest.id}`}
                                value="no"
                                defaultChecked={
                                  guest.is_attending_thursday_dinner === false
                                }
                                className="mr-2 text-[#659eb2] focus:ring-[#659eb2]"
                              />
                              <span className="text-black font-['Almarai']">
                                Will Not Attend
                              </span>
                            </label>
                          </div>
                        </div>
                      </div>
                      {isFieldInvalid(`thursday_dinner_${guest.id}`) && (
                        <p className="text-red-600 text-sm mt-1 font-['Almarai']">
                          Please select an option
                        </p>
                      )}
                    </div>
                  ))}
              </div>
            </div>
          )}

          {/* Welcome Party Section */}
          <div className="bg-white/60 rounded-lg p-8 shadow-sm">
            <h2 className="text-2xl font-['Alice',serif] text-[#659eb2] mb-2 text-center">
              Welcome Party
            </h2>

            <div className="text-center mb-6 space-y-4">
              <div className="space-y-1">
                <p className="text-black font-['Almarai'] text-lg">
                  Friday, June 5, 2026 - 6pm
                </p>
                <p className="text-black font-['Almarai'] italic">
                  Hosted by Rich and Laura Brossart
                </p>
              </div>
              <div className="space-y-1">
                <p className="text-black font-['Almarai']">
                  <a
                    href="https://maps.app.goo.gl/KBBq7pcw8jjvW19k6"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#659eb2] hover:text-[#7A8A7A] underline"
                  >
                    Olea Bosphorus & The Bar
                  </a>
                </p>
                <p className="text-black font-['Almarai']">Mandarin Oriental</p>
              </div>
              <div className="space-y-1">
                <p className="text-black font-['Almarai']">
                  Please join us for an evening of cocktails and hors d’oeuvres
                  along the Bosphorus as we begin our wedding celebrations.
                </p>
                <p className="text-black font-['Almarai']">
                  <span className="italic">Bosphorus Chic</span> — cocktail
                  dresses (color encouraged), summer jackets, no tie required.
                </p>
              </div>
            </div>
            <div className="border-t-2 border-gray-400 mb-6"></div>

            <div className="space-y-6">
              {rsvp.guests.map((guest: WeddingGuest, index) => (
                <div
                  key={`welcome_${guest.id}`}
                  className={`${isFieldInvalid(`welcome_party_${guest.id}`) ? "border-l-4 border-red-500 pl-4" : ""} ${index < rsvp.guests.length - 1 ? "border-b-2 border-gray-400 pb-6" : ""}`}
                >
                  <div className="py-3">
                    <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center space-y-3 sm:space-y-0">
                      <span className="text-black font-['Almarai']">
                        {guest.first_name} {guest.last_name}
                      </span>
                      <div className="flex flex-col sm:flex-row space-y-2 sm:space-y-0 sm:space-x-6">
                        <label className="flex items-center cursor-pointer">
                          <input
                            type="radio"
                            name={`welcome_party_${guest.id}`}
                            value="yes"
                            defaultChecked={
                              guest.is_attending_welcome_party === true
                            }
                            className="mr-2 text-[#659eb2] focus:ring-[#659eb2]"
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
                            className="mr-2 text-[#659eb2] focus:ring-[#659eb2]"
                          />
                          <span className="text-black font-['Almarai']">
                            Will Not Attend
                          </span>
                        </label>
                      </div>
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
            <h2 className="text-2xl font-['Alice',serif] text-[#659eb2] mb-2 text-center">
              Wedding Ceremony & Reception
            </h2>

            <div className="text-center mb-6 space-y-4">
              <div className="space-y-1">
                <p className="text-black font-['Almarai'] text-lg">
                  Saturday, June 6, 2026 - 6pm
                </p>
              </div>
              <div className="space-y-1">
                <p className="text-black font-['Almarai']">
                  <a
                    href="https://maps.app.goo.gl/EQPrtGE75U5hKj3Z9"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="underline text-[#659eb2] hover:text-[#6b7a6b] transition-colors"
                  >
                    Çırağan Palace, East Garden &amp; Bosphorus Pier Lounge
                  </a>
                </p>
              </div>
              <div className="space-y-1">
                <p className="text-black font-['Almarai']">
                  <span className="italic">Black tie</span> - celebrations are
                  planned to be outdoors, please plan your attire and packing
                  with this in mind.
                </p>
              </div>
            </div>
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
                    <div
                      className={`py-3 ${weddingAttendance[guest.id] ? "border-b border-gray-300" : ""}`}
                    >
                      <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center space-y-3 sm:space-y-0">
                        <span className="text-black font-['Almarai']">
                          {guest.first_name} {guest.last_name}
                        </span>
                        <div className="flex flex-col sm:flex-row space-y-2 sm:space-y-0 sm:space-x-6">
                          <label className="flex items-center cursor-pointer">
                            <input
                              type="radio"
                              name={`wedding_${guest.id}`}
                              value="yes"
                              defaultChecked={
                                guest.is_attending_wedding === true
                              }
                              onChange={(e) =>
                                handleWeddingAttendanceChange(
                                  guest.id,
                                  e.target.value === "yes",
                                )
                              }
                              className="mr-2 text-[#659eb2] focus:ring-[#659eb2]"
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
                              className="mr-2 text-[#659eb2] focus:ring-[#659eb2]"
                            />
                            <span className="text-black font-['Almarai']">
                              Will Not Attend
                            </span>
                          </label>
                        </div>
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
                      <div className="flex justify-between items-center py-3 border-b border-gray-300 relative">
                        <span className="!text-black font-['Almarai']">
                          Meal selection
                        </span>
                        <div className="relative">
                          <select
                            name={`dinner_${guest.id}`}
                            defaultValue={guest.food_selection || ""}
                            onChange={(e) =>
                              handleMealSelectionChange(
                                guest.id,
                                e.target.value,
                              )
                            }
                            className="bg-[#9fadb1]/50 border border-gray-300 text-black font-['Almarai'] focus:outline-none focus:ring-2 focus:ring-[#659eb2] focus:border-[#659eb2] cursor-pointer w-32 text-left rounded px-2 py-1"
                          >
                            <option value="">Select...</option>
                            <option value="beef">Beef</option>
                            <option value="fish">Fish</option>
                            <option value="vegetarian">Vegetarian</option>
                          </select>
                          {/* Fish animation */}
                          {mealAnimations[guest.id] === "fish" && (
                            <div className="absolute -top-8 -right-8">
                              <div
                                className="text-2xl"
                                style={{
                                  animation:
                                    "swimRight 3s ease-in-out forwards",
                                }}
                              >
                                🐟
                              </div>
                            </div>
                          )}

                          {/* Carrot animation */}
                          {mealAnimations[guest.id] === "vegetarian" && (
                            <div className="absolute -top-8 -right-8">
                              <div
                                className="text-2xl"
                                style={{
                                  animation: "hopRight 3s ease-in-out forwards",
                                }}
                              >
                                🥕
                              </div>
                            </div>
                          )}
                        </div>
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
            <h2 className="text-2xl font-['Alice',serif] text-[#659eb2] mb-2 text-center">
              After Party
            </h2>

            <div className="text-center mb-6 space-y-4">
              <div className="space-y-1">
                <p className="text-black font-['Almarai'] text-lg">
                  Sunday, June 7, 2026 - 12am
                </p>
              </div>
              <div className="space-y-1">
                <p className="text-black font-['Almarai']">
                  <a
                    href="https://maps.app.goo.gl/89HvXQVtudM78bNw6"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="underline text-[#659eb2] hover:text-[#6b7a6b] transition-colors"
                  >
                    Çırağan Palace, Enderun Ballroom
                  </a>
                </p>
              </div>
              <div className="space-y-1">
                <p className="text-black font-['Almarai']">
                  After the party is the after-party. This can be a game time
                  decision, we just want to know who can hang.
                </p>
              </div>
            </div>
            <div className="border-t-2 border-gray-400 mb-6"></div>

            <div className="space-y-6">
              {rsvp.guests.map((guest: WeddingGuest, index) => (
                <div
                  key={`after_party_${guest.id}`}
                  className={`${isFieldInvalid(`after_party_${guest.id}`) ? "border-l-4 border-red-500 pl-4" : ""} ${index < rsvp.guests.length - 1 ? "border-b-2 border-gray-400 pb-6" : ""}`}
                >
                  <div className="py-3">
                    <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center space-y-3 sm:space-y-0">
                      <span className="text-black font-['Almarai']">
                        {guest.first_name} {guest.last_name}
                      </span>
                      <div className="flex flex-col sm:flex-row space-y-2 sm:space-y-0 sm:space-x-6">
                        <label className="flex items-center cursor-pointer">
                          <input
                            type="radio"
                            name={`after_party_${guest.id}`}
                            value="yes"
                            defaultChecked={
                              guest.is_attending_after_party === true
                            }
                            className="mr-2 text-[#659eb2] focus:ring-[#659eb2]"
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
                            className="mr-2 text-[#659eb2] focus:ring-[#659eb2]"
                          />
                          <span className="text-black font-['Almarai']">
                            Will Not Attend
                          </span>
                        </label>
                      </div>
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
            <h2 className="text-2xl font-['Alice',serif] text-[#659eb2] mb-2 text-center">
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
                  Song request for the after party...
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
              className="bg-[#659eb2] hover:bg-[#7A8A7A] text-white font-['Almarai'] font-medium px-12 py-4 rounded-full transition-colors duration-200 cursor-pointer text-lg"
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

      {/* Success Popup */}
      <SuccessPopup
        isOpen={showSuccessPopup}
        onClose={handleCloseSuccessPopup}
      />
    </div>
  );
}
