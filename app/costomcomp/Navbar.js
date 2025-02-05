import React from "react";
import Link from "next/link";
import { SidebarTrigger } from "@/components/ui/sidebar";

const Navbar = () => {
  return (
    <>
      <div className="mb-5">
        <div className="relative bg-[url('/navbarbg.png')] bg-cover bg-center  w-full h-20 items-center justify-center text-white font-bold flex">
          {/* Gradient Layer */}
          <SidebarTrigger className="h-20 w-20 text-black ml-8" />
          {/* Content */}
          <div className="relative z-10 flex  w-full justify-center items-center border-">
            <img src="/logo.png" className="h-20 w-auto drop-shadow-lg" />
          </div>
        </div>
        <div className="flex items-end justify-end sm:pr-10 "></div>
      </div>
    </>
  );
};

export default Navbar;
