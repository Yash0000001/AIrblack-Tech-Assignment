import React from "react";
import footer from "../assets/footer.svg";
import left from "../assets/left.svg";
import right from "../assets/right.svg";
import record from "../assets/record.svg";
import starround from "../assets/starround.svg";
import members from "../assets/members.svg";


export const Feature = () => {
  return (
    <div className="mt-12 relative flex justify-center items-center">
      <div className="relative flex justify-center items-center w-full ">
        <img src={footer} className="w-full " />
      </div>

      <div className=" w-full absolute flex flex-col gap-16 p-12">
        <div className="w-full flex justify-center gap-9  ">
          <img src={left} className="w-[10%] " />
          <p className="text-white text-4xl  text-center p-4">
            Why Should You <br/> Join Airblack?
          </p>
          <img src={right} className="w-[10%]" />
        </div>

        <div className="flex flex-row w-full gap-20 items-center justify-center">
            <div className="flex flex-col items-center justify-center ">
                <img src={record} className="size-16"/>
                <p className="text-white text-lg text-center">Do-it-Together <br/> live on zoom</p>
            </div>
            <div className="flex flex-col items-center justify-center ">
                <img src={starround} className="size-16"/>
                <p className="text-white text-lg text-center">4.8 /5 <br/> Rated Classes</p>
            </div>
            <div className="flex flex-col items-center justify-center ">
                <img src={members} className="size-16"/>
                <p className="text-white text-lg text-center">35000+ <br/> members</p>
            </div>
        </div>

        <button className="bg-gradient-to-r from-[#F56563] to-[#E54988] w-full font-semibold text-white text-2xl p-3 rounded-md mx-auto">
          Apply Now
        </button>
      </div>
    </div>
  );
};
