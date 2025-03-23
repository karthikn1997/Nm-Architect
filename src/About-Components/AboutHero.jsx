import React from 'react'
import Bg from "../assets/rt1.png"


const AboutHero = () => {
    return (
        <div className='w-full min-h-screen -mt-40'>
            <section className="relative min-h-[100vh] w-full flex flex-col items-center justify-center hero-section gap-8 lg:gap-4 py-8 overflow-hidden">
                <div className="absolute inset-0 z-10 bg-gradient-to-t from-black via-transparent to-black"></div>

                <div className="w-full absolute inset-0 bg-cover bg-center  "
                    style={{ backgroundImage: `url(${Bg})`, backgroundSize: "cover", backgroundRepeat: "no-repeat", opacity: 0.3 }}
                ></div>

                <div className='text-white text-center'>
                    <p className='text-xl text-gold uppercase mb-6'>Who We Are ?</p>
                    <h2 className='text-6xl tracking-widest text-[#fae4af] uppercase' style={{ fontFamily: "Cr" }}><span className="text-white uppercase" style={{ fontFamily: "Cr" }}>NM Square</span> Architecture</h2>
                </div>

            </section>

        </div>
    )
}


export default AboutHero