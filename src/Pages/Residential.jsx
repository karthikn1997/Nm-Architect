import React, { useEffect } from 'react'
import ResidentialHero from '../Residential-Components/ResidentialHero'
import ResidentialProjects from '../Residential-Components/ResidentialProjects'

const Residential = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div>
      <ResidentialHero />
      <ResidentialProjects />
    </div>
  )
}

export default Residential