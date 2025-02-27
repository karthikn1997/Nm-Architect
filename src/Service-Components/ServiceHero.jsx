import React from 'react'
import Bg from "../assets/r1.jpg"


const ServiceHero = () => {
    return (
        <div className='w-full min-h-screen -mt-40'>
            <section className="relative min-h-[100vh] w-full flex flex-col items-center justify-center hero-section gap-8 lg:gap-4 py-8 overflow-hidden">
                <div className="absolute inset-0 z-10 bg-gradient-to-t from-black via-transparent to-black"></div>

                <div className="w-full absolute inset-0 bg-cover bg-center  "
                    style={{ backgroundImage: `url(${Bg})`, backgroundSize: "cover", backgroundRepeat: "no-repeat", opacity: 0.9 }}
                ></div>

                <div className='relative text-white text-center '>
                    <h2 className='text-6xl uppercase font-extrabold tracking-widest text-gold' style={{ fontFamily: "Smooch Sans", textShadow: "2px 4px 0px black" }}><span className="text-white" style={{ fontFamily: "Smooch Sans", textShadow: "2px 4px 0px black" }}>Our</span> Services</h2>
                </div>

            </section>

        </div>
    )
}

export default ServiceHero