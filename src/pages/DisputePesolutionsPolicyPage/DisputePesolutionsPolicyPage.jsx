import React from "react";

const DisputeResolutionsPolicyPage = () => {
  const sections = [
    {
      title: "1. Understanding Complaints and Disputes",
      points: [
        "Complaint: Any concern, question, or dissatisfaction a customer expresses about CompareSure’s service, advice, or processes. Complaints can be raised in writing, by email, or verbally.",
        "Dispute: If a customer is not satisfied with the response to a complaint, they can escalate it into a dispute, prompting a more formal review by senior staff.",
      ],
    },
    {
      title: "2. Why You Should Tell Us",
      points: [
        "It allows us to fix issues quickly, without cost or inconvenience to the customer.",
        "It helps prevent similar problems from happening in the future.",
        "It ensures the customer’s voice is heard and treated fairly.",
        "If a resolution is not reached internally, there are options to escalate externally.",
      ],
      note: "Even if your concern relates to a third-party service, such as an insurer’s product, we can guide you to the right channel.",
    },
    {
      title: "3. How to Raise a Concern",
      points: [
        "Email: complaints@comparesure.com.au",
        "Post: CompareSure, 2/290 Boundary Street, Spring Hill QLD 4000",
        "Phone: Call our director on 0478711733 (we will update this once we have a complaint number)",
      ],
      note: "Our team will take the details and confirm them with you to ensure accuracy before proceeding.",
    },
    {
      title: "4. How We Handle Complaints",
      content: (
        <ol className="list-decimal list-inside space-y-3 text-gray-700">
          <li>
            <strong>Step 1 – Initial Review:</strong> A staff member will record your complaint and assess whether it can be resolved immediately.
          </li>
          <li>
            <strong>Step 2 – Team Manager Review:</strong> If the issue cannot be solved straight away, it will be referred to a Team Manager who will contact you within three business days.
          </li>
          <li>
            <strong>Step 3 – Escalation to Resolutions Team:</strong> If the Team Manager cannot resolve the issue, it will be escalated to our Resolutions Team, led by the Resolutions Manager.
          </li>
        </ol>
      ),
      note: "Customers may contact the Resolutions Manager directly at complaints@comparesure.com.au if they prefer confidentiality or are dissatisfied with earlier responses.",
    },
    {
      title: "5. Outcome and Communication",
      points: [
        "We aim to provide a written response to most complaints within 10 working days.",
        "If there are delays, we will inform the customer and provide an updated timeline.",
        "Typically, most complaints are resolved within 21 working days.",
      ],
    },
    {
      title: "6. External Dispute Options",
      content: (
        <div className="space-y-2">
          <p>If a resolution is still not satisfactory, customers can escalate further:</p>
          <ul className="list-disc list-inside space-y-1">
            <li>Request a review by CompareSure’s Managing Director.</li>
            <li>
              Access free external dispute resolution via the{" "}
              <strong>Private Health Insurance Ombudsman:</strong>
            </li>
          </ul>
          <div className="border-l-4 border-blue-200 pl-4 mt-3 text-gray-700">
            <p><strong>Phone:</strong> 1300 362 072</p>
            <p><strong>Mail:</strong> GPO Box 442, Canberra ACT 2600</p>
            <p><strong>Email:</strong> info@phio.org.au</p>
            <p><strong>Website:</strong> www.ombudsman.gov.au/about/private-health-insurance</p>
          </div>
        </div>
      ),
    },
    {
      title: "7. Learning from Complaints",
      points: [
        "All complaints and disputes are documented and used to improve operations.",
        "Staff receive additional training where necessary.",
        "Policies, systems, or procedures are updated to prevent similar issues.",
      ],
      note: "Our goal is to ensure complaints are handled quickly, fairly, and transparently while continuously improving our service.",
    },
  ];

  return (
    <section className="max-w-7xl mx-auto section-padding-x section-padding-y text-gray-800">
      {/* Header */}
      <div className="text-center mb-16">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold bg-gradient-to-r from-blue-700 via-sky-600 to-blue-800 text-transparent bg-clip-text mb-6 leading-tight">
          CompareSure Complaints and Dispute Resolution Policy
        </h1>
        <p className="text-gray-600 text-base sm:text-lg max-w-3xl mx-auto leading-relaxed">
          At CompareSure, we aim to deliver clear, reliable, and professional advice to all our
          customers. We understand that sometimes things don’t go as expected. This policy explains
          how customers can raise concerns and how we handle complaints and disputes — free of
          charge, fair, and transparent.
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

            {/* Content */}
            {section.content ? (
              <div className="text-gray-700 leading-relaxed">{section.content}</div>
            ) : (
              <ul className="list-disc list-inside space-y-2 text-gray-700">
                {section.points.map((point, i) => (
                  <li key={i}>{point}</li>
                ))}
              </ul>
            )}

            {/* Note */}
            {section.note && (
              <p className="mt-4 italic text-gray-600 border-l-4 border-blue-100 pl-3">
                {section.note}
              </p>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

export default DisputeResolutionsPolicyPage;
