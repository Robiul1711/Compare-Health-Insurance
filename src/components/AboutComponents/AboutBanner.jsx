import about from '../../assets/images/about.png'
import Title from '../common/Title';
export default function AboutBanner() {
  return (
    <div className="section-padding-x">
      {/* Hero Section */}
      <div className="py-6 sm:py-8 md:py-12 xl:py-16">
        <div className="grid md:grid-cols-2 gap-4 sm:gap-8 md:gap-12 items-start">
          {/* Left Column - Heading */}
          <div>
            <Title level="title48">
              Helping You Find the Right Health Insurance — The Easy Way
            </Title>
          </div>
          
          {/* Right Column - Description */}
          <div className="pt-4">
            <p className="text-Secondary font-medium sm:text-lg leading-relaxed">
            <span className="font-bold">  At CompareSure,</span> we help people find the right health insurance easily. We know comparing different plans, prices, and benefits can be confusing. That's why we created CompareSure—to make the process quick, simple, and stress-free.
            </p>
          </div>
        </div>

        {/* Mission Section with Background Image */}
        <div className="mt-8 md:mt-16 relative rounded-2xl overflow-hidden shadow-xl">
          {/* Background Image with Overlay */}
          <div 
            className="relative h-84 bg-cover bg-center"
            style={{
              backgroundImage:  `url(${about})`,
            }}
          >
            {/* Blue Overlay */}
            <div className="absolute inset-0 bg-blue-500 opacity-70"></div>
            
            {/* Content */}
            <div className="relative z-10 h-full flex flex-col justify-center px-8 md:px-12">
              <h2 className="text-3xl font-bold text-white mb-4">
                Our Mission
              </h2>
              <p className="text-white sm:text-lg leading-relaxed max-w-2xl">
                To make health insurance simple, clear, and stress-free for everyone. We want people to feel confident about their coverage and choose plans that truly fit their life — without confusion, hidden fees, or complicated fine print.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}