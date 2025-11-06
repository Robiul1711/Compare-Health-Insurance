export default function PrivacyInfoSection() {
  const sections = [
    {
      title: "Information We Collect",
      description:
        "How personal information is collected:",
      items: [
        "Request a health insurance quote",
        "Compare policies using our online tools",
        "Contact us for support, advice, or general inquiries",
        "Schedule a call with one of our consultants",
        "Subscribe to our newsletters or updates",
        "Participate in feedback, surveys, or promotions",
      ],

    },
    {
      title: "How We Use Your Information",
      description: "We use your information to:",
      items: [
        "Provide comparison services and connect you with insurance providers",
        "Contact you about your inquiry or request",
        "Improve our website and user experience",
        "Comply with legal or regulatory requirements",
       
      ],
    },
    {
      title: "Examples of personal information:",
      // description: "We respect your privacy and will never sell or trade your personal information. We may share your information only with:",
      items: [
        "Medical history (e.g. past illnesses, surgeries, injuries)",
        "Date of birth",
        "Health insurance history and preferences",
        "Family or relationship status (if relevant to policy comparison)",
        "Any other information you choose to provide",
        "We may also collect non-personal information through website analytics such as browser type, device type, and usage data via cookies",
      ],
   
    },
    {
      title: "Sharing Your Information",
      description: "We may share your details only with:",
      items: [
        "Trusted insurance partners to complete your comparison",
        "Our internal support or technical service providers (if required) We never sell your information to third parties.",
        "Regulatory and government authorities, if required by law or to comply with regulatory obligations",
       
      ],

    },
  ];

  return (
    <div className="bg-[#1F1F1F]/80 py-14 section-padding-x ">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 relative max-w-6xl mx-auto w-full">
        {/* Vertical divider lines */}
        <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-white to-transparent"></div>
        {/* <div className="hidden md:block absolute left-2/3 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-white to-transparent"></div> */}

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
              {section.items2 && (
                <ul className="space-y-3">
                  {section.items2.map((item, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <span className="w-2 h-2 rounded-full bg-blue-500 mt-2 flex-shrink-0"></span>
                      <span className="text-gray-300 text-sm">{item}</span>
                    </li>
                  ))}
                </ul>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
