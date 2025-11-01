export default function CodeOfConductSection() {
  const sections = [
    {
      title: "Our Promise to You",
      description: "We’re committed to delivering a simple, fair, and trustworthy experience every time you use our service.",
      items: [
        "Your name and contact details (phone, email)",
        "Information you provide when requesting a comparison or callback",
        "Website usage data (via cookies or analytics tools)",
      ],
    },
    {
      title: "What the Code Means for You",
      description: "By following the Code, CompareSure ensures you always:",
      items: [
        "Provide comparison services and connect you with insurance providers",
        "Contact you about your inquiry or request",
        "Improve our website and user experience",
        "Comply with legal or regulatory requirements",
      ],
    },
    {
      title: "Our Partners",
    //   description: "We may share your details only with:",
      items: [
        "Our Partners",
        "Our internal support or technical service providers (if required)",
      ],
      note: "We never sell your information to third parties.",
    },
  ];

  return (
    <div className="bg-[#1F1F1F]/80 py-14 section-padding-x">
   
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
          {/* Vertical divider lines */}
          <div className="hidden md:block absolute left-1/3 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-white to-transparent"></div>
          <div className="hidden md:block absolute left-2/3 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-white to-transparent"></div>

          {/* Dynamic Columns */}
          {sections.map((section, index) => (
            <div key={index} className="space-y-6">
              <h2 className="text-xl font-semibold text-white mb-6">
                {section.title}
              </h2>

              <div className="space-y-4">
                <p className="text-gray-300 text-sm">{section.description}</p>

                <ul className="space-y-3">
                  {section.items.map((item, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <span className="w-2 h-2 rounded-full bg-blue-500 mt-2 flex-shrink-0"></span>
                      <span className="text-gray-300 text-sm">{item}</span>
                    </li>
                  ))}
                </ul>

                {section.note && (
                  <p className="text-gray-300 text-sm font-medium mt-6">
                    {section.note}
                  </p>
                )}
              </div>
            </div>
          ))}
        </div>

    </div>
  );
}
