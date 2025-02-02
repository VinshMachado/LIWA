import React from "react";
import Link from "next/link";

const Navbar = () => {
  return (
    <>
      <div>
        <div className="relative bg-[url('/navbarbg.png')] bg-cover bg-center w-full h-48 flex items-center justify-center text-white font-bold flex-col">
          {/* Gradient Layer */}

          {/* Content */}
          <div className="relative z-10 flex flex-col items-center border-">
            <img src="/logo.png" className="h-36 w-auto drop-shadow-lg" />
          </div>
        </div>
        <div className="flex items-end justify-end sm:pr-10 ">
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
      </div>
    </>
  );
};

export default Navbar;
