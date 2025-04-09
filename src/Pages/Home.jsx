import React, { useEffect } from 'react';
import Hero from '../Home-Components/Hero';
import HomeAbout from '../Home-Components/HomeAbout';
import Ideas from '../Home-Components/Ideas';
import HomePortfolio from '../Home-Components/HomePortfolio';
import ContactForm from '../Contact-component/ContactForm';

const Home = () => {

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div >
      <Hero />
      <HomeAbout />
      <Ideas />
      <HomePortfolio />
      <ContactForm />
    </div>
  );
};

export default Home;
