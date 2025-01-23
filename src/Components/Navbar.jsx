import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import logo from "../assets/nmpng.png"
import AOS from 'aos';
import 'aos/dist/aos.css';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    useEffect(() => {
        AOS.init({
          duration: 1000
        });
      }, []);

    const toggleNavbar = () => {
        setIsOpen(!isOpen);
    };

    return (
        <nav className="z-10 top-0" data-aos="slide-down" data-aos-delay="300">
            <div className="max-w-7xl mx-auto px-8">
                <div className="flex items-center justify-between py-1">
                    <div className="flex items-center justify-between w-full">
                        <div className="flex-shrink-0 text-white">
                            <img
                                src={logo}
                                alt="Logo"
                                className="w-[70px] lg:w-[120px] "
                            />
                        </div>
                        <div className="hidden md:block font-normal text-lg">
                            <div className="ml-10 flex items-baseline space-x-8">
                                <NavLink
                                    to="/"
                                    className={({ isActive }) =>
                                        isActive
                                            ? "nav-link-active"
                                            : "nav-link"
                                    }
                                >
                                    Home
                                </NavLink>
                                <NavLink
                                    to="/about"
                                    className={({ isActive }) =>
                                        isActive
                                            ? "nav-link-active"
                                            : "nav-link"
                                    }
                                >
                                    About
                                </NavLink>
                                <NavLink
                                    to="/products"
                                    className={({ isActive }) =>
                                        isActive
                                            ? "nav-link-active"
                                            : "nav-link"
                                    }
                                >
                                    Products
                                </NavLink>
                                <NavLink
                                    to="/contact"
                                    className={({ isActive }) =>
                                        isActive
                                            ? "nav-link-active"
                                            : "nav-link"
                                    }
                                >
                                    Contact
                                </NavLink>
                            </div>
                        </div>
                        <button className="hidden lg:block bg-gradient-to-r from-[#ece9e55c] via-[#26282b73] to-black hover:bg-gradient-to-l text-white font-semibold py-1 sm:py-2 px-8 rounded-lg transition duration-300 whitespace-nowrap tracking-wider border-b border-e-2 border-gray-300" data-aos="flip-left" data-aos-delay="300">
                            <div className='flex items-center gap-3 font-bold text-xl text-white hover:text-black'>
                                <span className='text-[15px] text-white'>Explore Now</span><span className='text-2xl animate-bounce'></span>
                            </div>
                        </button>
                    </div>
                    <div className="-mr-2 flex md:hidden">
                        <button
                            onClick={toggleNavbar}
                            className="inline-flex items-center justify-center p-2 rounded-md text-[#26282B]  focus:outline-none"
                        >
                            {!isOpen ? (
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="h-6 w-6"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M4 6h16M4 12h16m-7 6h7"
                                    />
                                </svg>
                            ) : (
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="h-6 w-6"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M6 18L18 6M6 6l12 12"
                                    />
                                </svg>
                            )}
                        </button>
                    </div>
                </div>
            </div>

            {isOpen && (
                <div className="md:hidden bg-gray-200 flex justify-center items-center">
                    <div className="px-2 py-2 pb-4 space-x-2 xxs:space-x-4 sm:space-x-8 sm:px-3 text-[14px] sm:text-[16px] font-semibold">
                        <NavLink
                            to="/"
                            className={({ isActive }) =>
                                isActive
                                    ? "nav-link-active"
                                    : "nav-link"
                            }
                        >
                            Home
                        </NavLink>
                        <NavLink
                            to="#"
                            className={({ isActive }) =>
                                isActive
                                    ? "nav-link-active"
                                    : "nav-link"
                            }
                        >
                            About
                        </NavLink>
                        <NavLink
                            to="#"
                            className={({ isActive }) =>
                                isActive
                                    ? "nav-link-active"
                                    : "nav-link"
                            }
                        >
                            Products
                        </NavLink>
                        <NavLink
                            to="#"
                            className={({ isActive }) =>
                                isActive
                                    ? "nav-link-active"
                                    : "nav-link"
                            }
                        >
                            Services
                        </NavLink>
                        <NavLink
                            to="#"
                            className={({ isActive }) =>
                                isActive
                                    ? "nav-link-active"
                                    : "nav-link"
                            }
                        >
                            Contact
                        </NavLink>
                    </div>
                </div>
            )}
        </nav>
    );
};

export default Navbar;
