// import React from 'react'

// function Faq() {
// function toggleFAQ(button) {
//         const content = button.nextElementSibling;
//         button.setAttribute("aria-expanded", button.getAttribute("aria-expanded") === "false" ? "true" : "false");
//         content.style.maxHeight = button.getAttribute("aria-expanded") === "true" ? content.scrollHeight + "px" : "0";
//     }
//   return (
//     <div>
//         <div className="py-24 px-8 max-w-5xl mx-auto flex flex-col md:flex-row gap-12">
//     <div className="flex flex-col text-left basis-1/2">
//         <p className="inline-block font-semibold text-primary mb-4">Insurance FAQ</p>
//         <p className="sm:text-4xl text-3xl font-extrabold text-base-content">Frequently Asked Questions</p>
//     </div>
//     <ul className="basis-1/2">
//         <li>
//             <button className="relative flex gap-2 items-center w-full py-5 text-base font-semibold text-left border-t md:text-lg border-base-content/10" aria-expanded="false" onclick="toggleFAQ(this)">
//                 <span className="flex-1 text-base-content">How secure is my insurance information?</span>
//                 <svg className="flex-shrink-0 w-4 h-4 ml-auto fill-current" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg">
//                     <rect y="7" width="16" height="2" rx="1" className="transform origin-center transition duration-200 ease-out false"></rect>
//                     <rect y="7" width="16" height="2" rx="1" className="transform origin-center rotate-90 transition duration-200 ease-out false"></rect>
//                 </svg>
//             </button>
//             <div className="transition-all duration-300 ease-in-out max-h-0 overflow-hidden" style="transition: max-height 0.3s ease-in-out 0s;">
//                 <div className="pb-5 leading-relaxed">
//                     <div className="space-y-2 leading-relaxed">We prioritize the security of your insurance information. We use advanced encryption and strict data protection measures to ensure your data is safe and confidential.</div>
//                 </div>
//             </div>
//         </li>
//         <li>
//             <button className="relative flex gap-2 items-center w-full py-5 text-base font-semibold text-left border-t md:text-lg border-base-content/10" aria-expanded="false" onclick="toggleFAQ(this)">
//                 <span className="flex-1 text-base-content">How can I customize my insurance coverage?</span>
//                 <svg className="flex-shrink-0 w-4 h-4 ml-auto fill-current" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg">
//                     <rect y="7" width="16" height="2" rx="1" className="transform origin-center transition duration-200 ease-out false"></rect>
//                     <rect y="7" width="16" height="2" rx="1" className="transform origin-center rotate-90 transition duration-200 ease-out false"></rect>
//                 </svg>
//             </button>
//             <div className="transition-all duration-300 ease-in-out max-h-0 overflow-hidden" style="transition: max-height 0.3s ease-in-out 0s;">
//                 <div className="pb-5 leading-relaxed">
//                     <div className="space-y-2 leading-relaxed">Our insurance plans are customizable. You can tailor your coverage to meet your specific needs and budget.</div>
//                 </div>
//             </div>
//         </li>
//         <li>
//             <button className="relative flex gap-2 items-center w-full py-5 text-base font-semibold text-left border-t md:text-lg border-base-content/10" aria-expanded="false" onclick="toggleFAQ(this)">
//                 <span className="flex-1 text-base-content">Is there a waiting period for insurance claims?</span>
//                 <svg className="flex-shrink-0 w-4 h-4 ml-auto fill-current" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg">
//                     <rect y="7" width="16" height="2" rx="1" className="transform origin-center transition duration-200 ease-out false"></rect>
//                     <rect y="7" width="16" height="2" rx="1" className="transform origin-center rotate-90 transition duration-200 ease-out false"></rect>
//                 </svg>
//             </button>
//             <div className="transition-all duration-300 ease-in-out max-h-0 overflow-hidden" style="transition: max-height 0.3s ease-in-out 0s;">
//                 <div className="pb-5 leading-relaxed">
//                     <div className="space-y-2 leading-relaxed">There may be a waiting period for certain insurance claims, depending on the policy terms and conditions. Please refer to your policy documents for details.</div>
//                 </div>
//             </div>
//         </li>
//     </ul>
// </div>

// {/* <script>
//     function toggleFAQ(button) {
//         const content = button.nextElementSibling;
//         button.setAttribute("aria-expanded", button.getAttribute("aria-expanded") === "false" ? "true" : "false");
//         content.style.maxHeight = button.getAttribute("aria-expanded") === "true" ? content.scrollHeight + "px" : "0";
//     }
// </script> */}

//     </div>
//   )
// }

// export default Faq

import { useState } from 'react';

function Faq() {
  const [expandedIndex, setExpandedIndex] = useState(null);

  const toggleFAQ = (index) => {
    setExpandedIndex(expandedIndex === index ? null : index);
  };

  return (
    <div className='text-white'>
      <div className="py-24 px-8 max-w-5xl mx-auto flex flex-col md:flex-row gap-12">
        <div className="flex flex-col text-left basis-1/2">
          <p className="inline-block font-semibold text-primary mb-4">Insurance FAQ</p>
          <p className="sm:text-4xl text-3xl font-extrabold text-base-content">Frequently Asked Questions</p>
        </div>
        <ul className="basis-1/2">
          {faqData.map((faq, index) => (
            <li key={index}>
              <button
                className="relative flex gap-2 items-center w-full py-5 text-base font-semibold text-left border-t md:text-lg border-base-content/10"
                aria-expanded={expandedIndex === index}
                onClick={() => toggleFAQ(index)}
              >
                <span className="flex-1 text-base-content">{faq.question}</span>
                <svg
                  className={`flex-shrink-0 w-4 h-4 ml-auto fill-current transition-transform duration-200 ${
                    expandedIndex === index ? 'rotate-90' : ''
                  }`}
                  viewBox="0 0 16 16"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <rect y="7" width="16" height="2" rx="1"></rect>
                  <rect y="7" width="16" height="2" rx="1" className="rotate-90"></rect>
                </svg>
              </button>
              <div
                className={`transition-all duration-300 ease-in-out overflow-hidden ${
                  expandedIndex === index ? 'max-h-full' : 'max-h-0'
                }`}
                style={{ maxHeight: expandedIndex === index ? `${faq.contentHeight}px` : '0' }}
              >
                <div className="pb-5 leading-relaxed">
                  <div className="space-y-2 leading-relaxed">{faq.answer}</div>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

const faqData = [
  {
    question: 'How secure is my insurance information?',
    answer:
      'We prioritize the security of your insurance information. We use advanced encryption and strict data protection measures to ensure your data is safe and confidential.',
    contentHeight: 100, // approximate height in pixels
  },
  {
    question: 'How can I customize my insurance coverage?',
    answer:
      'Our insurance plans are customizable. You can tailor your coverage to meet your specific needs and budget.',
    contentHeight: 80,
  },
  {
    question: 'Is there a waiting period for insurance claims?',
    answer:
      'There may be a waiting period for certain insurance claims, depending on the policy terms and conditions. Please refer to your policy documents for details.',
    contentHeight: 90,
  },
];

export default Faq;
