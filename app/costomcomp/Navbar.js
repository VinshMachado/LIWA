import React from "react";
import Link from "next/link";
import { SidebarTrigger } from "@/components/ui/sidebar";

const Navbar = () => {
  return (
    <>
      <div className="mb-3">
        <div className="relative bg-[url('/navbarbg.png')] bg-cover bg-center w-full h-20 flex items-center justify-between text-white font-bold px-4">
          {/* Sidebar Trigger */}
          <SidebarTrigger className="h-20 w-20 font-bold text-black sm:ml-8" />

          {/* Centered Logo */}
          <div className="absolute left-1/2 transform -translate-x-1/2">
            <img src="/logo.png" className="h-16 w-auto drop-shadow-lg" />
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
