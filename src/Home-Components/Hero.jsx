import React, { useEffect } from 'react';
import HeroBg from '../assets/el.png';
import AOS from 'aos';
import 'aos/dist/aos.css';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Typewriter } from 'react-simple-typewriter';
import { FaRegArrowAltCircleDown } from "react-icons/fa";

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
    <div className='w-full min-h-screen -mt-32'>
      <section className="relative min-h-screen w-full flex flex-col lg:flex-row items-center justify-center hero-section gap-8 lg:gap-4 py-8 overflow-hidden">
        <div className="absolute inset-0 z-0"></div> {/* Transparent overlay */}

        <div className="w-full absolute inset-0 bg-cover bg-center  "
          style={{ backgroundImage: `url(${HeroBg})`, backgroundSize: "cover", backgroundRepeat: "no-repeat", opacity: 1 }}
        ></div>

        <div className='w-[90%] mx-auto min-h-screen px-8 pt-10 lg:p-20 flex flex-col justify-center items-center lg:items-start '>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl text-white font-semibold mb-4 text-center lg:text-left" data-aos="slide-right" data-aos-delay="300">
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
          <p className="text-sm lg:text-xl tracking-wider text-white mb-4 md:mb-8 text-center lg:text-left" data-aos="slide-left" data-aos-delay="300">
            We're glad you're here. Discover amazing plots and join our community!
          </p>
          <button className="bg-gradient-to-r from-[#ece9e55c] via-[#26282b73] to-black hover:bg-gradient-to-l text-white font-semibold py-2 sm:py-3 px-8 rounded-lg transition duration-300 border-b border-e-2 border-gray-300 whitespace-nowrap " data-aos="flip-left" data-aos-delay="300">
            <div className='flex items-center gap-3 font-bold text-xl text-white hover:text-black'>
              <span className='text-lg lg:text-2xl text-white'>Explore Now</span><span className='text-2xl animate-bounce'><FaRegArrowAltCircleDown className='text-gray-300' /></span>
            </div>
          </button>
        </div>

        
      </section>
    </div>
  );
}

export default Hero;
