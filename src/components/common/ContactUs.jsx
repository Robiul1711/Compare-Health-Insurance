import React from 'react'
import Title from './Title'

const ContactUs = () => {
  return (
    <div className='bg-[#1F1F1F]/80 py-14 flex items-center justify-center flex-col px-4 gap-4 text-center'>
        <Title level="title24" className="text-white">Contact Us</Title>
        <Title level="title16" className="text-white max-w-[450px]">If you have any questions about this Privacy Policy, please contact our team via our Contact Us page.</Title>
  <button className='py-1 sm:py-2 px-10 bg-white rounded-full font-medium text-lg'>Contact Us</button>
    </div>
  )
}

export default ContactUs