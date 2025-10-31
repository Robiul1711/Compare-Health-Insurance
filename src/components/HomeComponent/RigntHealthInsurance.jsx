import React from "react";
import Title from "../common/Title";
import { ProgressIcon, ThunderIcon } from "../Icon";
import img1 from "../../assets/images/img1.png";
import CommonButton from "../common/CommonButton";

const insurancePlans = [
  {
    id: 1,
    title: "Singles Health Insurance",
    subtitle: "Find the best health insurance plan for yourself",
    image: img1,
  },
  {
    id: 2,
    title: "Family Health Insurance",
    subtitle: "Protect your family with comprehensive coverage",
    image: img1,
  },
  {
    id: 3,
    title: "Senior Health Insurance",
    subtitle: "Affordable plans for senior citizens",
    image: img1,
  },
  {
    id: 4,
    title: "Student Health Insurance",
    subtitle: "Flexible coverage for students",
    image: img1,
  },
];

const RigntHealthInsurance = () => {
  return (
    <section className="flex flex-col gap-12">
      {/* Header */}
      <div className="flex flex-col items-center gap-6 max-w-[900px] mx-auto text-center">
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

<div className="max-w-[700px] mx-auto h-0.5 bg-Primary rounded-full w-full"></div>


      {/* Cards Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 ">
        {insurancePlans.map((plan) => (
          <div
            key={plan.id}
            className="flex flex-col rounded-2xl bg-Primary/10 p-6 shadow-md hover:shadow-lg transition-shadow duration-300"
          >
            <div className="flex flex-col sm:flex-row items-center justify-between gap-4 mb-4">
              <div>
                <Title level="title32">{plan.title}</Title>
                <Title level="title20" className="text-Secondary">
                  {plan.subtitle}
                </Title>
              </div>
              <CommonButton variant="primary">Compare Now</CommonButton>
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

