import React, { useState, useEffect } from "react";
import clinicbg from '../assets/nmbg.png';
import { FaArrowRightLong } from "react-icons/fa6";
import AOS from 'aos';
import 'aos/dist/aos.css';

const Future = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000
    });
  }, []);

  return (
    <div className='w-full lg:h-[100vh] h-screen relative'>
      <div
        className='w-full h-full bg-cover bg-center bg-fixed'
        style={{ backgroundImage: `url(${clinicbg})`, backgroundAttachment: 'fixed' }}
      >
        <div className='flex flex-col gap-3 items-center justify-center w-full h-full absolute top-0 left-0 '>
          <div className='flex flex-col justify-evenly text-center text-white p-4 bg-black bg-opacity-70 rounded-3xl lg:w-[80%] py-10 sm:py-20 border-x-4 border-white' data-aos="fade-right">
            {/* Updated font style here */}
            <h1 className='text-2xl sm:text-5xl font-bold font-[Cinzel] text-white mb-8 tracking-widest' data-aos="slide-right" data-aos-delay="300">
              Your Future Begins Here
            </h1>
            <p className='text-xl text-gray-300 mb-8 px-10' data-aos="slide-left" data-aos-delay="300">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit molestias quas quaerat tempore, tempora illo pariatur facere minus inventore odio provident laboriosam. Facere nulla consectetur, maxime ducimus provident commodi perferendis?
            </p>
            <button className="w-[80%] sm:w-[25%] mx-auto bg-gradient-to-r from-[#ece9e55c] via-[#26282b73] to-black hover:bg-gradient-to-l text-white font-semibold py-2 sm:py-3 px-8 rounded-xl transition duration-300 border-b border-e-2 border-gray-300 whitespace-nowrap" data-aos="flip-left" data-aos-delay="300">
              <div className='flex items-center justify-center gap-3 font-bold text-xl text-white hover:text-black'>
                <span className='text-lg lg:text-2xl text-white flex justify-center items-center gap-4 tracking-wider'>Request A Visit <FaArrowRightLong className='mt-1'/></span>
              </div>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Future;
