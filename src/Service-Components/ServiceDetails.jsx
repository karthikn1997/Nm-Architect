import React from 'react'
import { PiBuildingOfficeThin } from "react-icons/pi";
import { PiBuildingApartmentThin } from "react-icons/pi";
import { PiBuildingsThin } from "react-icons/pi";
import { PiHouseLineThin } from "react-icons/pi";
import { PiSelectionForegroundThin } from "react-icons/pi";
import { PiKeyThin } from "react-icons/pi";

const ServiceDetails = () => {
    return (
        <div className='w-full min-h-screen flex flex-col justify-center items-center py-10'>
            {/* <h2 className='text-gray-200 text-6xl font-extralight tracking-widest mb-16' style={{ fontFamily: "" }}>Expertise Services</h2> */}

            <div className='w-[90%] flex flex-col justify-center items-center gap-10'>

                <div className='w-full flex flex-col-reverse lg:flex-row justify-between items-center '>

                    <div className='w-full lg:w-[50%] lg:min-h-80 border-r border-b border-gold flex justify-center items-center'>
                        <PiBuildingOfficeThin className='h-40 w-40 sm:h-48 sm:w-48 text-gray-400 opacity-60' />
                    </div>

                    <div className='w-full lg:w-[50%] lg:min-h-80 flex flex-col text-gold text-opacity-80 leading-10 text-xl space-y-4 p-5 lg:px-10' >

                        <span
                            className='text-5xl sm:text-7xl  text-gold'
                            style={{ fontFamily: "Cr", textShadow: "2px 4px 0px black" }}
                        >
                            01
                        </span>

                        <h2
                            className='text-3xl sm:text-4xl  text-gray-200 mb-8  tracking-widest'
                            style={{ fontFamily: "Cr", textShadow: "2px 4px 0px black" }}
                        >
                            Landscape Architecture
                        </h2>

                        <div className='grid grid-cols-1 sm:grid-cols-2 italic'>
                            <span>Site Planning </span>
                            <span>Residential Space</span>
                            <span>Structural Design</span>
                            <span>Construction Plan</span>
                            <span>Landscape Architecture</span>
                            <span>Project Analysis</span>
                        </div>
                    </div>

                </div>

                <div className='w-full flex flex-col lg:flex-row justify-between items-center '>

                    <div className='w-full lg:w-[50%] lg:min-h-80 flex flex-col text-gold text-opacity-80 leading-10 text-xl space-y-4 tracking-wider p-5 lg:px-10 text-right' >

                        <span
                            className='text-5xl sm:text-7xl  text-gold'
                            style={{ fontFamily: "Cr", textShadow: "2px 4px 0px black" }}
                        >
                            02
                        </span>

                        <h2
                            className='text-3xl sm:text-4xl text-gray-200 mb-8 tracking-widest'
                            style={{ fontFamily: "Cr", textShadow: "2px 4px 0px black" }}
                        >
                            Architectural Design
                        </h2>

                        <div className='grid grid-cols-1 sm:grid-cols-2 italic'>
                            <span>Construction Drawings</span>
                            <span>Space Planning</span>
                            <span>Design Development</span>
                            <span>Building Approvals</span>
                            <span>Structural Design</span>
                            <span>Conceptual Design</span>
                        </div>

                    </div>

                    <div className='w-full lg:w-[50%] lg:min-h-80  border-l border-b border-gold flex justify-center items-center'>
                        <PiBuildingApartmentThin className='h-40 w-40 sm:h-48 sm:w-48 text-gray-400 opacity-60' />
                    </div>

                </div>

                <div className='w-full flex flex-col-reverse lg:flex-row justify-between items-center '>


                    <div className='w-full lg:w-[50%] lg:min-h-80 border-r border-b border-gold flex justify-center items-center'>
                        <PiHouseLineThin className='h-40 w-40 sm:h-48 sm:w-48 text-gray-400 opacity-60' />
                    </div>

                    <div className='w-full lg:w-[50%] lg:min-h-80 flex flex-col text-gold text-opacity-80 leading-10 text-xl space-y-4 p-5 lg:px-10' >

                        <span
                            className='text-5xl sm:text-7xl  text-gold'
                            style={{ fontFamily: "Cr", textShadow: "2px 4px 0px black" }}
                        >
                            03
                        </span>

                        <h2
                            className='text-3xl sm:text-4xl  text-gray-200 mb-8  tracking-widest'
                            style={{ fontFamily: "Cr", textShadow: "2px 4px 0px black" }}
                        >
                            Interior Design
                        </h2>

                        <div className='grid grid-cols-1 sm:grid-cols-2 italic'>
                            <span>Furniture designed</span>
                            <span>furniture consulting</span>
                            <span>interior construction</span>
                            <span>interior Analysis</span>
                            <span>interior Concept design</span>
                        </div>
                    </div>

                </div>

                <div className='w-full flex flex-col lg:flex-row justify-between items-center '>

                    <div className='w-full lg:w-[50%] lg:min-h-80 flex flex-col text-gold text-opacity-80 leading-10 text-xl space-y-4 tracking-wider p-5 lg:px-10 text-right' >

                        <span
                            className='text-5xl sm:text-7xl  text-gold'
                            style={{ fontFamily: "Cr", textShadow: "2px 4px 0px black" }}
                        >
                            04
                        </span>

                        <h2
                            className='text-3xl sm:text-4xl text-gray-200 mb-8 tracking-widest'
                            style={{ fontFamily: "Cr", textShadow: "2px 4px 0px black" }}
                        >
                            Residential Renovation
                        </h2>

                        <div className='grid grid-cols-1 sm:grid-cols-2 italic'>
                            <span>Kitchen Remodeling</span>
                            <span>Living Space Enhancement</span>
                            <span>Structural Modifications</span>
                            <span>Ceiling Upgrades</span>
                            <span>Interior Finishes </span>
                            <span>Exterior Finishes</span>
                        </div>

                    </div>

                    <div className='w-full lg:w-[50%] lg:min-h-80  border-l border-b border-gold flex justify-center items-center'>
                        <PiBuildingsThin className='h-40 w-40 sm:h-48 sm:w-48 text-gray-400 opacity-60' />
                    </div>

                </div>

                <div className='w-full flex flex-col-reverse lg:flex-row justify-between items-center '>


                    <div className='w-full lg:w-[50%] lg:min-h-80 border-r border-b border-gold flex justify-center items-center'>
                        <PiSelectionForegroundThin className='h-40 w-40 sm:h-48 sm:w-48 text-gray-400 opacity-60' />
                    </div>

                    <div className='w-full lg:w-[50%] lg:min-h-80 flex flex-col text-gold text-opacity-80 leading-10 text-xl space-y-4 p-5 lg:px-10' >

                        <span
                            className='text-5xl sm:text-7xl  text-gold'
                            style={{ fontFamily: "Cr", textShadow: "2px 4px 0px black" }}
                        >
                            05
                        </span>

                        <h2
                            className='text-3xl sm:text-4xl text-gray-200 mb-8 tracking-widest'
                            style={{ fontFamily: "Cr", textShadow: "2px 4px 0px black" }}
                        >
                            Project Consultant
                        </h2>

                        <div className='grid grid-cols-1 sm:grid-cols-2 italic'>
                            <span>Project Planning</span>
                            <span>Design Strategy</span>
                            <span>Risk Management</span>
                            <span>Cost Estimation</span>
                            <span>Quality Control</span>
                            <span>Site Supervision</span>
                        </div>

                    </div>

                </div>

                <div className='w-full flex flex-col lg:flex-row justify-between items-center '>

                    <div className='w-full lg:w-[50%] lg:min-h-80 flex flex-col text-gold text-opacity-80 leading-10 text-xl space-y-4 tracking-wider p-5 lg:px-10 text-right' >

                        <span
                            className='text-5xl sm:text-7xl  text-gold'
                            style={{ fontFamily: "Cr", textShadow: "2px 4px 0px black" }}
                        >
                            06
                        </span>

                        <h2
                            className='text-3xl sm:text-4xl text-gray-200 mb-8 tracking-widest'
                            style={{ fontFamily: "Cr", textShadow: "2px 4px 0px black" }}
                        >
                            Turnkey Projects
                        </h2>

                        <div className='grid grid-cols-1 sm:grid-cols-2 italic'>
                            <span>Project Planning</span>
                            <span>Design & Development</span>
                            <span>Procurement</span>
                            <span>Construction Management</span>
                            <span>Quality Assurance</span>
                            <span>Final Handover</span>
                        </div>


                    </div>

                    <div className='w-full lg:w-[50%] lg:min-h-80  border-l border-b border-gold flex justify-center items-center'>
                        <PiKeyThin className='h-40 w-40 sm:h-48 sm:w-48 text-gray-400 opacity-60' />
                    </div>

                </div>

            </div>

        </div>
    )
}

export default ServiceDetails