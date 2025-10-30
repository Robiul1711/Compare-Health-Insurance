import Banner from '@/components/HomeComponent/Banner'
import Disclaimer from '@/components/HomeComponent/Disclaimer'
import FindPlan from '@/components/HomeComponent/FindPlan'
import FundedBy from '@/components/HomeComponent/FundedBy'
import MindMatters from '@/components/HomeComponent/MindMatters'

import RigntHealthInsurance from '@/components/HomeComponent/RigntHealthInsurance'
import TestimonialSlider from '@/components/HomeComponent/TestimonialSlider'
import React from 'react'

const Home = () => {
  return (
    <div>
    <div className='section-padding-x space-y-24'>
      <Banner />
      <FundedBy />
      <RigntHealthInsurance />
      <MindMatters />
      <TestimonialSlider />
      <FindPlan />
    </div>
      <Disclaimer />

    </div>
  )
}

export default Home