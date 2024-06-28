import React from "react";
import Benifit_Bottom_Left from "../../assets/image/home/Benifit_Bottom_Left.png";
import Practice_Top_Right from "../../assets/image/home/Practice_Top_Right.png";
import SQL_Logo from "../../assets/icons/SQL_Logo.png"
import Python_Logo from "../../assets/icons/Python_Logo.png"

const Practice = () => {
  return (
    <div className="flex justify-center items-center bg-[#2B54FF] w-full py-16 relative">
      <img src={Practice_Top_Right} alt="" className="absolute top-0 right-0 hidden md:block" />
      <img
        src={Benifit_Bottom_Left}
        alt=""
        className="absolute bottom-0 left-0 hidden md:block"
      />
      <div className="text-white max-w-4xl px-5 text-center">
        <h1 className="text-4xl font-bold mb-4">
          Practice SQL and Python coding for Interviews
        </h1>
        <p className="text-lg mb-8">
          The web leverages AI-powered natural languages processing to generate
          a wide range of SQL questions that cover different aspects of SQL,
          including basic queries, filtering, sorting, joins, subqueries,
          aggerate functions, and more.
        </p>
        <div className="flex gap-6 justify-center mb-4">
          <div className="box border rounded-sm">
            <img
              src={SQL_Logo}
              alt=""
              className="p-8"
            />
          </div>
          <div className="box border rounded-sm">
            <img
              src={Python_Logo}
              alt=""
              className="p-8"
            />
          </div>
        </div>
        <button className=" border border-white text-white px-8 py-2 rounded-[72px]  mb-2">
          Get Started
        </button>
      </div>
    </div>
  );
};

export default Practice;
