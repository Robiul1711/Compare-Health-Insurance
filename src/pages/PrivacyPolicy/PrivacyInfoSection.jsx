export default function PrivacyInfoSection() {
  return (
    <div className="bg-[#0A0A0A]/70 py-6 lg:py-14 section-padding-x">
      {/* SECTION TITLE */}
      <h2 className="text-center text-2xl md:text-3xl font-semibold text-white mb-14">
        1. Information We Collect
      </h2>

      {/* TWO COLUMN WRAPPER */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20 items-start relative">

        {/* VERTICAL DIVIDER */}
        <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-px bg-white/20"></div>

        {/* LEFT COLUMN */}
        <div className="text-gray-300 space-y-5 leading-relaxed">
          <p className="text-sm">
            We collect personal information that you provide directly to us when you:
          </p>

          <ul className="space-y-3 text-sm">
            {[
              "Request a health insurance quote",
              "Compare policies using our online tools",
              "Contact us for support, advice, or general inquiries",
              "Schedule a call with one of our consultants",
              "Subscribe to our newsletters or updates",
              "Participate in feedback, surveys, or promotions",
            ].map((item, i) => (
              <li key={i} className="flex items-start gap-3">
                <span className="w-2 h-2 rounded-full bg-blue-500 mt-2"></span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* RIGHT COLUMN */}
        <div className="text-gray-300 space-y-5 leading-relaxed md:pl-10">
          <p className="text-sm font-medium">
            Types of Personal Information Collected May Include:
          </p>

          <ul className="space-y-3 text-sm">
            {[
              "Full name",
              "Date of birth",
              "Contact details (phone number, email address, mailing address)",
              "Medical history",
              "Health insurance history and preferences",
              "Family or relationship status (if relevant to policy comparison)",
              "Payment or billing information if required for transactions",
              "Any other information you choose to provide",
            ].map((item, i) => (
              <li key={i} className="flex items-start gap-3">
                <span className="w-2 h-2 rounded-full bg-blue-500 mt-2"></span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* BOTTOM TEXT */}
      <p className="text-center text-gray-300 text-sm mt-14 leading-relaxed max-w-4xl mx-auto">
        We may also collect non-personal information through website analytics such as browser type, device type,
        and usage data via cookies (see Section 7).
      </p>
    </div>
  );
}
