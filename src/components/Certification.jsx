import React from "react";
import left from "../assets/left.svg";
import right from "../assets/right.svg";
import achievement from "../assets/achievement.svg";
export const Certification = () => {
  return (
    <div className="w-full mt-7 flex flex-col justify-center items-center ">
      <div className="w-full flex justify-center gap-4 lg:gap-9  ">
        <img src={left} className="w-[10%] "/>
        <p className="text-white text-xl lg:text-4xl  text-center p-4">Get Certified From <br/> India’s  Biggest <br/> Beauty Platform</p>
        <img src={right} className="w-[10%]"/>
      </div>
      
      <div className="w-full mt-5">
        <img src={achievement} className="w-full" />
      </div>
    </div>
  );
};
