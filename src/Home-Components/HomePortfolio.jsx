import React from 'react'
import Bg from "../assets/aboutbg.png"
import { RiMoneyRupeeCircleLine } from "react-icons/ri";
import { SlEyeglass } from "react-icons/sl";
import { TbPigMoney } from "react-icons/tb";
import { GiTakeMyMoney } from "react-icons/gi";
import { CiMedal } from "react-icons/ci";
import { TbProgressCheck } from "react-icons/tb";

const HomePortfolio = () => {
    return (
        <div className='w-full min-h-screen -mt-20'>
            
            <section className="relative min-h-[100vh] w-full flex flex-col items-center justify-start hero-section gap-8 lg:gap-4 sm:py-8 overflow-hidden">
                <div className="absolute inset-0 z-10 bg-gradient-to-b from-black via-transparent to-black"></div>

                <div className="w-full absolute inset-0 bg-cover bg-center  "
                    style={{ backgroundImage: `url(${Bg})`, backgroundSize: "cover", backgroundRepeat: "no-repeat", opacity: 0.2 }}
                ></div>


                <div className='relative w-[90%] mx-auto flex flex-col sm:mt-20 z-50'>

                    <div className="w-full mx-auto relative grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 p-4 sm:p-8 gap-4 sm:gap-20 my-10 text-center z-50">

                        <div className='relative h-full p-4 sm:p-8 flex flex-col justify-center items-center rounded-md hover:scale-105 transform transition-all duration-700'>
                            <RiMoneyRupeeCircleLine className='text-5xl sm:text-7xl text-white mb-4 border-2 p-3 rounded-full border-gold border-opacity-50 z-50' />
                            <h3 className='text-2xl  text-gold tracking-wider mb-2 z-50' >Cost Consultancy</h3>
                            <p className='text-md text-gray-300 tracking-wider font-light z-50'>
                                Budgets Upfront
                            </p>
                        </div>

                        <div className='relative h-full p-4 sm:p-8 flex flex-col justify-center items-center hover:scale-105 transform transition-all duration-700'>
                            <SlEyeglass className='text-5xl sm:text-7xl text-white mb-4 border-2 p-3 rounded-full border-gold border-opacity-50 z-50' />
                            <h3 className='text-2xl  text-gold tracking-wider mb-2 z-50 ' >See what you’ll get</h3>
                            <p className='text-md text-gray-300 tracking-wider font-light z-50'>
                                360 Visualization
                            </p>
                        </div>

                        <div className='relative h-full p-4 sm:p-8 flex flex-col justify-center items-center hover:scale-105 transform transition-all duration-700'>
                            <GiTakeMyMoney className='text-5xl sm:text-7xl text-white mb-4 border-2 p-3 rounded-full border-gold border-opacity-50 z-50' />
                            <h3 className='text-2xl  text-gold tracking-wider mb-2 z-50' >Cost Control</h3>
                            <p className='text-md text-gray-300 tracking-wider font-light z-50'>
                                Accurate BOQ
                            </p>
                        </div>

                        <div className='relative h-full p-4 sm:p-8 flex flex-col justify-center items-center hover:scale-105 transform transition-all duration-700'>
                            <TbPigMoney className='text-5xl sm:text-7xl text-white mb-4 border-2 p-3 rounded-full border-gold border-opacity-50 z-50' />
                            <h3 className='text-2xl  text-gold tracking-wider mb-2 z-50' >Big Savings</h3>
                            <p className='text-md text-gray-300 tracking-wider font-light z-50'>
                                Vendor Discounts
                            </p>
                        </div>

                        <div className='relative h-full p-4 sm:p-8 flex flex-col justify-center items-center hover:scale-105 transform transition-all duration-700'>
                            <CiMedal className='text-5xl sm:text-7xl text-white mb-4 border-2 p-3 rounded-full border-gold border-opacity-50 z-50' />
                            <h3 className='text-2xl  text-gold tracking-wider mb-2 z-50' >Quality Control</h3>
                            <p className='text-md text-gray-300 tracking-wider font-light z-50'>
                                Photographic Progress
                            </p>
                        </div>

                        <div className='relative h-full p-4 sm:p-8 flex flex-col justify-center items-center hover:scale-105 transform transition-all duration-700 '>                        
                            <TbProgressCheck className='text-5xl sm:text-7xl text-white mb-4 border-2 p-3 rounded-full border-gold border-opacity-50 z-50' />
                            <h3 className='text-2xl  text-gold tracking-wider mb-2 z-50' >Clarity on Process</h3>
                            <p className='text-md text-gray-300 tracking-wider font-light z-50'>
                                Liasoning and Approvals
                            </p>
                        </div>
                    </div>

                </div>

            </section>
        </div>
    )
}

export default HomePortfolio