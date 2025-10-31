import React, { useState } from "react";
import { Steps } from "antd";
import Title from "@/components/common/Title";
import StepOne from "@/components/CompareSteps/StepOne";
import StepTwo from "@/components/CompareSteps/StepTwo";
import StepThree from "@/components/CompareSteps/StepThree";
import StepFour from "@/components/CompareSteps/StepFour";
import Disclaimer from "@/components/HomeComponent/Disclaimer";

const CompareHealthInsurance = () => {
  const [current, setCurrent] = useState(0);

  const steps = [
    {
      title: "Choose Your Cover Type",
      content: <StepOne />,
    },
    {
      title: "What Would You Like Covered?",
      content: <StepTwo />,
    },
    {
      title: "Tell Us a Little About You",
      content: <StepThree />,
    },
    {
      title: "Get Your Free Comparison",
      content: <StepFour />,
    },
  ];

  const onChange = (value) => {
    setCurrent(value);
  };

  const next = () => {
    if (current < steps.length - 1) {
      setCurrent(current + 1);
    }
  };

  const prev = () => {
    if (current > 0) {
      setCurrent(current - 1);
    }
  };

  return (
    <div>
      {/* Header with Steps */}
      <div className="flex items-center  justify-between py-12 bg-Primary/30 section-padding-x flex-wrap gap-6">
        <Title level="title48" className="w-[30%]">Compare Health Insurance</Title>

        <div className="flex-1 w-[70%]">
          <Steps
            current={current}
            onChange={onChange}
            items={steps.map((item) => ({ title: item.title }))}
          />
        </div>
      </div>

      {/* Step Content */}
      <div className="section-padding-x">
        <div className="mt-10">{steps[current].content}</div>

        {/* Buttons */}
        <div className={`flex items-center justify-center gap-5 mt-8 ${current === steps.length - 1 ? "hidden" : ""}`}>
          {current > 0 && (
            <button
              onClick={prev}
              className="rounded-full px-6 py-2 border border-Primary text-Primary hover:text-white hover:bg-Primary duration-300 ease-in-out"
            >
              Back
            </button>
          )}
          {current < steps.length - 1 ? (
            <button
              onClick={next}
              className="rounded-full px-6 py-2 border border-Primary text-Primary hover:text-white hover:bg-Primary duration-300 ease-in-out"
            >
              Next
            </button>
          ) : (
            <button
              className="rounded-full px-6 py-2 border border-Primary text-Primary hover:text-white hover:bg-Primary duration-300 ease-in-out"
            >
              Finish
            </button>
          )}
        </div>
      </div>
         <Disclaimer />
    </div>
  );
};

export default CompareHealthInsurance;
