import React from "react";

export default function TermsServiceSection() {
  const sections = [
    {
      title: "Acceptance of Terms",
      description:
        "By accessing or using this website, you confirm that you have read, understood, and agreed to these Terms of Service and our Privacy Policy. If you do not agree, please do not use this website.",
    },
    {
      title: "Our Role",
      description:
        "CompareSure is a comparison and referral service. We do not issue or underwrite insurance products.\n\nWhen you complete a comparison or request a call-back, we may share your details with one or more trusted partners or providers, who may contact you directly to discuss your options.",
    },
    {
      title: "User Responsibilities",
      items: [
        "Provide accurate, complete, and up-to-date information when filling out forms or comparison details.",
        "Use this website only for lawful purposes and not in a way that may damage, disable, or overburden our systems.",
        "Understand that the comparison results depend on the information you provide. Incorrect or incomplete details may affect the results shown.",
        "Make your own independent assessment before purchasing or changing any policy.",
      ],
    },
    {
      title: "Accuracy of Information",
      description:
        "We make every effort to ensure the information on our website is accurate and current. However, product details, pricing, and features may change without notice.\n\nCompareSure does not guarantee the completeness or accuracy of any information or comparison results.",
    },
    {
      title: "No Financial Advice",
      description:
        "All content provided on this website is general in nature and does not take into account your personal goals, financial situation, or needs.\n\nYou should consider whether the information is appropriate for you before making any decision, and seek professional advice if necessary.",
    },
    {
      title: "Limitation of Liability Except when required by law",
      items: [
        "The use or inability to use our website,",
        " Errors, omissions, or inaccuracies in the information provided,",
        "Any decisions or actions you take based on comparison results."
      ],
      description:
        "CompareSure, its employees, and affiliates are not liable for any loss, damage, or expense arising from:",
    },
  ];

  return (
    <div className="bg-[#0A0A0A]/70 py-14 px-6 md:px-12 lg:px-24 relative overflow-hidden">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-10 relative">
        {/* 🔹 Vertical Dividers */}
        <div className="hidden md:block absolute left-1/3 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-white to-transparent"></div>
        <div className="hidden md:block absolute left-2/3 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-white to-transparent"></div>

        {/* 🔹 Dynamic Sections */}
        {sections.map((section, i) => (
          <div key={i} className="space-y-4 text-gray-300">
            <h2 className="text-lg font-semibold text-white">
              {section.title}
            </h2>

            {section.description && (
              <p className="text-sm whitespace-pre-line leading-relaxed">
                {section.description}
              </p>
            )}

            {section.items && (
              <ul className="space-y-2 text-sm">
                {section.items.map((item, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <span className="w-2 h-2 rounded-full bg-blue-500 mt-2 flex-shrink-0"></span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
