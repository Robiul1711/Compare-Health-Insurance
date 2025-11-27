import React, { useState } from "react";
import { Steps } from "antd";
import Title from "@/components/common/Title";
import StepOne from "@/components/CompareSteps/StepOne";
import StepTwo from "@/components/CompareSteps/StepTwo";
import StepThree from "@/components/CompareSteps/StepThree";
import StepFour from "@/components/CompareSteps/StepFour";
import Disclaimer from "@/components/HomeComponent/Disclaimer";
import useAxiosPublic from "@/hooks/useAxiosPublic";
import { useForm, FormProvider } from "react-hook-form";
import { useMutation } from "@tanstack/react-query";
import {
  showLoadingToast,
  updateToastError,
  updateToastSuccess,
} from "@/lib/utils";

const CompareHealthInsurance = () => {
  const axiosPublic = useAxiosPublic();

  // 🔥 react-hook-form setup
const methods = useForm({
defaultValues: {
  health_cover: "",
  insurance_cover: "",
  procedure: [],
  live: "",
  have_insurance: "",
  full_name: "",
  email: "",
  phone: "",
}
,
  mode: "onChange",
});
  const { handleSubmit, trigger, register } = methods;

  // Register manual validation
  register("health_cover", {
    required: "Please select a cover type",
  });

  const FormMutation = useMutation({
    mutationFn: async (data) => {
      const response = await axiosPublic.post("/requests/store", data);
      return response?.data;
    },
    onMutate: () => {
      const toastId = showLoadingToast("Submitting...");
      return { toastId };
    },
    onSuccess: (response, _variables, context) => {
      updateToastSuccess(
        context.toastId,
        response?.message || "Request successful"
      );
    },
    onError: (error, _variables, context) => {
      const errorMessage =
        error.response?.data?.message ||
        "Something went wrong, try again later!!";
      updateToastError(context.toastId, errorMessage);
    },
  });

  const onSubmit = (data) => {
    console.log("FINAL FORM DATA:", data);
    FormMutation.mutate(data);
  };

  const [current, setCurrent] = useState(0);

  const steps = [
    { title: "Choose Your Cover Type", content: <StepOne /> },
    { title: "What Would You Like Covered?", content: <StepTwo /> },
    { title: "Tell Us About You", content: <StepThree /> },
    { title: "Get Your Free Comparison", content: <StepFour /> },
  ];

  // 🔥 Block next step if validation fails
  const next = async () => {
    const valid = await trigger(); // validate all fields so far
    if (!valid) return;

    setCurrent((prev) => prev + 1);
  };

  const prev = () => setCurrent((prev) => prev - 1);

  return (
    <div>
      {/* Header */}
      <div className="flex flex-col md:flex-row items-center justify-between py-12 bg-Primary/30 section-padding-x flex-wrap gap-6">
        <Title level="title48" className="md:w-[30%] w-full">
          Compare Health Insurance
        </Title>

        <div className="flex-1 md:w-[70%]">
          <Steps
            current={current}
            onChange={setCurrent}
            items={steps.map((item) => ({ title: item.title }))}
          />
        </div>
      </div>

      {/* 🔥 FormProvider WRAPPER */}
      <FormProvider {...methods}>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="section-padding-x pb-10 lg:pb-16 xl:pb-20">
            <div className="mt-10">{steps[current].content}</div>

            {/* Buttons */}
            <div className="flex items-center justify-center gap-5 mt-4">
              {current > 0 && (
                <button
                  type="button"
                  onClick={prev}
                  className="rounded-full px-6 py-2 border border-Primary text-Primary hover:text-white hover:bg-Primary"
                >
                  Back
                </button>
              )}

              {current < steps.length - 1 ? (
                <button
                  type="button"
                  onClick={next}
                  className="rounded-full px-6 py-2 border border-Primary text-Primary hover:text-white hover:bg-Primary"
                >
                  Next
                </button>
              ) : (
                <button
                  type="submit"
                  className="rounded-full px-6 py-2 border border-Primary text-Primary hover:text-white hover:bg-Primary"
                >
                  Finish
                </button>
              )}
            </div>
          </div>
        </form>
      </FormProvider>

      <Disclaimer />
    </div>
  );
};

export default CompareHealthInsurance;
