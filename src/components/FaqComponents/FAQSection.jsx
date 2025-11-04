import React from "react";
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "@/components/ui/accordion";

const faqData = [
  {
    title: "Health Insurance Basics",
    bg: "bg-[#F2F7FF]",
    items: [
      {
        question: "What is health insurance?",
        answer:
          "Health insurance helps cover the cost of medical treatments, hospital stays, and other healthcare services, so you don’t have to pay everything out of pocket.",
      },
      {
        question: "Why should I have private health insurance?",
        answer:
          "Private health insurance can give you more choice, faster treatment times, and access to private hospitals.",
      },
      {
        question:
          "What’s the difference between Hospital Cover and Extras Cover?",
        answer:
          "Hospital Cover helps with in-hospital treatments. Extras Cover  services like dental, optical, and physio.",
      },
      {
        question: "Can I have both Hospital and Extras Cover?",
        answer:
          "Yes. You can combine both to have more comprehensive coverage.",
      },
    ],
  },
  {
    title: "Choosing the Right Cover",
    bg: "bg-[#C7DBFF]",
    items: [
      {
        question: "How do I know which plan is right for me?",
        answer:
          "Use our comparison form — tell us a few details about your situation (single, couple, family, or single parent), and we’ll show options that fit your needs and budget.",
      },
      {
        question: "Can I compare health insurance for my family?",
        answer:
          "Yes. We can help you compare family cover options from multiple insurers.",
      },
      {
        question: "What if I already have health insurance?",
        answer:
          "We can review your current plan and see if you can save money or get better benefits.",
      },
      {
        question: "What if I have a pre-existing condition?",
        answer:
          "You can still get cover, though waiting periods may apply for pre-existing conditions.",
      },
    ],
  },
  {
    title: "CompareSure or Updating Your Cover",
    bg: "bg-[#F2F7FF]",
    items: [
      {
        question: "Can I change my health insurance anytime?",
        answer:
          "Yes. You can CompareSure anytime, and most insurers will honour your previous waiting periods if your cover stays similar.",
      },
      {
        question: "Will I lose any benefits if I CompareSure insurers?",
        answer:
          "Usually not. As long as you maintain similar cover, your waiting periods will transfer.",
      },
      {
        question: "How long does it take to CompareSure?",
        answer:
          "CompareSure typically takes less than a week once you confirm your new plan.",
      },
      {
        question: "Can CompareSure help me CompareSure plans?",
        answer:
          "Yes. We’ll handle the process and ensure your new policy activates smoothly.",
      },
    ],
  },
  {
    title: "Privacy & Contact",
    bg: "bg-[#C7DBFF]",
    items: [
      {
        question: "Is my personal information safe?",
        answer:
          "Yes. We take your privacy seriously and never share your data without permission.",
      },
      {
        question: "Will someone contact me after I submit the form?",
        answer:
          "Yes, our team may follow up to assist you with your quote or questions.",
      },
      {
        question: "Can I talk to a real person before deciding?",
        answer:
          "Absolutely. Our advisors are available by phone or chat to help you understand your options.",
      },
      {
        question: "How can I reach CompareSure?",
        answer:
          "You can contact us through our website or call our support line for immediate assistance.",
      },
    ],
  },
];

export default function FAQSection() {
  return (
    <div className="section-padding-x py-4 md:py-10 space-y-6 sm:space-y-8 md:space-y-12">
      {faqData.map((section, index) => (
        <div
          key={index}
          className={`${section.bg} rounded-3xl py-8 sm:py-12 px-4 sm:px-6 md:px-12 shadow-sm`}
        >
          {/* Section Title */}
          <h2 className="text-2xl md:text-3xl font-semibold text-center text-gray-900 mb-8">
            {section.title}
          </h2>

          {/* Accordion */}
          <div className="max-w-4xl mx-auto">
            <Accordion type="single" collapsible className="space-y-4">
              {section.items.map((item, i) => (
                <AccordionItem
                  key={i}
                  value={`item-${index}-${i}`}
                  className="border border-gray-200 rounded-xl bg-white data-[state=open]:bg-blue-100 transition-all"
                >
                  <AccordionTrigger className="text-left px-6 py-4 font-medium text-gray-900 hover:no-underline">
                    {item.question}
                  </AccordionTrigger>
                  <AccordionContent className="px-6 pb-4 text-gray-600">
                    {item.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      ))}
    </div>
  );
}
