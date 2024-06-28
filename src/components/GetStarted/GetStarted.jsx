import React from "react";
import GetStartedLeft from "../../assets/image/home/GetStartedLeft.png";

const GetStarted = () => {
  return (
    <div className="flex justify-center items-center w-full py-24  bg-[#2B54FF] relative">
      <img
        src={GetStartedLeft}
        alt=""
        className="absolute left-0 h-[350px] hidden md:block"
      />
      <img
        src={GetStartedLeft}
        alt=""
        className="absolute right-0 h-[350px] transform rotate-180 hidden md:block"
      />

      <div className="text-white text-center">
        <h1 className="text-4xl font-bold mb-4">Get Started Today</h1>
        <p className="text-lg mb-8">Don't leave success up to chance.</p>
        <button className=" border border-white text-white px-8 py-2 rounded-[72px]  mb-2">
          Get Started
        </button>
      </div>
    </div>
  );
};

export default GetStarted;
