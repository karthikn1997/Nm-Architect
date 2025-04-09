import React from 'react'
import bgImage from "../assets/rt.png"
import { SiAltiumdesigner } from "react-icons/si";
import { CgLoadbarSound } from "react-icons/cg";
import { PiLightbulbFilamentLight } from "react-icons/pi";
import { IoCheckmarkDone } from "react-icons/io5";
import HomeService from './HomeService';

const Ideas = () => {
    return (
        <>
            <div className='relative w-full min-h-[60vh] -mt-20 sm:-mt-10 mb-10'>

                <div className="absolute inset-0 z-10 bg-gradient-to-b from-black via-transparent to-black"></div>

                <div className="w-full absolute inset-0 bg-cover bg-center "
                    style={{ backgroundImage: `url(${bgImage})`, backgroundSize: "cover", backgroundRepeat: "no-repeat", backgroundPosition: "bottom", opacity: 0.2 }}
                ></div>

                <div className="w-full sm:w-[95%] mx-auto relative grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 p-4 sm:p-6 gap-2 my-10 text-justify lg:text-left z-50 leading-6">
                    <div className='h-full p-4 sm:p-8 sm:py-14 border-l border-t border-gold  '>
                        <PiLightbulbFilamentLight className='text-5xl sm:text-7xl text-white mb-4 border-2 p-3 rounded-full border-gray-500  ' />
                        <h3 className='text-2xl font-semibold  mb-2 sm:mb-4 text-gold' >Creative Ideas</h3>
                        <p className='text-md text-gray-300 tracking-wider font-light text-justify'>
                            From timeless, branded boutiques and inclusive community spaces, everything we do is inspired by you.
                        </p>
                    </div>
                    <div className='h-full p-4 sm:p-8 sm:py-14'>
                        <SiAltiumdesigner className='text-5xl sm:text-7xl text-white mb-4 border-2 p-3 rounded-full border-gray-500 ' />
                        <h3 className='text-2xl font-semibold text-gold  mb-2 sm:mb-4 ' >Uniqueness</h3>
                        <p className='text-md text-gray-300  tracking-wider font-light text-justify'>
                            You will receive a custom, one-site-does not-fill-all design that is entirely bespoke and unique for you.
                        </p>
                    </div>
                    <div className='h-full p-4 sm:p-8 sm:py-14'>
                        <CgLoadbarSound className='text-5xl sm:text-7xl text-white mb-4 border-2 p-2 rounded-full border-gray-500 ' />
                        <h3 className='text-2xl font-semibold text-gold  mb-2 sm:mb-4' >High Efficiency</h3>
                        <p className='text-md text-gray-300  tracking-wider font-light text-justify'>
                            Your project will be massively effective. There will be minimal revisions along the way and it will be delivered on time.
                        </p>
                    </div>
                    <div className='h-full p-4 sm:p-8 sm:py-14 border-r border-b border-gold '>
                        <IoCheckmarkDone className='text-5xl sm:text-7xl text-white mb-4 border-2 p-3 rounded-full border-gray-500 ' />
                        <h3 className='text-2xl font-semibold text-gold  mb-2 sm:mb-4' >Best Solution</h3>
                        <p className='text-md text-gray-300  tracking-wider font-light text-justify'>
                            You will receive all the design solutions you need along with the finest planning advice from a strategically minded team.
                        </p>
                    </div>
                </div>
                <HomeService />
            </div>
        </>
    )
}

export default Ideas