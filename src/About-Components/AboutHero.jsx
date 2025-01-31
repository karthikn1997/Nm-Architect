import React from 'react'
import Bg from "../assets/rt1.png"
import logo from "../assets/nmlogo.jpeg"
import { GoArrowUpRight } from "react-icons/go";

const AboutHero = () => {
    return (
        <div className='w-full min-h-screen -mt-40'>
            <section className="relative min-h-[100vh] w-full flex flex-col items-center justify-center hero-section gap-8 lg:gap-4 py-8 overflow-hidden">
                <div className="absolute inset-0 z-10 bg-gradient-to-t from-black via-transparent to-transparent"></div>

                <div className="w-full absolute inset-0 bg-cover bg-center  "
                    style={{ backgroundImage: `url(${Bg})`, backgroundSize: "cover", backgroundRepeat: "no-repeat", opacity: 0.3 }}
                ></div>

                <div className='text-white text-center'>
                    <p className='text-xl text-gold uppercase mb-2'>Who We Are ?</p>
                    <h2 className='text-6xl uppercase font-extrabold tracking-widest text-gold' style={{ fontFamily: "Smooch Sans" }}><span className="text-white" style={{ fontFamily: "Smooch Sans" }}>Nm Square</span> Architecture</h2>
                </div>

            </section>


            <div className='relative w-[90%] mx-auto min-h-[100vh] flex flex-col lg:flex-row justify-center items-center overflow-hidden gap-10'>

                <div className='relative w-full lg:w-[50%] h-[40vh] sm:min-h-[60vh] flex justify-start items-center ' data-aos="slide-left" data-aos-delay="300">
                    <img src={logo} className="w-[70%] object-cover" alt="" />
                    {/* <h2 className="text-gray-300 text-5xl font-bold "><span className="text-gold">About </span>Us</h2> */}
                </div>
                <div className='relative w-full lg:w-[50%] min-h-[50vh] flex flex-col justify-center items-center ' data-aos="slide-right" data-aos-delay="300">
                    <div className='w-full text-justify p-6 md:p-0 flex flex-col justify-center items-center lg:justify-start lg:items-start'>
                        <h1 className='uppercase text-sm md:text-lg tracking-wider text-gray-400 mb-4 border-b border-gold border-opacity-60 pb-1'>Nm Square Architecture Company</h1>
                        <p className='tracking-wider text-gray-300 text-3xl md:text-4xl font-bold text-center lg:text-left'>Your New Plot is Waiting </p>
                        <p className='text-gray-400 text-lg my-4 text-center lg:text-justify'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolorum obcaecati, molestias aliquam odio tenetur dignissimos consequatur omnis possimus ratione est tempora illo, magni consequuntur, quidem cum ea unde eveniet nemo.</p>
                        <a href="/services" className="bg-gradient-to-r from-[#ece9e55c] via-[#26282b73] to-black hover:bg-gradient-to-l text-white font-semibold py-2 px-8 rounded-lg transition duration-300 border-b border-e-2 border-gold whitespace-nowrap " data-aos="flip-left" data-aos-delay="300">
                            <div className='flex items-center gap-3 font-bold text-xl text-white'>
                                <span className='text-lg lg:text-xl text-white tracking-wider'>Services</span><GoArrowUpRight />
                            </div>
                        </a>
                    </div>
                </div>

            </div>

        </div>
    )
}

export default AboutHero