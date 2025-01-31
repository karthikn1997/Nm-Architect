import React from 'react';
import { Link } from 'react-router-dom';
import { FaHome, FaInfoCircle, FaPhone, FaHeart } from 'react-icons/fa'; // Import icons
import { LuDiamond } from "react-icons/lu";
import ImageBG from "../assets/hero.jpg"


function Footer() {

    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    return (
        <footer
            className=" text-white md:py-12 relative"
        >
            <div className="bg-black bg-opacity-50 py-8 md:py-12 border-t-4 border-gold border-b border-opacity-60">
                <div className="w-full mx-auto flex flex-col justify-center items-center px-6 text-sm sm:text-[16px]">
                    {/* Clinic Overview */}
                    <div className="w-full flex flex-col items-center mb-6" data-aos="fade-right">
                        <h1 className="text-2xl md:text-6xl font-extrabold font-nunito mb-2 text-border-light text-black uppercase">
                            Nm Square Architecture
                        </h1>
                        <p className="text-center text-sm tracking-widest text-gold">
                            Build Your Future with Our Plots
                        </p>
                    </div>

                    {/* Grid for 4 Columns */}
                    <div
                        className="w-full grid grid-cols-2 xs:grid-cols-3 sm:grid-cols-3 lg:grid-cols-3 gap-6 sm:gap-8 sm:place-items-center "
                        data-aos="fade-up"
                    >
                        {/* Quick Links with Icons */}
                        <div className=" justify-center items-center xs:justify-start xs:items-start" data-aos="fade-right">

                            <ul className="space-y-2 flex flex-col">
                                <h2 className="text-lg font-semibold mb-2 text-left text-gray-300">Quick Links</h2>
                                <li className="flex items-center space-x-2">
                                    <FaHome className="text-gold opacity-80" />
                                    <Link to="/" onClick={scrollToTop} className=" hover:text-gold">
                                        Home Page
                                    </Link>
                                </li>
                                <li className="flex items-center space-x-2">
                                    <FaInfoCircle className="text-gold opacity-80" />
                                    <Link to="/about" onClick={scrollToTop} className=" hover:text-gold">
                                        About Us Page
                                    </Link>
                                </li>
                                <li className="flex items-center space-x-2">
                                    <FaHeart className="text-gold opacity-80" />
                                    <Link to="/Transformation" onClick={scrollToTop} className=" hover:text-gold">
                                        Products Page
                                    </Link>
                                </li>
                                <li className="flex items-center space-x-2">
                                    <FaPhone className="text-gold opacity-80" />
                                    <Link to="/contact" onClick={scrollToTop} className=" hover:text-gold">
                                        Contact Page
                                    </Link>
                                </li>
                            </ul>
                        </div>

                        {/* Treatment Sections */}
                        <div className="flex flex-col justify-center items-center xs:justify-start xs:items-start" data-aos="fade-right">

                            <ul className="space-y-2 flex flex-col ">
                                <h2 className="text-lg font-semibold float-left text-left mb-2 text-gray-300">Our Business</h2>
                                <li className="flex items-center space-x-2">
                                    <LuDiamond className="text-gold" />
                                    <Link
                                        to="/"
                                        onClick={scrollToTop}
                                        className=" hover:text-gold"
                                    >
                                        Architecture Design
                                    </Link>
                                </li>

                                <li className="flex items-center space-x-2">
                                    <LuDiamond className="text-gold" />
                                    <Link
                                        to="/"
                                        onClick={scrollToTop}
                                        className=" hover:text-gold"
                                    >
                                        Unique Furniture Design
                                    </Link>
                                </li>

                                <li className="flex items-center space-x-2">
                                    <LuDiamond className="text-gold" />
                                    <Link
                                        to="/"
                                        onClick={scrollToTop}
                                        className=" hover:text-gold"
                                    >
                                        Real Estate
                                    </Link>
                                </li>

                                <li className="flex items-center space-x-2">
                                    <LuDiamond className="text-gold" />
                                    <Link
                                        to="/"
                                        onClick={scrollToTop}
                                        className=" hover:text-gold"
                                    >
                                        Promotors
                                    </Link>
                                </li>
                            </ul>
                        </div>

                        {/* Address and Timing */}
                        <div className="flex flex-col col-span-2 xs:col-span-1 justify-center items-center xs:justify-start xs:items-start" data-aos="fade-right ">
                            <h2 className="text-lg font-semibold float-left mb-2 text-gray-300">Address </h2>
                            <address className="sm:w-[200px] not-italic mb-2 text-center xs:text-left">
                                1A, K.V.N Building, 
                            </address>
                            <p className='mb-2'>
                                <span className="">Mill Road, Ramesh Theatre East Side</span>
                            </p>
                            <p className='mb-2'>
                                <span className="">Palani, Tamil nadu 624601</span>
                            </p>
                            <p lassName='' >
                                <span className="">nmsquarearchitecture@gmail.com</span>
                            </p>
                        </div>
                    </div>

                    {/* Copyright Section */}
                    <div className="text-center mt-12" >
                        <p className='text-xs sm:text-sm'>
                            <span className="text-gold">&copy; {new Date().getFullYear()} </span>
                            Nm Square Architecture. All rights reserved.
                        </p>
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
