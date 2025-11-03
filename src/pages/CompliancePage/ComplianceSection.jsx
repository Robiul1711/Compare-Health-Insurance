export default function ComplianceSection() {
  const sections = [
    {
      title: "Information We Collect",
      description:
        "CompareSure follows all relevant obligations under the Private Health Insurance Act 2007, Australian Consumer Law (ACL), and other applicable regulations.",
      items: [
        "Information provided to customers is clear, accurate, and up to date.",
        "Our comparison process is fair and unbiased.",
        "All marketing and communication meet Australian advertising and privacy requirements.",
      ],
    },
    {
      title: "Industry Alignment",
      items: [
        "We work with trusted health funds registered with the Private Health Insurance Ombudsman (PHIO).",
        "All partners comply with the Private Health Insurance Code of Conduct.",
        "We regularly review our processes to stay aligned with ethical and professional industry practices.",
      ],
    },
    {
      title: "Accuracy and Transparency",
      items: [
        "Comparison results are updated regularly using data provided by health funds.",
        {
          text: "We may receive a commission if you choose a policy through CompareSure, but:",
          subItems: [
            "This does not influence how your results are shown.",
            "Your matches are based only on your needs and preferences.",
          ],
        },
        "We aim to present every policy option clearly and without bias.",
      ],
    },
  ];

  return (
    <div className="bg-[#1F1F1F]/80 py-14 section-padding-x">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
        {/* Vertical divider lines */}
        <div className="hidden md:block absolute left-1/3 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-white to-transparent"></div>
        <div className="hidden md:block absolute left-2/3 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-white to-transparent"></div>

        {sections.map((section, index) => (
          <div key={index} className="space-y-6">
            <h2 className="text-xl font-semibold text-white mb-6">
              {section.title}
            </h2>

            <div className="space-y-4">
              {section.description && (
                <p className="text-gray-300 text-sm">{section.description}</p>
              )}

              <ul className="space-y-3">
                {section.items.map((item, i) =>
                  typeof item === "string" ? (
                    <li key={i} className="flex items-start gap-3">
                      <span className="w-2 h-2 rounded-full bg-blue-500 mt-2 flex-shrink-0"></span>
                      <span className="text-gray-300 text-sm">{item}</span>
                    </li>
                  ) : (
                    <li key={i} className="text-gray-300 text-sm space-y-2">
                      <div className="flex items-start gap-3">
                        <span className="w-2 h-2 rounded-full bg-blue-500 mt-2 flex-shrink-0"></span>
                        <span>{item.text}</span>
                      </div>
                      <ul className="pl-6 space-y-2">
                        {item.subItems.map((sub, j) => (
                          <li
                            key={j}
                            className="flex items-start gap-2 text-gray-400 text-sm"
                          >
                            <span className="w-1.5 h-1.5 rounded-full bg-gray-400 mt-2 flex-shrink-0"></span>
                            <span>{sub}</span>
                          </li>
                        ))}
                      </ul>
                    </li>
                  )
                )}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
