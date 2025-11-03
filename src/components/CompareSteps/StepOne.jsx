import React, { useState } from "react";
import Title from "../common/Title";

export default function StepOne() {
  const [selectedOption, setSelectedOption] = useState("");

  const coverOptions = [
    {
      id: "single",
      title: "Single Cover",
      description: "Just for you",
    },
    {
      id: "couple",
      title: "Couple Cover",
      description: "For you and your partner",
    },
    {
      id: "family",
      title: "Family Cover",
      description: "For parents and kids",
    },
    {
      id: "single-parent",
      title: "Single Parent Cover",
      description: "For one adult with children",
    },
  ];

  return (
    <div className="flex items-center justify-center p-4">
      <div className="w-full max-w-3xl">
        {/* Header */}
        <div className="text-center mb-6 sm:mb-12">
          <Title level="title48">
            What kind of health cover do you need?
          </Title>
          <p className="text-gray-600  mt-4">
            Pick the option that best fits you. Don't worry — you can change later.
          </p>
        </div>

        {/* Options Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {coverOptions.map((option) => {
            const isSelected = selectedOption === option.id;
            return (
              <button
                key={option.id}
                onClick={() => setSelectedOption(option.id)}
                className={`
                 p-4 sm:p-8 rounded-lg text-center transition-all duration-200 border
                  ${isSelected
                    ? "bg-blue-500 text-white shadow-lg border-blue-500"
                    : "bg-blue-50 text-gray-900 hover:bg-blue-100 border-transparent"
                  }
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
      </div>
    </div>
  );
}
