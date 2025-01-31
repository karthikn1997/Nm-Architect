import React from 'react'
import info from "../assets/hero.jpg"
import { IoMdCheckmark } from "react-icons/io";

const AboutInfo = () => {
    return (
        <div className='w-full min-h-screen py-10'>

            <div className='w-[90%] mx-auto flex justify-center items-start'>


                <div className='w-[40%] flex flex-col text-white'>
                    <h2 className='text-6xl uppercase  tracking-widest mb-4' style={{ fontFamily: "Smooch Sans" }}>We Build <span className='text-gold'>Your <br />Dream</span> Building</h2>
                    <p className='text-xl mb-8'>We are creative modern Architects specialising in one-off houses and luxury developments.</p>
                    <div>
                        <p className='flex items-center gap-4 mb-2'><span><IoMdCheckmark className='text-gold text-2xl'/></span>Highly Experienced</p>
                        <p className='flex items-center gap-4 mb-2'><span><IoMdCheckmark className='text-gold text-2xl'/></span>Full Project Delivery</p>
                        <p className='flex items-center gap-4 mb-2'><span><IoMdCheckmark className='text-gold text-2xl'/></span>Best Interior Choice</p>
                    </div>
                </div>


                <div className='w-[60%] flex justify-end items-start'>
                    <img src={info} alt="" className='w-[80%] rounded-md opacity-60' />
                </div>
            </div>

        </div>
    )
}

export default AboutInfo