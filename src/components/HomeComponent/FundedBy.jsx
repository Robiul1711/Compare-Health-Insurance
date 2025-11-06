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
import image7 from "@/assets/images/b7.png";
import image8 from "@/assets/images/b8.png";
import image9 from "@/assets/images/b9.png";
import image10 from "@/assets/images/b10.png";
import image11 from "@/assets/images/b11.png";
import image12 from "@/assets/images/b12.png";
import { Link } from "react-router-dom";

const FundedBy = () => {
  const brands = [image1, image2, image3, image4, image5, image6, image7, image8, image9, image10, image11, image12];

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
      <Link to="/fund" className="py-2 sm:py-3 px-10 rounded-full border border-Primary text-Primary font-medium shadow-sm hover:bg-Primary hover:text-white transition-all duration-300">
        View all 12 health funds we compare
      </Link>
<div className=" sm:bg-Primary/10 rounded-2xl sm:p-6 sm:py-10  sm:shadow-sm sm:border sm:border-gray-100">
  <h3 className="text-sm sm:text-base leading-relaxed text-gray-700 font-medium ">
    <span className="block text-Secondary font-semibold text-lg lg:text-xl xl:text-2xl mb-2">Disclaimer</span>
    CompareSure operates as a white-label partner of 
    <span className="font-semibold text-Primary"> ItsMyGroup Pty Ltd (ABN 85 167 289 965)</span>. 
    The relationships with participating health funds are held directly by ItsMyGroup, which 
    administers and maintains all fund agreements. CompareSure utilises ItsMyGroup's platform 
    and services under this arrangement to provide health insurance comparison and advice to customers.
  </h3>
</div>
<h1 className="text-Secondary font-semibold text-lg lg:text-xl xl:text-2xl mb-2"> We do not compare all health funds. We compare select policies from IMG partnered funds.</h1>
    </section>
  );
};

export default FundedBy;
