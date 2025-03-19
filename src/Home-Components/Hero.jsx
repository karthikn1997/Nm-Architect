import React, { useEffect } from 'react';
import HeroBg from '../assets/c2.jpg';
import AOS from 'aos';
import 'aos/dist/aos.css';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Typewriter } from 'react-simple-typewriter';
import { FaRegArrowAltCircleDown } from "react-icons/fa";
import Counters from './Counters';
import HomeAbout from './HomeAbout';

const Hero = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000
    });
  }, []);

  const settings = {
    dots: true,
    arrows: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    fade: true,
  };

  return (
    <div className='w-full min-h-screen -mt-40'>
      <section className="relative min-h-[100vh] w-full flex flex-col items-center justify-center hero-section gap-8 lg:gap-4 py-8 overflow-hidden">
        <div className="absolute inset-0 z-10 bg-gradient-to-t from-black via-transparent to-black"></div>

        <div className="w-full absolute inset-0 bg-cover bg-center  "
          style={{ backgroundImage: `url(${HeroBg})`, backgroundSize: "cover", backgroundRepeat: "no-repeat", opacity: 1 }}
        ></div>

        <div className='relative w-full mx-auto min-h-[100vh] px-8 pt-10 lg:pt-[200px] flex flex-col justify-center items-center z-10'>
          <h1 className="text-3xl sm:text-3xl lg:text-4xl text-gold font-semibold mb-4 text-center lg:text-left italic " data-aos="slide-right" data-aos-delay="300" style={{fontFamily: "Orbitron" , textShadow: "2px 2px 0px black"}}>
            <Typewriter
              words={[
                "Turn Your Dream Plot Into Reality",
                "Make Your Dream a Reality with Us",
                "Build Your Future with Our Plots",
              ]}
              loop
              cursor
              cursorStyle='_'
              typeSpeed={100}
              deleteSpeed={50}
              delaySpeed={1000}
            />
          </h1>
          <p className="text-sm lg:text-xl tracking-wider text-gray-300 mb-4 md:mb-8 text-center lg:text-left font-bitter" data-aos="slide-left" data-aos-delay="300">
            We're glad you're here. Discover amazing plots and join our community!
          </p>
          
          <Counters />
        </div>



      </section>


    </div>
  );
}

export default Hero;
