import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import projects from "./ProjectDataForCom"; // Import projects array

const CommercialProjects = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="w-full ">
            <div className="w-[90%] mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 md:gap-10">
                {projects.map((pro) => (
                    <Link to={`/commercial-projects/${encodeURIComponent(pro.name)}`} key={pro.name} className="block relative ">
                        <img src={pro.img} alt={pro.name} className="w-full h-[200px] lg:h-[300px] object-cover hover:scale-105 transition-all duration-700 opacity-80" />
                        <div className="w-full py-3 bg-black bg-opacity-70">
                            <p className="text-white text-xl tracking-wider italic" style={{ fontFamily: "" }}>{pro.name}</p>
                            <span className="text-gold uppercase tracking-wider">{pro.location}</span>
                        </div>
                    </Link>
                ))}
            </div>
        </div>
    );
};

export default CommercialProjects;
