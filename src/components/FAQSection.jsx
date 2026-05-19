import React, { useState } from "react";

const FAQSection = () => {
  // কোন প্রশ্নটি ওপেন থাকবে তার স্টেট (ডিফল্টভাবে প্রথমটি ওপেন থাকবে)
  const [openIndex, setOpenIndex] = useState(0);

  const faqs = [
    {
      question: "How does this posture corrector work?",
      answer:
        "A posture corrector works by providing support and gentle alignment to your shoulders, back, and spine, encouraging you to maintain proper posture throughout the day. Here's how it typically functions: A posture corrector works by providing support and gentle alignment to your shoulders.",
    },
    {
      question: "Is it suitable for all ages and body types?",
      answer:
        "Yes, our posture corrector features adjustable straps to ensure a comfortable and secure fit for various body shapes, sizes, and ages.",
    },
    {
      question: "Does it really help with back pain and posture improvement?",
      answer:
        "Absolutely. Regular use helps train your muscle memory, reducing the strain on your upper back and neck, which effectively alleviates chronic pain.",
    },
    {
      question: "Does it have smart features like vibration alerts?",
      answer:
        "This particular model focuses on premium ergonomic structural support. However, we do have smart sensor editions available in our catalog.",
    },
    {
      question: "How will I be notified when the product is back in stock?",
      answer:
        "You can sign up with your email on our product page, and our automated system will instantly notify you the moment inventory is replenished.",
    },
  ];

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="max-w-4xl mx-auto px-4 py-12 sm:py-16 flex flex-col items-center">
      {/* হেডার সেকশন */}
      <div className="text-center max-w-2xl mx-auto mb-10">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-[#033133] mb-4 tracking-tight">
          Frequently Asked Question (FAQ)
        </h2>
        <p className="text-gray-500 text-xs sm:text-sm leading-relaxed max-w-xl mx-auto">
          Enhance posture, mobility, and well-being effortlessly with Posture
          Pro. Achieve proper alignment, reduce pain, and strengthen your body
          with ease!
        </p>
      </div>

      {/* অ্যাকর্ডিয়ন বা FAQ লিস্ট */}
      <div className="w-full flex flex-col gap-3 mb-8">
        {faqs.map((faq, index) => {
          const isOpen = openIndex === index;
          return (
            <div
              key={index}
              className={`rounded-[12px] sm:rounded-[16px] transition-all duration-300 overflow-hidden border ${
                isOpen
                  ? "bg-[#E6F4F2]/50 border-[#033133]/20 shadow-sm"
                  : "bg-white border-gray-100 shadow-sm"
              }`}
            >
              {/* প্রশ্নের অংশ (ক্লিকযোগ্য টগল বাটন) */}
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full flex items-center justify-between p-4 sm:p-5 text-left font-bold text-xs sm:text-sm md:text-base text-[#033133] hover:text-[#033133]/80 transition-colors focus:outline-none"
              >
                <span className="pr-4">{faq.question}</span>
                {/* অ্যারো আইকন - ওপেন থাকলে উপরে, ক্লোজ থাকলে নিচে ঘুরবে */}
                <svg
                  className={`w-4 h-4 sm:w-5 sm:h-5 text-[#033133] shrink-0 transition-transform duration-300 ${
                    isOpen ? "transform rotate-180" : ""
                  }`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2.5"
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </button>

              {/* উত্তরের অংশ (স্মুথ অ্যানিমেশন গ্রিড এক্সপেনশন) */}
              <div
                className={`grid transition-all duration-300 ease-in-out ${
                  isOpen
                    ? "grid-rows-[1fr] opacity-100"
                    : "grid-rows-[0fr] opacity-0"
                }`}
              >
                <div className="overflow-hidden">
                  <p className="p-4 sm:p-5 pt-0 text-gray-500 text-xs sm:text-sm leading-relaxed border-t border-[#033133]/5">
                    {faq.answer}
                  </p>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* See More FAQ's বাটন সেকশন */}
      <button className="inline-flex items-center gap-2 bg-[#C2EA36] hover:bg-[#b3d92b] text-[#033133] font-bold text-xs sm:text-sm pl-5 pr-2 py-2 rounded-full transition-all duration-300 group shadow-sm">
        <span>See More FAQ's</span>
        {/* গোল ডার্ক সার্কেল এর ভেতর অ্যারো আইকন */}
        <div className="w-8 h-8 rounded-full bg-[#1A1A1A] text-white flex items-center justify-center transition-transform duration-300 group-hover:translate-x-0.5">
          <svg
            className="w-4 h-4 transform -rotate-45"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2.5"
              d="M14 5l7 7m0 0l-7 7m7-7H3"
            />
          </svg>
        </div>
      </button>
    </div>
  );
};

export default FAQSection;
