import React from "react";

const ContactUs = () => {
  return (
    <div className="bg-white">
      <div className="max-w-7xl mx-auto px-4 border-b-2 py-14">
        <div className="flex flex-col justify-center items-center">
          <h2 className="text-lg text-[#0A142F] text-center tracking-[3.73px] mb-4">
            UPSKILL FOR A BETTER FUTURE
          </h2>
          <p className="text-4xl font-bold text-center text-[#0A142F] mb-4">
            Request More Information
          </p>
          <p className="text-[#0A142F] mb-8 text-center">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry.
          </p>
          <button className="bg-[#2B54FF] text-white px-8 py-2 rounded-[72px]  mb-2">
            Contact Us
          </button>
        </div>
        <div className="text-center mt-8 text-gray-600">
          <p>© 2023, LLC</p>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
