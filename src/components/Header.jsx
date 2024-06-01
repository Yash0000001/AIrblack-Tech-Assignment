import React from "react";
import headerImage from "../assets/header1.svg";
import Logo from "../assets/Logo1.svg";
import certification from "../assets/Certification.svg";
import star from "../assets/star.svg";
import tick from "../assets/tick.svg";

export const Header = () => {
  return (
    <div className="w-full mb-12">
      <div className="relative flex justify-center items-center ">
        <img src={headerImage} className="w-full grayscale" />
        <img src={Logo} className="w-10/12 absolute" />
      </div>

      <div className="bg-[#0F1014] mt-10">
        <div className="p-4">
          <p className="text-2xl lg:text-4xl bg-[#0F1014] text-white mb-5 ">
            Professional Online <br /> Makeup Course
          </p>
          <div className="flex flex-row gap-2 lg:gap-10  mb-5">
            <div className="flex flex-row gap-1 lg:gap-2 rounded-md bg-gray-700  p-1 lg:p-2 ">
              <img src={certification} className="w-3  lg:w-5 " />
              <p className="text-white text-xs lg:text-xl">Certification Programmme</p>
            </div>

            <div className="flex flex-row gap-2 p-1 lg:p-2">
              <img src={star} className="w-3 lg:w-5" />
              <p className="text-yellow-400 text-xs lg:text-xl">Rated 4.85/5</p>
            </div>
          </div>
          <div className="flex gap-2 mb-2">
            <img src={tick} className="w-5 lg:w-8" />
            <p className="text-white text-sm lg:text-xl">
              India’s No.1 Online Makeup Course
            </p>
          </div>
          <div className="flex gap-2 mb-2">
            <img src={tick} className="w-5 lg:w-8" />
            <p className="text-white text-sm lg:text-xl">
            Learn by LIVE Do-it-Together Classes
            </p>
          </div>
          <div className="flex gap-2 ">
            <img src={tick} className="w-5 lg:w-8" />
            <p className="text-white text-sm lg:text-xl">
            Unlimited Practise Session to master skills
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
