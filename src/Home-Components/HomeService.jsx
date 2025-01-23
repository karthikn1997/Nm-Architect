import React from 'react'
import ServiceBg from "../assets/nmpngcut.png"
import { PiBuildingOfficeLight } from "react-icons/pi";
import { TbBuildingWarehouse } from "react-icons/tb";
import { FaPeopleRoof } from "react-icons/fa6";
import { MdDesignServices } from "react-icons/md";
import { PiBrainLight } from "react-icons/pi";
import { PiBuildingApartmentLight } from "react-icons/pi";

const HomeService = () => {
    return (
        <div className='relative w-full min-h-screen'>

            <div className="w-[80%] mx-auto absolute inset-0 bg-cover bg-center"
                style={{ backgroundImage: `url(${ServiceBg})`, backgroundSize: "cover", backgroundRepeat: "no-repeat", opacity: 0.15 }}
            ></div>

            <div className='relative w-full min-h-screen flex justify-center items-center gap-4'>
                <div className='w-[50%] min-h-screen flex flex-col justify-center items-center gap-8'>
                    <div className='w-[70%] flex flex-col justify-center items-end text-gray-300 text-right'>
                        <PiBuildingOfficeLight className='w-20 h-20 text-gray-400' />
                        <h2 className='text-2xl mb-4 text-white'>Architecture</h2>
                        <p className='text-gray-400 text-md'>Residences | Apartments | Commercial | Offices | Institutions | Hospitals | Resorts | Industries</p>
                    </div>
                    <div className='w-[70%] flex flex-col justify-center items-end text-gray-300 text-right'>
                        <TbBuildingWarehouse className='w-20 h-20 text-gray-400' />
                        <h2 className='text-2xl mb-4 text-white'>Interior Design</h2>
                        <p className='text-gray-400 text-md'>Residences | Apartments | Villas | Offices | Retail | Hospitality | Commercial | Healthcare</p>
                    </div>
                    <div className='w-[70%] flex flex-col justify-center items-end text-gray-300 text-right'>
                        <PiBrainLight className='w-20 h-20 text-gray-400' />
                        <h2 className='text-2xl mb-4 text-white'>Master planning</h2>
                        <p className='text-gray-400 text-md'>Townships | Sports Complexes | Campus Planning | Large Scale Hospitals | Public Buildings</p>
                    </div>
                </div>
                <div className='w-[50%] min-h-screen flex flex-col justify-center items-center gap-8'>
                    <div className='w-[70%] flex flex-col justify-center items-start text-gray-300 text-left'>
                        <FaPeopleRoof className='w-20 h-20 text-gray-400' />
                        <h2 className='text-2xl mb-4 text-white'>Project Management</h2>
                        <p className='text-gray-400 text-md'>Construction Management | Contract Management | Liasoning | Scheduling | Quality Control</p>
                    </div>
                    <div className='w-[70%] flex flex-col justify-center items-start text-gray-300 text-left'>
                        <MdDesignServices className='w-20 h-20 text-gray-400' />
                        <h2 className='text-2xl mb-4 text-white'>Art & Graphic Design</h2>
                        <p className='text-gray-400 text-md'>Graphic Design | Artworks Design | Art Installations | Sculpture | Illustrations | Interior Graphics</p>
                    </div>
                    <div className='w-[70%] flex flex-col justify-center items-start text-gray-300 text-left'>
                        <PiBuildingApartmentLight className='w-20 h-20 text-gray-400' />
                        <h2 className='text-2xl mb-4 text-white'>Landscape Design</h2>
                        <p className='text-gray-400 text-md'>Residential | Institutional | Campus | Commercial | Indoor | Recreational | Public Spaces</p>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default HomeService