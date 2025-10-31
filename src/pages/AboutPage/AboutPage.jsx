import AboutBanner from '@/components/AboutComponents/AboutBanner'
import HowWeWork from '@/components/AboutComponents/HowWeWork'
import OurValue from '@/components/AboutComponents/OurValue'
import FindPlan from '@/components/HomeComponent/FindPlan'
import React from 'react'

const AboutPage = () => {
  return (
    <div>
      <AboutBanner />
      <OurValue />
      <HowWeWork />
      <div className='section-padding-y'>
      <FindPlan />

      </div>
    </div>
  )
}

export default AboutPage