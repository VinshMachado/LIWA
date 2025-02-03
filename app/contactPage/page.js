import React from "react";
import { CiMail } from "react-icons/ci";
import { FaPhoneAlt } from "react-icons/fa";
import { FaRegBuilding } from "react-icons/fa";
import { FaFacebookSquare } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";
import { FaWhatsappSquare } from "react-icons/fa";

const page = () => {
  return (
    <div className="w-full h-full flex justify-center items-center p-5">
      <div className="bg-cyan-300 pb-10 w-[97%]  h-[700px] m-4 rounded-lg drop-shadow-xl shadow-black ">
        <div className="flex flex-col items-center font-medium drop-shadow-lg   text-white  text-center">
          <span className="text-2xl font-semibold underline text-white mt-16">
            Expert Laundry & Dry Cleaning Services
          </span>
          <p className="w-80 sm:w-96 mt-5 text-sm sm:text-xl">
            Affordable, high-quality care with unmatched convenience and
            efficiency Trust us to handle all your laundry needs with precision
            and reliability
          </p>
        </div>

        <div className="flex justify-evenly drop-shadow-lg ">
          <div className="flex flex-col items-center mt-5">
            {/*services */}
            <h1 className="sm:text-5xl text-2xl font-bold text-white">
              Support
            </h1>
            <div className="text-blue-00 mt-5 text-xl text-white flex flex-col text-base font-semibold">
              <span>Laundry Service</span>
              <span>Dry Cleaning</span>
              <span>Shoe Cleaning</span>

              <span>Ironing</span>
            </div>
          </div>
          <div className="flex flex-col items-center mt-5">
            {/*services */}
            <h1 className="sm:text-5xl text-2xl font-bold text-white">
              Company
            </h1>
            <div className="text-blue-00 text-lg mt-5 text-white flex flex-col text-base font-semibold">
              <span>About</span>
              <span>Contact Us</span>
              <span>Refund Policy</span>
              <span>Franchise</span>
              <span>FAQs</span>
            </div>
          </div>
        </div>

        {/*contact info of shop */}
        <div className="flex justify-center items-center flex-col mt-6 text-white">
          <div>
            <span className="text-2xl font-semibold flex justify-center">
              Contact Us
            </span>
            <div className="ml-14">
              <span className="flex justify-evenly mr-14 p-1">
                <a href="https://wa.me/+971522372288">
                  <FaWhatsappSquare
                    size={33}
                    className="hover:scale-110 duration-150"
                  />
                </a>
                <a href="https://www.facebook.com/profile.php?id=61553585545960">
                  <FaFacebookSquare
                    size={33}
                    className="hover:scale-110 duration-150"
                  />
                </a>
                <a href="https://www.instagram.com/liwalaundry.dubai/profilecard/?igsh=MXR6ZzBlYTl0MmVxOA==">
                  {" "}
                  <FaInstagramSquare
                    size={33}
                    className="hover:scale-110 duration-150"
                  />
                </a>
              </span>
              <span className="flex font-medium underline pb-2">
                <CiMail size={21} className="mr-1 mt-[3px]" />{" "}
                liwadrycleaners@gmail.com
              </span>

              <span className="flex font-medium underline pb-2">
                <FaPhoneAlt size={21} className="mr-1 mt-[3px]" /> +971 052 237
                2288
              </span>
              <span className="flex font-medium underline pb-2">
                <FaPhoneAlt size={21} className="mr-1 mt-[3px]" /> +971 05299
                77188
              </span>

              <span className="flex font-medium underline">
                <FaRegBuilding size={21} className="mr-1 mt-[3px]" /> Al Taawun
                Sheikh Zayed road Dubai
              </span>
              <span className="flex font-medium underline">
                <FaRegBuilding size={21} className="mr-1 mt-[3px]" /> Al Taawun
                Al Tawoon Sharjah
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
