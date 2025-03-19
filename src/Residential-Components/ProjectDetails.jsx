import React, { useState, useEffect } from 'react';
import { useParams } from "react-router-dom";
import projects from "./ProjectDataForRes"; // Import the projects array
import { MdArrowBackIos, MdArrowForwardIos } from 'react-icons/md';
import { IoIosArrowForward } from "react-icons/io";
import { RiArrowLeftDoubleFill } from "react-icons/ri";


const ProjectDetails = () => {
    const { projectName } = useParams();
    const [isLightboxOpen, setIsLightboxOpen] = useState(false);
    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    // Find the selected project
    const project = projects.find((p) => p.name === decodeURIComponent(projectName));

    if (!project) {
        return <h2 className="text-center text-red-500">Project Not Found</h2>;
    }

    const openLightbox = (index) => {
        setCurrentImageIndex(index);
        setIsLightboxOpen(true);
    };

    const closeLightbox = () => {
        setIsLightboxOpen(false);
    };

    const showPrevious = () => {
        setCurrentImageIndex((prevIndex) =>
            prevIndex > 0 ? prevIndex - 1 : project.images.length - 1
        );
    };

    const showNext = () => {
        setCurrentImageIndex((prevIndex) =>
            prevIndex < project.images.length - 1 ? prevIndex + 1 : 0
        );
    };

    // Add keyboard controls
    useEffect(() => {
        const handleKeyDown = (event) => {
            if (isLightboxOpen) {
                if (event.key === 'ArrowLeft') {
                    showPrevious();
                } else if (event.key === 'ArrowRight') {
                    showNext();
                } else if (event.key === 'Escape') {
                    closeLightbox();
                }
            }
        };

        window.addEventListener('keydown', handleKeyDown);
        return () => {
            window.removeEventListener('keydown', handleKeyDown);
        };
    }, [isLightboxOpen]); // Dependency on `isLightboxOpen`


    return (
        <div className="w-full h-auto p-6">

            <div className="relative w-[90%] h-[400px] mx-auto corner-border ">

                <img src={project.img} alt="" className="w-full h-full mx-auto object-cover " />

                <div className="absolute w-full h-full top-0 bg-black bg-opacity-40 flex flex-col justify-center items-center">
                    <div className='w-full bg-black bg-opacity-50 px-4 py-2'>
                        <h1 className=" text-4xl text-center text-white uppercase tracking-wider" style={{ fontFamily: "Audiowide" }}>{project.name}</h1>
                        <p className="text-2xl text-center text-gold font-semibold uppercase">{project.location}</p>
                    </div>
                </div>

                <div className='absolute w-full bottom-2 left-2 flex items-center text-lg text-gray-200 bg-black bg-opacity-50 px-8 py-2 z-20 tracking-wider '>
                    <a href="/portfolio/residential" className=''>Residential Projects</a>
                    <IoIosArrowForward className='mt-1' />
                    <span>{project.name}</span>
                </div>
            </div>

            <div className="w-[90%] mx-auto grid grid-cols-3 sm:grid-cols-3 lg:grid-cols-4 gap-4 my-4 sm:my-8">
                {project.images.map((img, index) => (
                    <div key={index}>
                        <img
                            onClick={() => openLightbox(index)}
                            src={img} alt={`Project Image ${index}`}
                            className="w-full h-[250px] object-cover mt-4" />
                    </div>
                ))}
            </div>

            {isLightboxOpen && (
                <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50">
                    <div className="w-[80%] sm:w-auto mx-auto relative">
                        <button
                            onClick={closeLightbox}
                            className="absolute -top-7 -right-7 sm:-top-10 sm:-right-10 text-white p-1 px-3 sm:text-2xl"
                        >
                            ✕
                        </button>
                        <button
                            onClick={showPrevious}
                            className="absolute -left-5 sm:-left-9 top-1/2 transform -translate-y-1/2 text-white sm:text-3xl"
                        >
                            <MdArrowBackIos />
                        </button>
                        <img
                            src={project.images[currentImageIndex]}
                            alt={`Image ${currentImageIndex + 1}`}
                            className=" max-h-[80vh] object-contain"
                        />
                        <button
                            onClick={showNext}
                            className="absolute -right-5 sm:-right-9 top-1/2 transform -translate-y-1/2 text-white sm:text-3xl"
                        >
                            <MdArrowForwardIos />
                        </button>
                    </div>
                </div>
            )}

        </div>
    );
};

export default ProjectDetails;
