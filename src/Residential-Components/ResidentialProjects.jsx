import React from "react";
import { Link } from "react-router-dom";
import projects from "./ProjectDataForRes"; // Import projects array

const ResidentialProjects = () => {
    return (
        <div className="w-full min-h-screen">
            <div className="w-[90%] mx-auto grid grid-cols-3 gap-10">
                {projects.map((pro) => (
                    <Link to={`/projects/${encodeURIComponent(pro.name)}`} key={pro.name} className="block relative corner-border">
                        <img src={pro.img} alt={pro.name} className="w-full h-[300px] object-cover hover:scale-105 transition-all duration-700" />
                        <div className="absolute w-full bottom-0 left-0 py-3 px-6 bg-black bg-opacity-70">
                            <p className="text-white font-semibold text-2xl tracking-wider">{pro.name}</p>
                            <span className="text-gold">{pro.location}</span>
                        </div>
                    </Link>
                ))}
            </div>
        </div>
    );
};

export default ResidentialProjects;
