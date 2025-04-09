import React from 'react';
import { PiBuildingOfficeLight } from "react-icons/pi";
import { PiBrainLight } from "react-icons/pi";
import { PiBuildingApartmentLight } from "react-icons/pi";
import { LiaHouseDamageSolid } from "react-icons/lia";
import { GiPencilBrush } from "react-icons/gi";
import { TbUsersGroup } from "react-icons/tb";

const HomeService = () => {
    return (
        <div className="relative w-full min-h-screen bg-cover bg-center" >
            <div className="absolute inset-0 z-10 bg-gradient-to-t from-black via-transparent to-transparent"></div>

            <div className="relative w-[95%] p-2 sm:p-8 mx-auto min-h-screen flex flex-col lg:flex-row justify-center items-center gap-10 z-50 leading-8">
                {/* Left Column */}
                <div className="w-full lg:w-[50%] min-h-screen flex flex-col justify-center items-center gap-14 border-r border-t border-b border-gold sm:py-16">
                    <div className="w-[90%] lg:w-[70%] flex flex-col justify-center items-end text-gray-300 text-right">
                        <PiBuildingOfficeLight
                            className="w-16 h-16 lg:w-20 lg:h-20 text-gray-400 mb-2"
                            style={{
                                filter: "drop-shadow(0 0 0px rgba(210, 183, 122, 0.8)) drop-shadow(0 0 6px rgba(0, 0, 0))",
                                WebkitMaskImage: "-webkit-gradient(linear, left top, left bottom, from(rgba(0,0,0,1)), to(rgba(0,0,0,0)))",
                            }}
                        />
                        <h2 className="text-xl lg:text-2xl text-gold">Architecture</h2>
                        <p className="text-gray-400 text-sm lg:text-md">
                            Residences | Apartments | Commercial | Offices | Institutions | Hospitals | Resorts | Industries
                        </p>
                    </div>
                    <div className="w-[90%] lg:w-[70%] flex flex-col justify-center items-end text-gray-300 text-right">
                        <LiaHouseDamageSolid
                            className="w-16 h-16 lg:w-20 lg:h-20 text-gray-400 mb-2"
                            style={{
                                filter: "drop-shadow(0 0 0px rgba(210, 183, 122, 0.8)) drop-shadow(0 0 6px rgba(0, 0, 0))",
                                WebkitMaskImage: "-webkit-gradient(linear, left top, left bottom, from(rgba(0,0,0,1)), to(rgba(0,0,0,0)))",
                            }}
                        />
                        <h2 className="text-xl lg:text-2xl text-gold">Interior Design</h2>
                        <p className="text-gray-400 text-sm lg:text-md">
                            Residences | Apartments | Villas | Offices | Retail | Hospitality | Commercial | Healthcare
                        </p>
                    </div>
                    <div className="w-[90%] lg:w-[70%] flex flex-col justify-center items-end text-gray-300 text-right">
                        <PiBrainLight
                            className="w-16 h-16 lg:w-20 lg:h-20 text-gray-400 mb-2"
                            style={{
                                filter: "drop-shadow(0 0 0px rgba(210, 183, 122, 0.8)) drop-shadow(0 0 2px rgba(0, 0, 0))",
                                WebkitMaskImage: "-webkit-gradient(linear, left top, left bottom, from(rgba(0,0,0,1)), to(rgba(0,0,0,0)))",
                            }}
                        />
                        <h2 className="text-xl lg:text-2xl text-gold">Master Planning</h2>
                        <p className="text-gray-400 text-sm lg:text-md">
                            Townships | Sports Complexes | Campus Planning | Large Scale Hospitals | Public Buildings
                        </p>
                    </div>
                </div>

                {/* Right Column */}
                <div className="w-full lg:w-[50%] min-h-screen flex flex-col justify-center items-center gap-14 border-l border-t border-b border-gold sm:py-16">
                    <div className="w-[90%] lg:w-[70%] flex flex-col justify-center items-start text-gray-300 text-left">
                        <TbUsersGroup
                            className="w-16 h-16 lg:w-20 lg:h-20 text-gray-400 mb-2"
                            style={{
                                filter: "drop-shadow(0 0 0px rgba(210, 183, 122, 0.8)) drop-shadow(0 0 6px rgba(0, 0, 0))",
                                WebkitMaskImage: "-webkit-gradient(linear, left top, left bottom, from(rgba(0,0,0,1)), to(rgba(0,0,0,0)))",
                            }}
                        />
                        <h2 className="text-xl lg:text-2xl text-gold">Project Management</h2>
                        <p className="text-gray-400 text-sm lg:text-md">
                            Construction Management | Contract Management | Liasoning | Scheduling | Quality Control
                        </p>
                    </div>
                    <div className="w-[90%] lg:w-[70%] flex flex-col justify-center items-start text-gray-300 text-left">
                        <GiPencilBrush
                            className="w-16 h-16 lg:w-20 lg:h-20 text-gray-400 mb-2"
                            style={{
                                filter: "drop-shadow(0 0 0px rgba(210, 183, 122, 0.8)) drop-shadow(0 0 6px rgba(0, 0, 0))",
                                WebkitMaskImage: "-webkit-gradient(linear, left top, left bottom, from(rgba(0,0,0,1)), to(rgba(0,0,0,0)))",
                            }}
                        />
                        <h2 className="text-xl lg:text-2xl text-gold">Art and Graphic Design</h2>
                        <p className="text-gray-400 text-sm lg:text-md">
                            Graphic Design | Artworks Design | Art Installations | Sculpture | Illustrations | Interior Graphics
                        </p>
                    </div>
                    <div className="w-[90%] lg:w-[70%] flex flex-col justify-center items-start text-gray-300 text-left">
                        <PiBuildingApartmentLight
                            className="w-16 h-16 lg:w-20 lg:h-20 text-gray-400 mb-2"
                            style={{
                                filter: "drop-shadow(0 0 0px rgba(210, 183, 122, 0.8)) drop-shadow(0 0 6px rgba(0, 0, 0))",
                                WebkitMaskImage: "-webkit-gradient(linear, left top, left bottom, from(rgba(0,0,0,1)), to(rgba(0,0,0,0)))",
                            }}
                        />
                        <h2 className="text-xl lg:text-2xl text-gold">Landscape Design</h2>
                        <p className="text-gray-400 text-sm lg:text-md">
                            Residential | Institutional | Campus | Commercial | Indoor | Recreational | Public Spaces
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HomeService;