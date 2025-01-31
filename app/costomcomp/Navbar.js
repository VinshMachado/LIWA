import React from "react";
import Link from "next/link";

const Navbar = () => {
  return (
    <>
      <div>
        <div className=" bg-gradient-to-b from-cyan-500 to-cyan-50  w-full h-48 flex items-center justify-center text-white font-bold">
          <h1 className="text-6xl drop-shadow-lg">Liwa </h1>
        </div>
        <div className="flex items-end justify-end pr-10">
          <Link
            href="/#"
            className="pr-3 font-bold text-blue-500 hover:text-blue-700 hover:underline transition duration-300"
          >
            About Us
          </Link>
          <Link
            href="/#"
            className="pr-3 font-bold text-blue-500 hover:text-blue-700 hover:underline transition duration-300"
          >
            Contact
          </Link>
          <Link
            href="/#"
            className="pr-3 font-bold text-blue-500 hover:text-blue-700 hover:underline transition duration-300"
          >
            Contact
          </Link>
        </div>
      </div>
    </>
  );
};

export default Navbar;
