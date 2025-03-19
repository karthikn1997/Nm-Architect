import React, { useState, useEffect, useRef } from "react";
import { NavLink } from "react-router-dom";
import logo from "../assets/nmgold.png"
import AOS from 'aos';
import 'aos/dist/aos.css';
import { IoIosArrowDown } from "react-icons/io";
import { IoIosArrowUp } from "react-icons/io";

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [dropdownOpen, setDropdownOpen] = useState(false);

    const menuRef = useRef(null);

    useEffect(() => {
        AOS.init({
            duration: 1000
        });
    }, []);

    const toggleNavbar = () => {
        setIsOpen(!isOpen);
    };

    const handleClickOutside = (event) => {
        if (menuRef.current && !menuRef.current.contains(event.target)) {
            setDropdownOpen(null);
        }
    };

    useEffect(() => {
        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, []);

    return (
        <nav className="relative z-50 top-0" data-aos="slide-down" data-aos-delay="300">
            <div className="w-[85%] mx-auto px-8 z-50">
                <div className="flex items-center py-1">
                    <div className="flex items-center justify-between gap-10 w-full ">
                        <div className="flex-shrink-0 text-white">
                            <img
                                src={logo}
                                alt="Logo"
                                className="w-[70px] lg:w-[150px] "
                            />
                        </div>
                        <div className="hidden font-extralight text-[16px] tracking-wider">
                            <div className="flex items-baseline space-x-8" style={{ fontFamily: "Orbitron" }}>
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
                                    to="/services"
                                    className={({ isActive }) =>
                                        isActive
                                            ? "nav-link-active"
                                            : "nav-link"
                                    }
                                >
                                    Services
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
                    </div>
                    <div className="-mr-2 flex z-50 ">
                        <button
                            onClick={toggleNavbar}
                            className="inline-flex items-center justify-center p-2 rounded-md text-white focus:outline-none"
                        >
                            {!isOpen ? (
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="h-10 w-10"
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
                                    className="h-10 w-10"
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
                <div className="absolute min-h-screen w-[40%] right-0 top-0 flex justify-center items-center bg-black bg-opacity-80 " data-aos="slide-left" >
                    <div className="px-10 py-2 pb-4 flex flex-col gap-8 tracking-wider " style={{ fontFamily: "Orbitron" }}>
                        <NavLink
                            to="/"
                            className={({ isActive }) =>
                                isActive
                                    ? "nav-link-active pb-1"
                                    : "nav-link pb-1"
                            }
                            data-aos="slide-left" data-aos-delay="300"
                        >
                            Home
                        </NavLink>

                        <NavLink
                            to="/about"
                            className={({ isActive }) =>
                                isActive
                                    ? "nav-link-active pb-1"
                                    : "nav-link pb-1"
                            }
                            data-aos="slide-left" data-aos-delay="300"
                        >
                            About
                        </NavLink>

                        <NavLink
                            to="/portfolio"
                            className={({ isActive }) =>
                                isActive
                                    ? "nav-link-active pb-1"
                                    : "nav-link pb-1"
                            }
                            data-aos="slide-left" data-aos-delay="300"
                        >
                            Portfolio
                        </NavLink>

                        <NavLink
                            to="/services"
                            className={({ isActive }) =>
                                isActive
                                    ? "nav-link-active pb-1"
                                    : "nav-link pb-1"
                            }
                            data-aos="slide-left" data-aos-delay="300"
                        >
                            Services
                        </NavLink>

                        <NavLink
                            to="/furnitureDesign"
                            className={({ isActive }) =>
                                isActive
                                    ? "nav-link-active pb-1"
                                    : "nav-link pb-1"
                            }
                            data-aos="slide-left" data-aos-delay="300"
                        >
                            Furniture Design
                        </NavLink>

                        <NavLink
                            to="/realEstate"
                            className={({ isActive }) =>
                                isActive
                                    ? "nav-link-active pb-1"
                                    : "nav-link pb-1"
                            }
                            data-aos="slide-left" data-aos-delay="300"
                        >
                            Real Estate
                        </NavLink>

                        <NavLink
                            to="/promotors"
                            className={({ isActive }) =>
                                isActive
                                    ? "nav-link-active pb-1"
                                    : "nav-link pb-1"
                            }
                            data-aos="slide-left" data-aos-delay="300"
                        >
                            Promotors
                        </NavLink>

                        <NavLink
                            to="/contact"
                            className={({ isActive }) =>
                                isActive
                                    ? "nav-link-active pb-1"
                                    : "nav-link pb-1"
                            }
                            data-aos="slide-left" data-aos-delay="300"
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
