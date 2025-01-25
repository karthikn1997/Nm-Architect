import React, { useState, useEffect } from "react";
import AOS from 'aos';
import AboutBg from "../assets/aboutbg.png"
import 'aos/dist/aos.css';

const HomeAbout = () => {
    useEffect(() => {
        AOS.init({
            duration: 1000
        });
    }, []);

    return (
        <div className='relative w-full min-h-[60vh] flex flex-col lg:flex-row justify-center items-center overflow-hidden'>
            
            <div className="w-full absolute inset-0 bg-cover bg-center  "
                style={{ backgroundImage: `url(${AboutBg})`, backgroundSize: "cover", backgroundRepeat: "no-repeat", opacity: 0.3 }}
            ></div>

            <div className='relative w-full lg:w-[40%] h-[40vh] sm:h-[60vh] overflow-hidden flex flex-col justify-center items-center' data-aos="slide-left" data-aos-delay="300">
                {/* <img src={Worker} className="w-full h-[40vh] sm:h-[60vh] object-cover" alt="" /> */}
                <h2 className="text-gray-300 text-5xl font-bold">Who We Are ?</h2>
            </div>
            <div className='relative w-full lg:w-[60%] min-h-[50vh] flex flex-col justify-center items-center ' data-aos="slide-right" data-aos-delay="300">
                <div className='w-full md:w-[80%] text-justify p-6 md:p-0 flex flex-col justify-center items-center lg:justify-start lg:items-start'>
                    <h1 className='uppercase text-sm md:text-lg tracking-wider text-gray-500 '>Nm Square Architecture Company</h1>
                    <p className='tracking-wider text-gray-300 text-3xl md:text-4xl font-bold text-center lg:text-left'>Your New Plot is Waiting </p>
                    <p className='text-gray-400 text-lg my-4 text-center lg:text-justify'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolorum obcaecati, molestias aliquam odio tenetur dignissimos consequatur omnis possimus ratione est tempora illo, magni consequuntur, quidem cum ea unde eveniet nemo.</p>
                    <button className="bg-gradient-to-r from-[#ece9e55c] via-[#26282b73] to-black hover:bg-gradient-to-l text-white font-semibold py-2 px-8 rounded-lg transition duration-300 border-b border-e-2 border-gray-300 whitespace-nowrap " data-aos="flip-left" data-aos-delay="300">
                        <div className='flex items-center gap-3 font-bold text-xl text-white hover:text-black'>
                            <span className='text-lg lg:text-xl text-white tracking-wider'>About Us</span>
                        </div>
                    </button>
                </div>
            </div>

        </div>
    )
}

export default HomeAbout;
