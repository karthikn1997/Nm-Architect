import React, { useEffect } from 'react';
import Hero from '../Home-Components/Hero';
import HomeAbout from '../Home-Components/HomeAbout';
import Counters from '../Home-Components/Counters';
import Future from '../Home-Components/Future';
import About from '../Home-Components/About';
import Projects from '../Home-Components/Projects';
import HomeService from '../Home-Components/HomeService';
import Ideas from '../Home-Components/Ideas';
import HomePortfolio from '../Home-Components/HomePortfolio';

const Home = () => {

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div >
      <Hero />
      {/* <Counters /> */}
      <HomeAbout />
      <Ideas />
      {/* <About /> */}
      {/* <Future /> */}
      <HomeService />
      {/* <Projects /> */}
      <HomePortfolio />
    </div>
  );
};

export default Home;
