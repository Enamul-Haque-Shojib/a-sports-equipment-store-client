import React, { useState } from 'react';

const FaqHelp = () => {
    const faqs = [
        {
          question: "How do I add a new equipment?",
          answer: "Click on the 'Add Equipment' button on the navbar and fill in the required details.",
        },
        {
          question: "Can I update equipment details after adding?",
          answer: "Yes, go to the 'My Equipment' section, click on the item you want to edit, and update the details.",
        },
        {
          question: "Is there a fee for listing equipment?",
          answer: "No, listing equipment on our platform is completely free.",
        },
        {
          question: "How do I delete an equipment item?",
          answer: "Locate the equipment in the 'My Equipment' section and click the 'Delete' button.",
        },
        {
          question: "What types of equipment can I list?",
          answer: "You can list any sports-related equipment, including accessories, team gear, and fitness tools.",
        },
      ];
    
      // State to manage expanded FAQ items
      const [expanded, setExpanded] = useState(null);
    
      const toggleFAQ = (index) => {
        setExpanded(expanded === index ? null : index);
      };
    
      return (
        <div className="max-w-3xl mx-auto p-6 bg-gray-100 rounded-lg shadow-md">
          <h2 className="text-2xl font-bold text-center text-gray-800 mb-6">
            FAQs & Help
          </h2>
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div key={index} className="border-b border-gray-300 pb-4">
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full flex justify-between items-center text-lg text-left font-medium text-gray-700 focus:outline-none"
                >
                  {faq.question}
                  <span className="text-gray-500">
                    {expanded === index ? "-" : "+"}
                  </span>
                </button>
                {expanded === index && (
                  <p className="mt-2 text-gray-600">{faq.answer}</p>
                )}
              </div>
            ))}
          </div>
        </div>
      );
    
};

export default FaqHelp;