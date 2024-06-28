import { useState } from "react";
import { Link } from "react-router-dom";
import { FaPlus, FaTimes } from "react-icons/fa";
import { CiMenuFries } from "react-icons/ci";
import { NavLink } from "react-router-dom";

const Header = () => {
  const [click, setClick] = useState(false);

  const handleClick = () => {
    setClick(!click);
  };

  const Content = (
    <>
      <div className="z-50 bg-[#2B54FF] lg:hidden flex justify-center items-center absolute top-16 w-full h-screen left-0 right-0">
        <ul className="text-center text-xl p-20">
          <Link to="/">
            <li className="border-white cursor-pointer my-4 py-4 border-b border-slate  hover:rounded">
              Home
            </li>
          </Link>
          <Link to="/">
            <li className="border-white cursor-pointer my-4 py-4 border-b border-slate  hover:rounded">
              SQL Pad
            </li>
          </Link>
          <Link to="/">
            <li className="border-white cursor-pointer my-4 py-4 border-b border-slate  hover:rounded">
              Contact us
            </li>
          </Link>
          <Link to="/signup">
            <button className="z-10 mb-4 text-center flex items-center justify-center overflow-hidden bg-[#2B54FF] px-4 py-[7px] text-sm font-semibold text-[#ffff] border border-white rounded-[75px] shadow-sm">
              <span className="z-10 group-hover:transform-translate-x-full flex items-center justify-center gap-2">
                Create Account
              </span>
            </button>
          </Link>
          <Link to="/signin">
            <button className="z-10 w-full text-center flex items-center justify-center overflow-hidden bg-[#ffff] px-9 py-[7px] text-sm font-semibold text-[#2B54FF] rounded-[75px] shadow-sm">
              <span className="z-10 group-hover:transform-translate-x-full flex items-center justify-center gap-2">
                login
              </span>
            </button>
          </Link>
        </ul>
      </div>
    </>
  );

  return (
    <header className="bg-[#2B54FF]">
      <nav className="mx-auto max-w-7xl">
        <div className="h-[10vh] flex justify-between items-center z-50 text-white lg:py-5  px-4 py-4">
          <Link to="/">
            <span className="font-extrabold">SQL Bot</span>
          </Link>
          <div className="lg:flex md:flex lg: flex-1 items-center gap-20 justify-end font-normal hidden">
            <div className="flex-10 items-center">
              <ul className="flex items-center gap-8 text-[16px] ">
                <Link to="/">
                  <li className="  border-white cursor-pointer">Home</li>
                </Link>
                <Link to="/">
                  <li className=" border-white cursor-pointer">SQL Pad</li>
                </Link>
                <Link to="/">
                  <li className=" border-white cursor-pointer">Contact us</li>
                </Link>
                <Link to="/signup">
                  <button className="z-10 text-center flex items-center justify-center overflow-hidden bg-[#2B54FF] px-4 py-[7px] text-[16px] font-semibold text-[#ffff] border border-white rounded-[75px] shadow-sm">
                    <span className="z-10 group-hover:transform-translate-x-full flex items-center justify-center gap-2">
                      Create Account
                    </span>
                  </button>
                </Link>
                <Link to="/signin">
                  <button className="z-10 text-center flex items-center justify-center overflow-hidden bg-[#ffff] px-9 py-[7px] text-[16px] font-semibold text-[#2B54FF] rounded-[75px] shadow-sm">
                    <span className="z-10 group-hover:transform-translate-x-full flex items-center justify-center gap-2">
                      login
                    </span>
                  </button>
                </Link>
              </ul>
            </div>
          </div>
          <div>{click && Content}</div>
          <button className="block md:hidden transition" onClick={handleClick}>
            {click ? <FaTimes /> : <CiMenuFries />}
          </button>
        </div>
      </nav>
    </header>
  );
};

export default Header;
