import React from "react";

const NewsLater = () => {
  return (
      <div className="bg-[#2699fb] p-4">
        <div className="max-w-[1240px] mx-auto md:flex justify-between py-[50px]">
          <div className="m-2">
            <h1 className="text-[20px] md:text-[40px] font-bold text-white">
              Want to learn latest I.T skills?
            </h1>
            <span className="text-white">
              Sign up to our newsletter and stay up to date
            </span>
          </div>
          <div className="m-2">
            <input
              type="text"
              className=" sm:w-full md:w-auto rounded mb-2 p-2 mr-2 text-slate-300 "
              placeholder="Email"
            />
            <button className="bg-black text-white p-2 rounded">
              Get Started
            </button>
            <br />
            <p className="text-white ">
              We care about the protection of your data. Read out <br />
              <a href="/" className="text-black">
                Privacy Policy
              </a>
            </p>
          </div>
        </div>
      </div>
  );
};

export default NewsLater;
