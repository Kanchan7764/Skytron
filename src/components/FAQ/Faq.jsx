import React, { useState } from "react";

export default function Faq() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const faqs = [
    {
      question: "What is the average battery life of a drone?",
      answer:
        "Most consumer drones offer a flight time between 20 to 30 minutes per charge. Industrial drones may provide up to 60 minutes with advanced batteries.",
    },
    {
      question: "Are there any laws I need to follow to fly a drone?",
      answer:
        "Yes. In most countries, drones must be flown below 400 feet, away from airports, and always within visual line of sight. Registration and certification may be required depending on drone weight and use case.",
    },
    {
      question: "Do you offer customer support?",
      answer:
        "Absolutely! Our customer support team is available 24/7 via email and phone. We also offer live chat during business hours for quick help.",
    },
    {
      question: "Where can drones be used effectively?",
      answer:
        "Drones are widely used in agriculture, surveillance, logistics, filmmaking, inspection, and aerial mapping due to their flexibility and cost-effectiveness.",
    },
  ];

  return (
    <div className="min-h-screen bg-[#f3f6fa] px-4 py-16">
      <div className="max-w-4xl mx-auto bg-white shadow-xl rounded-2xl p-8 md:p-12">
        <h1 className="text-4xl font-extrabold text-blue-900 text-center mb-6">
          Frequently Asked Questions
        </h1>
        <p className="text-center text-gray-600 mb-10">
          Find answers to the most common questions about drones, regulations, and support.
        </p>

        {/* Dropdowns */}
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div key={index} className="border border-gray-200 rounded-lg">
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full flex justify-between items-center px-6 py-4 text-left text-lg font-semibold text-blue-800 hover:bg-blue-50 transition"
              >
                {faq.question}
                <svg
                  className={`w-5 h-5 transform transition-transform duration-300 ${
                    openIndex === index ? "rotate-180" : ""
                  }`}
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                >
                  <path d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              {openIndex === index && (
                <div className="px-6 pb-4 text-gray-700">
                  {faq.answer}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
