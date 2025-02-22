import React from "react";
import Link from "next/link";
import { FaLocationDot } from "react-icons/fa6";
import { FaRegCopyright } from "react-icons/fa6";

const Footer = () => {
  return (
    <div className="bg-gray-800 ">
      <div className="w-full h-screen bg-[url('/clothbg.png')] bg-cover bg-center  shadow-white">
        <div className="flex flex-col items-center pt-10">
          {/*quick link section */}
          <h1 className="text-3xl font-bold text-pink-600 drop-shadow-lg">
            Quick Links
          </h1>
          <Link
            href="/#"
            className="pr-3 font-bold text-xl text-cyan-500 drop-shadow-md  hover:text-blue-700 hover:underline transition duration-300 hover:-translate-y-1 "
          >
            About Us
          </Link>
          <Link
            href="/SecondPage"
            className="pr-3 font-bold text-xl text-cyan-500 drop-shadow-md  hover:text-blue-700 hover:underline transition hover:-translate-y-1  duration-300"
          >
            Our Services
          </Link>
          <Link
            href="/contactPage"
            className="pr-3 font-bold text-xl text-cyan-500 hover:text-blue-700 hover:underline transition hover:-translate-y-1  duration-300"
          >
            Contact
          </Link>
          <Link
            href="/whyChoseUs"
            className="pr-3 font-bold text-xl text-cyan-500 hover:text-blue-700 hover:underline transition hover:-translate-y-1  duration-300"
          >
            Why Choose Us
          </Link>
        </div>

        <div className="flex flex-col items-center mt-5">
          {/*services */}
          <h1 className="text-3xl font-bold text-pink-600">Services</h1>
          <div className="text-blue-00 text-blue-500 flex flex-col  font-semibold">
            <Link
              href="/#"
              className="pr-3 text-2xl font-bold text-cyan-500 hover:text-blue-700 hover:underline transition hover:-translate-y-1  duration-300"
            >
              Services
            </Link>
          </div>
        </div>

        <div className="flex flex-col items-center mt-5">
          {/*location of shop */}
          <h1 className="text-3xl font-bold text-pink-600">Locations</h1>
          <div className="flex flex-col justify-center items-center">
            <div className="m-5 flex flex-col justify-center items-center">
              <span className="text-xl font-medium mb-3 rounded-full text-cyan-500 drop-shadow-2xl w-24 flex justify-center items-center h-7 bg-green-200 shadow-white">
                Dubai
              </span>
              <FaLocationDot size={38} />
              <a
                href="https://www.google.com/maps/place/LIWA+LAUNDRY+AND+DRY+CLEANERS/@25.3113617,55.3761561,17z/data=!3m1!4b1!4m6!3m5!1s0x3e5f5b0fb49dde55:0x50d691ad12ad2f70!8m2!3d25.3113617!4d55.3761561!16s%2Fg%2F11nmrdmcws?entry=ttu&g_ep=EgoyMDI1MDEyOS4xIKXMDSoASAFQAw%3D%3D"
                className="hover:cursor-pointer"
              >
                <b className="text-sm">Sheikh Zayed road Dubai</b>
              </a>
            </div>
            <div className="m-5 flex flex-col justify-center items-center">
              <h1 className="text-xl font-medium mb-3 rounded-full text-cyan-500 drop-shadow-2xl w-24 flex justify-center items-center h-8 bg-green-200 shadow-white">
                Sharjah{" "}
              </h1>
              <FaLocationDot size={38} />
              <a
                href="https://www.google.com/maps/place/LIWA+LAUNDRY+AND+DRY+CLEANERS/@25.3113617,55.3761561,17z/data=!3m1!4b1!4m6!3m5!1s0x3e5f5b0fb49dde55:0x50d691ad12ad2f70!8m2!3d25.3113617!4d55.3761561!16s%2Fg%2F11nmrdmcws?entry=ttu&g_ep=EgoyMDI1MDEyOS4xIKXMDSoASAFQAw%3D%3D"
                className="hover:cursor-pointer"
              >
                <b className="text-sm">Al Tawoon Sharjah</b>
              </a>
            </div>
          </div>

          <span className="text-sm">
            <b>
              {" "}
              <a href="tel:+971 52 2372288">+971 52 2372288</a>
            </b>
          </span>
          <span className="text-sm">
            <b>
              <a href="tel:+971 52 9977188"> +971 52 9977188</a>
            </b>
          </span>
        </div>

        <div className=" flex justify-center mt-5 p-1">
          <FaRegCopyright size={12} className=" ml-2" />
          <span className="pl-1 text-sm">
            Copyright 2025 LIWA Laundry And Dry Cleaners.
          </span>
        </div>
      </div>
    </div>
  );
};

export default Footer;
