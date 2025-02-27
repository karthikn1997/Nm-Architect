import React from 'react'
import img from "../assets/hero.jpg"
import { PiBuildingApartment } from "react-icons/pi";
import { PiBuildings } from "react-icons/pi";
import { TbHomeStats } from "react-icons/tb";
import { TiHomeOutline } from "react-icons/ti";
import { FaLaptopHouse } from "react-icons/fa";

const ServiceDetails = () => {
    return (
        <div className='w-full min-h-screen flex flex-col justify-center items-center py-10'>
            <h2 className='text-white text-5xl font-semibold tracking-widest mb-16'>Expertise Services</h2>

            <div className='w-[90%] flex flex-col justify-center items-center gap-10'>

                <div className='w-full flex justify-between items-center '>


                    <div className='w-[50%] min-h-80 border-r border-b border-gold flex justify-center items-center'>
                        <PiBuildingApartment className='h-48 w-48 text-gray-400 opacity-60' />
                    </div>

                    <div className='w-[50%] min-h-80 flex flex-col text-gold text-opacity-80 leading-10 text-xl space-y-4 p-5 px-10' >

                        <span
                            className='text-9xl font-bold text-gold'
                            style={{ fontFamily: "Smooch Sans", textShadow: "2px 4px 0px black" }}
                        >
                            01
                        </span>

                        <h2
                            className='text-5xl font-bold text-white mb-8 uppercase tracking-widest'
                            style={{ fontFamily: "Smooch Sans", textShadow: "2px 4px 0px black" }}
                        >
                            Landscape Architecture
                        </h2>

                        <div className='grid grid-cols-2'>
                            <span>Functional Kitchens</span>
                            <span>Residential Space</span>
                            <span>Structural Design</span>
                            <span>Construction Plan</span>
                            <span>Landscape Architecture</span>
                            <span>Project Analysis</span>
                        </div>
                    </div>

                </div>

                <div className='w-full flex justify-between items-center '>

                    <div className='w-[50%] min-h-80 flex flex-col text-gold text-opacity-80 leading-10 text-xl space-y-4 tracking-wider p-5 px-10 text-right' >

                        <span
                            className='text-9xl font-bold text-gold'
                            style={{ fontFamily: "Smooch Sans", textShadow: "2px 4px 0px black" }}
                        >
                            02
                        </span>

                        <h2
                            className='text-5xl font-bold text-white mb-8 uppercase tracking-widest'
                            style={{ fontFamily: "Smooch Sans", textShadow: "2px 4px 0px black" }}
                        >
                            Architectural Design
                        </h2>

                        <div className='grid grid-cols-2'>
                            <span>construction drawings</span>
                            <span>Residential Space</span>
                            <span>Design Development</span>
                            <span>Development approval</span>
                            <span>Residential Space</span>
                            <span>Concept design</span>
                        </div>
                    </div>

                    <div className='w-[50%] min-h-80  border-l border-b border-gold flex justify-center items-center'>
                        <PiBuildings className='h-48 w-48 text-gray-400 opacity-60' />
                    </div>

                </div>

                <div className='w-full flex justify-between items-center '>


                    <div className='w-[50%] min-h-80 border-r border-b border-gold flex justify-center items-center'>
                        <TbHomeStats className='h-48 w-48 text-gray-400 opacity-60' />
                    </div>

                    <div className='w-[50%] min-h-80 flex flex-col text-gold text-opacity-80 leading-10 text-xl space-y-4 p-5 px-10' >

                        <span
                            className='text-9xl font-bold text-gold'
                            style={{ fontFamily: "Smooch Sans", textShadow: "2px 4px 0px black" }}
                        >
                            03
                        </span>

                        <h2
                            className='text-5xl font-bold text-white mb-8 uppercase tracking-widest'
                            style={{ fontFamily: "Smooch Sans", textShadow: "2px 4px 0px black" }}
                        >
                            Interior Design
                        </h2>

                        <div className='grid grid-cols-2'>
                            <span>Furniture designed</span>
                            <span>furniture consulting</span>
                            <span>interior construction</span>
                            <span>interior Analysis</span>
                            <span>interior Concept design</span>
                        </div>
                    </div>

                </div>

                <div className='w-full flex justify-between items-center '>

                    <div className='w-[50%] min-h-80 flex flex-col text-gold text-opacity-80 leading-10 text-xl space-y-4 tracking-wider p-5 px-10 text-right' >

                        <span
                            className='text-9xl font-bold text-gold'
                            style={{ fontFamily: "Smooch Sans", textShadow: "2px 4px 0px black" }}
                        >
                            04
                        </span>

                        <h2
                            className='text-5xl font-bold text-white mb-8 uppercase tracking-widest'
                            style={{ fontFamily: "Smooch Sans", textShadow: "2px 4px 0px black" }}
                        >
                            Residential Renovation
                        </h2>

                        <div className='grid grid-cols-2'>
                            <span>Functional Kitchens</span>
                            <span>Residential Space</span>
                            <span>Structural Design</span>
                            <span>Construction Plan</span>
                            <span>Landscape Architecture</span>
                            <span>Project Analysis</span>
                        </div>
                    </div>

                    <div className='w-[50%] min-h-80  border-l border-b border-gold flex justify-center items-center'>
                        <TiHomeOutline className='h-48 w-48 text-gray-400 opacity-60' />
                    </div>

                </div>

                <div className='w-full flex justify-between items-center '>


                    <div className='w-[50%] min-h-80 border-r border-b border-gold flex justify-center items-center'>
                        <FaLaptopHouse className='h-48 w-48 text-gray-400 opacity-60' />
                    </div>

                    <div className='w-[50%] min-h-80 flex flex-col text-gold text-opacity-80 leading-10 text-xl space-y-4 p-5 px-10' >

                        <span
                            className='text-9xl font-bold text-gold'
                            style={{ fontFamily: "Smooch Sans", textShadow: "2px 4px 0px black" }}
                        >
                            05
                        </span>

                        <h2
                            className='text-5xl font-bold text-white mb-8 uppercase tracking-widest'
                            style={{ fontFamily: "Smooch Sans", textShadow: "2px 4px 0px black" }}
                        >
                            Project Consultant
                        </h2>

                        <div className='grid grid-cols-2'>
                            <span>Functional Kitchens</span>
                            <span>Residential Space</span>
                            <span>Structural Design</span>
                            <span>Construction Plan</span>
                            <span>Landscape Architecture</span>
                            <span>Project Analysis</span>
                        </div>
                    </div>

                </div>

            </div>

        </div>
    )
}

export default ServiceDetails