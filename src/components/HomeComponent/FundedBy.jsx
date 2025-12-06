import React from "react";
import Marquee from "react-fast-marquee";
import { Link } from "react-router-dom";
import {useApiQuery} from "@/hooks/allCMS";


const FundedBy = ({homePageData}) => {
  // console.log(homePageData?.data?.home_hero_compare)
// const { funders, isLoading, error } = funderQuery();
const { data:funders, isLoading, error } = useApiQuery({
  queryKey: "funders",
  url: "/partners/get",
  
});
    const {
      data: disclaimer,
  
    } = useApiQuery({
      queryKey: "disclaimer",
      url: "/dynamic-page/HomePage-Disclaimer-One",
    });
 
  // const brands = [image1, image2, image3, image4, image5, image6, image7, image8, image9, image10, image11, image12, image13];

  return (
    <section className="flex flex-col items-center text-center gap-16 ">
      {/* Title */}
      {/* <Title level="title20" className="text-Secondary !font-bold">
        Funded by the world’s most innovative teams
      </Title> */}

      {/* Brand Marquee */}
      <div className="w-full overflow-hidden">
        <Marquee gradient={false} speed={40}>
          {funders?.data?.map((brand, index) => (
            <a target="_blank" href={brand?.link} rel="noopener noreferrer"

              key={index}
              className="mx-10 sm:mx-16 md:mx-20 lg:mx-24 flex items-center justify-center cursor-pointer"
            >
              {console.log(brand)}
              <img
                src={brand?.image}
                alt={`brand-${index}`}
                className="w-[140px] h-[80px] sm:w-[160px] sm:h-[90px] md:w-[180px] md:h-[100px] object-contain"
              />
            </a>
          ))}
        </Marquee>
      </div>

      {/* Button */}
      <Link
        to="/fund"
        className="py-2 sm:py-3 px-10 rounded-full border border-Primary text-Primary font-medium shadow-sm hover:bg-Primary hover:text-white transition-all duration-300"
      >
        View all {funders?.data?.length} health funds we compare
      </Link>
      <div className=" sm:bg-Primary/10 rounded-2xl sm:p-6 sm:py-10  sm:shadow-sm sm:border sm:border-gray-100">
        <h3 className="text-sm sm:text-base leading-relaxed text-gray-700 font-medium " dangerouslySetInnerHTML={{__html: disclaimer?.data?.page_content}}>
         
        </h3>
      </div>
      <h1 className="text-Secondary font-semibold text-lg lg:text-xl xl:text-2xl mb-2" dangerouslySetInnerHTML={{__html:homePageData?.data?.home_hero_compare}}>
       
      </h1>
    </section>
  );
};

export default FundedBy;
