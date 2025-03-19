import React from 'react'
import bgImage from "../assets/rt.png"
import { GiBookAura } from "react-icons/gi";
import { GiTimeTrap } from "react-icons/gi";
import { MdOutlineVerifiedUser } from "react-icons/md";
import { SiMinds } from "react-icons/si";
import { SiAltiumdesigner } from "react-icons/si";
import { CgLoadbarSound } from "react-icons/cg";
import { PiLightbulbFilamentLight } from "react-icons/pi";
import { ImCheckmark2 } from "react-icons/im";
import { IoCheckmarkDone } from "react-icons/io5";
import HomeService from './HomeService';

const Ideas = () => {
    return (
        <>
            <div className='relative w-full min-h-[60vh] -mt-10'>

                <div className="absolute inset-0 z-10 bg-gradient-to-b from-black via-transparent to-black"></div>

                <div className="w-full absolute inset-0 bg-cover bg-center "
                    style={{ backgroundImage: `url(${bgImage})`, backgroundSize: "cover", backgroundRepeat: "no-repeat", backgroundPosition: "bottom", opacity: 0.2 }}
                ></div>

                <div className="w-full sm:w-[95%] mx-auto relative grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 p-4 sm:p-6 gap-2 my-10 text-justify lg:text-left z-50">
                    <div className='h-full p-8 border-l border-t border-gold  '>
                        <PiLightbulbFilamentLight className='text-5xl sm:text-7xl text-white mb-4 border-2 p-3 rounded-full border-gray-500  ' />
                        <h3 className='text-3xl font-light  mb-2 sm:mb-4 text-[#fae4af]' style={{ fontFamily: "Rolland" }}>Creative Ideas</h3>
                        <p className='text-md text-gray-300 font-light '>
                            From timeless, branded boutiques and inclusive community spaces, everything we do is inspired by you.
                        </p>
                    </div>
                    <div className='h-full p-8'>
                        <SiAltiumdesigner className='text-5xl sm:text-7xl text-white mb-4 border-2 p-3 rounded-full border-gray-500 ' />
                        <h3 className='text-3xl font-light text-[#fae4af]  mb-2 sm:mb-4 ' style={{ fontFamily: "Rolland" }}>Uniqueness</h3>
                        <p className='text-md text-gray-300 font-light '>
                            You will receive a custom, one-site-does not-fill-all design that is entirely bespoke and unique for you.
                        </p>
                    </div>
                    <div className='h-full p-8'>
                        <CgLoadbarSound className='text-5xl sm:text-7xl text-white mb-4 border-2 p-2 rounded-full border-gray-500 ' />
                        <h3 className='text-3xl font-light text-[#fae4af]  mb-2 sm:mb-4' style={{ fontFamily: "Rolland" }}>High Efficiency</h3>
                        <p className='text-md text-gray-300 font-light '>
                            Your project will be massively effective. There will be minimal revisions along the way and it will be delivered on time.
                        </p>
                    </div>
                    <div className='h-full p-8 border-r border-b border-gold border-opacity-50'>
                        <IoCheckmarkDone className='text-5xl sm:text-7xl text-white mb-4 border-2 p-3 rounded-full border-gray-500 ' />
                        <h3 className='text-3xl font-light text-[#fae4af]  mb-2 sm:mb-4' style={{ fontFamily: "Rolland" }}>Best Solution</h3>
                        <p className='text-md text-gray-300 font-light '>
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