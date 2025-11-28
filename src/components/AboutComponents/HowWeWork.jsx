import React, { use } from "react";
import work1 from "../../assets/images/work1.png";
import work2 from "../../assets/images/work2.png";
import work3 from "../../assets/images/work3.png";
import work4 from "../../assets/images/work4.png";
import Title from "../common/Title";
import { useApiQuery } from "@/hooks/allCMS";
export default function HowWeWork() {
  // const {howWork, isLoading, error}= HowWorkQuery();
  const { data:howWork, isLoading, error } = useApiQuery({
    queryKey: "howWork",
    url: "/weworks/get",
  });
  console.log(howWork)
  const steps = [
    {
      icon: work1,
      title: "Understand Your Needs",
      description:
        "We ask a few simple questions about your life stage, family situation, and coverage goals.",
    },
    {
      icon: work2,
      title: "Compare Options",
      description:
        "We review multiple trusted insurers and match you with the plans that suit you best.",
    },
    {
      icon: work3,
      title: "Explain Clearly",
      description:
        "Our team guides you step by step, answering questions in plain language.",
    },
    {
      icon: work4,
      title: "Help You Decide",
      description:
        "We make it easy to choose your plan and connect with the insurer.",
    },
  ];

  return (
    <div className="section-padding-x bg-Primary/5 py-16 ">
      <div className="">
        <Title level="title48" className="text-center mb-10">
          How We Work
        </Title>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {howWork?.data?.map((step, index) => (
            <div
              key={index}
              className="bg-[#5494FF]/5 rounded-2xl p-4 shadow-sm  hover:shadow-md transition-shadow duration-300"
            >
              <img src={step?.image} alt="" className="object-cover w-full" />
              <h3 className="text-lg sm:text-xl md:text-2xl font-semibold text-gray-900 mb-2 mt-4">
                {step?.title}
              </h3>

              <p className="text-sm sm:text-base md:text-lg text-Secondary leading-relaxed">
                {step.sub_title}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
