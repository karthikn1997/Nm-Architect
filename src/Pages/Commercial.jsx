import React, { useEffect } from 'react'
import CommercialHero from '../Commercial-Components/CommercialHero.jsx'
import CommercialProjects from '../Commercial-Components/CommercialProjects.jsx'

const Commercial = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div>
      <CommercialHero />
      <CommercialProjects />
    </div>
  )
}

export default Commercial