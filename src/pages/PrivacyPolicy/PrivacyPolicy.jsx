import ContactUs from "@/components/common/ContactUs";
import React from "react";
import bgBanner from "../../assets/images/bgBanner.png";
import Title from "@/components/common/Title";
import { MdVerifiedUser } from "react-icons/md";
import PrivacyInfoSection from "./PrivacyInfoSection";
import Section2and3 from "./Section2and3";
import PrivacySections678 from "./PrivacySections678";

const PrivacyPolicy = () => {
  return (
    <div>
      <div
        className="min-h-screen bg-cover bg-center bg-no-repeat bg-fixed flex flex-col"
        style={{
          backgroundImage: `linear-gradient(180deg, #0A2043 10%, rgba(44, 46, 59, 0.00) 100%), url(${bgBanner})`,
        }}
      >
        {/* Main Content Container */}
        <div className="flex-1 flex flex-col items-center justify-center px-4 py-8 ">
          <div className="text-white flex flex-col items-center justify-center max-w-[750px] mx-auto text-center">
            <span className="flex items-center justify-center size-16 bg-Primary text-white rounded-2xl">
              <MdVerifiedUser className="text-3xl" />
            </span>
            <Title level="title48" className="py-4">
              Privacy Policy
            </Title>
            <Title level="title20">Last updated: 26/10/25</Title>
            <Title level="title20">Company: CompareSure Pty Ltd</Title>
            <Title level="title20">ABN: 84691309298</Title>
            <Title level="title20" className="py-4">
              CompareSure Pty Ltd ("CompareSure", "we", "us", or "our") is
              committed to protecting your privacy and handling your personal
              information in accordance with the Privacy Act 1988 (Cth) and the
              Australian Privacy Principles (APPs). This Privacy Policy explains
              how we collect, use, store, and disclose your information when you
              engage with our health insurance comparison services.
            </Title>
            <Title level="title20" className="py-4">
              By using our website, requesting a quote, or interacting with our
              services, you consent to the practices described in this Privacy
              Policy
            </Title>
          </div>
        </div>

        {/* Bottom Sections */}
        <div className="w-full flex flex-col ">
          <PrivacyInfoSection />
          <Section2and3 />
          <PrivacySections678 />
          <ContactUs />
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;

// import React from "react";

// const PrivacyPolicy = () => {
//   return (
//     <div className="  sm:py-16  sm:px-6 lg:px-8">
//       <div className="max-w-5xl mx-auto shadow-xl sm:rounded-2xl p-6 sm:p-10 md:p-14 animate-fadeIn">
//         {/* Header */}
//         <div className="text-center mb-10 border-b border-gray-200 pb-6">
//           <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-2">
//             CompareSure Privacy Policy
//           </h1>
//           <p className="text-gray-500 text-sm sm:text-base">
//             Last Updated: 26 October 2025
//           </p>
//         </div>

//         {/* Company Info */}
//         <div className="mb-8 text-gray-700 text-sm sm:text-base">
//           <p>
//             <span className="font-semibold">Company:</span> CompareSure Pty Ltd
//           </p>
//           <p>
//             <span className="font-semibold">ABN:</span> 84691309298
//           </p>
//         </div>

//         {/* Sections */}
//         {sections.map((section, index) => (
//           <section key={index} className="mb-12">
//             <h2 className="text-xl sm:text-2xl font-semibold text-gray-800 mb-4 border-l-4 border-blue-600 pl-3">
//               {section.title}
//             </h2>

//             {/* Paragraphs */}
//             {section.content.map((para, i) => (
//               <p key={i} className="text-gray-700 leading-relaxed mb-4 text-sm sm:text-base">
//                 {para}
//               </p>
//             ))}

//             {/* List */}
//             {section.list && (
//               <ul className="list-disc pl-6 space-y-2 text-gray-700 text-sm sm:text-base">
//                 {section.list.map((item, i) => (
//                   <li key={i}>{item}</li>
//                 ))}
//               </ul>
//             )}
//           </section>
//         ))}

//         {/* Contact Info */}
//         <section className="mt-12">
//           <h2 className="text-xl sm:text-2xl font-semibold text-gray-800 mb-4 border-l-4 border-blue-600 pl-3">
//             10. Contact Us
//           </h2>
//           <p className="text-gray-700 leading-relaxed text-sm sm:text-base mb-4">
//             If you have any questions, concerns, or requests related to this
//             Privacy Policy or how we handle your personal information, please
//             contact us at:
//           </p>
//           <div className="space-y-2 text-sm sm:text-base">
//             <p>
//               <span className="font-semibold">Email:</span>{" "}
//               <a
//                 href="mailto:info@comparesure.com.au"
//                 className="text-blue-600 hover:underline"
//               >
//                 info@comparesure.com.au
//               </a>
//             </p>
//             <p>
//               <span className="font-semibold">Phone:</span> 0478 711 733
//             </p>
//           </div>
//         </section>
//       </div>
//     </div>
//   );
// };

// export default PrivacyPolicy;

// // ✅ Section Data
// const sections = [
//   {
//     title: "1. Introduction",
//     content: [
//       `CompareSure Pty Ltd ("CompareSure", "we", "us", or "our") is committed to protecting your privacy and handling your personal information in accordance with the Privacy Act 1988 (Cth) and the Australian Privacy Principles (APPs).`,
//       `This Privacy Policy explains how we collect, use, store, and disclose your information when you engage with our health insurance comparison services.`,
//       `By using our website, requesting a quote, or interacting with our services, you consent to the practices described in this Privacy Policy.`,
//     ],
//   },
//   {
//     title: "2. Information We Collect",
//     content: [
//       `We collect personal information that you provide directly to us when you:`,
//     ],
//     list: [
//       "Request a health insurance quote",
//       "Compare policies using our online tools",
//       "Contact us for support, advice, or general inquiries",
//       "Schedule a call with one of our consultants",
//       "Subscribe to our newsletters or updates",
//       "Participate in feedback, surveys, or promotions",
//       "",
//       "Types of Personal Information Collected May Include:",
//       "Full name",
//       "Contact details (phone number, email address, mailing address)",
//       "Date of birth",
//       "Medical history",
//       "Health insurance history and preferences",
//       "Family or relationship status (if relevant to policy comparison)",
//       "Payment or billing information if required for transactions",
//       "Any other information you choose to provide",
//       "",
//       "We may also collect non-personal information through website analytics such as browser type, device type, and usage data via cookies (see Section 7).",
//     ],
//   },
//   {
//     title: "3. How We Use Your Information",
//     list: [
//       "Provide health insurance quotes, comparisons, and recommendations tailored to your needs",
//       "Connect you with relevant private health insurance providers",
//       "Communicate with you regarding your requests, queries, or policy options",
//       "Improve our website functionality, user experience, and service quality",
//       "Send you updates, special offers, or industry information (only with your consent)",
//       "Comply with legal and regulatory obligations under Australian law",
//     ],
//     content: [],
//   },
//   {
//     title: "4. Information Sharing and Disclosure",
//     content: [
//       "We respect your privacy and will never sell or trade your personal information.",
//       "We may share your information only with:",
//     ],
//     list: [
//       "Trusted health insurance partners and providers, where necessary to fulfill your request for quotes or comparisons",
//       "Service providers who assist in operating our business (e.g. IT support, analytics services, secure data storage), bound by confidentiality agreements",
//       "Regulatory and government authorities, if required by law or to comply with regulatory obligations",
//     ],
//   },
//   {
//     title: "5. Data Security and Storage",
//     content: [
//       "We take reasonable steps to ensure your personal information is secure and protected from misuse, interference, loss, unauthorised access, modification, or disclosure. This includes:",
//     ],
//     list: [
//       "Secure server environments",
//       "Encrypted data transmission",
//       "Access control and staff confidentiality agreements",
//       "",
//       "While we strive to protect your information, no data transmission over the internet can be guaranteed as completely secure.",
//     ],
//   },
//   {
//     title: "6. Your Rights and Access to Information",
//     content: ["Under the Privacy Act, you have the right to:"],
//     list: [
//       "Access personal information we hold about you",
//       "Request corrections to inaccurate or outdated information",
//       "Withdraw consent or request deletion of your data (subject to legal limitations)",
//       "",
//       "To exercise these rights, please contact us using the details below.",
//     ],
//   },
//   {
//     title: "7. Cookies and Website Tracking",
//     content: [
//       "Our website may use cookies and similar technologies to enhance user experience and analyse website performance.",
//       "You can disable cookies through your browser settings, however, this may affect your ability to use certain features of our website.",
//     ],
//   },
//   {
//     title: "8. Marketing Communications",
//     content: [
//       "We may send you marketing communications about health insurance products or services we believe may be relevant to you.",
//       "You can opt out at any time by clicking “unsubscribe” in the email or contacting us directly.",
//     ],
//   },
//   {
//     title: "9. Changes to This Privacy Policy",
//     content: [
//       "We may update this Privacy Policy from time to time to reflect changes in our operations or legal obligations.",
//       "Any updates will be published on our website with a revised “Last Updated” date.",
//     ],
//   },
// ];
