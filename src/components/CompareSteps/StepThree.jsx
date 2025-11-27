import React from "react";
import { useFormContext } from "react-hook-form";

export default function StepThree() {
  const {
    register,
    watch,
    formState: { errors },
  } = useFormContext();

  return (
    <div className="flex items-center justify-center sm:p-4">
      <div className="w-full max-w-2xl rounded-lg sm:shadow-lg sm:p-8 md:p-12">
        
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3">
            A few quick details about you.
          </h1>
          <p className="text-gray-600 text-lg">
            This helps us show the suitable options for your situation.
          </p>
        </div>

        <div className="space-y-6">
          
          {/* Where do you live */}
          <div>
            <label className="block text-sm text-gray-600 mb-2">
              Where do you live?
            </label>
            <input
              type="text"
              placeholder="Country you live in"
              {...register("live", { required: "Please enter your country" })}
              className="w-full px-4 py-3 bg-blue-50 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
            />

            {errors.live && (
              <p className="text-red-500 text-sm mt-1">{errors.live.message}</p>
            )}
          </div>

          {/* Health Insurance Question */}
          <div>
            <p className="text-gray-700 mb-3 font-medium">
              Do you already have a health insurance?
            </p>

            <div className="flex gap-6">
              <label className="flex items-center cursor-pointer">
                <input
                  type="radio"
                  value="yes"
                  {...register("have_insurance", {
                    required: "Please select an option",
                  })}
                  className="w-4 h-4 text-blue-600"
                />
                <span className="ml-2 text-gray-700">Yes, I have it</span>
              </label>

              <label className="flex items-center cursor-pointer">
                <input
                  type="radio"
                  value="no"
                  {...register("have_insurance", {
                    required: "Please select an option",
                  })}
                  className="w-4 h-4 text-blue-600"
                />
                <span className="ml-2 text-gray-700">No, I don't</span>
              </label>
            </div>

            {errors.have_insurance && (
              <p className="text-red-500 text-sm mt-1">
                {errors.have_insurance.message}
              </p>
            )}
          </div>

          {/* Full Name */}
          <div>
            <label className="block text-sm text-gray-600 mb-2">
              Full name
            </label>
            <input
              type="text"
              placeholder="Full Name"
              {...register("full_name", {
                required: "Full name is required",
              })}
              className="w-full px-4 py-3 bg-blue-50 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
            {errors.full_name && (
              <p className="text-red-500 text-sm mt-1">{errors.full_name.message}</p>
            )}
          </div>

          {/* Email Address */}
          <div>
            <label className="block text-sm text-gray-600 mb-2">
              Email address
            </label>
            <input
              type="email"
              placeholder="Enter your email"
              {...register("email", {
                required: "Email is required",
                pattern: {
                  value: /\S+@\S+\.\S+/,
                  message: "Invalid email format",
                },
              })}
              className="w-full px-4 py-3 bg-blue-50 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
            />

            {errors.email && (
              <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>
            )}
          </div>

          {/* Phone Number */}
          <div>
            <label className="block text-sm text-gray-600 mb-2">
              Phone number
            </label>
            <input
              type="tel"
              placeholder="0123456789"
              {...register("phone", {
                required: "Phone number is required",
                minLength: { value: 6, message: "Too short" },
                maxLength: { value: 15, message: "Too long" },
              })}
              className="w-full px-4 py-3 bg-blue-50 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
            />

            {errors.phone && (
              <p className="text-red-500 text-sm mt-1">{errors.phone.message}</p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
