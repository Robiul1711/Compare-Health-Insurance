export default function PrivacyInfoSection() {
  const sections = [
    {
      title: " Information We Collect",
      description:
        "We collect personal information that you provide directly to us when you:",
      items: [
        "Request a health insurance quote",
        "Compare policies using our online tools",
        "Contact us for support, advice, or general inquiries",
        "Schedule a call with one of our consultants",
        "Subscribe to our newsletters or updates",
        "Participate in feedback, surveys, or promotions",
      ],
      note: "Contact details (phone number, email address, mailing address)",
      items2: [
        "Date of birth",
        "Health insurance history and preferences",
        "Family or relationship status (if relevant to policy comparison)",
       
        "Any other information you choose to provide",
        "We may also collect non-personal information through website analytics such as browser type, device type, and usage data via cookies (see Section 7).",

      ],
    },
    {
      title: " How We Use Your Information",
      description: "We use the information collected to:",
      items: [
        "Provide health insurance quotes, comparisons, and recommendations tailored to your needs",
        "Connect you with relevant private health insurance providers",
        "Communicate with you regarding your requests, queries, or policy options",
        "Improve our website functionality, user experience, and service quality",
        "Send you updates, special offers, or industry information (only with your consent)",
        "Comply with legal and regulatory obligations under Australian law",
      ],
    },
    {
      title: "Information Sharing and Disclosure",
      description: "We respect your privacy and will never sell or trade your personal information. We may share your information only with:",
      items: [
        "Trusted health insurance partners and providers, where necessary to fulfill your request for quotes or comparisons",
        "Service providers who assist in operating our business (e.g. IT support, analytics services, secure data storage), bound by confidentiality agreements",
        "Regulatory and government authorities, if required by law or to comply with regulatory obligations",
        "Your information will only be shared for the purposes outlined in this policy or where you have provided consent.",
        "Your information will only be shared for the purposes outlined in this policy or where you have provided consent.",
      ],
      note: "With a link to see our full privacy policy at the bottom",
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
