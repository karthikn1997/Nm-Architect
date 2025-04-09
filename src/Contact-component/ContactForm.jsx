import React, { useRef, useState, useEffect } from 'react';
import emailjs from '@emailjs/browser';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import ClipLoader from 'react-spinners/ClipLoader';
import { FaFacebook, FaWhatsapp, FaInstagram, FaLinkedin } from 'react-icons/fa'; // Import icons
import { FaHandshake } from "react-icons/fa";
import { CiLocationOn } from "react-icons/ci";
import { CiPhone } from "react-icons/ci";
import { CiMail } from "react-icons/ci";
import { PiFacebookLogo } from "react-icons/pi";

const ContactForm = () => {
    const form = useRef();
    const [loading, setLoading] = useState(false); // Loading state

    // Scroll to the top of the page when the component is mounted
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const sendEmail = (e) => {
        e.preventDefault();
        setLoading(true); // Set loading to true before sending the email

        emailjs
            .sendForm(
                'service_jz1qd',
                'template_3jugc',
                form.current,
                '868bxMy-qSSIk3L'
            )
            .then(
                () => {
                    toast.success('Email sent successfully!', {
                        position: "top-center",
                    });
                },
                (error) => {
                    toast.error(`Failed to send email: ${error.text}`, {
                        position: "top-center",
                    });
                }
            )
            .finally(() => {
                setLoading(false); // Set loading to false after email sending is completed
            });
    };

    return (
        <div>
            <div className="w-[95%] md:w-[90%] xl:w-[85%] mx-auto flex flex-col-reverse lg:flex-row justify-center items-start rounded-sm shadow-md p-4 sm:p-6 md:p-16 my-6 sm:my-10 gap-4 sm:gap-10 border border-gold">
                {/* Toast Notification Container */}
                <ToastContainer
                    position="top-center"
                    autoClose={3000}
                    hideProgressBar={false}
                    closeOnClick
                    pauseOnHover
                    draggable
                    pauseOnFocusLoss
                />

                {/* Get in Touch Section */}
                <div className="w-full lg:w-[50%] text-left mx-auto mt-6 lg:mt-4 sm:pr-10">
                    <div className='flex justify-start items-start gap-4 mb-2 sm:mb-4'>
                        <h2 className="flex text-2xl sm:text-4xl text-white pb-1 sm:pb-2 border-b border-gold " >Get in Touch </h2><FaHandshake className='hidden lg:block w-8 h-8 sm:w-12 sm:h-12 text-gold' />
                    </div>

                    <div className='mb-8'>

                        <p className="text-gray-200 mb-8 text-sm sm:text-lg ">We'd love to hear from you! Reach out to us through the following:</p>

                        <p className="text-gray-200 mb-2 flex items-center">
                            <span className="mr-2 text-2xl"><CiLocationOn /></span> 1A, K.V.N Building, Mill Road, Ramesh Theatre East Side, Palani, Tamil nadu 624601
                        </p>
                        <p className="text-gray-200 mb-2 flex items-center">
                            <span className="mr-2 text-2xl"><CiPhone /></span> Phone: 9994476524, 9999999999
                        </p>
                        <p className="text-gray-200 mb-2 flex items-center">
                            <span className="mr-2 text-2xl"><CiMail /></span> Email: nmsquare@gmail.com
                        </p>
                    </div>


                    {/* Social Media Icons */}
                    <div className="flex space-x-4 mt-4 mx-auto justify-center items-center lg:items-start lg:justify-start">
                        <a href="#" className="text-gray-500 "><PiFacebookLogo size={40} /></a>
                        <a href="#" className="text-gray-500 "><FaWhatsapp size={36} /></a>
                        <a href="#" className="text-gray-500 "><FaInstagram size={36} /></a>
                        <a href="#" className="text-gray-500 "><FaLinkedin size={36} /></a>
                    </div>
                </div>

                {/* Form Section */}
                <div className="w-full lg:w-[50%]">
                    <form ref={form} onSubmit={sendEmail} className="space-y-6">
                        <div>
                            <label className="block text-gray-200 font-medium mb-1">Name</label>
                            <input
                                type="text"
                                name="user_name"
                                required
                                className="w-full px-4 py-2 border border-gray-500 rounded-sm shadow-sm focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500 bg-transparent"
                                placeholder="Enter your name"
                            />
                        </div>

                        <div>
                            <label className="block text-gray-200 font-medium mb-1">Email</label>
                            <input
                                type="email"
                                name="user_email"
                                required
                                className="w-full px-4 py-2 border border-gray-500 rounded-sm shadow-sm focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500 bg-transparent"
                                placeholder="Enter your email"
                            />
                        </div>

                        <div>
                            <label className="block text-gray-200 font-medium mb-1">Message</label>
                            <textarea
                                name="message"
                                required
                                className="w-full px-4 py-2 border border-gray-500 rounded-sm shadow-sm focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500 bg-transparent"
                                placeholder="Write your message here"
                                rows="4"
                            />
                        </div>

                        <div className="flex items-center justify-between">
                            <button
                                type="submit"
                                disabled={loading} // Disable button while loading
                                className={`w-full bg-gradient-to-r from-[#ece9e55c] via-[#26282b73] to-black hover:bg-gradient-to-l text-white font-semibold py-2 px-8 rounded-sm transition duration-300 border-b border-e-2 border-gold whitespace-nowrap`}
                            >
                                {loading ? <ClipLoader size={25} color={"#123abc"} loading={loading} /> : 'Send Message'}
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default ContactForm