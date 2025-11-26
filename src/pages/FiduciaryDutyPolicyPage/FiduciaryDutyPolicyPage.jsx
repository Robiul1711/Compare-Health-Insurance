import React from "react";
import bgBanner from "../../assets/images/bgBanner.png";

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
        "We guide clients through completing applications, renewals, and insurer documentation.",
        "Client questions will be answered promptly to ensure understanding.",
      ],
    },
    {
      title: "4. Assistance to Clients",
      points: [
        "Applications, renewals, or cancellations will be submitted to insurers within two business days.",
        "Staff will provide practical guidance to meet insurer requirements.",
        "Client support will always be courteous and efficient.",
      ],
    },
    {
      title: "5. Contracted Health Funds and Remuneration",
      points: [
        "Fees received are standard industry payments and do not influence the advice we provide.",
        "Clients do not pay for our services.",
        "Fees support our operations, including client support and administration.",
        "In some cases, we may share fees with approved charities or partner organisations.",
      ],
    },
    {
      title: "6. Disclosure of Fees",
      points: [
        "CompareSure is a broker paid by the insurers we represent.",
        "Fees do not influence the impartiality of our recommendations.",
        "Fees allow us to offer expert advice at no cost to most clients.",
      ],
    },
  ];

  const insurers = [
    { name: "Australian Unity", desc: "One of Australia’s oldest health funds with 170+ years of history." },
    { name: "Health Partners", desc: "A leading not-for-profit fund prioritising value and service." },
    { name: "AHM", desc: "Part of Medibank, serving over 500,000 Australians." },
    { name: "HCF", desc: "Australia’s largest not-for-profit health fund." },
    { name: "nib", desc: "Providing health insurance to over one million residents." },
    { name: "HIF", desc: "Member-focused, award-winning not-for-profit fund since 1954." },
    { name: "Hunter Health Insurance (HHI)", desc: "Affordable health cover for 65+ years." },
    { name: "HCi", desc: "Member-owned since 1938, offering personalised service." },
    { name: "RT Health", desc: "Serving essential workers for over 135 years." },
    { name: "Real Health Insurance", desc: "Distributed by Greenstone with 60+ years experience." },
    { name: "Seniors Health Insurance", desc: "Tailored cover backed by nib." },
    { name: "Frank Health Insurance", desc: "Affordable cover by GMHBA." },
    { name: "GMHBA", desc: "90+ years of trusted community-focused coverage." },
    { name: "Bupa", desc: "Bupa delivers trusted, high-quality health cover designed to help you live a longer, healthier, happier life" },
  ];

  return (
    <section
      className="bg-cover bg-center bg-no-repeat bg-fixed py-20 px-6 md:px-12 lg:px-24"
      style={{
        backgroundImage: `linear-gradient(180deg, #07192F 10%, rgba(10,20,40,0.6) 100%), url(${bgBanner})`,
      }}
    >
      {/* HEADER */}
      <div className="text-white text-center max-w-3xl mx-auto mb-20">
        <h1 className="text-3xl md:text-5xl font-bold mb-6">
          CompareSure Fiduciary Duty Policy
        </h1>
        <p className="text-gray-300 text-sm md:text-base leading-relaxed">
          At CompareSure, we are committed to integrity and prioritising our clients’ interests.
          This policy outlines our ethical responsibilities and dedication to transparency.
        </p>
      </div>

      {/* MAIN SECTIONS */}
      <div className="space-y-3 sm:space-y-6 md:space-y-12 lg:space-y-16 max-w-6xl mx-auto">
        {sections.map((sec, idx) => (
          <div
            key={idx}
            className="bg-[#081321]/70 p-10 rounded-xl border border-white/10 shadow-lg backdrop-blur-sm"
          >
            <h2 className="text-xl md:text-2xl text-white font-semibold text-center mb-10">
              {sec.title}
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 relative">
              {/* Vertical Divider */}
              <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-px bg-white/20"></div>

              {/* Left Column */}
              <div className="space-y-4 text-gray-300 text-sm leading-relaxed">
                {sec.points.slice(0, Math.ceil(sec.points.length / 2)).map((p, i) => (
                  <div key={i} className="flex gap-3">
                    <span className="w-2 h-2 rounded-full bg-blue-500 mt-2"></span>
                    {p}
                  </div>
                ))}
              </div>

              {/* Right Column */}
              <div className="space-y-4 text-gray-300 text-sm leading-relaxed">
                {sec.points.slice(Math.ceil(sec.points.length / 2)).map((p, i) => (
                  <div key={i} className="flex gap-3">
                    <span className="w-2 h-2 rounded-full bg-blue-500 mt-2"></span>
                    {p}
                  </div>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* PARTICIPATING INSURERS */}
      <div className="mt-10 lg:mt-28 text-white">
        <h2 className="text-center text-2xl md:text-3xl font-semibold mb-6">
          7. Participating Insurers
        </h2>

        <p className="text-center text-gray-300 max-w-2xl mx-auto mb-10 text-sm leading-relaxed">
          We collaborate with a trusted panel of health funds to provide reliable, ethical and transparent advice.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {insurers.map((ins, i) => (
            <div
              key={i}
              className="bg-[#0A1A2C]/80 p-6 rounded-xl border border-white/10 shadow-md hover:shadow-lg transition"
            >
              <h3 className="text-lg font-semibold text-blue-300 mb-2">{ins.name}</h3>
              <p className="text-gray-300 text-sm">{ins.desc}</p>
            </div>
          ))}
        </div>
      </div>

      {/* FOOTER */}
      <div className="mt-20 text-center text-gray-300">
        <h2 className="text-xl font-semibold text-white mb-3">Policy Review</h2>
        <p className="max-w-2xl mx-auto text-sm leading-relaxed mb-10">
          This policy is reviewed regularly to maintain compliance and uphold CompareSure’s ethical standards.
        </p>

        <h2 className="text-xl font-semibold text-white mb-3">Contact Information</h2>
        <p className="text-sm">
          For questions, visit{" "}
          <a
            href="https://www.comparesure.com.au"
            className="text-blue-400 underline"
            target="_blank"
            rel="noreferrer"
          >
            www.comparesure.com.au
          </a>
        </p>
      </div>
    </section>
  );
}
