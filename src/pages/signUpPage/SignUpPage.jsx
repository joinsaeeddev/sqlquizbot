import React from "react";
import Ellipse from "../../assets/image/home/Ellipse.png";
import Subtract from "../../assets/image/home/Subtract.png";
import Learn_Google_Icon from "../../assets/icons/Learn_Google_Icon.png";
import facebook_icon from "../../assets/icons/facebook_icon.png";


const SignUpPage = () => {
  return (
    <div className="flex justify-center items-center w-full h-[100vh] py-24  relative">
      <img
        src={Ellipse}
        alt=""
        className="absolute left-0 h-[500px] hidden md:block"
      />
      <img
        src={Subtract}
        alt=""
        className="absolute top-0 right-0 h-[350px] hidden md:block"
      />

      <div className="text-center max-w-7xl">
        <form action="" className="w-[400px] p-4">
          <h2>Create Account</h2>
          <div className="item border-b-2 w-full p-3">
            <input
              type="text"
              placeholder="Username"
              className="w-full outline-none"
            />
          </div>
          <div className="item border-b-2 w-full p-3">
            <input
              type="text"
              placeholder="Email"
              className="w-full outline-none"
            />
          </div>
          <div className="item border-b-2 w-full p-3">
            <input
              type="text"
              placeholder="Password"
              className="w-full outline-none"
            />
          </div>
          <div className="item border-b-2 w-full p-3">
            <input
              type="text"
              placeholder="Confirm Password"
              className="w-full outline-none"
            />
          </div>
          <div className="btn w-full bg-[#2B54FF] text-white py-2 mt-4">
            <button>Sign up</button>
          </div>
          <p className="text-[#999999]">Or continue with</p>
          <div className="flex items-center gap-2 justify-center">
            <div className="rounded-full ">
              <img
                src={facebook_icon}
                alt="Icon 1"
                // className="h-12 w-12 "
              />
            </div>
            <div className="rounded-full ">
              <img
                src={Learn_Google_Icon}
                alt="Icon 1"
                className="h-12 w-12 "
              />
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SignUpPage;
