import React, { useState, useEffect } from 'react';
import { useParams } from "react-router-dom";
import projects from "./ProjectDataForRes"; // Import the projects array
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Navigation, Pagination } from 'swiper/modules';

const ProjectDetails = () => {
    const { projectName } = useParams();
    const [isLightboxOpen, setIsLightboxOpen] = useState(false);

    // Find the selected project
    const project = projects.find((p) => p.name === decodeURIComponent(projectName));

    if (!project) {
        return <h2 className="text-center text-red-500">Project Not Found</h2>;
    }

    const openLightbox = () => {
        setIsLightboxOpen(true);
    };

    const closeLightbox = () => {
        setIsLightboxOpen(false);
    };

    useEffect(() => {
        // Ensure Swiper can find the navigation buttons after rendering
        const swiperInstance = document.querySelector('.swiper').swiper;
        if (swiperInstance) {
            swiperInstance.navigation.init();
            swiperInstance.navigation.update();
        }
    }, []);

    return (
        <div className="w-full h-auto p-2 sm:p-6">
            <div className="relative w-full md:w-[85%] h-[200px] sm:h-[400px] mx-auto sm:corner-border">
                <img src={project.img} alt="" className="w-full h-full mx-auto object-cover opacity-40" />
                <div className="absolute w-full h-full top-0 bg-black bg-opacity-40 flex flex-col justify-center items-center">
                    <div className='w-full bg-black bg-opacity-50 px-4 py-2'>
                        <h1 className="text-2xl sm:text-4xl text-center text-white uppercase tracking-widest">{project.name}</h1>
                        <p className="sm:text-xl text-center text-gold font-semibold uppercase tracking-widest">{project.location}</p>
                    </div>
                </div>
                <div className='absolute w-full bottom-0 left-0 flex items-center text-sm sm:text-lg text-gray-200 bg-black bg-opacity-50 sm:px-8 p-2 z-20 '>
                    <a href="/portfolio/commercial">Commercial Projects</a>
                    <span className="mx-2">/</span>
                    <span>{project.name}</span>
                </div>
            </div>

            <div className="relative w-[95%] mx-auto my-10 sm:my-20 z-10">
                <div className="swiper-button-prev text-white bg-black bg-opacity-70 p-2 sm:p-4 text-sm sm:text-xl rounded"></div>
                <div className="swiper-button-next text-white bg-black bg-opacity-70 p-2 sm:p-4 text-sm sm:text-xl rounded"></div>

                <div className="absolute -bottom-20 swiper-pagination"></div>
                <Swiper
                    modules={[Navigation, Pagination]}
                    navigation={{
                        nextEl: '.swiper-button-next',
                        prevEl: '.swiper-button-prev',
                    }}
                    pagination={{
                        el: '.swiper-pagination',
                        clickable: true,
                    }}
                    spaceBetween={20}
                    slidesPerView={1}
                    loop={true}
                    className="w-full h-[250px] sm:h-[520px] flex justify-center items-center"
                >
                    {project.images.map((img, index) => (
                        <SwiperSlide key={index}>
                            <img
                                src={img}
                                alt={`Project Image ${index}`}
                                className="w-[100%] h-[210px] sm:h-[480px] object-cover mx-auto"
                                onClick={openLightbox}
                            />
                        </SwiperSlide>
                    ))}
                </Swiper>

                {/* Add this custom styling */}
                <style>
                    {`
                            .swiper-pagination-bullet {
                              background-color: white !important;
                            }
                            .swiper-pagination-bullet-active {
                             background-color: white !important;
                           } 
                           `}
                </style>

            </div>

            {isLightboxOpen && (
                <div className="fixed inset-0 bg-black bg-opacity-90 flex items-center justify-center z-50">
                    <button
                        onClick={closeLightbox}
                        className="absolute top-5 right-5 text-white text-2xl"
                    >
                        ✕
                    </button>
                    <Swiper
                        modules={[Navigation, Pagination]}
                        navigation
                        pagination={{ clickable: true }}
                        spaceBetween={20}
                        slidesPerView={1}
                        className="w-[80%] h-[80vh]"
                    >
                        {project.images.map((img, index) => (
                            <SwiperSlide key={index}>
                                <img
                                    src={img}
                                    alt={`Lightbox Image ${index}`}
                                    className="w-full h-full object-contain"
                                />
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>
            )}
        </div>
    );
};

export default ProjectDetails;