import React from "react";
import Lottie from "lottie-react";
import loadingAnimation from "../../public/load.json"

const Loading = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-black">
      <div className="flex items-center justify-center -ml-[150px]">
        <Lottie
          animationData={loadingAnimation}
          loop={true}
          className="relative z-10"
          style={{ width: 500, height: 500 }}
        />
        <div className="-ml-[150px]">
          <h2
            className='flex flex-col text-5xl uppercase tracking-widest'
          >
            <span className="text-white" style={{ fontFamily: "Rolland" }}>Nm Square</span>
            <span className="text-[#fae4af]" style={{ fontFamily: "Rolland" }}>Architecture</span>
          </h2>
        </div>
      </div>
    </div>
  );
};

export default Loading;
