import React from 'react'
import bgImage from "../assets/aboutbg.png"
import { GiBookAura } from "react-icons/gi";
import { GiTimeTrap } from "react-icons/gi";
import { MdOutlineVerifiedUser } from "react-icons/md";
import { SiMinds } from "react-icons/si";
import { SiAltiumdesigner } from "react-icons/si";
import { CgLoadbarSound } from "react-icons/cg";
import { PiLightbulbFilamentLight } from "react-icons/pi";
import { ImCheckmark2 } from "react-icons/im";
import { IoCheckmarkDone } from "react-icons/io5";

const Ideas = () => {
    return (
        <div className='relative w-full min-h-[60vh] -mt-10'>
            <div className='absolute inset-0 w-full -mt-20' style={{ backgroundImage: `url(${bgImage})`, backgroundSize: "cover", backgroundPosition: "top", opacity: 0.2 }}></div>
            <div className="absolute inset-0 z-10 bg-gradient-to-t from-black via-transparent to-transparent"></div> 

            <div className="w-full sm:w-[95%] mx-auto relative grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 p-4 sm:p-8 gap-4 sm:gap-10 my-10 text-justify lg:text-left z-50">
                <div className='h-full p-8 border-l border-t border-gold  '>
                    <PiLightbulbFilamentLight className='text-5xl sm:text-7xl text-white mb-4 border-2 p-3 rounded-full border-gold  ' />
                    <h3 className='text-2xl font-semibold text-white tracking-wider mb-2 sm:mb-6' >Creative Ideas</h3>
                    <p className='text-md text-gray-300 tracking-wider font-light '>
                        From timeless, branded boutiques and inclusive community spaces, everything we do is inspired by you.
                    </p>
                </div>
                <div className='h-full p-8'>
                    <SiAltiumdesigner className='text-5xl sm:text-7xl text-white mb-4 border-2 p-3 rounded-full border-gold ' />
                    <h3 className='text-2xl font-semibold text-white tracking-wider mb-2 sm:mb-6 '>Uniqueness</h3>
                    <p className='text-md text-gray-300 tracking-wider font-light '>
                        You will receive a custom, one-site-does not-fill-all design that is entirely bespoke and unique for you.
                    </p>
                </div>
                <div className='h-full p-8'>
                    <CgLoadbarSound className='text-5xl sm:text-7xl text-white mb-4 border-2 p-2 rounded-full border-gold ' />
                    <h3 className='text-2xl font-semibold text-white tracking-wider mb-2 sm:mb-6'>High Efficiency</h3>
                    <p className='text-md text-gray-300 tracking-wider font-light '>
                        Your project will be massively effective. There will be minimal revisions along the way and it will be delivered on time.
                    </p>
                </div>
                <div className='h-full p-8 border-r border-b border-gold '>
                    <IoCheckmarkDone className='text-5xl sm:text-7xl text-white mb-4 border-2 p-3 rounded-full border-gold ' />
                    <h3 className='text-2xl font-semibold text-white tracking-wider mb-2 sm:mb-6'>Best Solution</h3>
                    <p className='text-md text-gray-300 tracking-wider font-light '>
                        You will receive all the design solutions you need along with the finest planning advice from a strategically minded team.
                    </p>
                </div>
            </div>
        </div>
    )
}

export default Ideas