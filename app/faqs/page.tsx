'use client';

import { useState } from 'react';

export default function FAQs() {
  const [openItems, setOpenItems] = useState<number[]>([]);

  const toggleItem = (index: number) => {
    setOpenItems(prev => 
      prev.includes(index) 
        ? prev.filter(item => item !== index)
        : [...prev, index]
    );
  };

  const faqData = [
    {
      question: "What is the wedding date?",
      answer: "June 6th, 2026"
    },
    {
      question: "What is the dress code?",
      answer: (
        <div className="space-y-2">
          <p><strong>WELCOME PARTY</strong> - white party attire</p>
          <p><strong>men:</strong> white collared shirts, white/tan pants</p>
          <p><strong>women:</strong> mid to long white dresses, sets</p>
          <p><strong>WEDDING DAY</strong> - riviera chic, formal attire</p>
          <p><strong>men:</strong> formal suit, tie optional</p>
          <p><strong>women:</strong> long formal dresses and gowns, color and texture encouraged!</p>
        </div>
      )
    },
    {
      question: "What are the travel requirements from the US to Croatia?",
      answer: "As per US Department of State website, \"U.S. passport holders do not need a visa if they are traveling to Croatia for tourism or business for less than 90 days within a 180-day period\". EU regulations require that U.S. passport holders have no less than three months' validity when they depart Croatia. U.S. passport holders with less than three months may be denied entry. The U.S. Embassy strongly suggests that you have at least six months of validity to avoid problems when you travel."
    },
    {
      question: "Can I bring a guest?",
      answer: "We are so excited to celebrate this day with our nearest and dearest, and are hoping to keep the guest list limited to those on the invitation. Thank you for understanding!"
    },
    {
      question: "Can we bring our children?",
      answer: "We look forward to celebrating with you and we love your little ones! But our ceremony and reception will be adult only events so please plan ahead."
    },
    {
      question: "What is the weather like in Dubrovnik in June?",
      answer: "Mid June is beautiful in Dubrovnik with warm and sunny days with mild evenings! The average high temperature is around 27°C (80°F), and the average low temperature is around 18°C (64°F)."
    },
    {
      question: "Additional Questions?",
      answer: "Please feel free to reach out to Iva or Cole if you have questions that are not listed in the FAQ's."
    }
  ];

  return (
    <div className="w-full flex flex-col items-center mb-16">
      <h1 className="text-4xl font-['Alice',serif] font-bold mb-8 mt-12" style={{ color: "#9fadb1" }}>FAQs</h1>
      <div className="w-full max-w-2xl">
        <div className="flex flex-col gap-4">
          {faqData.map((faq, index) => (
            <div key={index} className="border border-gray-200 rounded-lg overflow-hidden">
              <button
                onClick={() => toggleItem(index)}
                className="w-full px-6 py-4 text-left bg-white hover:bg-gray-50 transition-colors duration-200 flex items-center justify-between"
              >
                <h2 className="text-xl font-['Alice',serif] text-gray-800 pr-4">
                  {faq.question}
                </h2>
                <div className={`transform transition-transform duration-200 ${openItems.includes(index) ? 'rotate-180' : 'rotate-0'}`}>
                  <svg className="w-5 h-5 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </div>
              </button>
              {openItems.includes(index) && (
                <div className="px-6 pb-4 bg-gray-50">
                  <div className="text-gray-700">
                    {faq.answer}
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
