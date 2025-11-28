import React, { useEffect, useRef } from "react";
import { IoCallOutline } from "react-icons/io5";
import Title from "../common/Title";
import CommonButton from "../common/CommonButton";
import banner from "../../assets/images/banner.png";
import stars from "../../assets/images/stars.png";
import gsap from "gsap";


const Banner = ({homePageData}) => {

  console.log(homePageData?.data);
  const badgeRef = useRef(null);
  const mainTitleRef = useRef(null);
  const subtitleRef = useRef(null);
  const buttonsRef = useRef(null);
  const imageRef = useRef(null);

  useEffect(() => {
    const tl = gsap.timeline();

    tl.fromTo(
      badgeRef.current,
      { opacity: 0, y: 30, scale: 0.8 },
      { opacity: 1, y: 0, scale: 1, duration: 0.8, ease: "back.out(1.7)" }
    )
      .fromTo(
        mainTitleRef.current,
        { opacity: 0, y: 50 },
        { opacity: 1, y: 0, duration: 1, ease: "power3.out" },
        "-=0.3"
      )
      .fromTo(
        subtitleRef.current,
        { opacity: 0, y: 30 },
        { opacity: 1, y: 0, duration: 0.8, ease: "power2.out" },
        "-=0.5"
      )
      .fromTo(
        buttonsRef.current,
        { opacity: 0, y: 40 },
        { opacity: 1, y: 0, duration: 0.8, ease: "power2.out" },
        "-=0.4"
      )
      .fromTo(
        imageRef.current,
        { opacity: 0, y: 60, scale: 1.05 },
        { opacity: 1, y: 0, scale: 1, duration: 1.2, ease: "power3.out" },
        "-=0.3"
      );
  }, []);

  return (
    <section className="flex flex-col items-center justify-center text-center gap-8 mt-8 sm:mt-10 md:mt-16">
      {/* Top Badge */}
      {/* <div ref={badgeRef} className="flex items-center gap-3">
        <div className="text-yellow-400 text-lg">
          <img src={stars} alt="stars" />
        </div>
        <div className="w-[2px] h-6 bg-gray-300"></div>
        <p className="text-Secondary font-medium">Top Rated by Users</p>
      </div> */}

      {/* Headings */}
      <Title
        ref={mainTitleRef}
        level="title64"
        className="leading-tight max-w-[900px] mx-auto"
      >
        {homePageData?.data?.homepage_header_txt}
      </Title>

      <Title
        ref={subtitleRef}
        level="title20"
        className="text-Secondary leading-relaxed"
      >
        {homePageData?.data?.description}
      </Title>

      {/* Action Buttons */}
      <div
        ref={buttonsRef}
        className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:mt-4"
      >
        <CommonButton
          variant="primary"
          className="flex items-center gap-2"
          onClick={() =>
            (window.location.href = `tel:${homePageData?.data?.call_number}`)
          }
        >
          <IoCallOutline className="text-lg" />
          Call Now
        </CommonButton>

        <CommonButton link="/compare-health-insurance" variant="secondary">
          Get Your Free Comparison
        </CommonButton>
      </div>

      {/* Image */}
      <img
        ref={imageRef}
        src={homePageData?.data?.testimonmial_image || banner}
        alt="banner"
        className="mt-5 sm:mt-10 rounded-3xl"
      />
    </section>
  );
};

export default Banner;
