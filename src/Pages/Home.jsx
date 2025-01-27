import React, { useEffect } from 'react';
import Hero from '../Home-Components/Hero';
import HomeAbout from '../Home-Components/HomeAbout';
import Counters from '../Home-Components/Counters';
import Future from '../Home-Components/Future';
import About from '../Home-Components/About';
import Projects from '../Home-Components/Projects';
import HomeService from '../Home-Components/HomeService';

const Home = () => {

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div >
      <Hero />
      <Counters />
      <HomeAbout />
      <About />
      {/* <Future /> */}
      {/* <Projects /> */}
      <HomeService />
    </div>
  );
};

export default Home;
