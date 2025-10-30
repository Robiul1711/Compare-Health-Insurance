import comparison from "../../assets/images/advice.png";
export default function ExpertAdvice() {
  return (

      <div className="flex overflow-hidden rounded-lg">
        {/* Left Section */}
        <div className="flex w-full  md:w-1/2">
          <div>
            <h2 className="mb-4 text-5xl font-bold text-gray-900">
    Expert Advice
            </h2>
            <p className="text-Secondary font-semibold text-xl">
              Get personalized guidance from experienced advisors.
            </p>
          </div>
        </div>

        {/* Right Section */}
        <div className="relative w-full md:w-1/2">
          <img
            src={comparison}
            alt="Professional woman in office"
            className="h-full w-full object-cover"
          />
        
        </div>
      </div>

  );
}