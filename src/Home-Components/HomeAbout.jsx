import React, { useState, useEffect } from "react";
import AOS from 'aos';
import AboutBg from "../assets/aboutbg.png"
import 'aos/dist/aos.css';
import { GoArrowUpRight } from "react-icons/go";

const HomeAbout = () => {
    useEffect(() => {
        AOS.init({
            duration: 1000
        });
    }, []);

    return (

        <>
            <div className='relative w-full min-h-[60vh] flex flex-col lg:flex-row justify-center items-center overflow-hidden -mt-16 z-10'>

                <div className='relative w-full lg:w-[50%] h-[40vh] sm:h-[60vh] overflow-hidden flex flex-col justify-center items-center' data-aos="slide-left" data-aos-delay="300">
                    {/* <img src={Worker} className="w-full h-[40vh] sm:h-[60vh] object-cover" alt="" /> */}
                    <h2 className="text-gray-300 text-6xl flex flex-col gap-2 tracking-tighter uppercase" style={{ fontFamily: "Rc" }}
                    ><span className="text-gold ">Who </span><span className="text-gray-400">We Are ?</span></h2>
                </div>
                <div className='relative w-full lg:w-[60%] min-h-[50vh] flex flex-col justify-center items-center ' data-aos="slide-right" data-aos-delay="300">
                    <div className='w-full md:w-[80%] text-justify p-6 md:p-0 flex flex-col justify-center items-center lg:justify-start lg:items-start'>
                        <h1 className='uppercase text-sm md:text-lg tracking-wider text-gray-400 mb-4 border-b border-gold border-opacity-60 pb-1'>Nm Square Architecture Company</h1>
                        <p className='tracking-tight text-[#fae4af] text-2xl md:text-5xl text-center lg:text-left' style={{ fontFamily: "Rolland" }}>Your New Plot is Waiting </p>
                        <p className='text-gray-400 text-lg mt-2 mb-4 text-center lg:text-justify'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolorum obcaecati, molestias aliquam odio tenetur dignissimos consequatur omnis possimus ratione est tempora illo, magni consequuntur, quidem cum ea unde eveniet nemo.</p>
                        <a href="/about" className="bg-gradient-to-r from-[#ece9e55c] via-[#26282b73] to-black hover:bg-gradient-to-l text-white py-2 px-8 rounded-lg transition duration-300 border-b border-e-2 border-gold whitespace-nowrap mt-2" data-aos="flip-left" data-aos-delay="300">
                            <div className='flex items-center gap-3 text-lg text-white tracking-wider' style={{ fontFamily: "" }}>
                                <span className='text-lg lg:text-xl text-white tracking-widest'>About Us</span><GoArrowUpRight />
                            </div>
                        </a>
                    </div>
                </div>

            </div>
        </>


    )
}

export default HomeAbout;
