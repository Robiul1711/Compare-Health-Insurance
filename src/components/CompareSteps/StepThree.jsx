import React, { useState } from "react";
import { Phone } from "lucide-react";

const countries = [
  { code: "US", name: "United States" },
  { code: "GB", name: "United Kingdom" },
  { code: "CA", name: "Canada" },
  { code: "AU", name: "Australia" },
  { code: "DE", name: "Germany" },
  { code: "FR", name: "France" },
  { code: "JP", name: "Japan" },
  { code: "IN", name: "India" },
  { code: "BD", name: "Bangladesh" },
  { code: "BR", name: "Brazil" },
];

export default function StepThree() {
  const [selectedCountry, setSelectedCountry] = useState("");
  const [hasInsurance, setHasInsurance] = useState("");
  const [fullName, setFullName] = useState("John Smith");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");

  return (
    <div className=" flex items-center justify-center sm:p-4">
      <div className="w-full max-w-2xl  rounded-lg sm:shadow-lg sm:p-8 md:p-12">
        <div className="text-center mb-8">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3">
            A few quick details about you.
          </h1>
          <p className="text-gray-600 text-lg">
            This helps us show the suitable option for your situation.
          </p>
        </div>

        <div className="space-y-6">
          {/* Country Select */}
          <div>
            <select
              value={selectedCountry}
              onChange={(e) => setSelectedCountry(e.target.value)}
              className="w-full px-4 py-3 bg-blue-50 border border-blue-100 rounded-lg text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent appearance-none cursor-pointer"
            >
              <option value="">Where do you live?</option>
              {countries.map((country) => (
                <option key={country.code} value={country.code}>
                  {country.name}
                </option>
              ))}
            </select>
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
                  name="insurance"
                  value="yes"
                  checked={hasInsurance === "yes"}
                  onChange={(e) => setHasInsurance(e.target.value)}
                  className="w-4 h-4 text-blue-600 focus:ring-2 focus:ring-blue-400"
                />
                <span className="ml-2 text-gray-700">Yes, I have it</span>
              </label>
              <label className="flex items-center cursor-pointer">
                <input
                  type="radio"
                  name="insurance"
                  value="no"
                  checked={hasInsurance === "no"}
                  onChange={(e) => setHasInsurance(e.target.value)}
                  className="w-4 h-4 text-blue-600 focus:ring-2 focus:ring-blue-400"
                />
                <span className="ml-2 text-gray-700">No, I don't</span>
              </label>
            </div>
          </div>

          {/* Full Name */}
          <div>
            <label className="block text-sm text-gray-600 mb-2">
              Full name
            </label>
            <input
              type="text"
              value={fullName}
              onChange={(e) => setFullName(e.target.value)}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent"
            />
          </div>

          {/* Email Address */}
          <div>
            <label className="block text-sm text-gray-600 mb-2">
              Email address
            </label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              className="w-full px-4 py-3 bg-blue-50 border border-blue-100 rounded-lg text-gray-700 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent"
            />
          </div>

          {/* Phone Number */}
          <div className="flex gap-3">
            <div className="flex-1">
              <label className="block text-sm text-gray-600 mb-2">
                Phone number
              </label>
              <input
                type="tel"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                placeholder="xxx xxx xxx xxx"
                className="w-full px-4 py-3 bg-blue-50 border border-blue-100 rounded-lg text-gray-700 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent"
              />
            </div>
            <div className="flex flex-col justify-end">
              <button
                type="button"
                className="px-6 py-3 border-2 border-blue-500 text-blue-600 rounded-lg hover:bg-blue-50 transition-colors flex items-center gap-2 font-medium"
              >
                <Phone className="w-4 h-4" />
                Verify
                <span className="text-xs text-gray-500  text-center">
                  (Optional)
                </span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
