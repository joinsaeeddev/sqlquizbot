import React from "react";
import LearnImg from "../../assets/image/home/Learn.png";
import Amazon from "../../assets/icons/Amazon.png";
import Learn_Google_Icon from "../../assets/icons/Learn_Google_Icon.png";
import Meta from "../../assets/icons/Meta.png";
import IYA from "../../assets/icons/IYA.png"
import Apple from "../../assets/icons/Apple.png"
import Microsoft from "../../assets/icons/Microsoft.png"

const HeroSection = () => {
  return (
    <div className="relative isolate overflow-hidden px-6 lg:px-8 py-8 sm:py-16 lg:py-24">
      <div className="mx-auto max-w-7xl grid grid-cols-1 md:grid-cols-2 justify-between">
        {/* Details Column */}
        <div className="max-w-lg">
          <p className="text-6xl font-semibold mb-4">
            Learn With <br />{" "}
            <span className="text-[#2B54FF]">SQL QuizBot</span>
          </p>
          <p className="mb-8 text-[20px]">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris
            lacus leo, feugiat id faucibus in, rhoncus eu nisi. Nunc tincidunt
            dignissim urna eu iaculis. Suspendisse nulla tortor, volutpat
            nondictum vel, imperdiet at nulla. Pellentesque lobortis quam lorem,
            pretiumull amcorper lectus{" "}
          </p>
          <div className="flex items-center gap-1">
            <button className=" border border-[#2B54FF]  text-[#2B54FF] px-8 py-2 rounded-[59px]  mb-2">
              Join Prep Community
            </button>
            <button className=" border border-white bg-[#2B54FF] text-white px-8 py-2 rounded-[59px]  mb-2">
              SQL Pads
            </button>
          </div>
        </div>

        {/* Images Column (visible on larger devices) */}
        <div className="flex grid-cols-2 gap-4 mt-8 lg:mt-0 relative">
          <div className="img1 h-[440px] z-10 overflow-hidden">
            <img src={LearnImg} alt="Learn" className="w-full h-full" />
          </div>
        </div>
      </div>
      <div className="mt-16 flex flex-col items-center">
        <p className="text-center text-[20px] mb-2">
          Trusted by talents with{" "}
          <span className="text-[#2B54FF]">$240K+ compensation offers</span> at
        </p>
        <div className="w-full sm:w-auto">
          <div className="flex items-center space-x-2">
            <div className="rounded-full ">
              <img src={Learn_Google_Icon} alt="Icon 1" className="h-12 w-12 " />
            </div>
            <div className="rounded-full ">
              <img src={Amazon} alt="Icon 1" className="h-12 w-12" />
            </div>
            <div className="rounded-full ">
              <img src={Meta} alt="Icon 1" className="h-12 w-12" />
            </div>
            <div className="rounded-full ">
              <img src={IYA} alt="Icon 1" className="h-12 w-12" />
            </div>
            <div className="rounded-full ">
              <img src={Apple} alt="Icon 1" className="h-12 w-12" />
            </div>
            <div className="rounded-full ">
              <img src={Microsoft} alt="Icon 1" className="h-12 w-12" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
