import React from 'react';
import { FaPhoneAlt } from 'react-icons/fa';
import { IoShieldCheckmark } from 'react-icons/io5';

export default function StepFour() {
  return (
    <div className="flex items-center justify-center ">
      <div className="max-w-3xl w-full">
        {/* Vertical line from top */}
        <div className="flex flex-col items-center">
         
          
          {/* Icon */}
          <div className="bg-blue-500 rounded-2xl p-3 sm:p-4 md:p-6 shadow-lg mb-8 relative">
            <IoShieldCheckmark className="md:w-12 md:h-12 size-8 sm:w-10 sm:h-10 text-white" />

          </div>

          {/* Main heading */}
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 text-center mb-6">
            Great! We've got everything we need.
          </h1>

          {/* Subheading */}
          <p className="text-Secondary font-semibold text-center text-lg mb-6 sm:mb-12 max-w-2xl">
            Thanks for sharing your details — our team has everything we need to find health cover that fits you best
          </p>

          {/* Description */}
          <p className="font-semibold text-center text-base mb-8 sm:mb-16 max-w-2xl">
            A CompareSure specialist will be in touch shortly to walk you through your personalised options and help you choose what works for your needs and budget.
          </p>

          {/* Call to action section */}
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 text-center mb-4 sm:mb-8">
            Prefer to talk now? We're here to help.
          </h2>

          {/* Call button */}
          <button className="bg-blue-500 hover:bg-blue-600 text-white font-semibold px-8 py-3 md:py-4 rounded-full flex items-center gap-3 transition-colors shadow-lg mb-8">
            <FaPhoneAlt className="w-5 h-5" />
            Call Now
          </button>

      
        </div>
      </div>
    </div>
  );
}