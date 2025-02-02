import React from "react";
import { CiMail } from "react-icons/ci";
import { FaPhoneAlt } from "react-icons/fa";
import { FaRegBuilding } from "react-icons/fa";

const page = () => {
  return (
    <div className="bg-[#00032A] pb-10">
      <div className="flex flex-col items-center font-medium text-black *:mt-20 text-center">
        <span className="text-lg font-semibold underline text-black">
          Expert Laundry & Dry Cleaning Services
        </span>
        Affordable, high-quality care with unmatched convenience and efficiency.
        Trust us to handle all your laundry needs with precision and reliability
      </div>

      <div className="flex justify-evenly">
        <div className="flex flex-col items-center mt-5">
          {/*services */}
          <h1 className="text-3xl font-bold text-black">Support</h1>
          <div className="text-blue-00 text-black flex flex-col text-base font-semibold">
            <span>Laundry Service</span>
            <span>Dry Cleaning</span>
            <span>Shoe Cleaning</span>
            <span>Home Cleaning</span>
            <span>Ironing</span>
          </div>
        </div>
        <div className="flex flex-col items-center mt-5">
          {/*services */}
          <h1 className="text-3xl font-bold text-black">Company</h1>
          <div className="text-blue-00 text-black flex flex-col text-base font-semibold">
            <span>About</span>
            <span>Contact Us</span>
            <span>Refund Policy</span>
            <span>Franchise</span>
            <span>FAQs</span>
          </div>
        </div>
      </div>

      {/*contact info of shop */}
      <div className="flex justify-center items-center flex-col mt-10">
        <div>
          <span className="text-xl font-semibold flex justify-center">
            Contact Us
          </span>
          <div className="ml-14">
            <span className="flex font-medium underline pb-2">
              <CiMail size={21} className="mr-1 mt-[3px]" />{" "}
              liwadrycleaners@gmail.com
            </span>

            <span className="flex font-medium underline pb-2">
              <FaPhoneAlt size={21} className="mr-1 mt-[3px]" /> +971 52 237
              2288
            </span>

            <span className="flex font-medium underline">
              <FaRegBuilding size={21} className="mr-1 mt-[3px]" /> Al Taawun St
              - Al Khan - Sharjah - United Arab Emirates
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
