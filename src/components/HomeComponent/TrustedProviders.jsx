import trustprovider from "../../assets/images/trustprovider.png";
import Title from "../common/Title";
export default function TrustedProviders() {
  return (

      <div className="flex flex-col lg:flex-row gap-5  overflow-hidden rounded-lg">
        {/* Left Section */}
        <div className="flex w-full  lg:w-1/2">
          <div>
            <Title level="title48">
    Trusted Providers
            </Title>
             <Title level="title20" className="sm:py-4 py-1 text-Secondary font-semibold">
            We work with leading insurance companies you can trust.
            </Title>
          </div>
        </div>

        {/* Right Section */}
        <div className=" w-full lg:w-1/2">
          <div className="relative ">
        {/* Image Container */}
        <div className="relative h-98 flex items-center justify-center pb-4 xl:pb-8">
          {/* Handshake Image Placeholder */}
          <div className="relative w-full h-full flex items-center justify-center">
            <img 
              src={trustprovider} 
              alt="Handshake representing care" 
              className="w-full h-full object-cover rounded-2xl"
            />
          </div>
          
          {/* Confidentiality Badge */}
          <div className="absolute top-12 left-10 bg-white rounded-full px-6 py-2 shadow-lg">
            <span className="text-gray-800 text-sm font-medium">Confidentiality</span>
          </div>
          
          {/* Accessibility Badge */}
          <div className="absolute bottom-12 right-10 bg-white rounded-full px-6 py-2 shadow-lg">
            <span className="text-gray-800 text-sm font-medium">Accessibility</span>
          </div>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="flex flex-col xl:flex-row items-center gap-4 w-full">
        {/* Hashtag Section */}
        <div className="flex-1 bg-blue-100 rounded-3xl px-6 py-8 md:py-10 w-full">
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-800 text-center">#LetsStayHealthy</h2>
        </div>

        {/* Discount Badge
        <div className="bg-blue-500 rounded-3xl px-8 py-4 md:py-6 shadow-lg w-full">
          <div className="text-center">
            <p className="text-4xl font-bold text-white">50%</p>
            <p className="text-white text-sm font-medium">Discount</p>
          </div>
        </div> */}
      </div>

        </div>
      </div>

  );
}