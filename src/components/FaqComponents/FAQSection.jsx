import React from "react";
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "@/components/ui/accordion";
import { useApiQuery } from "@/hooks/allCMS";

const bgColors = ["bg-[#F2F7FF]", "bg-[#C7DBFF]"]; // alternate colors

export default function FAQSection() {
  const { data: faqsData, isLoading, error } = useApiQuery({
    queryKey: "faqs",
    url: "/faqs",
  });

  return (
    <div className="section-padding-x py-4 md:py-10 space-y-6 sm:space-y-8 md:space-y-12">
      {faqsData?.data?.map((section, index) => (
        <div
          key={index}
          className={`${bgColors[index % bgColors.length]} rounded-3xl py-8 sm:py-12 px-4 sm:px-6 md:px-12 shadow-sm`}
        >
          {/* Section Title */}
          <h2 className="text-2xl md:text-3xl font-semibold text-center text-gray-900 mb-8">
            {section.title}
          </h2>

          {/* Accordion */}
          <div className="max-w-4xl mx-auto">
            <Accordion type="single" collapsible className="space-y-4">
              {section?.faqs?.map((item, i) => (
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
