import React from "react";
import Link from "next/link";
import { SidebarTrigger } from "@/components/ui/sidebar";

const Navbar = () => {
  return (
    <>
      <div className="mb-3">
        <div className="relative bg-[url('/navbarbg.png')] bg-cover bg-center  w-full h-20 items-center justify-center text-white font-bold flex">
          {/* Gradient Layer */}
          <SidebarTrigger className="h-20 w-20 text-black ml-8" />
          {/* Content */}
          <div className="relative z-10 flex  w-full justify-center items-center border-">
            <img src="/logo.png" className="h-20 w-auto drop-shadow-lg" />
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
            href="/whyChoseUs"
            className="pr-3 font-bold text-blue-500 hover:text-blue-700 hover:underline transition hover:-translate-y-1  duration-300"
          >
            Why Choose Us?
          </Link>
          <Link
            href="/contactPage"
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
