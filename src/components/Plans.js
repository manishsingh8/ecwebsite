import React from "react";

const Plans = () => {
  return (
      <div className="py-[100px] px-2">
        <div className="max-w-[1240px] mx-auto md:grid grid-cols-3 gap-5">
          <div className="my-2 shadow-xl h-[500px] w-[350px] hover:scale-110 duration-500 flex flex-col justify-center items-center ">
            <h2 className="font-bold text-lg">Full-Stack Developement</h2>
            <h1 className="font-bold text-lg">$999</h1>
            <p className="text-justify px-4 mt-20">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo
              praesentium vitae dolorem, similique voluptas quos, debitis quam
              suscipit cupiditate vero excepturi possimus optio repellendus,
              nulla impedit nobis. Hic, debitis minima?
            </p>
            <button className="bg-[#09dba7] text-black p-2 rounded mt-20">
              Get Started
            </button>
          </div>
          <div className="my-2 shadow-xl  w-[350px] h-[500px] bg-gray-100 hover:scale-110 duration-500 flex flex-col justify-center items-center">
            <h2 className="font-bold text-lg">Front-End Developement</h2>
            <h1 className="font-bold text-lg">$599</h1>
            <p className="text-justify px-4 mt-20">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo
              praesentium vitae dolorem, similique voluptas quos, debitis quam
              suscipit cupiditate vero excepturi possimus optio repellendus,
              nulla impedit nobis. Hic, debitis minima?
            </p>
            <button className="bg-black text-[#09dba7] p-2 rounded mt-20">
              Get Started
            </button>
          </div>
          <div className="my-2 shadow-xl  w-[350px] h-[500px] hover:scale-110 duration-500 flex flex-col justify-center items-center">
            <h2 className="font-bold text-lg">Back-End Developement</h2>
            <h1 className="font-bold text-lg">$599</h1>
            <p className="text-justify px-4 mt-20">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo
              praesentium vitae dolorem, similique voluptas quos, debitis quam
              suscipit cupiditate vero excepturi possimus optio repellendus,
              nulla impedit nobis. Hic, debitis minima?
            </p>
            <button className="bg-[#09dba7] text-black p-2 rounded mt-20">
              Get Started
            </button>
          </div>
        </div>
      </div>
  );
};

export default Plans;
