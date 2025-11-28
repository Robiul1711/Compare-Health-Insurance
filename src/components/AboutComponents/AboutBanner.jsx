import { useApiQuery } from "@/hooks/allCMS";
import about from "../../assets/images/about.png";
import Title from "../common/Title";
export default function AboutBanner() {
  const { data: homePageData, isLoading } = useApiQuery({
    queryKey: "homepage-settings",
    url: "/homepage-settings",
  });
  console.log(homePageData?.data);
  return (
    <div className="section-padding-x">
      {/* Hero Section */}
      <div className="py-6 sm:py-8 md:py-12 xl:py-16">
        <div className="grid md:grid-cols-2 gap-4 sm:gap-8 md:gap-12 items-start">
          {/* Left Column - Heading */}
          <div>
            <Title level="title48">{homePageData?.data?.about_txt1}</Title>
          </div>

          {/* Right Column - Description */}
          <div className="pt-4">
            <p className="text-Secondary font-medium sm:text-lg leading-relaxed">
              {homePageData?.data?.about_txt2}{" "}
            </p>
          </div>
        </div>

        {/* Mission Section with Background Image */}
        <div className="mt-8 md:mt-16 relative rounded-2xl overflow-hidden shadow-xl">
          {/* Background Image with Overlay */}
          <div
            className="relative h-84 bg-cover bg-center"
            style={{
              backgroundImage: `url(${about})`,
            }}
          >
            {/* Blue Overlay */}
            <div className="absolute inset-0 bg-blue-500 opacity-70"></div>

            {/* Content */}
            <div className="relative z-10 h-full flex flex-col justify-center px-8 md:px-12">
              <h2 className="text-3xl font-bold text-white mb-4">
                {homePageData?.data?.about_txt3}
              </h2>
              <p className="text-white sm:text-lg leading-relaxed max-w-2xl">
                {homePageData?.data?.about_txt4}{" "}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
