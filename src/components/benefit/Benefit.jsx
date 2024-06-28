import React from "react";
import Benifit_Bottom_Left from "../../assets/image/home/Benifit_Bottom_Left.png";
import Practice_Top_Right from "../../assets/image/home/Practice_Top_Right.png";
import rise from "../../assets/icons/rise.png";
import Watch from "../../assets/icons/watch.png";
import dollar from "../../assets/icons/dollar.png";

const Benefit = () => {
  return (
    <div className="flex justify-center items-center bg-[#2B54FF] w-full py-16 relative">
      <img
        src={Practice_Top_Right}
        alt=""
        className="absolute top-0 right-0 hidden md:block"
      />
      <img
        src={Benifit_Bottom_Left}
        alt=""
        className="absolute bottom-0 left-0 hidden md:block"
      />
      <div className="text-white max-w-4xl px-5 ">
        <h1 className="text-4xl font-bold mb-4">
          Benefits of Using SQL Quiz Bot!
        </h1>
        <p className="text-[20px] mb-8">
          Discover the advantages of integrating AI into your SQL and NoSQL
          operations.
        </p>
        <div className="flex flex-col md:flex-row gap-8 mb-4">
          <div className="box">
            <img src={Watch} alt="" className="w-20 h-20 mb-4" />
            <h1 className="mb-4 text-[20px]">
              Stop Wasting Hours Googling Around
            </h1>
            <p className="text-[16px]">
              With this service, you can generate SQL queries in seconds. This
              is a game-changer for those who are constantly working with large
              databases and need quick results.
            </p>
          </div>
          <div className="box">
            <img src={dollar} alt="" className="w-20 h-20 mb-4" />
            <h1 className="mb-4 text-[20px]">
              Cost-Effective and Highly Productive
            </h1>
            <p className="text-[16px]">
              The service is incredibly affordable. It's a small investment that
              can save you countless hours of work, making it a cost-effective
              solution for any data analyst.
            </p>
          </div>
          <div className="box">
            <img src={rise} alt="" className="w-20 h-20 mb-4" />
            <h1 className="mb-4 text-[20px]">Suitable for All Levels</h1>
            <p className="text-[16px]">
              Whether you're a beginner or an experienced data analyst, this
              service can boost your SQL productivity and proficiency. It's
              designed to be user-friendly and accessible to all levels of
              experience.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Benefit;
