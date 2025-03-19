import React from 'react'
import Bg from "../assets/r2.jpg"


const ResidentialHero = () => {
    return (
        <div className='w-full min-h-screen -mt-40'>
            <section className="relative min-h-[100vh] w-full flex flex-col items-center justify-center hero-section gap-8 lg:gap-4 py-8 overflow-hidden">
                <div className="absolute inset-0 z-10 bg-gradient-to-t from-black via-transparent to-black"></div>

                <div className="w-full absolute inset-0 bg-cover bg-center "
                    style={{ backgroundImage: `url(${Bg})`, backgroundSize: "cover", backgroundRepeat: "no-repeat", opacity: 0.5 }}
                ></div>

                <div className='relative text-white text-center '>
                    <h2 className='text-6xl uppercase font-bold tracking-widest text-gold bg-black bg-opacity-50 px-4 pt-3 py-2' style={{ fontFamily: "Foldit", textShadow: "1px 1px 0px white" }}><span className="text-white" >Residential</span> Projects</h2>
                </div>

            </section>
        </div>
    )
}

export default ResidentialHero