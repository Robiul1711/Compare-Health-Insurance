import React from "react";
import Marquee from "react-fast-marquee";
import Title from "../common/Title";

// Images
import image1 from "@/assets/images/b1.png";
import image2 from "@/assets/images/b2.png";
import image3 from "@/assets/images/b3.png";
import image4 from "@/assets/images/b4.png";
import image5 from "@/assets/images/b5.png";
import image6 from "@/assets/images/b6.png";

const FundedBy = () => {
  const brands = [image1, image2, image3, image4, image5, image6];

  return (
    <section className="flex flex-col items-center text-center gap-16 ">
      {/* Title */}
      {/* <Title level="title20" className="text-Secondary !font-bold">
        Funded by the world’s most innovative teams
      </Title> */}

      {/* Brand Marquee */}
      <div className="w-full overflow-hidden">
        <Marquee gradient={false} speed={40}>
          {brands.map((brand, index) => (
            <div
              key={index}
              className="mx-10 sm:mx-16 md:mx-20 lg:mx-24 flex items-center justify-center"
            >
              <img
                src={brand}
                alt={`brand-${index}`}
                className="w-[140px] h-[80px] sm:w-[160px] sm:h-[90px] md:w-[180px] md:h-[100px] object-contain"
              />
            </div>
          ))}
        </Marquee>
      </div>

      {/* Button */}
      <button className="py-2 sm:py-3 px-10 rounded-full border border-Primary text-Primary font-medium shadow-sm hover:bg-Primary hover:text-white transition-all duration-300">
        View All Health Funds
      </button>
    </section>
  );
};

export default FundedBy;
