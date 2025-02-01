import React from "react";
import { IoIosCall } from "react-icons/io";
import { CiDeliveryTruck } from "react-icons/ci";
import { FaMagnifyingGlass } from "react-icons/fa6";
import { MdDryCleaning } from "react-icons/md";
import { TbIroningSteamFilled } from "react-icons/tb";
import { TbListDetails } from "react-icons/tb";
import { LuPackage2 } from "react-icons/lu";

const Howitworks = () => {
  return (
    <>
      <div className="w-full h-auto  flex  items-center justify-center mt-20 flex-col">
        <h1 className="text-4xl h-20 sm:text-start drop-shadow-lg w-11/12 sm:w-full flex justify-center sm:rounded-none rounded-full  items-center font-bold bg-pink-200 text-blue-400 ">
          <span className=" text-4xl text-center sm:text-start drop-shadow-lg font-bold text-blue-400">
            How It works?
          </span>
        </h1>
        <div className="w-full flex flex-wrap justify-center items-center">
          {/* Call us */}
          <div className="w-11/12 sm:w-1/3 h-32 rounded-full flex justify-center items-center  m-10 sm:m-10 shadow-blue-100 shadow-lg">
            <div className="h-28 w-28 bg-white flex justify-center items-center rounded-full ml-10">
              <IoIosCall className="text-pink-500 h-16 w-auto" />
            </div>

            <h2 className="mr-10 text-lg sm:text-xl text-blue-400 ml-10">
              <b>Call us to fix an appointment at your convenience</b>
            </h2>
          </div>

          {
            //pick
          }
          <div className="w-11/12 h-32  sm:w-1/3 rounded-full flex justify-center items-center sm:m-10 m-10 shadow-blue-100 shadow-lg">
            <div className="h-28 w-28 bg-white flex justify-center items-center rounded-full ml-10">
              <CiDeliveryTruck className="text-pink-500 h-16 w-auto" />
            </div>

            <h2 className="mr-10 text-lg sm:text-xl text-blue-400 ml-10">
              <b>We come to pick up your clothes at the scheduled time</b>
            </h2>
          </div>

          {
            //Each item is carefully
          }
          <div className="w-11/12 h-32  sm:w-1/3 rounded-full flex justify-center items-center m-10 shadow-blue-100 shadow-lg">
            <div className="h-28 w-28 bg-white flex justify-center items-center rounded-full ml-10">
              <FaMagnifyingGlass className="text-pink-500 h-10 w-auto" />
            </div>

            <h2 className="mr-10 text-sm sm:text-sm text-blue-400 ml-10">
              <b>
                Each item is carefully inspected and assessed for the best
                cleaning method
              </b>
            </h2>
          </div>

          {
            //
          }
          <div className="w-11/12 h-36  sm:w-1/3 rounded-full flex justify-center items-center m-10 shadow-blue-100 shadow-lg">
            <div className="h-28 w-28 bg-white flex justify-center items-center rounded-full ml-10">
              <MdDryCleaning className="text-pink-500 h-10 w-auto" />
            </div>

            <h2 className="mr-10 text-sm sm:text-sm text-blue-400 ml-10">
              <b>
                We clean your clothes using high-quality products and ensure
                thorough checks on every piece
              </b>
            </h2>
          </div>

          {
            //
          }
          <div className="w-11/12 h-36  sm:w-1/3 rounded-full flex justify-center items-center m-10 shadow-blue-100 shadow-lg">
            <div className="h-28 w-28 bg-white flex justify-center items-center rounded-full ml-10">
              <TbIroningSteamFilled className="text-pink-500 h-10 w-auto" />
            </div>

            <h2 className="mr-10 text-sm  text-blue-400 ml-10">
              <b>
                We press your clothes using the proper method tailored to each
                fabric type, ensuring the best results and fabric care
              </b>
            </h2>
          </div>
          {
            //quality
          }
          <div className="w-11/12 h-32  sm:w-1/3 rounded-full flex justify-center items-center m-10 shadow-blue-100 shadow-lg">
            <div className="h-28 w-28 bg-white flex justify-center items-center rounded-full ml-10">
              <TbListDetails className="text-pink-500 h-16 w-auto" />
            </div>

            <h2 className="mr-10 text-sm sm:text-xl text-blue-400 ml-10">
              <b>
                We prioritize quality and attention to detail in all services
              </b>
            </h2>
          </div>
          {
            // deliver
          }
          <div className="w-11/12   h-36  sm:w-1/3  rounded-full flex justify-center items-center m-10 shadow-blue-100 shadow-lg">
            <div className="h-28 w-28 bg-white flex justify-center items-center rounded-full ml-10">
              <LuPackage2 className="text-pink-500 h-10 w-auto" />
            </div>

            <h2 className="mr-10 text-sm  text-blue-400 ml-10">
              <b>
                We schedule a delivery time and return your freshly cleaned
                items right to your doorstep
              </b>
            </h2>
          </div>
        </div>
      </div>
    </>
  );
};

export default Howitworks;
