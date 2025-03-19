import React from "react";
import text from "../assets/nmtext.jpeg";

const Loading = () => {
  return (
    <div className="loading-container">
      
      {/* Rotating 3D Architectural Cube */}

      <div className="cube mb-12">
        <div className="face front"></div>
        <div className="face back"></div>
        <div className="face left"></div>
        <div className="face right"></div>
        <div className="face top"></div>
        <div className="face bottom"></div>
      </div>

      {/* Loading Text */}
      <img src={text} alt="" className="w-72"/>
    </div>
  );
};

export default Loading;
