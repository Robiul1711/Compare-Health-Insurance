export default function CodeOfConductSection() {
  const sections = [
    {
      title: "Our Promise to You",
      description:
        "We’re committed to delivering a simple, fair, and trustworthy experience every time you use our service.",
      note: "To maintain these standards, we promise to:",
      items: [
        "Be honest and clear in all information we provide.",
        "Protect your privacy and keep your personal details safe.",
        "Treat every customer fairly, with respect and professionalism.",
        "Provide accurate and current information about health funds and policies.",
        "Resolve complaints quickly and fairly, with care and transparency.",
        "Train our team members to follow the Code and uphold our values at every step.",
      ],
    },
    {
      title: "What the Code Means for You",
      description: "By following the Code, CompareSure ensures you always:",
      items: [
        "Know who you’re dealing with and how we work.",
        "Receive straightforward, easy-to-understand information.",
        "Get support from team members who are properly trained and qualified.",
        "Have confidence that your best interests are always put first.",
      ],
    },
    {
      title: "Our Partners",
        description: "Our partners are the funds which work under the private health insurance code of conduct. These include:",
      items: [
        "We only work with registered Australian health funds that comply with the private health insurance code of conduct.",
        "This ensures that every comparison we provide meets industry and ethical standards.",
      ],
      // note: "This ensures that every comparison we provide meets industry and ethical standards.",
    },
  ];

  return (
    <div className="bg-[#0A0A0A]/70 py-14 section-padding-x">
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
              {section.note && (
                <p className="text-gray-300 text-sm font-medium mt-6">
                  {section.note}
                </p>
              )}
              <ul className="space-y-3">
                {section.items.map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <span className="w-2 h-2 rounded-full bg-blue-500 mt-2 flex-shrink-0"></span>
                    <span className="text-gray-300 text-sm">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
