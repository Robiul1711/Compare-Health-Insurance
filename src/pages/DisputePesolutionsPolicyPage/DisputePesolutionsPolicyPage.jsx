import React from "react";
import bgBanner from "../../assets/images/bgBanner.png";
import { MdVerifiedUser } from "react-icons/md";
import Title from "@/components/common/Title";

const DisputeResolutionsPolicyPage = () => {
  const sections = [
    {
      title: "1. Understanding Complaints and Disputes",
      points: [
        "Complaint: Any concern, question, or dissatisfaction a customer expresses about CompareSure’s service, advice, or processes.",
        "Dispute: If a customer is not satisfied with the response, they can escalate it into a formal dispute handled by senior staff.",
      ],
    },
    {
      title: "2. Why You Should Tell Us",
      points: [
        "It allows us to fix issues quickly without inconvenience.",
        "It helps prevent similar problems in the future.",
        "It ensures the customer’s voice is heard and treated fairly.",
        "If a resolution is not reached internally, there are options to escalate externally.",
      ],
      note: "Even if your concern relates to a third-party service, such as an insurer, we can guide you to the right channel.",
    },
    {
      title: "3. How to Raise a Concern",
      points: [
        "Email: complaints@comparesure.com.au",
        "Post: CompareSure, 2/290 Boundary Street, Spring Hill QLD 4000",
        "Phone: Call our director on 0478711733",
      ],
      note: "Our team will confirm details with you to ensure accuracy before progressing.",
    },
    {
      title: "4. How We Handle Complaints",
      points: [
        "Step 1 – Initial Review: We assess your complaint immediately if possible.",
        "Step 2 – Team Manager Review: If not resolved, it is escalated within 3 business days.",
        "Step 3 – Resolutions Team: If needed, our Resolutions Manager handles the final review.",
      ],
      note: "You may contact the Resolutions Manager directly at complaints@comparesure.com.au for confidential handling.",
    },
    {
      title: "5. Outcome and Communication",
      points: [
        "Most complaints receive a written response within 10 working days.",
        "If delays occur, we provide an updated timeline.",
        "Most matters are resolved within 21 working days.",
      ],
    },
    {
      title: "6. External Dispute Options",
      points: [
        "Request review by CompareSure’s Managing Director.",
        "Escalate to the Private Health Insurance Ombudsman (free service).",
      ],
      extra: (
        <div className="border-l-4 border-blue-300 pl-4 text-gray-300 space-y-1">
          <p><strong>Phone:</strong> 1300 362 072</p>
          <p><strong>Mail:</strong> GPO Box 442, Canberra ACT 2600</p>
          <p><strong>Email:</strong> info@phio.org.au</p>
          <p><strong>Website:</strong> www.ombudsman.gov.au</p>
        </div>
      ),
    },
    {
      title: "7. Learning from Complaints",
      points: [
        "All complaints are documented and reviewed for improvements.",
        "Staff receive additional training when required.",
        "Policies or systems may be updated to prevent recurring issues.",
      ],
      note: "Our goal is fairness, transparency, and continuous improvement.",
    },
  ];

  return (
    <section
      className="min-h-screen bg-cover bg-center bg-no-repeat bg-fixed py-20 px-6 md:px-12 lg:px-24"
      style={{
        backgroundImage: `linear-gradient(180deg, #0A2043 10%, rgba(44,46,59,0.0) 100%), url(${bgBanner})`,
      }}
    >
      {/* TOP HEADER */}
      <div className="text-white text-center max-w-3xl mx-auto mb-10 lg:mb-20">
        <span className="flex items-center justify-center size-20 bg-blue-600 rounded-2xl mx-auto">
          <MdVerifiedUser className="text-4xl" />
        </span>

        <Title level="title48" className="py-5">
          CompareSure Complaints and Dispute Resolution Policy
        </Title>

        <Title level="title20">Last updated: 26/10/25</Title>

        <p className="text-gray-200 lg:text-lg leading-relaxed mt-6">
      At Compare Sure, we aim to deliver clear, reliable, and professional advice to all our customers. We understand that sometimes things don't go as expected. If a customer feels dissatisfied with our service or advice, we want to know and resolve it quickly.This policy explains how customers can raise concerns and how we handle complaints and disputes. It is free to use and designed to be straightforward, fair, and transparent.
        </p>
      </div>

      {/* SECTIONS — 1 COLUMN OR 2 COLUMN GRID WITH BLUE BULLETS */}
      <div className="max-w-7xl mx-auto space-y-3 lg:space-y-6">
        {sections.map((sec, i) => (
          <div
            key={i}
            className="bg-[#081321]/70 rounded-xl p-10 shadow-lg border border-white/10 backdrop-blur-sm"
          >
            {/* TITLE */}
            <h2 className="text-xl md:text-2xl font-semibold text-white text-center mb-8">
              {sec.title}
            </h2>

            {/* TWO COLUMN GRID WHEN LONG LIST */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10 relative">
              {/* VERTICAL DIVIDER */}
              <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-px bg-white/20"></div>

              {/* LEFT COLUMN */}
              <div className="space-y-4 text-gray-300 text-sm leading-relaxed">
                {sec.points?.slice(0, Math.ceil(sec.points.length / 2)).map((p, idx) => (
                  <div key={idx} className="flex gap-3">
                    <span className="w-2 h-2 rounded-full bg-blue-500 mt-2"></span>
                    {p}
                  </div>
                ))}
              </div>

              {/* RIGHT COLUMN */}
              <div className="space-y-4 text-gray-300 text-sm leading-relaxed">
                {sec.points?.slice(Math.ceil(sec.points.length / 2)).map((p, idx) => (
                  <div key={idx} className="flex gap-3">
                    <span className="w-2 h-2 rounded-full bg-blue-500 mt-2"></span>
                    {p}
                  </div>
                ))}

                {sec.extra}
              </div>
            </div>

            {/* NOTE */}
            {sec.note && (
              <p className="mt-8 text-gray-400 italic text-center">{sec.note}</p>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

export default DisputeResolutionsPolicyPage;
