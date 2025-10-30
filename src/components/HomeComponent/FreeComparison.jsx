import comparison from "../../assets/images/comparison.png";
export default function FreeComparison() {
  return (

      <div className="flex overflow-hidden rounded-lg">
        {/* Left Section */}
        <div className="flex w-full  md:w-1/2">
          <div>
            <h2 className="mb-4 text-5xl font-bold text-gray-900">
              Free Comparison
            </h2>
            <p className="text-Secondary font-semibold text-xl">
              Our service is completely free. No charges, ever.
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
          {/* Overlay Button */}
          <button className="absolute bottom-8 right-8 rounded-full bg-blue-500 px-6 py-3 font-medium text-white shadow-lg transition-all hover:bg-blue-600 hover:shadow-xl">
            Compare Now
          </button>
        </div>
      </div>

  );
}