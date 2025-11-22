export default function Section45() {
  return (
    <div className="bg-[#0A0A0A]/70  section-padding-x">



      {/* TWO COLUMN CONTENT */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20 relative">

        {/* VERTICAL DIVIDER */}
        <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-px bg-white/20"></div>

        {/* LEFT COLUMN */}
        <div className="text-gray-300 space-y-6 leading-relaxed">
              <h2 className="text-2xl md:text-3xl font-semibold text-white">
          4. Data Security and Storage
        </h2>
          <p className="text-sm">
            We take reasonable steps to ensure your personal information is secure and protected from
misuse, interference, loss, unauthorised access, modification, or disclosure. This includes:

          </p>

          <ul className="space-y-3 text-sm">
            {[
              "Secure server environments",
              "Encrypted data transmission",
              "Access control and staff confidentiality agreements",
            ].map((item, i) => (
              <li key={i} className="flex items-start gap-3">
                <span className="w-2 h-2 rounded-full bg-blue-500 mt-2"></span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
          <p className="text-sm">While we strive to protect your information, no data transmission over the internet can be
guaranteed as completely secure.</p>
        </div>

        {/* RIGHT COLUMN */}
        <div className="text-gray-300 space-y-6 leading-relaxed md:pl-10">
                 <h2 className="text-2xl md:text-3xl font-semibold text-white mt-10 md:mt-0">
          5. Your Rights and Access to Information
        </h2>
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
          <p className="text-sm">To exercise these rights, please contact us using the details below.
</p>
        </div>

      </div>

 
    </div>
  );
}
