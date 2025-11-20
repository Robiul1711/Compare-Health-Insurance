export default function Section2and3() {
  return (
    <div className="bg-[#0A0A0A]/70 py-14 section-padding-x">

      {/* TWO COLUMN TITLE */}
      <div className="grid grid-cols-1 md:grid-cols-2 text-center mb-14">
        <h2 className="text-2xl md:text-3xl font-semibold text-white">
          2. How We Use Your Information
        </h2>
        <h2 className="text-2xl md:text-3xl font-semibold text-white mt-10 md:mt-0">
          3. Information Sharing and Disclosure
        </h2>
      </div>

      {/* TWO COLUMN CONTENT */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20 relative">

        {/* VERTICAL DIVIDER */}
        <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-px bg-white/20"></div>

        {/* LEFT COLUMN */}
        <div className="text-gray-300 space-y-6 leading-relaxed">
          <p className="text-sm">
            We use the information collected to:
          </p>

          <ul className="space-y-3 text-sm">
            {[
              "Provide health insurance quotes, comparisons, and recommendations tailored to your needs",
              "Connect you with relevant private health insurance providers",
              "Communicate with you regarding your requests, queries, or policy options",
              "Improve our website functionality, user experience, and service quality",
              "Send you updates, special offers, or industry information (only with your consent)",
              "Comply with legal and regulatory obligations under Australian law",
            ].map((item, i) => (
              <li key={i} className="flex items-start gap-3">
                <span className="w-2 h-2 rounded-full bg-blue-500 mt-2"></span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* RIGHT COLUMN */}
        <div className="text-gray-300 space-y-6 leading-relaxed md:pl-10">
          <p className="text-sm font-medium">
            We respect your privacy and will never sell or trade your personal information
          </p>

          <p className="text-sm">
            We may share your information only with:
          </p>

          <ul className="space-y-3 text-sm">
            {[
              "Trusted health insurance partners and providers, where necessary to fulfil your request for quotes or comparisons",
              "Service providers who assist in operating our business (e.g. IT support, analytics services, secure data storage), bound by confidentiality agreements",
              "Regulatory and government authorities, if required by law or to comply with regulatory obligations",
            ].map((item, i) => (
              <li key={i} className="flex items-start gap-3">
                <span className="w-2 h-2 rounded-full bg-blue-500 mt-2"></span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>

      </div>

      {/* BOTTOM CENTER NOTE */}
      <p className="text-center text-gray-300 text-sm mt-14 leading-relaxed max-w-4xl mx-auto">
        Your information will only be shared for the purposes outlined in this policy or where you have provided consent.
      </p>
    </div>
  );
}
