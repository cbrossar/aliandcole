"use client";

import { useState } from "react";

export default function FAQs() {
  const [openItems, setOpenItems] = useState<number[]>([]);

  const toggleItem = (index: number) => {
    setOpenItems((prev) =>
      prev.includes(index)
        ? prev.filter((item) => item !== index)
        : [...prev, index],
    );
  };

  const faqData = [
    {
      question: "Do I need a visa to visit Türkiye?",
      answer:
        "U.S. citizens do not need a visa for short tourist stays (up to 90 days within a 180-day period). Just bring your valid passport (with at least 6 months left before expiration).",
    },
    {
      question: "Why are we calling it Türkiye instead of Turkey?",
      answer:
        "In 2021, the Turkish government formally requested that the country be referred to internationally by its name in Turkish: Türkiye (pronounced Tur-kee-yeah). The United Nations and many organizations now use this spelling. You’ll still see “Turkey” in some places, but “Türkiye” is the preferred and more respectful usage.",
    },
    {
      question: "Can I bring a guest?",
      answer:
        "We are so excited to celebrate this day with our nearest and dearest, and are hoping to keep the guest list limited to those on the invitation. Thank you for understanding!",
    },
    {
      question: "Are children invited?",
      answer:
        "We look forward to celebrating with you and we love your little ones! But our ceremony and reception will be adult only events so please plan ahead.",
    },
    {
      question: "What should I wear to the wedding? Where can I rent a tuxedo?",
      answer: (
        <>
          <p className="mb-3">
            The dress code is Black Tie — long dresses and tuxedos.
          </p>
          <p className="mb-2">
            If you&apos;d like to rent a tuxedo in Istanbul, we recommend{" "}
            <a
              href="https://www.google.com/maps/place/London+Smokin/@41.0680167,28.9973979,12z/data=!4m16!1m9!3m8!1s0x14cab7127eafe3f9:0x34a8efc65dd7c07d!2sLondon+Smokin!8m2!3d41.0500078!4d28.9869859!9m1!1b1!16s%2Fg%2F11f043hnrl!3m5!1s0x14cab7127eafe3f9:0x34a8efc65dd7c07d!8m2!3d41.0500078!4d28.9869859!16s%2Fg%2F11f043hnrl?hl=tr&entry=ttu&g_ep=EgoyMDI2MDQwMS4wIKXMDSoASAFQAw%3D%3D"
              className="text-blue-600 hover:text-blue-800 underline"
              target="_blank"
              rel="noopener noreferrer"
            >
              London Smokin
            </a>
            :
          </p>
          <ul className="list-disc pl-5 mb-3 space-y-1">
            <li>
              Contact number (English-speaking): +90 553 111 7012 (Gökhan
              Aras)
            </li>
            <li>
              Ideally, visit 3 days in advance. If you go 1 day before,
              they&apos;ll do their best to accommodate, but it&apos;s a busy
              period, so the earlier, the better!
            </li>
            <li>
              They mentioned with so many people coming, it may be difficult to
              estimate timing precisely.
            </li>
            <li>
              Prices generally range between 10,000 TL and 20,000 TL.
            </li>
          </ul>
          <p>
            If you&apos;re in the US, it&apos;s often easiest to use a service
            like The Black Tux instead.
          </p>
        </>
      ),
    },
    {
      question: "What's the weather like in June?",
      answer:
        "June is one of the best months to visit Istanbul, warm, sunny, and perfect for exploring. Daytime highs are usually in the mid-70s to low-80s °F (24–28°C) with plenty of sunshine. Evenings can be cooler by the Bosphorus, dipping into the mid-60s °F (18–20°C), so we recommend bringing a light sweater, wrap, or jacket for nighttime events.",
    },
    {
      question: "Any packing tips?",
      answer:
        "Comfortable shoes for walking (Istanbul has cobblestone streets and hills), a crossbody bag for safety, and layers for evenings by the Bosphorus.",
    },
    {
      question: "What language is spoken in Türkiye?",
      answer:
        "The official language is Turkish. In Istanbul, many people in hotels, restaurants, and tourist areas speak some English, but it’s helpful (and appreciated!) to learn a few basic Turkish phrases.",
    },
    {
      question: "What currency is used in Türkiye?",
      answer: "The Turkish Lira (TL).",
    },
    {
      question: "Can I use credit cards in Istanbul?",
      answer:
        "Credit cards are accepted almost everywhere. For small purchases, tips, or street vendors, it's a good idea to carry a little Turkish Lira. Some tourist shops will accept USD, but TL is always best.",
    },
    {
      question: "Do I need an adaptor?",
      answer:
        "Yes, Türkiye uses Type C/F plugs (two round pins, 220V). Bring a travel adapter if your devices have U.S. plugs.",
    },
    {
      question: "How does shopping at the Grand Bazaar work?",
      answer:
        "The Grand Bazaar is one of the largest and oldest covered markets in the world and haggling is part of the fun! Don't be shy about negotiating, vendors expect it. A good rule of thumb is to start at about half the asking price and settle somewhere in between. Cash (Turkish Lira) is usually preferred, though some shops accept credit cards.",
    },
    {
      question: "What should I know before visiting Hagia Sophia?",
      answer:
        "Hagia Sophia is both a historic landmark and an active mosque, so modest dress is required (shoulders and knees covered). Women should bring a scarf to cover their hair, and everyone will need to remove their shoes before entering. It can get very crowded, so visiting early in the morning or later in the afternoon is best.",
    },
    {
      question: "Do I need a reservation for restaurants in Istanbul?",
      answer:
        "Reservations are generally recommended, especially at popular spots. A gratuity of around 10% is appreciated.",
    },
    {
      question: "Is public transportation easy to use?",
      answer:
        "Yes! Istanbul's subway and tram system is clean, affordable, and easy to navigate.",
    },
    {
      question: "What's the best way to take a taxi?",
      answer:
        'We recommend using the Uber app to call a yellow taxi instead of hailing one from the street. If you do hail a cab, be sure to ask the driver to turn on the meter ("takside taksimetre lütfen").',
    },
    {
      question: "Additional Questions?",
      answer: (
        <>
          Please feel free to reach out to Ali and Cole{" "}
          <a
            href="mailto:alexandra.ozmeral@gmail.com,cole.brossart@gmail.com"
            className="text-blue-600 hover:text-blue-800 underline"
          >
            here
          </a>{" "}
          if you have questions that are not listed in the FAQ&apos;s.
        </>
      ),
    },
  ];

  return (
    <div className="w-full flex flex-col items-center mb-16">
      <h1
        className="text-4xl font-['Alice',serif] font-bold mb-8 mt-12"
        style={{ color: "#659eb2" }}
      >
        FAQs
      </h1>
      <div className="w-full max-w-2xl">
        <div className="flex flex-col gap-4">
          {faqData.map((faq, index) => (
            <div
              key={index}
              className="border border-gray-200 rounded-lg overflow-hidden"
            >
              <button
                onClick={() => toggleItem(index)}
                className="w-full px-6 py-4 text-left bg-white hover:bg-gray-50 transition-colors duration-200 flex items-center justify-between"
              >
                <h2 className="text-xl font-['Alice',serif] text-gray-800 pr-4">
                  {faq.question}
                </h2>
                <div
                  className={`transform transition-transform duration-200 ${openItems.includes(index) ? "rotate-180" : "rotate-0"}`}
                >
                  <svg
                    className="w-5 h-5 text-gray-500"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </div>
              </button>
              {openItems.includes(index) && (
                <div className="px-6 pb-4 bg-white">
                  <div className="text-gray-700">{faq.answer}</div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
