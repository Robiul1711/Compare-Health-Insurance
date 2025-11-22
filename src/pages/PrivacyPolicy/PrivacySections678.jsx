import React from "react";

export default function PrivacySections678() {
  const sections = [
    {
      id: 6,
      title: "6. Cookies and Website Tracking",
      content:
        "Our website may use cookies and similar technologies to enhance user experience and analyse website performance. You can disable cookies through your browser settings, however, this may affect your ability to use certain features of our website.",
    },
    {
      id: 7,
      title: "7. Marketing Communications",
      content:
        "We may send you marketing communications about health insurance products or services we believe may be relevant to you. You can opt out at any time by clicking “unsubscribe” in the email or contacting us directly.",
    },
    {
      id: 8,
      title: "8. Changes to This Privacy Policy",
      content:
        "We may update this Privacy Policy from time to time to reflect changes in our operations or legal obligations. Any updates will be published on our website with a revised “Last Updated” date.",
    },
  ];

  return (
    <div className="bg-[#0A0A0A]/70  section-padding-x">



        <div className="relative z-10">
          {sections.map((sec, idx) => (
            <section key={sec.id} className="py-6 lg:py-8 xl:py-14 section-padding-x">
              {/* centered title */}
              <h2 className="text-center text-xl md:text-2xl lg:text-3xl font-semibold text-white mb-8">
                {sec.title}
              </h2>

              {/* centered paragraph */}
              <div className="max-w-3xl mx-auto px-6">
                <p className="text-center text-sm md:text-sm text-gray-300 leading-relaxed">
                  {sec.content}
                </p>
              </div>

            </section>
          ))}
        </div>
     
    </div>
  );
}
