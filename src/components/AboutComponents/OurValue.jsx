import React from 'react';
import { FileText, Tag, Headphones, Globe } from 'lucide-react';
import Title from '../common/Title';
import { AccessibilityIcon, SimplicityIcon, SupportIcon, TrustIcon } from '../Icon';

export default function OurValue() {
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
    <div className="section-padding-x bg-Primary/2 py-20">
      <div className="">
        <Title level="title48">Our Value</Title>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
          {values.map((value, index) => {
            const Icon = value.icon;
            return (
              <div
                key={index}
                className={`bg-white rounded-lg p-8 transition-all   shadow hover:border-Primary hover:shadow-custom duration-300
                }`}
              >
                <div className="flex justify-center mb-6">
                  <div className="w-24 h-24 bg-Primary/5 rounded-full flex items-center justify-center">
                    <Icon className="" />
                  </div>
                </div>
                
                <h3 className="text-3xl font-semibold text-gray-900 text-center mb-3">
                  {value.title}
                </h3>
                
                <p className="font-semibold text-Secondary  text-center leading-relaxed">
                  {value.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}