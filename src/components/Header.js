import React, { useState } from "react";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import { NavLink } from "react-router-dom";

const Header = () => {
  const [toggle, setToggle] = useState(false);

  return (
      <div className=" bg-[#2699fb] p-4">
        <div className="max-w-[1240px]  py-[12px] flex justify-between items-center mx-auto">
          <div className="text-3xl font-bold">Web Tech</div>
          {toggle ? (
            <AiOutlineClose
              onClick={() => {
                setToggle(!toggle);
              }}
              className="text-white text-2xl  md:hidden block"
            />
          ) : (
            <AiOutlineMenu
              onClick={() => {
                setToggle(!toggle);
              }}
              className="text-white text-2xl  md:hidden block"
            />
          )}

          <ul className="hidden md:flex text-white gap-10">
            <NavLink to="/home">
            <li className="cursor-pointer hover:underline">Home</li>
            </NavLink>
            <NavLink to="/about">
            <li className="cursor-pointer hover:underline">About</li>
            </NavLink>
            <NavLink to="/contact">
            <li className="cursor-pointer hover:underline">Contact</li>
            </NavLink>
            <NavLink to="/signin">
            <li className="cursor-pointer hover:underline">SignIn</li>
            </NavLink>
            <NavLink to="/signup">
            <li className="cursor-pointer hover:underline">SignUp</li>
            </NavLink>
          </ul>

          {/* responsive menubar */}
            <ul
              className={`duration-500 md:hidden text-white fixed bg-black  top-[92px] w-full h-screen 
                ${toggle ? "left-[0]" : "left-[-100%]"}`}
            >
              <li className="p-5">Home</li>
              <li className="p-5">About</li>
              <li className="p-5">Contact</li>
              <li className="p-5">SignIn</li>
              <li className="p-5">SignUp</li>
            </ul>
          
        </div>
      </div>
  );
};

export default Header;
