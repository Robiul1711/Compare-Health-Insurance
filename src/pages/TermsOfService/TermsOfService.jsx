import ContactUs from "@/components/common/ContactUs";
import React from "react";
import bgBanner from "../../assets/images/bgBanner.png";
import Title from "@/components/common/Title";
import { MdVerifiedUser } from "react-icons/md";

import TermsServiceSection from "./TermsServiceSection";
import { TermsIcon } from "@/components/Icon";


const TermsOfService = () => {
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
             <TermsIcon />
            </span>
            <Title level="title48" className="py-4">
             Terms of Service
            </Title>
            <Title level="title20">Last updated: 26/10/25</Title>
            <Title level="title20" className="py-4">
            CompareSure is an independent online platform that helps users compare health insurance options from a range of providers. We provide tools and information to help you make informed decisions.
            </Title>
          </div>
        </div>

        {/* Bottom Sections */}
        <div className="w-full flex flex-col ">
          <TermsServiceSection />
          <ContactUs />
        </div>
      </div>
    </div>
  );
};

export default TermsOfService;