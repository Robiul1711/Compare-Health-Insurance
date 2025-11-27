import React from "react";
import Title from "../common/Title";
import { useFormContext } from "react-hook-form";

export default function StepOne() {
  const { setValue, watch, formState: { errors } } = useFormContext();

  const selectedOption = watch("health_cover", "");

  const coverOptions = [
    { id: "single", title: "Single Cover", description: "Just for you" },
    { id: "couple", title: "Couple Cover", description: "For you and your partner" },
    { id: "family", title: "Family Cover", description: "For parents and kids" },
    { id: "single-parent", title: "Single Parent Cover", description: "For one adult with children" },
  ];

  const handleSelect = (id) => {
    setValue("health_cover", id, { shouldValidate: true });
  };

  return (
    <div className="flex items-center justify-center p-4">
      <div className="w-full max-w-3xl">
        {/* Header */}
        <div className="text-center mb-6 sm:mb-12">
          <Title level="title48">What kind of health cover do you need?</Title>

          <div className="px-6 max-w-4xl mx-auto mt-6 mb-4">
            <div className="bg-[#FFF8E5] border-l-4 border-[#FBBF24] text-[#8A6D1A] p-4 rounded-md">
              <h4 className="font-semibold text-[#B45309] mb-1">Disclaimer</h4>
              <p>
                By continuing, you consent to CompareSure collecting and using your personal
                information to compare policies and contact you.
              </p>
            </div>
          </div>
        </div>

        {/* Options */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {coverOptions.map((option) => {
            const isSelected = selectedOption === option.id;

            return (
              <button
                key={option.id}
                type="button"
                onClick={() => handleSelect(option.id)}
                className={`
                  p-6 rounded-lg transition-all duration-200 border
                  ${isSelected
                    ? "bg-blue-500 text-white shadow-lg border-blue-500"
                    : "bg-blue-50 text-gray-900 hover:bg-blue-100 border-transparent"}
                `}
              >
                <h2 className="text-2xl font-medium mb-2">{option.title}</h2>
                <p className={isSelected ? "text-blue-100" : "text-gray-600"}>
                  {option.description}
                </p>
              </button>
            );
          })}
        </div>

        {/* Error */}
        {errors.health_cover && (
          <p className="text-red-500 text-center mt-3">
            {errors.health_cover.message}
          </p>
        )}
      </div>
    </div>
  );
}
