import React from 'react';
import { FileText, Tag, Headphones, Globe } from 'lucide-react';
import Title from '../common/Title';
import { AccessibilityIcon, SimplicityIcon, SupportIcon, TrustIcon } from '../Icon';
import {  useApiQuery } from '@/hooks/allCMS';

export default function OurValue() {
  // const {ourvalues, isLoading, error} = ourValuesQuery();
  // console.log(ourvalues?.data);
  const { data:ourvalues, isLoading, error } = useApiQuery({
  queryKey: "ourvalues",
  url: "/ourvalues/get",
});
  const values = [
    {
      icon: SimplicityIcon ,
      title: 'Simplicity',
      description: 'We make comparing insurance easy and straightforward.',
      highlighted: true
    },
    {
      icon: TrustIcon,
      title: 'Trust',
      description: 'We provide honest, unbiased guidance.',
      highlighted: false
    },
    {
      icon: SupportIcon,
      title: 'Support',
      description: 'Our friendly team is always ready to help.',
      highlighted: false
    },
    {
      icon: AccessibilityIcon,
      title: 'Accessibility',
      description: 'Everyone should be able to find the right cover, quickly and for free.',
      highlighted: false
    }
  ];

  return (
    <div className="section-padding-x bg-Primary/2 py-6 sm:py-8 md:py-12 lg:py-16 xl:py-20">
      <div className="">
        <Title level="title48" className="text-center">Our Value</Title>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6  sm:gap-8 mt-6 md:mt-12">
          {ourvalues?.data?.map((value, index) => {
            // const Icon = value.icon;
            return (
              <div
                key={index}
                className={`bg-white rounded-lg p-6 sm:p-8 transition-all   shadow hover:border-Primary hover:shadow-custom duration-300
                }`}
              >
                <div className="flex justify-center mb-6">
                  <div className="size-16 sm:size-18 md:size-20 lg:size-24 bg-Primary/5 rounded-full flex items-center justify-center">
                  <img src={value?.image} alt="" />
                  </div>
                </div>
                
                <h3 className="text-xl sm:text-3xl font-semibold text-gray-900 text-center mb-3">
                  {value.title}
                </h3>
                
                <p className="font-semibold text-Secondary  text-center leading-relaxed">
                  {value.sub_title}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}