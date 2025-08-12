import { useState } from "react";

export default function FAQ() {
  const faqs = [
    {
      question: "What is this platform about?",
      answer:
        "Our platform connects people with surplus food to those who can use it, helping reduce food waste and support the community.",
    },
    {
      question: "Is it free to use?",
      answer:
        "Yes! Both donors and recipients can use the platform free of charge. We only ask for honesty and responsibility when using the service.",
    },
    {
      question: "How do I donate food?",
      answer:
        "Simply sign up, go to the 'Add Food' section, and fill in the details of the items you wish to donate.",
    },
    {
      question: "How can I ensure food safety?",
      answer:
        "We recommend donating food that is fresh and within safe consumption dates. Donors should follow hygiene standards during preparation and storage.",
    },
    {
      question: "Can I request specific types of food?",
      answer:
        "Yes, you can browse available foods and filter them by category to find what you need.",
    },
  ];

  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="max-w-4xl mx-auto px-4 py-16">
      <h1 className="text-3xl font-semibold text-center mb-12"
          style={{ wordSpacing: "8px" }}>
        Frequently Asked Questions
      </h1>

      <div className="space-y-4">
        {faqs.map((faq, index) => (
          <div
            key={index}
            className="border rounded-lg overflow-hidden shadow-sm"
          >
            <button
              onClick={() => toggleFAQ(index)}
              className="w-full text-left px-5 py-4 flex justify-between items-center bg-green-50 hover:bg-green-100 transition"
            >
              <span className="font-medium text-lg text-green-800">
                {faq.question}
              </span>
              <span className="text-green-600 font-bold">
                {openIndex === index ? "-" : "+"}
              </span>
            </button>
            {openIndex === index && (
              <div className="px-5 py-4 text-gray-700 bg-white border-t">
                {faq.answer}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
