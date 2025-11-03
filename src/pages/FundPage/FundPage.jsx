import Title from "@/components/common/Title";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

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
import FindPlan from "@/components/HomeComponent/FindPlan";

const FundPage = () => {
  const brands = [
    {
      id: 1,
      image: image1,
      name: "GMHBA",
      Description:
        "GMHBA — Established in 1934, GMHBA is a not-for-profit, member-based health fund that has supported the wellbeing of its members and communities for 90 years.",
    },
    {
      id: 2,
      image: image2,
      name: "Hunter Health Insurance (HHI)",
      Description:
        " HHI by CDH Benefits Fund has operated for over 65 years, providing cost-effective health cover for singles and families, with a focus on quality cover and excellent customer service.",
    },
    {
      id: 3,
      image: image3,
      name: "RT Health",
      Description:
        " RT Health offers health insurance tailored to hardworking Australians and everyday Aussies, backed by over 135 years of combined experience and award-winning service.",
    },
    {
      id: 4,
      image: image4,
      name: "Frank Health Insurance",
      Description:
        " Launched in 2009, Frank offers straightforward, affordable private health cover options. It is part of GMHBA Limited, a not-for-profit insurer with over 80 years of experience.",
    },
    {
      id: 5,
      image: image5,
      name: "HCi",
      Description:
        " HCi has provided value-for-money health cover since 1938. As a not-for-profit, member-owned fund, HCi offers comprehensive health insurance options with a high level of personal service.",
    },
    {
      id: 6,
      image: image6,
      name: "AHM",
      Description:
        "AHM  ahm is part of Medibank and has served over 500,000 Australians over the past 40 years, supporting a local success story and Australian company.",
    },
    {
      id: 7,
      image: image7,
      name: "Health Partners",
      Description:
        " As a not-for-profit health fund, Health Partners focuses on giving back to its members. They provide better value for money, comprehensive health cover, and strong customer service across Australia.",
    },
    {
      id: 8,
      image: image8,
      name: "Real Health Insurance",
      Description:
        " Issued by nib Health Funds Limited and distributed by Greenstone Financial Services under the Real Insurance brand, Real Health Insurance provides flexible cover with over 60 years of experience, tailored to individual needs.",
    },
    {
      id: 9,
      image: image9,
      name: "Australian Unity",
      Description:
        " Australian Unity's history dates back more than 170 years, making it one of the nation's oldest health funds. It is the sixth largest health fund in Australia.",
    },
    {
      id: 10,
      image: image10,
      name: "HCF",
      Description:
        " HCF is the largest not-for-profit health fund and third largest overall in Australia. It was formed in 1932 when the Hospitals Saturday Fund merged with the Hospital Commission of NSW.",
    },
    {
      id: 11,
      image: image11,
      name: "HIF",
      Description:
        " HIF is a multi-award-winning, not-for-profit health fund operating since 1954. HIF prioritises ethical, member-focused service and gives members freedom to choose their healthcare providers.",
    },
    {
      id: 12,
      image: image12,
      name: "nib",
      Description:
        " nib is one of Australia's fastest-growing health insurers, providing health and medical insurance to over one million Australian and New Zealand residents. They also cover more than 130,000 international students and workers in Australia.",
    },
  ];

  const [hoveredBrand, setHoveredBrand] = useState(null);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [activeBrand, setActiveBrand] = useState(null);

  const handleMouseMove = (e) => {
    setMousePos({ x: e.clientX, y: e.clientY });
  };

  const handleBrandClick = (brand) => {
    if (activeBrand?.id === brand.id) {
      setActiveBrand(null);
    } else {
      setActiveBrand(brand);
    }
  };

  const handleBrandHover = (brand) => {
    setHoveredBrand(brand);
  };

  const handleBrandLeave = () => {
    setHoveredBrand(null);
  };

  const isMobile = typeof window !== "undefined" && window.innerWidth < 768;

  return (
    <div>
      <div className="section-padding-x py-10 sm:py-12 md:py-16 lg:py-20 relative">
        {/* Title Section */}
        <div className="max-w-[790px] mx-auto text-center flex flex-col items-center gap-4">
          <Title level="title48">We Compare Leading Health Funds</Title>
          <Title level="title20">
            We partner with a range of trusted health insurance providers to
            help you find the right cover for your needs — all in one place.
          </Title>
        </div>

        {/* Brand Grid */}
        <div className="mt-10 sm:mt-12 md:mt-16 grid grid-cols-1 xs:grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-8 place-items-center">
          {brands.map((brand) => (
            <div
              key={brand.id}
              className="relative flex flex-col items-center text-center"
              onMouseEnter={() => handleBrandHover(brand)}
              onMouseLeave={handleBrandLeave}
              onMouseMove={handleMouseMove}
              onClick={() => handleBrandClick(brand)}
            >
              <img
                src={brand.image}
                alt={`brand-${brand.id}`}
                className="w-[140px] h-[80px] sm:w-[160px] sm:h-[90px] md:w-[180px] md:h-[100px] object-contain transition-transform duration-300 hover:scale-105 cursor-pointer"
              />
              
              {/* Mobile Description Card */}
              {isMobile && activeBrand?.id === brand.id && (
                <motion.div
                  className="absolute top-full left-1/2 transform -translate-x-1/2 mt-4 w-80 rounded-xl bg-white border border-gray-200 shadow-lg z-50"
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                >
                  <div className="p-4">
                    <img
                      src={activeBrand.image}
                      alt="brand-logo"
                      className="w-16 h-10 object-contain mb-2 mx-auto"
                    />
                    <h3 className="mb-1 text-lg font-bold dark:text-[#abc2d3] text-gray-700 mt-4">
                      {activeBrand.name}
                    </h3>
                    <p className="text-sm text-Secondary font-bold">
                      {activeBrand.Description}
                    </p>
                    <button
                      className="mt-3 text-sm text-blue-600 font-medium"
                      onClick={(e) => {
                        e.stopPropagation();
                        setActiveBrand(null);
                      }}
                    >
                      Close
                    </button>
                  </div>
                </motion.div>
              )}
            </div>
          ))}
        </div>

        {/* Desktop Tooltip Popup */}
        <AnimatePresence>
          {!isMobile && hoveredBrand && (
            <motion.div
              key={hoveredBrand.id}
              className="fixed z-50 w-80 rounded-xl backdrop-blur-lg bg-white/70 border border-white/30 shadow-lg overflow-hidden pointer-events-none"
              style={{
                top: mousePos.y + 20,
                left: mousePos.x - 50,
              }}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.8 }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
            >
              <div className="p-4">
                <img
                  src={hoveredBrand.image}
                  alt="brand-logo"
                  className="w-16 h-10 object-contain mb-2 mx-auto"
                />
                <h3 className="mb-1 text-lg font-bold dark:text-[#abc2d3] text-gray-700 mt-4">
                  {hoveredBrand.name}
                </h3>
                <p className="text-sm text-Secondary font-bold">
                  {hoveredBrand.Description}
                </p>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Mobile Overlay */}
        {isMobile && activeBrand && (
          <div 
            className="fixed inset-0 bg-black/20 z-40 md:hidden"
            onClick={() => setActiveBrand(null)}
          />
        )}
      </div>
      <FindPlan />
    </div>
  );
};

export default FundPage;