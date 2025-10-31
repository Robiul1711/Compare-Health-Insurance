import { FaCheckCircle } from 'react-icons/fa';
import CommonButton from '../common/CommonButton';
import Title from '../common/Title';
import readytofiend from '../../assets/images/readytofiend.png'
export default function FindPlan() {
  return (
    <div
      className="flex flex-col items-center justify-center bg-cover bg-no-repeat py-20 "
      style={{
        backgroundImage: `url(${readytofiend})`,
      }}
    >      {/* Main Content Section */}
      <div className="flex flex-col items-center justify-center ">
        {/* Icon with connecting line */}
        <div className="relative mb-8">
          {/* Top line */}
  
          
          {/* Icon */}
          <div className="bg-Primary rounded-2xl p-5 shadow-lg">
            <FaCheckCircle className="w-10 h-10 text-white" />
          </div>
          
         
        </div>

        {/* Heading */}
        <Title level="title48" className="text-center">
          Ready to Find Your Perfect<br />Plan?
        </Title>

        {/* Subheading */}
       <p className="text-Secondary font-semibold mt-4">
          Join thousands of satisfied customers who found better coverage at better prices
        </p>

        {/* CTA Button */}
        <div  className='py-6'>
        <CommonButton variant='primary'>
          Get Your Free Comparison
        </CommonButton>

        </div>

        {/* Small text */}
        <p className="text-Secondary font-semibold">
          No commitment required • Takes less than 2 minutes
        </p>
      </div>


    </div>
  );
}