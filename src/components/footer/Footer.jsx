import React from "react";
import { Link } from "react-router-dom";
import Discord from "../../assets/icons/Discord.png";
import Facebook from "../../assets/icons/Facebook.png";
import Instagram from "../../assets/icons/Instagram.png";

const Footer = () => {
  return (
    <footer className="text-center">
      <div className="max-w-7xl mx-auto px-4 py-4">
        <div className="flex flex-wrap justify-between">
          {/* Logo section */}
          <Link to="/" className="w-full sm:w-auto mb-4 sm:mb-0">
            <span className="font-extrabold text-[#2B54FF]">SQL Bot</span>
          </Link>

          {/* Menu section */}
          <div className="w-full sm:w-auto mb-4 sm:mb-0">
            <nav className="space-x-4">
              <Link to="/" className="text-black">
                Team
              </Link>
              <Link to="/" className="text-black">
                Case Studies
              </Link>
              <Link to="/" className="text-black">
                Publications
              </Link>
            </nav>
          </div>

          {/* Social icons section */}
          <div className="w-full sm:w-auto">
            <div className="flex space-x-4">
              <Link to="/" className="rounded-full border border-[#2B54FF]">
                <img src={Discord} alt="Icon 1" className="h-6 w-6" />
              </Link>
              <Link to="/" className="rounded-full border border-[#2B54FF]">
                <img src={Instagram} alt="Icon 1" className="h-6 w-6" />
              </Link>
              <Link to="/" className="rounded-full border border-[#2B54FF]">
                <img src={Facebook} alt="Icon 1" className="h-6 w-6" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
