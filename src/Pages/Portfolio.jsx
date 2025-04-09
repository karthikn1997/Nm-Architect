import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import Bg from "../assets/pt.jpg"

const Portfolio = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div>
            <div className='w-full min-h-screen -mt-40'>
                <section className="relative min-h-[100vh] w-full flex flex-col items-center justify-center hero-section gap-8 lg:gap-4 py-8 overflow-hidden">
                    <div className="absolute inset-0 z-10 bg-gradient-to-t from-black via-transparent to-black"></div>

                    <div className="w-full absolute inset-0 bg-cover bg-center  "
                        style={{ backgroundImage: `url(${Bg})`, backgroundSize: "cover", backgroundRepeat: "no-repeat", opacity: 0.3 }}
                    ></div>

                    <div className='relative w-[95%] md:w-[80%] mt-20 bg-black bg-opacity-30 px-4 rounded-lg corner-border flex flex-col justify-center items-center'>
                        <div className='relative w-full text-white text-center mb-6'>
                            <h2 className='text-3xl sm:text-4xl md:text-5xl lg:text-6xl uppercase tracking-widest text-gold' style={{ fontFamily: "Rolland", textShadow: "1px 1px 0px gray" }}><span className="text-white" >Architecture</span> <span style={{ textShadow: "1px 1px 0px #fae4af" }}>Portfolio</span></h2>
                        </div>

                        <div className='relative z-10 flex flex-col md:flex-row justify-center items-center gap-6 text-lg md:text-2xl cursor-pointer tracking-wider text-gold' >
                            <Link
                                to='/portfolio/commercial'
                                className='cursor-pointer py-1 sm:py-2 px-4 rounded border border-gray-500 hover:text-white hover:scale-[1.02] transition-all duration-500'
                            >
                                Commercial Projects
                            </Link>
                            <Link
                                to='/portfolio/residential'
                                className='cursor-pointer py-1 sm:py-2 px-4 rounded border border-gray-500 hover:text-white hover:scale-[1.02] transition-all duration-500'
                            >
                                Residential Projects
                            </Link>
                        </div>

                    </div>
                </section>
            </div>


        </div>
    )
}

export default Portfolio