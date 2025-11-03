import comparison from "../../assets/images/advice.png";
import Title from "../common/Title";
export default function ExpertAdvice() {
  return (

      <div className="flex flex-col lg:flex-row gap-5 overflow-hidden rounded-lg">
        {/* Left Section */}
        <div className="flex w-full  lg:w-1/2">
          <div>
            <Title level="title48">
    Expert Advice
            </Title>
          <Title level="title20" className="sm:py-4 py-1 text-Secondary font-semibold">
              Get personalized guidance from experienced advisors.
            </Title>
          </div>
        </div>

        {/* Right Section */}
        <div className="relative w-full lg:w-1/2">
          <img
            src={comparison}
            alt="Professional woman in office"
            className="h-full w-full object-cover"
          />
        
        </div>
      </div>

  );
}