import React from "react";
import { BsFacebook } from "react-icons/bs";
import { BsInstagram } from "react-icons/bs";
import { BsTwitter } from "react-icons/bs";
import { BsGithub } from "react-icons/bs";
import { BsYoutube } from "react-icons/bs";

const Footer = () => {
  return (
      <div className="bg-[#111827]  md:h-[200px] md:flex items-center">
        <div className="mx-4">
          <h1 className="text-[#acbfc2]">
            Making the world a better place through constructing elegant
            hierarchies.
          </h1>
          <div className="flex mt-[35px]">
            <a href="https://www.facebook.com/" target="blank">
              <BsFacebook className="mx-3 text-2xl cursor-pointer text-[white] hover:text-[#3b5998]"/>
            </a>
            <a href="https://twitter.com/" target="blank">
              <BsTwitter className="mx-3 text-2xl cursor-pointer text-[white] hover:text-[#00acee]" />
            </a>
            <a href="https://www.instagram.com/" target="blank">
              <BsInstagram className="mx-3 text-2xl cursor-pointer text-[white] hover:text-[#cf1f77]" />
            </a>
            <a href="https://github.com/" target="blank">
              <BsGithub className="mx-3 text-2xl cursor-pointer text-[white] hover:text-[#858096]" />
            </a>
            <a href="https://www.youtube.com/" target="blank">
              <BsYoutube className="mx-3 text-2xl cursor-pointer text-[white] hover:text-[#db2c2c]" />
            </a>
          </div>
        </div>
        <div className=" md:mx-5 w-[900px] flex md:justify-around  h-auto pl-[10px] sm:justify-between">
          <div className=" text-white py-5 flex flex-col mt-4 pl-2">
            <h1 className="font-bold ">Solution</h1>
            <h1 className="text-[#acbfc2] cursor-pointer hover:text-white mt-1 hover:underline">
              Marketing
            </h1>
            <h1 className="text-[#acbfc2] cursor-pointer hover:text-white mt-1 hover:underline">
              Analytics
            </h1>
            <h1 className="text-[#acbfc2] cursor-pointer hover:text-white mt-1 hover:underline">
              Commerce
            </h1>
            <h1 className="text-[#acbfc2] cursor-pointer hover:text-white mt-1 hover:underline">
              Insights
            </h1>
          </div>
          <div className=" text-white py-5 flex flex-col mt-4  pl-2">
            <h1 className="font-bold ">Support</h1>
            <h1 className="text-[#acbfc2] cursor-pointer hover:text-white mt-1 hover:underline">
              Pricing
            </h1>
            <h1 className="text-[#acbfc2] cursor-pointer hover:text-white mt-1 hover:underline">
              Documentation
            </h1>
            <h1 className="text-[#acbfc2] cursor-pointer hover:text-white mt-1 hover:underline">
              Guides
            </h1>
            <h1 className="text-[#acbfc2] cursor-pointer hover:text-white mt-1 hover:underline">
              API Status
            </h1>
          </div>
          <div className=" text-white py-5 flex flex-col mt-4 pl-2">
            <h1 className="font-bold ">Company</h1>
            <h1 className="text-[#acbfc2] cursor-pointer hover:text-white mt-1 hover:underline">
              About
            </h1>
            <h1 className="text-[#acbfc2] cursor-pointer hover:text-white mt-1 hover:underline">
              Blog
            </h1>
            <h1 className="text-[#acbfc2] cursor-pointer hover:text-white mt-1 hover:underline">
              Jobs
            </h1>
            <h1 className="text-[#acbfc2] cursor-pointer hover:text-white mt-1 hover:underline">
              Press
            </h1>
          </div>
          <div className=" text-white py-5 flex flex-col mt-4 pl-4">
            <h1 className="font-bold ">Legal</h1>
            <h1 className="text-[#acbfc2] cursor-pointer hover:text-white mt-1 hover:underline">
              Claim
            </h1>
            <h1 className="text-[#acbfc2] cursor-pointer hover:text-white mt-1 hover:underline">
              Privacy
            </h1>
            <h1 className="text-[#acbfc2] cursor-pointer hover:text-white mt-1 hover:underline">
              Terms
            </h1>
            <h1 className="text-[#acbfc2] cursor-pointer hover:text-white mt-1 hover:underline">
              Partners
            </h1>
          </div>
        </div>
      </div>
  );
};

export default Footer;
