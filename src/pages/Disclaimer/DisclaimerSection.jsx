import Title from '@/components/common/Title'
import React from 'react'

const DisclaimerSection = () => {
  return (
     <div className='bg-[#1F1F1F]/80 py-14 flex items-center justify-center flex-col gap-4 text-center '>
        <div className='max-w-[950px] mx-auto flex flex-col gap-10'>
         <Title level="title24" className="text-white">The information provided on CompareSure is general in nature and should not be taken as personal or financial advice. We aim to ensure all content is accurate and up to date, but we cannot guarantee completeness or accuracy.</Title>
         <Title level="title24" className="text-white ">You should always verify details directly with your chosen insurer before making any decision. CompareSure accepts no liability for any errors, omissions, or outcomes arising from the use of our website or comparison tools.</Title>

        </div>
     </div>
  )
}

export default DisclaimerSection