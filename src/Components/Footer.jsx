import React from 'react';
import { Link } from 'react-router-dom';
import { FaHome, FaInfoCircle, FaPhone, FaHeart } from 'react-icons/fa'; // Import icons
import { LuDiamond } from "react-icons/lu";
import ImageBG from "../assets/c3.jpg"
import text1 from "../assets/text1.jpeg"
import text2 from "../assets/text2.jpeg"


function Footer() {

    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    return (
        <footer
            className=" text-white md:py-12 relative"
        >
            <div className="relative bg-black bg-opacity-50 py-8 md:py-12 border-t-4 border-b border-gold border-opacity-60">

                <div className="absolute inset-0 z-10 bg-gradient-to-b from-black via-transparent to-black"></div>

                <div className="w-full absolute inset-0 bg-cover bg-center  "
                    style={{ backgroundImage: `url(${ImageBG})`, backgroundSize: "cover", backgroundRepeat: "no-repeat", opacity: 0.5 }}
                ></div>

                {/* Shining Top Border */}
                <div className="absolute -top-1 left-0 w-[70%] h-[1px] animate-shine "></div>

                <div className="relative z-50 w-full mx-auto flex flex-col justify-center items-center px-6 text-sm sm:text-[16px] ">
                    {/* Clinic Overview */}
                    <div className="w-full flex flex-col items-center mb-12" data-aos="fade-right">
                        <h2 className='text-5xl uppercase tracking-widest text-[#fae4af] mb-2' style={{ fontFamily: "Rolland", textShadow: "1px 1px 0px #fae4af" }}><span className="text-white" style={{ fontFamily: "Rolland", textShadow: "1px 1px 0px white" }}>Nm Square</span> Architecture</h2>
                       
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
                                        to="/portfolio"
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
