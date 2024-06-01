import React from "react";
import footer from "../assets/footer.svg";
import Instagram from "../assets/Instagram.svg";
import Facebook from "../assets/facebook.svg";
import Linkedin from "../assets/Linkedin.svg";
import Twitter from "../assets/twitter.svg";

export const Footer = () => {
  return (
    <div className="mt-12 relative flex justify-center items-center">
      <div className="relative flex justify-center items-center w-full ">
        <img src={footer} className="w-full " />
      </div>

      <div className=" w-full absolute flex flex-col gap-4 lg:gap-16 p-6 lg:p-12">
        <p className="text-white text-xl lg:text-4xl text-center">
          Join our growing <br />
          community of <br /> 35,000+ alumni
        </p>
        <button className="bg-gradient-to-r from-[#F56563] to-[#E54988] w-2/3 text-white text-sm lg:text-2xl p-1 lg:p-3 rounded-md mx-auto">
          Apply Now
        </button>

        <div className="flex flex-row gap-4 lg:gap-9 mx-auto">
          <a href="#">
            <img src={Instagram} className="size-6 lg:size-16"/>
          </a>
          <a href="#">
            <img src={Facebook} className="size-6 lg:size-16"/>
          </a>
          <a href="#">
            <img src={Linkedin} className="size-6 lg:size-16"/>
          </a>
          <a href="#">
            <img src={Twitter} className="size-6 lg:size-16"/>
          </a>
        </div>
      </div>
    </div>
  );
};
