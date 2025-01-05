import React, { useState } from "react";

interface FAQ {
  question: string;
  answer: string;
}

const FAQs: FAQ[] = [
  { question: "What's your rate for weddings or other ceremonies?", answer: "Rates vary depending on the package you choose. Contact us for details." },
  { question: "How many weddings have you played?", answer: "We have performed at over 500 weddings and ceremonies." },
  { question: "What do you typically wear?", answer: "Our team wears traditional band uniforms, perfect for weddings." },
  { question: "How many hours are included in the package?", answer: "Packages typically include 3-5 hours of performance time." },
  { question: "Do you plan to use lighting or any other special effects?", answer: "Yes, we offer lighting and effects as part of our premium packages." },
  { question: "How many band members will perform that day?", answer: "The number of band members depends on the package selected." },
  { question: "How do you handle song requests?", answer: "We encourage song requests and can customize the playlist for your event." },
  { question: "Do you keep the latest music collection?", answer: "Yes, we update our music collection regularly." },
  { question: "Are there any additional fees that could accrue?", answer: "Travel and special requests may involve extra charges." },
  { question: "Why should you hire a wedding band for a special occasion?", answer: "Live music adds a unique and unforgettable charm to your event." },
];

const FAQSection: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const toggleAccordion = (index: number): void => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className="faq-section bg-gradient-to-b from-gray-100 to-gray-200 py-12 px-4">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-10">Frequently Asked Questions</h2>
        <div className="flex flex-wrap gap-8 items-start">
          {/* Video Section */}
         
          {/* FAQ Accordion */}
          <div className="w-full md:w-1/2">
            <ul className="space-y-6">
              {FAQs.map((faq, index) => (
                <li key={index} className="border border-gray-300 rounded-lg shadow-sm overflow-hidden">
                  <button
                    onClick={() => toggleAccordion(index)}
                    className="w-full flex justify-between items-center bg-gray-100 px-6 py-4 text-left text-lg font-semibold text-gray-800 hover:bg-gray-200 focus:outline-none focus:ring focus:ring-orange-400 transition duration-300"
                  >
                    {faq.question}
                    <span className="text-orange-500 text-xl">
                      {activeIndex === index ? "-" : "+"}
                    </span>
                  </button>
                  {activeIndex === index && (
                    <div className="bg-white px-6 py-4">
                      <p className="text-gray-700">{faq.answer}</p>
                    </div>
                  )}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
