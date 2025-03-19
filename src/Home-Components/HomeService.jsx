import React from 'react'
import ServiceBg from "../assets/rt3.png"
import { PiBuildingOfficeLight } from "react-icons/pi";
import { TbBuildingWarehouse } from "react-icons/tb";
import { FaPeopleRoof } from "react-icons/fa6";
import { MdDesignServices } from "react-icons/md";
import { PiBrainLight } from "react-icons/pi";
import { PiBuildingApartmentLight } from "react-icons/pi";
import { LiaHouseDamageSolid } from "react-icons/lia";
import { GiPencilBrush } from "react-icons/gi";
import { TbUsersGroup } from "react-icons/tb";

const HomeService = () => {
    return (
        <div className='relative w-full min-h-screen'>

            <div className="absolute inset-0 z-10 bg-gradient-to-t from-black via-transparent to-transparent"></div>

            {/* <div className="w-[100%] mx-auto absolute inset-0 bg-cover bg-center"
                style={{ backgroundImage: `url(${ServiceBg})`, backgroundSize: "cover", backgroundRepeat: "no-repeat", opacity: 0.3 }}
            ></div> */}

            <div className='relative w-[95%] p-8 mx-auto min-h-screen flex justify-center items-center gap-10 z-50'>
                <div className='w-[50%] min-h-screen flex flex-col justify-center items-center gap-8 border-r border-t border-b border-gold'>
                    <div className='w-[70%] flex flex-col justify-center items-end text-gray-300 text-right '>
                        <PiBuildingOfficeLight
                            className="w-20 h-20 text-gold mb-2"
                            style={{
                                filter: "drop-shadow(0 0 0px rgba(210, 183, 122, 0.8)) drop-shadow(0 0 6px rgba(0, 0, 0))",
                                WebkitMaskImage: "-webkit-gradient(linear, left top, left bottom, from(rgba(0,0,0,1)), to(rgba(0,0,0,0)))"
                            }}
                        />
                        <h2 className='text-2xl  text-gray-300' style={{ fontFamily: "Audiowide" }}>Architecture</h2>
                        <p className='text-gray-400 text-md'>Residences | Apartments | Commercial | Offices | Institutions | Hospitals | Resorts | Industries</p>
                    </div>
                    <div className='w-[70%] flex flex-col justify-center items-end text-gray-300 text-right'>
                        <LiaHouseDamageSolid className="w-20 h-20 text-gold mb-2"
                            style={{
                                filter: "drop-shadow(0 0 0px rgba(210, 183, 122, 0.8)) drop-shadow(0 0 6px rgba(0, 0, 0))",
                                WebkitMaskImage: "-webkit-gradient(linear, left top, left bottom, from(rgba(0,0,0,1)), to(rgba(0,0,0,0)))"
                            }}
                        />
                        <h2 className='text-2xl  text-gray-300' style={{ fontFamily: "Audiowide" }}>Interior Design</h2>
                        <p className='text-gray-400 text-md'>Residences | Apartments | Villas | Offices | Retail | Hospitality | Commercial | Healthcare</p>
                    </div>
                    <div className='w-[70%] flex flex-col justify-center items-end text-gray-300 text-right'>
                        <PiBrainLight className="w-20 h-20 text-gold mb-2"
                            style={{
                                filter: "drop-shadow(0 0 0px rgba(210, 183, 122, 0.8)) drop-shadow(0 0 2px rgba(0, 0, 0))",
                                WebkitMaskImage: "-webkit-gradient(linear, left top, left bottom, from(rgba(0,0,0,1)), to(rgba(0,0,0,0)))"
                            }}
                        />
                        <h2 className='text-2xl  text-gray-300' style={{ fontFamily: "Audiowide" }}>Master planning</h2>
                        <p className='text-gray-400 text-md'>Townships | Sports Complexes | Campus Planning | Large Scale Hospitals | Public Buildings</p>
                    </div>
                </div>
                <div className='w-[50%] min-h-screen flex flex-col justify-center items-center gap-8 border-l border-t border-b border-gold'>
                    <div className='w-[70%] flex flex-col justify-center items-start text-gray-300 text-left'>
                        <TbUsersGroup className="w-20 h-20 text-gold mb-2"
                            style={{
                                filter: "drop-shadow(0 0 0px rgba(210, 183, 122, 0.8)) drop-shadow(0 0 6px rgba(0, 0, 0))",
                                WebkitMaskImage: "-webkit-gradient(linear, left top, left bottom, from(rgba(0,0,0,1)), to(rgba(0,0,0,0)))"
                            }}
                        />
                        <h2 className='text-2xl  text-gray-300' style={{ fontFamily: "Audiowide" }}>Project Management</h2>
                        <p className='text-gray-400 text-md'>Construction Management | Contract Management | Liasoning | Scheduling | Quality Control</p>
                    </div>
                    <div className='w-[70%] flex flex-col justify-center items-start text-gray-300 text-left'>
                        <GiPencilBrush className="w-20 h-20 text-gold mb-2"
                            style={{
                                filter: "drop-shadow(0 0 0px rgba(210, 183, 122, 0.8)) drop-shadow(0 0 6px rgba(0, 0, 0))",
                                WebkitMaskImage: "-webkit-gradient(linear, left top, left bottom, from(rgba(0,0,0,1)), to(rgba(0,0,0,0)))"
                            }}
                        />
                        <h2 className='text-2xl  text-gray-300' style={{ fontFamily: "Audiowide" }}>Art & Graphic Design</h2>
                        <p className='text-gray-400 text-md'>Graphic Design | Artworks Design | Art Installations | Sculpture | Illustrations | Interior Graphics</p>
                    </div>
                    <div className='w-[70%] flex flex-col justify-center items-start text-gray-300 text-left'>
                        <PiBuildingApartmentLight className="w-20 h-20 text-gold mb-2"
                            style={{
                                filter: "drop-shadow(0 0 0px rgba(210, 183, 122, 0.8)) drop-shadow(0 0 6px rgba(0, 0, 0))",
                                WebkitMaskImage: "-webkit-gradient(linear, left top, left bottom, from(rgba(0,0,0,1)), to(rgba(0,0,0,0)))"
                            }}
                        />
                        <h2 className='text-2xl text-gray-300' style={{ fontFamily: "Audiowide" }}>Landscape Design</h2>
                        <p className='text-gray-400 text-md'>Residential | Institutional | Campus | Commercial | Indoor | Recreational | Public Spaces</p>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default HomeService