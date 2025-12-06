import Banner from '@/components/HomeComponent/Banner'
import Disclaimer from '@/components/HomeComponent/Disclaimer'
import FindPlan from '@/components/HomeComponent/FindPlan'
import FundedBy from '@/components/HomeComponent/FundedBy'
import MindMatters from '@/components/HomeComponent/MindMatters'

import RigntHealthInsurance from '@/components/HomeComponent/RigntHealthInsurance'
import TestimonialSlider from '@/components/HomeComponent/TestimonialSlider'
import { useApiQuery } from '@/hooks/allCMS'
import React from 'react'

const Home = () => {
    const {
      data: homePageData,
      isLoading,
      error,
    } = useApiQuery({
      queryKey: "homepage-settings",
      url: "/homepage-settings",
    });
  return (
    <div>
    <div className='section-padding-x space-y-8 xs:space-y-12 sm:space-y-16 md:space-y-20 lg:space-y-24'>
      <Banner  homePageData={homePageData}/>
      <FundedBy homePageData={homePageData} />
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