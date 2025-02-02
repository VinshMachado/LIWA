import React from "react";
import Link from "next/link";
import { FaLocationDot } from "react-icons/fa6";
import { FaRegCopyright } from "react-icons/fa6";

const Footer = () => {
  return (
    <div className="bg-pink-200">
      <div className="flex flex-col items-center mt-40">
        {/*quick link section */}
        <h1 className="text-3xl font-bold text-pink-500">Quick Links</h1>
        <Link
          href="/#"
          className="pr-3 font-bold text-blue-500  hover:text-blue-700 hover:underline transition duration-300 hover:-translate-y-1 "
        >
          About Us
        </Link>
        <Link
          href="/SecondPage"
          className="pr-3 font-bold text-blue-500  hover:text-blue-700 hover:underline transition hover:-translate-y-1  duration-300"
        >
          Our Services
        </Link>
        <Link
          href="/#"
          className="pr-3 font-bold text-blue-500 hover:text-blue-700 hover:underline transition hover:-translate-y-1  duration-300"
        >
          Contact
        </Link>
        <Link
          href="/#"
          className="pr-3 font-bold text-blue-500 hover:text-blue-700 hover:underline transition hover:-translate-y-1  duration-300"
        >
          Contact
        </Link>
      </div>

      <div className="flex flex-col items-center mt-5">
        {/*services */}
        <h1 className="text-3xl font-bold text-pink-500">services</h1>
        <div className="text-blue-00 text-blue-500 flex flex-col text-base font-semibold">
          <span>service 1</span>
          <span>service 2</span>
          <span>service 3</span>
          <span>service 4</span>
        </div>
      </div>

      <div className="flex flex-col items-center mt-5">
        {/*location of shop */}
        <h1 className="text-3xl font-bold text-pink-500">shop location</h1>
        <span className="text-xl font-medium ">Dubai</span>
        <FaLocationDot size={38} />
        <a
          href="https://www.google.com/maps/place/LIWA+LAUNDRY+AND+DRY+CLEANERS/@25.3113617,55.3761561,17z/data=!3m1!4b1!4m6!3m5!1s0x3e5f5b0fb49dde55:0x50d691ad12ad2f70!8m2!3d25.3113617!4d55.3761561!16s%2Fg%2F11nmrdmcws?entry=ttu&g_ep=EgoyMDI1MDEyOS4xIKXMDSoASAFQAw%3D%3D"
          className="hover:cursor-pointer"
        >
          Al Taawun St - Al Khan - Sharjah - United Arab Emirates
        </a>
        <span>+971 52 237 2288</span>
      </div>

      <div className="border-t-2 border-black flex justify-center p-1">
        <FaRegCopyright size={12} className="mt-[5px] ml-2" />
        <span className="pl-1 text-sm">
          Copyright 2025 LIWA Laundry And Dry Cleaners.
        </span>
      </div>
    </div>
  );
};

export default Footer;
