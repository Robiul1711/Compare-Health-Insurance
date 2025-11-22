export default function Section45() {
  return (
    <div className="bg-[#0A0A0A]/70 py-14 section-padding-x">

      {/* TWO COLUMN TITLE */}
      <div className="grid grid-cols-1 md:grid-cols-2 text-center mb-14">
        <h2 className="text-2xl md:text-3xl font-semibold text-white">
          4. Data Security and Storage
        </h2>
        <h2 className="text-2xl md:text-3xl font-semibold text-white mt-10 md:mt-0">
          5. Your Rights and Access to Information
        </h2>
      </div>

      {/* TWO COLUMN CONTENT */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20 relative">

        {/* VERTICAL DIVIDER */}
        <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-px bg-white/20"></div>

        {/* LEFT COLUMN */}
        <div className="text-gray-300 space-y-6 leading-relaxed">
          <p className="text-sm">
            Under the Privacy Act, you have the right to:
          </p>

          <ul className="space-y-3 text-sm">
            {[
              "Access personal information we hold about you",
              "Request corrections to inaccurate or outdated information",
              "Withdraw consent or request deletion of your data (subject to legal limitations)",
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
          <p className="text-sm">
            Under the Privacy Act, you have the right to:
          </p>

          <ul className="space-y-3 text-sm">
            {[
              "Access personal information we hold about you",
              "Request corrections to inaccurate or outdated information",
              "Withdraw consent or request deletion of your data (subject to legal limitations)",
            ].map((item, i) => (
              <li key={i} className="flex items-start gap-3">
                <span className="w-2 h-2 rounded-full bg-blue-500 mt-2"></span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>

      </div>

      {/* BOTTOM NOTE */}
      <p className="text-center text-gray-300 text-sm mt-14 leading-relaxed">
        To exercise these rights, please contact us using the details below.
      </p>
    </div>
  );
}
