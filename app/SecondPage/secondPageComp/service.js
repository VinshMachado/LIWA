import React from "react";
import { MdOutlineDryCleaning } from "react-icons/md";
import { GiWashingMachine } from "react-icons/gi";
import { TbIroningSteamFilled } from "react-icons/tb";
import { FaRug } from "react-icons/fa6";
import { GiTheaterCurtains } from "react-icons/gi";
import { GiSofa } from "react-icons/gi";
import { FaMattressPillow } from "react-icons/fa6";
import { GiHanger } from "react-icons/gi";
import { FaUserTie } from "react-icons/fa6";
import { GiRunningShoe } from "react-icons/gi";
import { GiSchoolBag } from "react-icons/gi";
import { TbHorseToy } from "react-icons/tb";

const service = () => {
  return (
    <div>
      <div className="mt-20">
        <span className="flex justify-center drop-shadow-xl shadow-black text-6xl font-bold text-blue-500 m-20">
          Services
        </span>
        <div className="flex justify-center items-center">
          <div className="drop-shadow-lg w-8/12 flex flex-wrap bg-white items-center rounded-xl sm:h-[400px] md:h-[390px] lg:h-[320px] hover:-translate-y-4  shadow-gray-400 shadow-sm  hover:shadow-lg  hover:shadow-cyan-200  duration-300 ease-in-out mt-3 p-5">
            <img src="/towel.gif" className="w-20 h-20" />
            <p className="flex items-center gap-4">
              <span className="text-2xl sm:text-5xl font-medium text-pink-400">
                Dry Cleaning
              </span>
            </p>
            <span className="text-xl font-normal">
              Expert cleaning for delicate fabrics and garments that require
              special care
            </span>
          </div>
        </div>
      </div>
      {/*2nd service option*/}

      <div className="mt-16">
        <div className="flex justify-center ">
          <div className="drop-shadow-lg w-8/12 flex flex-wrap bg-white items-center rounded-xl sm:h-[400px] md:h-[390px] lg:h-[320px] hover:-translate-y-4   shadow-gray-400 shadow-sm  hover:shadow-lg  hover:shadow-cyan-200  duration-300 ease-in-out mt-3 p-5">
            <img src="/washing-machine.gif" className="w-20 h-20" />
            <p className="flex items-center gap-4">
              <span className="text-2xl sm:ml-3 sm:text-5xl font-medium text-pink-400">
                Washing Services
              </span>
            </p>
            <span className="text-xl font-normal">
              Professional washing for all types of clothing and fabrics.
            </span>
          </div>
        </div>
      </div>

      {/*3rd service option*/}

      <div className="mt-16">
        <div className="flex justify-center ">
          <div className="drop-shadow-lg w-8/12 flex flex-wrap bg-white items-center rounded-xl sm:h-[400px] md:h-[390px] lg:h-[320px] hover:-translate-y-4   shadow-gray-400 shadow-sm  hover:shadow-lg  hover:shadow-cyan-200  duration-300 ease-in-out mt-3 p-5">
            <img src="/iron.gif" className="w-20 h-20" />
            <p className="flex items-center gap-4">
              <span className="text-2xl sm:ml-3 sm:text-5xl font-medium text-pink-400">
                Steam Ironing
              </span>
            </p>
            <span className="text-xl font-normal">
              Fast and efficient steam ironing to remove wrinkles and freshen up
              clothes
            </span>
          </div>
        </div>
      </div>

      {/*4th service option*/}

      <div className="mt-16">
        <div className="flex justify-center ">
          <div className="drop-shadow-lg w-8/12 flex flex-wrap bg-white items-center rounded-xl sm:h-[400px] md:h-[390px] lg:h-[320px] hover:-translate-y-4   shadow-gray-400 shadow-sm  hover:shadow-lg  hover:shadow-cyan-200  duration-300 ease-in-out mt-3 p-5">
            <img src="/carpet.gif" className="w-20 h-20" />
            <p className="flex items-center gap-4">
              <span className="text-2xl sm:ml-3 sm:text-5xl font-medium text-pink-400">
                Carpet Cleaning
              </span>
            </p>
            <span className="text-xl font-normal">
              Deep cleaning and stain removal for all types of carpets and rugs
            </span>
          </div>
        </div>
      </div>

      {/*5th service option*/}

      <div className="mt-16">
        <div className="flex justify-center ">
          <div className="drop-shadow-lg w-8/12 flex flex-wrap bg-white items-center rounded-xl sm:h-[400px] md:h-[390px] lg:h-[320px] hover:-translate-y-4  shadow-gray-400 shadow-sm  hover:shadow-lg  hover:shadow-cyan-200   duration-300 ease-in-out mt-3 p-5">
            <img src="/curtain.gif" className="w-20 h-20" />
            <p className="flex items-center gap-4">
              <span className="text-2xl sm:ml-3 sm:text-5xl font-medium text-pink-400">
                Curtain Cleaning
              </span>
            </p>
            <span className="text-xl font-normal">
              Thorough cleaning for curtains, drapes, and blinds, ensuring
              they’re fresh and dust-free
            </span>
          </div>
        </div>
      </div>

      {/*6th service option*/}

      <div className="mt-16">
        <div className="flex justify-center ">
          <div className="drop-shadow-lg w-8/12 flex flex-wrap bg-white items-center rounded-xl sm:h-[400px] md:h-[390px] lg:h-[320px] hover:-translate-y-4   shadow-gray-400 shadow-sm  hover:shadow-lg  hover:shadow-cyan-200  duration-300 ease-in-out mt-3 p-5">
            <img src="/sofa.gif" className="w-20 h-20" />
            <p className="flex items-center gap-4">
              <span className="text-2xl sm:ml-3 sm:text-5xl font-medium text-pink-400">
                Sofa Cleaning
              </span>
            </p>
            <span className="text-xl font-normal">
              Upholstery cleaning to maintain the cleanliness and appearance of
              your sofas and chairs
            </span>
          </div>
        </div>
      </div>

      {/*7th service option*/}

      <div className="mt-16">
        <div className="flex justify-center ">
          <div className="drop-shadow-lg w-8/12 flex flex-wrap bg-white items-center rounded-xl sm:h-[400px] md:h-[390px] lg:h-[320px] hover:-translate-y-4   shadow-gray-400 shadow-sm  hover:shadow-lg  hover:shadow-cyan-200   duration-300 ease-in-out mt-3 p-5">
            <img src="/pillow.gif" className="w-20 h-20" />
            <p className="flex items-center gap-4">
              <span className="text-xl sm:ml-3 sm:text-5xl font-medium text-pink-400">
                Mattress Shampooing
              </span>
            </p>
            <span className="text-xl font-normal">
              Deep cleaning and refreshing for your mattress to remove dust,
              allergens, and stains.
            </span>
          </div>
        </div>
      </div>

      {/*8th service option*/}

      <div className="mt-16">
        <div className="flex justify-center ">
          <div className="drop-shadow-lg w-8/12 flex  bg-white flex-wrap items-center rounded-xl sm:h-[400px] md:h-[390px] lg:h-[320px] hover:-translate-y-4  shadow-gray-400 shadow-sm  hover:shadow-lg  hover:shadow-cyan-200  duration-300 ease-in-out mt-3 p-5">
            <img src="/sewing.gif" className="w-20 h-20" />
            <p className="flex items-center gap-4">
              <span className="text-xl sm:ml-3 sm:text-5xl font-medium text-pink-400">
                Mending & Alteration Services
              </span>
            </p>
            <span className="text-xl font-normal">
              Professional mending, repairs, and alterations for your clothing
              and garments
            </span>
          </div>
        </div>
      </div>
      {/*9th service option*/}

      <div className="mt-16">
        <div className="flex justify-center ">
          <div className="drop-shadow-lg w-8/12 flex bg-white flex-wrap items-center rounded-xl sm:h-[400px] md:h-[390px] lg:h-[320px] hover:-translate-y-4   shadow-gray-400 shadow-sm  hover:shadow-lg  hover:shadow-cyan-200   duration-300 ease-in-out mt-3 p-5">
            <img src="/husband.gif" className="w-20 h-20" />
            <p className="flex items-center gap-4">
              <span className="text-xl sm:ml-3 sm:text-5xl font-medium text-pink-400">
                Wedding Clothes Cleaning
              </span>
            </p>
            <span className="text-xl font-normal">
              Special care cleaning for wedding gowns and bridal wear to
              preserve their beauty.
            </span>
          </div>
        </div>
      </div>

      {/*10th service option*/}

      <div className="mt-16">
        <div className="flex justify-center ">
          <div className="drop-shadow-lg w-8/12 flex bg-white flex-wrap items-center rounded-xl sm:h-[400px] md:h-[390px] lg:h-[320px] hover:-translate-y-4   shadow-gray-400 shadow-sm  hover:shadow-lg  hover:shadow-cyan-200   duration-300 ease-in-out mt-3 p-5">
            <img src="/sneakers.gif" className="w-20 h-20" />
            <p className="flex items-center gap-4">
              <span className="text-xl sm:ml-3 sm:text-5xl font-medium text-pink-400">
                Shoes Cleaning & Restoration
              </span>
            </p>
            <span className="text-xl font-normal">
              Cleaning, polishing, and restoration of shoes to bring them back
              to life.
            </span>
          </div>
        </div>
      </div>

      {/*11th service option*/}

      <div className="mt-16">
        <div className="flex justify-center ">
          <div className="drop-shadow-lg w-8/12 flex bg-white flex-wrap items-center rounded-xl sm:h-[400px] md:h-[390px] lg:h-[320px] hover:-translate-y-4  shadow-gray-400 shadow-sm  hover:shadow-lg  hover:shadow-cyan-200   duration-300 ease-in-out mt-3 p-5">
            <img src="/luggage.gif" className="w-20 h-20" />
            <p className="flex items-center gap-4">
              <span className="text-xl sm:ml-3 sm:text-5xl font-medium text-pink-400">
                Bag Cleaning & Restoration
              </span>
            </p>
            <span className="text-xl font-normal">
              Cleaning and restoration of bags, from leather to fabric, keeping
              them in great shape..
            </span>
          </div>
        </div>
      </div>

      {/*12th service option*/}

      <div className="mt-16 mb-10">
        <div className="flex justify-center ">
          <div className="drop-shadow-lg w-8/12 flex bg-white flex-wrap items-center rounded-xl sm:h-[400px] md:h-[390px] lg:h-[320px] hover:-translate-y-4   shadow-gray-400 shadow-sm  hover:shadow-lg  hover:shadow-cyan-200   duration-300 ease-in-out mt-3 p-5">
            <img src="/toys.gif" className="w-20 h-20" />
            <p className="flex items-center gap-4">
              <span className="text-xl sm:ml-3 sm:text-5xl font-medium text-pink-400">
                Soft Toys Cleaning
              </span>
            </p>
            <span className="text-xl font-normal">
              Safe and gentle cleaning of soft toys, ensuring they’re hygienic
              and kid-friendly
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default service;
