import React, { useEffect, useRef } from "react";
import Title from "../common/Title";
import { ProgressIcon, ThunderIcon } from "../Icon";
import img1 from "../../assets/images/img1.png";
import img2 from "../../assets/images/img2.png";
import img3 from "../../assets/images/img3.png";
import img4 from "../../assets/images/img4.png";
import CommonButton from "../common/CommonButton";
import gsap from "gsap";

const insurancePlans = [
  {
    id: 1,
    title: "Singles Health Insurance",
    subtitle: "Find the best health insurance plan for yourself",
    image: img1,
  },
  {
    id: 2,
    title: "Couples Health Insurance",
    subtitle: "Compare health insurance options for you and your partner",
    image: img2,
  },
  {
    id: 3,
    title: "Family Health Insurance",
    subtitle: "Comprehensive coverage for your whole family",
    image: img3,
  },
  {
    id: 4,
    title: "Single parent Health Insurance",
    subtitle: "Compare health insurance options for you and your partner",
    image: img4,
  },
];

const RigntHealthInsurance = () => {
  const sectionRef = useRef(null);
  const headerRef = useRef(null);
  const dividerRef = useRef(null);
  const cardsRef = useRef([]);

  useEffect(() => {
    const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

    // Animate section fade-in
    tl.fromTo(
      sectionRef.current,
      { opacity: 0, y: 80 },
      { opacity: 1, y: 0, duration: 1 }
    )

      // Animate header
      .fromTo(
        headerRef.current,
        { opacity: 0, y: 40 },
        { opacity: 1, y: 0, duration: 0.8 },
        "-=0.6"
      )

      // Animate divider line
      .fromTo(
        dividerRef.current,
        { width: 0, opacity: 0 },
        { width: "100%", opacity: 1, duration: 0.8 },
        "-=0.4"
      )

      // Animate cards in a staggered fashion
      .fromTo(
        cardsRef.current,
        { opacity: 0, y: 60 },
        { opacity: 1, y: 0, duration: 0.8, stagger: 0.2 },
        "-=0.2"
      );
  }, []);

  return (
    <section
      ref={sectionRef}
      className="flex flex-col gap-12"
    >
      {/* Header */}
      <div ref={headerRef} className="flex flex-col items-center gap-6 max-w-[900px] mx-auto text-center">
        <Title
          level="title48"
          className="flex flex-wrap items-center justify-center gap-3 text-balance"
        >
          A Simple Process
          <span className="flex items-center justify-center size-10 bg-Primary/20 text-white rounded-2xl">
            <ProgressIcon />
          </span>
          to Find the Right Health Insurance
          <span className="flex items-center justify-center size-10 bg-Primary text-white rounded-2xl">
            <ThunderIcon />
          </span>
          for You
        </Title>
        <Title level="title20" className="text-Secondary font-semibold">
          Select your family situation to compare the best health insurance plans
        </Title>
      </div>

      {/* Divider */}
      <div
        ref={dividerRef}
        className="max-w-[700px] mx-auto h-0.5 bg-Primary rounded-full w-full"
      ></div>

      {/* Cards Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        {insurancePlans.map((plan, index) => (
          <div
            key={plan.id}
            ref={(el) => (cardsRef.current[index] = el)}
            className="flex flex-col rounded-2xl bg-Primary/10 p-6 shadow-md hover:shadow-lg transition-shadow duration-300"
          >
            <div className="flex flex-col sm:flex-row items-center justify-between gap-4 mb-4">
              <div>
                <Title level="title32">{plan.title}</Title>
                <Title level="title20" className="text-Secondary">
                  {plan.subtitle}
                </Title>
              </div>
              <CommonButton link={'/compare-health-insurance'} variant="primary">
                Compare Now
              </CommonButton>
            </div>
            <img
              src={plan.image}
              alt={plan.title}
              className="w-full h-[180px] sm:h-[500px] object-cover rounded-2xl"
            />
          </div>
        ))}
      </div>
    </section>
  );
};

export default RigntHealthInsurance;
