import React from 'react'
import info from "../assets/mhome.png"
import { IoMdCheckmark } from "react-icons/io";
import logo from "../assets/nmlogo.jpeg"
import { GoArrowUpRight } from "react-icons/go";

const AboutInfo = () => {
    return (
        <div className='w-full min-h-screen py-10'>

            <div className='relative w-[80%] mx-auto flex flex-col lg:flex-row justify-center items-center overflow-hidden gap-10 mb-10 border-b border-gold border-opacity-60 pb-10'>

                <div className='relative w-full lg:w-[50%] h-[40vh] sm:min-h-[60vh] flex justify-start items-center ' data-aos="slide-left" data-aos-delay="300">
                    <img src={logo} className="w-[70%] object-cover" alt="" />
                    {/* <h2 className="text-gray-300 text-5xl font-bold "><span className="text-gold">About </span>Us</h2> */}
                </div>
                <div className='relative w-full lg:w-[50%] min-h-[50vh] flex flex-col justify-center items-center ' data-aos="slide-right" data-aos-delay="300">
                    <div className='w-full text-justify p-6 md:p-0 flex flex-col justify-center items-center lg:justify-start lg:items-start'>
                        <h1 className='uppercase text-sm md:text-lg tracking-wider text-gray-400 mb-4 border-b border-gold border-opacity-60 pb-1'>Nm Square Architecture Company</h1>
                        <p className='tracking-wider text-gold text-3xl md:text-4xl text-center lg:text-left' >Your New Plot is Waiting </p>
                        <p className='text-gray-400 text-lg my-4 text-center lg:text-justify'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolorum obcaecati, molestias aliquam odio tenetur dignissimos consequatur omnis possimus ratione est tempora illo, magni consequuntur, quidem cum ea unde eveniet nemo.</p>
                        <a href="/services" className="bg-gradient-to-r from-[#ece9e55c] via-[#26282b73] to-black hover:bg-gradient-to-l text-white font-semibold py-2 px-8 rounded-lg transition duration-300 border-b border-e-2 border-gold whitespace-nowrap " data-aos="flip-left" data-aos-delay="300">
                            <div className='flex items-center gap-3 text-xl text-white'>
                                <span className='text-lg lg:text-xl text-white tracking-wider'>Services</span><GoArrowUpRight />
                            </div>
                        </a>
                    </div>
                </div>

            </div>

            <div className='w-[80%] mx-auto flex justify-center items-center py-10'>

                <div className='w-[60%] flex flex-col text-white'>
                    <h2 className='text-5xl tracking-widest mb-4 leading-[60px]' style={{ fontFamily: "Cr" }}>
                        We Build <span className='text-[#fae4af]'>Your <br />Dream</span> Building
                    </h2>
                    <p className='text-xl mb-8 text-gray-400'>
                        We are creative modern Architects specialising in one-off houses and luxury developments.
                    </p>
                    <div className='grid grid-cols-2 text-xl italic text-gray-300' >
                        <p className='flex items-center gap-4 mb-2'>
                            <span><IoMdCheckmark className='text-gold text-2xl' /></span>Highly Experienced
                        </p>
                        <p className='flex items-center gap-4 mb-2'>
                            <span><IoMdCheckmark className='text-gold text-2xl' /></span>Full Project Delivery
                        </p>
                        <p className='flex items-center gap-4 mb-2'>
                            <span><IoMdCheckmark className='text-gold text-2xl' /></span>Best Interior Choice
                        </p>
                        <p className='flex items-center gap-4 mb-2'>
                            <span><IoMdCheckmark className='text-gold text-2xl' /></span>Innovative Design Solutions
                        </p>
                        <p className='flex items-center gap-4 mb-2'>
                            <span><IoMdCheckmark className='text-gold text-2xl' /></span>Eco-Friendly & Sustainable
                        </p>
                        <p className='flex items-center gap-4 mb-2'>
                            <span><IoMdCheckmark className='text-gold text-2xl' /></span>On-Time Project Completion
                        </p>
                    </div>
                </div>


                <div className='w-[40%] flex justify-end items-start'>
                    <img src={info} alt="" className='w-full rounded-md opacity-70' />
                </div>
            </div>

            <div className='w-[80%] mx-auto flex border-b border-gold py-10 border-opacity-60'>
                <div className='w-[30%] text-[#fae4af] px-8'>
                    <h2 className='text-4xl font-light tracking-widest' style={{ fontFamily: "Cr" }}>Portfolio</h2>
                </div>
                <div className='w-[70%] text-gray-400 text-justify tracking-wider italic text-lg'>
                    <p className=''>Nm Square Architecture has a very strict policy on timely delivery and that is one of the reasons why clients are happy to do business with us. Our commitment towards on-time delivery, innovative designing and attention to details help us to deliver stunning interior and exterior spaces blended with aesthetic and functional aspects. Designing is our passion and this desire and thirst for quality adds a lot our design concepts. We do engage a lot with our customers to understand their requirements completely and provide them with periodic updates through every stage of the project.</p>
                </div>
            </div>

        </div>
    )
}

export default AboutInfo