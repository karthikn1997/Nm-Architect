import React, { useEffect } from 'react'
import ServiceHero from '../Service-Components/ServiceHero'
import HomeService from '../Home-Components/HomeService'
import ServiceDetails from '../Service-Components/ServiceDetails'

const Services = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div>
      <ServiceHero />
      <ServiceDetails />
      {/* <HomeService /> */}

    </div>
  )
}

export default Services