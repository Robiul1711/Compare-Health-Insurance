import React from "react";

export default function FiduciaryDutyPolicyPage() {
  const sections = [
    {
      title: "1. Conflict of Interest",
      points: [
        "All staff must avoid situations where personal or financial interests could compromise client advice.",
        "If a conflict arises, it will be disclosed to the affected client as soon as practicable.",
        "We will take appropriate steps to manage or resolve conflicts to protect client interests.",
      ],
    },
    {
      title: "2. Disclosure of Status",
      points: [
        "That we are a licensed health insurance broker.",
        "That we act for the client, not the insurer.",
        "Any relationships or arrangements with insurers that could be relevant.",
        "Our professional accreditations and industry compliance.",
      ],
    },
    {
      title: "3. Enabling Informed Decisions",
      points: [
        "All communications will be clear, accurate, and in plain language.",
        "We guide clients through completing applications, renewals, and other insurer requirements.",
        "Questions from clients will be answered promptly, ensuring understanding before decisions are made.",
      ],
    },
    {
      title: "4. Assistance to Clients",
      points: [
        "Applications, renewals, or cancellations will be submitted to insurers within two business days of receipt.",
        "Staff will offer practical guidance to ensure compliance with insurer requirements.",
        "Client support will be delivered courteously and efficiently.",
      ],
    },
    {
      title: "5. Contracted Health Funds and Remuneration",
      points: [
        "Fees received are standard industry  and do not influence the advice or recommendations we provide.",
        "clients don't pay for our services.",
        "Fees support our operations, including staffing, administration, and client support.",
        "On occasion, we may share fees with approved charities, not-for-profits, or partner organisations under formal agreements.",
      ],
    },
    {
      title: "6. Disclosure of Fees",
      points: [
        "That CompareSure is a broker paid by the insurers we represent.",
        "That fees do not influence the impartiality of our advice.",
        "That fees allow us to offer expert advice at no cost to most clients.",
      ],
    },
  ];

  const insurers = [
    { name: "Australian Unity", desc: "One of Australia’s oldest health funds with 170+ years of history, and the sixth largest in the nation." },
    { name: "Health Partners", desc: "A not-for-profit fund focused on value, comprehensive cover, and excellent service across Australia." },
    { name: "AHM", desc: "Part of Medibank, serving over 500,000 Australians for more than 40 years." },
    { name: "HCF", desc: "The largest not-for-profit health fund in Australia, operating since 1932." },
    { name: "nib", desc: "Provides health and medical insurance to over one million residents in Australia and New Zealand." },
    { name: "HIF", desc: "A multi-award-winning, not-for-profit fund established in 1954 with ethical, member-first service." },
    { name: "Hunter Health Insurance (HHI)", desc: "Providing affordable health cover for over 65 years with a focus on quality and customer service." },
    { name: "HCi", desc: "Member-owned since 1938, offering personal service and comprehensive cover options." },
    { name: "RT Health", desc: "Serving hardworking Australians for over 135 years with tailored insurance options." },
    { name: "Real Health Insurance", desc: "Distributed by Greenstone under the Real Insurance brand, offering 60+ years of experience." },
    { name: "Seniors Health Insurance", desc: "Backed by nib, offering tailored hospital and extras cover for older Australians." },
    { name: "Frank Health Insurance", desc: "A GMHBA-owned not-for-profit insurer launched in 2009, offering affordable private health cover." },
    { name: "GMHBA", desc: "Established in 1934, providing 90+ years of trusted, community-focused health coverage." },
  ];

  return (
    <section className="max-w-7xl mx-auto section-padding-x section-padding-y text-gray-800">
      {/* Hero Header */}
      <div className="text-center mb-14">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold bg-gradient-to-r from-blue-700 via-sky-600 to-blue-800 text-transparent bg-clip-text mb-5 leading-tight">
          CompareSure Fiduciary Duty Policy
        </h1>
        <p className="text-gray-600 text-base sm:text-lg max-w-3xl mx-auto leading-relaxed">
          At CompareSure, we are committed to integrity and always prioritising our clients’ interests.
          This policy outlines our duties as a health insurance broker and our dedication to transparency,
          professionalism, and ethical standards in all interactions.
        </p>
      </div>

      {/* Sections */}
      <div className="space-y-10 sm:space-y-12">
        {sections.map((section, idx) => (
          <div
            key={idx}
            className="bg-gradient-to-br from-gray-50 to-white border border-gray-100 rounded-2xl shadow-sm hover:shadow-md transition-all p-6 sm:p-8"
          >
            <h2 className="text-xl sm:text-2xl font-semibold text-blue-700 mb-4 border-l-4 border-blue-600 pl-3">
              {section.title}
            </h2>
            <ul className="list-disc list-inside space-y-2 text-gray-700 leading-relaxed text-sm sm:text-base">
              {section.points.map((point, i) => (
                <li key={i}>{point}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      {/* Partner Insurers */}
      <div className="mt-16">
        <h2 className="text-2xl sm:text-3xl font-semibold text-blue-700 mb-5 text-center">
          7. Participating Insurers
        </h2>
        <p className="text-gray-700 text-center max-w-2xl mx-auto mb-10 text-sm sm:text-base leading-relaxed">
          CompareSure collaborates with a carefully selected group of trusted health funds to ensure
          our clients receive exceptional coverage and service.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {insurers.map((insurer, i) => (
            <div
              key={i}
              className="bg-white rounded-xl border border-gray-200 p-6 shadow-sm hover:shadow-lg transition-transform hover:-translate-y-1"
            >
              <h3 className="text-lg font-semibold text-blue-800 mb-2">{insurer.name}</h3>
              <p className="text-gray-600 text-sm leading-relaxed">{insurer.desc}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Footer Section */}
      <div className="mt-20 text-center border-t border-gray-200 pt-10">
        <h2 className="text-xl sm:text-2xl font-semibold text-blue-700 mb-3">
          Policy Review
        </h2>
        <p className="text-gray-700 text-sm sm:text-base mb-8 max-w-2xl mx-auto leading-relaxed">
          This policy is reviewed periodically to ensure compliance with regulations and the highest
          ethical standards in the health insurance industry.
        </p>

        <h2 className="text-xl sm:text-2xl font-semibold text-blue-700 mb-3">
          Contact Information
        </h2>
        <p className="text-gray-700 text-sm sm:text-base">
          For questions regarding this policy or our fiduciary responsibilities, please visit{" "}
          <a
            href="https://www.comparesure.com.au"
            target="_blank"
            rel="noreferrer"
            className="text-blue-600 font-medium underline hover:text-blue-800 transition-colors"
          >
            www.comparesure.com.au
          </a>
          .
        </p>
      </div>
    </section>
  );
}
