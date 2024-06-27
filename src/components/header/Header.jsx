import React from "react";

const Header = () => {
  return (
    <header className="bg-[#2B54FF] w-full h-[93px] flex justify-center px-5">
      <div className="flex justify-between items-center w-full max-w-7xl text-white">

        <div className="logo">SQL Bot</div>

        <div className="menusAndBtns flex items-center gap-20">
          <ul className="flex items-center gap-8">
            <li>Home</li>
            <li>SQL Pad</li>
            <li>Contact us</li>
          </ul>
          <div className="flex items-center gap-4">
            <div>Create Account</div>
            <div>login</div>
          </div>
        </div>
        
      </div>
    </header>
  );
};

export default Header;
