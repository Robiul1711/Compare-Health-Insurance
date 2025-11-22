import React from 'react'
import Title from './Title'
import { Link, useLocation } from 'react-router-dom'

const ContactUs = () => {
  const { pathname } = useLocation(); // ✅ destructure pathname correctly

  return (
    <div className="bg-[#0A0A0A]/70 section-padding-x py-14 flex items-center justify-center flex-col px-4 gap-4 text-center">
      <Title level="title24" className="text-white">Contact Us</Title>

      {pathname === "/terms-of-service" ? (
        <Title level="title16" className="text-white max-w-[450px]">
          If you have any questions about our terms of service, please contact our team via our Contact Us page.
        </Title>
        
      ) : pathname === "/disclaimer" ? (
        <Title level="title16" className="text-white max-w-[450px]">
          If you have any questions about this Disclaimer, please contact our team via our Contact Us page.
        </Title>
      ) : pathname === "/privacy-policy" ? (
  <div className="">
  <Title level="title16" className="text-white max-w-[500px] leading-relaxed">
    If you have any questions, concerns, or requests related to this Privacy Policy 
    or how we handle your personal information, please contact us at:
  </Title>

  <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-xl p-6 inline-block mt-4 text-left">
    <p className="text-white flex gap-3 items-center text-sm md:text-base">
      <span className="font-semibold">Email:</span> 
      <a href="mailto:info@comparesure.com.au" className="text-blue-400 hover:underline">
        info@comparesure.com.au
      </a>
    </p>

    <p className="text-white flex gap-3 items-center text-sm md:text-base mt-2">
      <span className="font-semibold">Phone:</span>
      <a href="tel:0478711733" className="text-blue-400 hover:underline">
        0478 711 733
      </a>
    </p>
  </div>
</div>

      ) : pathname === "/compliance" ? (
        <Title level="title16" className="text-white max-w-[450px]">
          If you have any questions about this Compliance, please contact our team via our Contact Us page.
        </Title>
      )
        :
        <Title level="title16" className="text-white max-w-[450px]">
          If you have any questions about CompareSure, please contact our team via our Contact Us page.
        </Title>
      
      }

      <Link
        to="/contacts"
        className="py-1 sm:py-2 px-10 bg-white rounded-full font-medium text-lg"
      >
        Contact Us
      </Link>
    </div>
  )
}

export default ContactUs
