import { Link } from "react-router-dom";
import comparison from "../../assets/images/comparison.png";
import Title from "../common/Title";
export default function FreeComparison() {
  return (

      <div className="flex flex-col lg:flex-row gap-5  overflow-hidden rounded-lg">
        {/* Left Section */}
        <div className="flex w-full  lg:w-1/2">
          <div>
            <Title level="title48">
              Free Comparison
            </Title>
            <Title level="title20" className="sm:py-4 py-1 text-Secondary font-semibold">
              Our service is completely free. No charges, ever.
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
          {/* Overlay Button */}
          <Link to="/compare-health-insurance"  className="absolute bottom-8 right-8 rounded-full bg-blue-500 px-6 py-2 xl:py-3 font-medium text-white shadow-lg transition-all hover:bg-blue-600 hover:shadow-xl">
            Compare Now
          </Link>
        </div>
      </div>

  );
}