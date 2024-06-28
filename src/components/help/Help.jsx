import React from "react";
import Help_Left_Img from "../../assets/image/home/Help_Left_Img.png";
import Help_RIght_Img from "../../assets/image/home/Help_RIght_Img.png";
import PrepCoach from "../../assets/image/home/PrepCoach.png";
import Premium3 from "../../assets/image/home/Premium3.png";
import Aggregate3 from "../../assets/image/home/Aggregate3.png";
import Practice3 from "../../assets/image/home/Practice3.png";
import Python3 from "../../assets/image/home/Python3.png";
import Queries3 from "../../assets/image/home/Queries3.png";



const Help = () => {
  return (
    <div className="flex justify-center items-center w-full py-24  relative">
      <img
        src={Help_Left_Img}
        alt=""
        className="absolute left-0  hidden md:block"
      />
      <img
        src={Help_RIght_Img}
        alt=""
        className="absolute right-0 hidden md:block"
      />

      <div className="text-center max-w-2xl px-5">
        <h1 className="text-4xl font-bold mb-4">
          How we can <span className="text-[#2B54FF] uppercase">help you!</span>
        </h1>
        <p className="text-lg mb-8">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris lacus
          leo, feugiat id faucibus in, rhoncus eu nisi. Nunc tincidunt dignissim
          urna eu iaculis. Suspendisse nulla tortor, volutpat nondictum vel,
          imperdiet at nulla. Pellentesque lobortis quam lorem, pretiumull
          amcorper lectus .
        </p>

        <div className="flex flex-col md:flex-row items-center gap-6 justify-between px-5 mb-8">
          <div className="text-center max-w-[300px] md:text-left md:w-1/2 mb-4 md:mb-0">
            <h1 className="text-4xl font-bold mb-4">Access Premium Courses</h1>
            <p className="text-[14px]">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris
              lacus leo, feugiat id faucibus in, rhoncus eu nisi. Nunc tincidunt
              dignissim urna eu iaculis. Suspendisse nulla tortor, volutpat
              nondictum vel, imperdiet at nulla. Pellentesque lobortis quam
              lorem, pretiumull amcorper lectus.
            </p>
          </div>
          <img
            src={PrepCoach}
            alt=""
            className="h-[200px] max-w-[300px] object-cover md:w-1/2"
          />
        </div>

        <div className="flex flex-col md:flex-row items-center gap-6 justify-between px-5 mb-8">
          <img
            src={Premium3}
            alt=""
            className="h-[200px] max-w-[300px] object-cover md:w-1/2 order-2 md:order-1"
          />
          <div className="text-center max-w-[300px] md:text-left md:w-1/2 mb-4 md:mb-0 order-1 md:order-2">
            <h1 className="text-4xl font-bold mb-4">Prep with a Coach!</h1>
            <p className="text-[14px]">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris
              lacus leo, feugiat id faucibus in, rhoncus eu nisi. Nunc tincidunt
              dignissim urna eu iaculis. Suspendisse nulla tortor, volutpat
              nondictum vel, imperdiet at nulla. Pellentesque lobortis quam
              lorem, pretiumull amcorper lectus.
            </p>
          </div>
        </div>

        <div className="flex flex-col md:flex-row items-center gap-6 justify-between px-5 mb-8">
          <div className="text-center max-w-[300px] md:text-left md:w-1/2 mb-4 md:mb-0">
            <h1 className="text-4xl font-bold mb-4">Practice SQL!</h1>
            <p className="text-[14px]">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris
              lacus leo, feugiat id faucibus in, rhoncus eu nisi. Nunc tincidunt
              dignissim urna eu iaculis. Suspendisse nulla tortor, volutpat
              nondictum vel, imperdiet at nulla. Pellentesque lobortis quam
              lorem, pretiumull amcorper lectus.
            </p>
          </div>
          <img
            src={Aggregate3}
            alt=""
            className="h-[200px] max-w-[300px] object-cover md:w-1/2"
          />
        </div>

        <div className="flex flex-col md:flex-row items-center gap-6 justify-between px-5 mb-8">
          <img
            src={Practice3}
            alt=""
            className="h-[200px] max-w-[300px] object-cover md:w-1/2 order-2 md:order-1"
          />
          <div className="text-center max-w-[300px] md:text-left md:w-1/2 mb-4 md:mb-0 order-1 md:order-2">
            <h1 className="text-4xl font-bold mb-4">Aggregate Functions!</h1>
            <p className="text-[14px]">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris
              lacus leo, feugiat id faucibus in, rhoncus eu nisi. Nunc tincidunt
              dignissim urna eu iaculis. Suspendisse nulla tortor, volutpat
              nondictum vel, imperdiet at nulla. Pellentesque lobortis quam
              lorem, pretiumull amcorper lectus.
            </p>
          </div>
        </div>

        <div className="flex flex-col md:flex-row items-center gap-6 justify-between  px-5 mb-8">
          <div className="text-center max-w-[300px] md:text-left md:w-1/2 mb-4 md:mb-0">
            <h1 className="text-4xl font-bold mb-4">Queries and Subqueries!</h1>
            <p className="text-[14px]">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris
              lacus leo, feugiat id faucibus in, rhoncus eu nisi. Nunc tincidunt
              dignissim urna eu iaculis. Suspendisse nulla tortor, volutpat
              nondictum vel, imperdiet at nulla. Pellentesque lobortis quam
              lorem, pretiumull amcorper lectus.
            </p>
          </div>
          <img
            src={Python3}
            alt=""
            className="h-[200px] max-w-[300px] object-cover md:w-1/2"
          />
        </div>

        <div className="flex flex-col md:flex-row items-center gap-6 justify-between px-5 mb-8">
          <img
            src={Queries3}
            alt=""
            className="h-[200px] max-w-[300px] object-cover md:w-1/2 order-2 md:order-1"
          />
          <div className="text-center max-w-[300px] md:text-left md:w-1/2 mb-4 md:mb-0 order-1 md:order-2">
            <h1 className="text-4xl font-bold mb-4">Python Coding</h1>
            <p className="text-[14px]">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris
              lacus leo, feugiat id faucibus in, rhoncus eu nisi. Nunc tincidunt
              dignissim urna eu iaculis. Suspendisse nulla tortor, volutpat
              nondictum vel, imperdiet at nulla. Pellentesque lobortis quam
              lorem, pretiumull amcorper lectus.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Help;
