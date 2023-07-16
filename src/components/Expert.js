import React from "react";
import Lp from '../Images/Lp.jpg';

const Expert = () => {
  return (
      <div className="max-w-[1240px] p-2 mx-auto my-10  md:grid grid-cols-2">
        <div className=" h-[200px] col-span-1 md:w-[80%] text-center">
          <img src={Lp} alt="" className="inline w-[350px] h-[200px] rounded" />
        </div>
        <div className=" h-[200px] col-span-1 flex flex-col justify-center">
          <h1 className="text-[#00df9a] font-bold my-2"> Learn From Experts</h1>
          <p className="my-2 text-justify">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium
            odit porro ex consequatur. Odit tempore quo asperiores corrupti.
            Perspiciatis asperiores ipsa consectetur alias sint vitae expedita
            non incidunt quaerat nihil!
          </p>
          <button className="md:w-[25%] bg-black text-white p-2 mt-2 rounded w-[100px] border border-black">
            Get Started
          </button>
        </div>
      </div>
  );
};

export default Expert;
