import ContactUs from "@/components/common/ContactUs";
import React from "react";
import bgBanner from "../../assets/images/bgBanner.png";
import Title from "@/components/common/Title";

import { DisclaimerIcon } from "@/components/Icon";
import ComplianceSection from "./ComplianceSection";
import { MdVerifiedUser } from "react-icons/md";



const Compliance = () => {
  return (
    <div>
      <div
        className="min-h-screen bg-cover bg-center bg-no-repeat flex flex-col"
        style={{
          backgroundImage: `linear-gradient(180deg, #0A2043 10%, rgba(44, 46, 59, 0.00) 100%), url(${bgBanner})`,
        }}
      >
        {/* Main Content Container */}
        <div className="flex-1 flex flex-col items-center justify-center px-4 py-8">
          <div className="text-white flex flex-col items-center justify-center max-w-[750px] mx-auto text-center">
            <span className="flex items-center justify-center size-16 bg-Primary text-white rounded-2xl">
               <MdVerifiedUser className="text-3xl" />
            </span>
            <Title level="title48" className="py-4">
      Compliance
            </Title>
            <Title level="title20">Last updated: 26/10/25</Title>
            <Title level="title20" className="py-4">At CompareSure, we take compliance and transparency seriously. Our goal is to help Australians make informed decisions about their health insurance through honest, accurate, and ethical practices.</Title>

          </div>
        </div>

        {/* Bottom Sections */}
        <div className="w-full flex flex-col ">
   <ComplianceSection />
          <ContactUs />
        </div>
      </div>
    </div>
  );
};

export default Compliance;