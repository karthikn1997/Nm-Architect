import React from "react";
import Lottie from "lottie-react";
import loadingAnimation from "../../public/load.json"

const Loading = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-black">
      <div className="flex flex-col lg:flex-row items-center justify-center lg:-ml-[150px] -mt-[160px] lg:-mt-[0px]">
        <Lottie
          animationData={loadingAnimation}
          loop={true}
          className="relative z-10"
          style={{ width: 500, height: 500 }}
        />
        <div className="-mt-[160px] lg:-mt-[0px] lg:-ml-[150px]">
          <h2
            className='flex flex-col text-3xl text-center lg:text-left lg:text-5xl uppercase tracking-widest'
          >
            <span className="text-white" data-aos="slide-right" data-aos-delay="300" style={{ fontFamily: "Rolland" }}>Nm Square</span>
            <span className="text-[#fae4af]" data-aos="slide-left" data-aos-delay="300" style={{ fontFamily: "Rolland" }}>Architecture</span>
          </h2>
        </div>
      </div>
    </div>
  );
};

export default Loading;
