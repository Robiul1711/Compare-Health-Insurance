import React from 'react'
import Title from './Title'
import { Link, useLocation } from 'react-router-dom'

const ContactUs = () => {
  const { pathname } = useLocation(); // ✅ destructure pathname correctly

  return (
    <div className="bg-[#1F1F1F]/80 py-14 flex items-center justify-center flex-col px-4 gap-4 text-center">
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
        <Title level="title16" className="text-white max-w-[450px]">
          If you have any questions about this Privacy Policy, please contact our team via our Contact Us page.
        </Title>
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
