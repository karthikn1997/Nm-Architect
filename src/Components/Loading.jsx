import React from "react";
import { FaSpinner } from "react-icons/fa";

const Loading = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-[#1E1F21]">
      {/* Spinner with glowing effect */}
      <div className="relative">
        <FaSpinner className="text-[#EBCFA7] animate-spin text-6xl" />
        <div className="absolute inset-0 animate-ping bg-[#EBCFA7] opacity-30 rounded-full"></div>
      </div>

      {/* Loading Text */}
      <h2 className="text-3xl mt-5 font-bold text-white tracking-widest animate-pulse">
        Nm Square Architecture
      </h2>
    </div>
  );
};

export default Loading;
