import React from 'react'
import Bg from "../assets/r1.jpg"


const ServiceHero = () => {
    return (
        <div className='w-full min-h-[50vh] sm:min-h-[100vh] sm:-mt-40'>
            <section className="relative min-h-[50vh] sm:min-h-[100vh] w-full flex flex-col items-center justify-center hero-section gap-8 lg:gap-4 py-8 overflow-hidden">
                <div className="absolute inset-0 z-10 bg-gradient-to-t from-black via-transparent to-black"></div>

                <div className="w-full absolute inset-0 bg-cover bg-center  "
                    style={{ backgroundImage: `url(${Bg})`, backgroundSize: "cover", backgroundRepeat: "no-repeat", opacity: 0.3 }}
                ></div>

                <div className='relative text-white text-center '>
                    <h2 className='text-3xl sm:text-4xl md:text-6xl uppercase tracking-widest text-gold' style={{ fontFamily: "Rolland", textShadow: "1px 1px 0px gray" }}><span className="text-white" >Our</span> <span style={{ textShadow: "1px 1px 0px #fae4af" }}>Services</span></h2>
                </div>

            </section>

        </div>
    )
}

export default ServiceHero