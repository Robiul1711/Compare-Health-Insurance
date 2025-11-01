import React from "react";
import { IoCallOutline } from "react-icons/io5";
import Title from "../common/Title";
import CommonButton from "../common/CommonButton";
import banner from "../../assets/images/banner.png";
import stars from "../../assets/images/stars.png";
const Banner = () => {
  return (
    <section className="flex flex-col items-center justify-center text-center gap-8 mt-8 sm:mt-10 md:mt-16">
      {/* Top Badge */}
      <div className="flex items-center gap-3">
        <div className="text-yellow-400 text-lg"><img src={stars} alt="" cll /></div>
        <div className="w-[2px] h-6 bg-gray-300"></div>
        <p className="text-Secondary font-medium">Top Rated by Users</p>
      </div>

      {/* Headings */}
      <Title level="title64" className="leading-tight max-w-[900px] mx-auto">
        Compare Health Insurance Plans Easily
      </Title>
      <Title
        level="title20"
        className="text-Secondary leading-relaxed"
      >
        Get the best deal for you — free comparison, expert advice, and no
        hidden fees.
      </Title>

      {/* Action Buttons */}
      <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:mt-4">
        <CommonButton variant="primary" className="flex items-center gap-2">
          <IoCallOutline className="text-lg" />
          Call Now
        </CommonButton>

        <CommonButton link={'/compare-health-insurance'} variant="secondary" className="">
          Get Your Free Comparison
        </CommonButton>
      </div>
      <img src={banner} alt="" className=" mt-5 sm:mt-10 rounded-3xl"/>
    </section>
  );
};

export default Banner;
