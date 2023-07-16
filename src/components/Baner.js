import React from "react";
import Typed from "react-typed";

const Baner = () => {
  return (
    
      <div className="bg-[#2699fb] w-full py-[100px]">
        <div className="max-w-[1240px] mx-auto text-center my-[100px] font-bold ">
          <div className=" text-xl md:text-3xl md:p-[24px]">Learn With us</div>
          <div className="text-white text-xl  md:text-[80px] mt-4 md:p-[24px]">
            Grow with us
          </div>
          <div className="text-[20px] md:text-[50px]  md:text-white mt-4 md:p-[24px]">
            Learn
            <Typed
              className="pl-3"
              strings={["Web Developement", "Ethical Haking", "Data Science"]}
              typeSpeed={100}
              loop={true}
              backSpeed={70}
            />
          </div>
          <button className="bg-black text-white p-2 rounded">
            Get Started
          </button>
        </div>
      </div>
  );
};

export default Baner;

// npm i react-typed --force
