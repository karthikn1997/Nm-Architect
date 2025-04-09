import React, { useEffect } from 'react'
import AboutHero from '../About-Components/AboutHero'
import AboutInfo from '../About-Components/AboutInfo'

const About = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div>
      <AboutHero />
      <AboutInfo />
    </div>
  )
}

export default About