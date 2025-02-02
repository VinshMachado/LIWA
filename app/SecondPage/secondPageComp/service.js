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
          <div className="drop-shadow-lg w-8/12 flex flex-wrap items-center rounded-xl sm:h-[400px] md:h-[390px] lg:h-[320px] hover:-translate-y-4  shadow-gray-400 shadow-sm  hover:shadow-lg  hover:shadow-cyan-200  duration-300 ease-in-out mt-3 p-5">
            <MdOutlineDryCleaning className="h-36 w-auto" />
            <p className="flex items-center gap-4">
              <span className="text-2xl sm:text-5xl font-medium text-pink-400">
                Dry Cleaning
              </span>
            </p>
            <span className="text-xl font-normal">
              At our laundry service, we take pride in caring for your clothes,
              leaving them fresh, pressed, and as good as new. Our fast,
              reliable, and eco-friendly service makes laundry day effortless,
              so you can enjoy more free time while we handle the work.
            </span>
          </div>
        </div>
      </div>
      {/*2nd service option*/}

      <div className="mt-16">
        <div className="flex justify-center ">
          <div className="flex justify-center ">
            <div className="drop-shadow-lg w-8/12 flex flex-wrap items-center rounded-xl sm:h-[400px] md:h-[390px] lg:h-[320px] hover:-translate-y-4   shadow-gray-400 shadow-sm  hover:shadow-lg  hover:shadow-cyan-200   duration-300 ease-in-out mt-3 p-5">
              <GiWashingMachine className="h-36 w-auto" />
              <p className="flex items-center gap-4">
                <span className="text-2xl sm:text-5xl font-medium text-pink-400">
                  Washing Services
                </span>
              </p>
              <span className="text-xl font-normal">
                We offer professional washing services for all types of clothing
                and fabrics. Whether it's delicate garments or everyday wear, we
                ensure your items are cleaned with the utmost care. Our
                eco-friendly process guarantees freshness and quality every
                time. Trust us to handle your laundry with precision and
                expertise.
              </span>
            </div>
          </div>
        </div>
      </div>
      {/*3rd service option*/}

      <div className="mt-16">
        <div className="flex justify-center ">
          <div className="flex justify-center ">
            <div className="flex justify-center ">
              <div className="drop-shadow-lg w-8/12 flex flex-wrap items-center rounded-xl sm:h-[400px] md:h-[390px] lg:h-[320px] hover:-translate-y-4   shadow-gray-400 shadow-sm  hover:shadow-lg  hover:shadow-cyan-200   duration-300 ease-in-out mt-3 p-5">
                <TbIroningSteamFilled className="h-36 w-auto" />
                <p className="flex items-center gap-4">
                  <span className="text-2xl sm:text-5xl font-medium text-pink-400">
                    Steam Ironing
                  </span>
                </p>
                <span className="text-xl font-normal">
                  Experience fast and efficient steam ironing to remove wrinkles
                  and refresh your clothes. We ensure your garments look crisp
                  and polished. Perfect for a smooth, wrinkle-free finish every
                  time!
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/*4th service option*/}

      <div className="mt-16">
        <div className="flex justify-center ">
          <div className="drop-shadow-lg w-8/12 flex flex-wrap items-center rounded-xl sm:h-[400px] md:h-[390px] lg:h-[320px] hover:-translate-y-4   shadow-gray-400 shadow-sm  hover:shadow-lg  hover:shadow-cyan-200  duration-300 ease-in-out mt-3 p-5">
            <FaRug className="h-36 w-auto" />
            <p className="flex items-center gap-4">
              <span className="text-2xl sm:ml-3 sm:text-5xl font-medium text-pink-400">
                Carpet Cleaning
              </span>
            </p>
            <span className="text-xl font-normal">
              We offer deep cleaning and effective stain removal for all types
              of carpets and rugs. Our expert service restores freshness and
              vibrancy to your floors. Trust us to tackle even the toughest
              stains!
            </span>
          </div>
        </div>
      </div>

      {/*5th service option*/}

      <div className="mt-16">
        <div className="flex justify-center ">
          <div className="drop-shadow-lg w-8/12 flex flex-wrap items-center rounded-xl sm:h-[400px] md:h-[390px] lg:h-[320px] hover:-translate-y-4  shadow-gray-400 shadow-sm  hover:shadow-lg  hover:shadow-cyan-200   duration-300 ease-in-out mt-3 p-5">
            <GiTheaterCurtains className="h-36 w-auto" />
            <p className="flex items-center gap-4">
              <span className="text-2xl sm:ml-3 sm:text-5xl font-medium text-pink-400">
                Curtain Cleaning
              </span>
            </p>
            <span className="text-xl font-normal">
              We provide thorough cleaning for curtains, drapes, and blinds,
              ensuring they’re fresh, dust-free, and looking like new. Our
              service restores their beauty and extends their lifespan.
            </span>
          </div>
        </div>
      </div>

      {/*6th service option*/}

      <div className="mt-16">
        <div className="flex justify-center ">
          <div className="drop-shadow-lg w-8/12 flex flex-wrap items-center rounded-xl sm:h-[400px] md:h-[390px] lg:h-[320px] hover:-translate-y-4   shadow-gray-400 shadow-sm  hover:shadow-lg  hover:shadow-cyan-200  duration-300 ease-in-out mt-3 p-5">
            <GiSofa className="h-36 w-auto" />
            <p className="flex items-center gap-4">
              <span className="text-2xl sm:ml-3 sm:text-5xl font-medium text-pink-400">
                Sofa Cleaning
              </span>
            </p>
            <span className="text-xl font-normal">
              We offer professional upholstery cleaning to maintain the
              cleanliness and appearance of your sofas and chairs. Our service
              removes dirt and stains, keeping your furniture looking fresh and
              vibrant.
            </span>
          </div>
        </div>
      </div>

      {/*7th service option*/}

      <div className="mt-16">
        <div className="flex justify-center ">
          <div className="drop-shadow-lg w-8/12 flex flex-wrap items-center rounded-xl sm:h-[400px] md:h-[390px] lg:h-[320px] hover:-translate-y-4   shadow-gray-400 shadow-sm  hover:shadow-lg  hover:shadow-cyan-200   duration-300 ease-in-out mt-3 p-5">
            <FaMattressPillow className="h-36 w-auto" />
            <p className="flex items-center gap-4">
              <span className="text-xl sm:ml-3 sm:text-5xl font-medium text-pink-400">
                Mattress Shampooing
              </span>
            </p>
            <span className="text-xl font-normal">
              We provide deep cleaning and refreshing for your mattress,
              removing dust, allergens, and stains. Our service ensures a
              cleaner, healthier sleep environment for you.
            </span>
          </div>
        </div>
      </div>

      {/*8th service option*/}

      <div className="mt-16">
        <div className="flex justify-center ">
          <div className="drop-shadow-lg w-8/12 flex flex-wrap items-center rounded-xl sm:h-[400px] md:h-[390px] lg:h-[320px] hover:-translate-y-4  shadow-gray-400 shadow-sm  hover:shadow-lg  hover:shadow-cyan-200  duration-300 ease-in-out mt-3 p-5">
            <GiHanger className="h-36 w-auto" />
            <p className="flex items-center gap-4">
              <span className="text-xl sm:ml-3 sm:text-5xl font-medium text-pink-400">
                Mending & Alteration Services
              </span>
            </p>
            <span className="text-xl font-normal">
              We offer professional mending, repairs, and alterations for all
              your clothing and garments. Our expert service ensures a perfect
              fit and extends the life of your wardrobe.
            </span>
          </div>
        </div>
      </div>
      {/*9th service option*/}

      <div className="mt-16">
        <div className="flex justify-center ">
          <div className="drop-shadow-lg w-8/12 flex flex-wrap items-center rounded-xl sm:h-[400px] md:h-[390px] lg:h-[320px] hover:-translate-y-4   shadow-gray-400 shadow-sm  hover:shadow-lg  hover:shadow-cyan-200   duration-300 ease-in-out mt-3 p-5">
            <FaUserTie className="h-36 w-auto" />
            <p className="flex items-center gap-4">
              <span className="text-xl sm:ml-3 sm:text-5xl font-medium text-pink-400">
                Wedding Clothes Cleaning
              </span>
            </p>
            <span className="text-xl font-normal">
              We provide special care cleaning for wedding gowns and bridal wear
              to preserve their beauty. Our delicate process ensures your dress
              remains pristine and ready for treasured memories.
            </span>
          </div>
        </div>
      </div>

      {/*10th service option*/}

      <div className="mt-16">
        <div className="flex justify-center ">
          <div className="drop-shadow-lg w-8/12 flex flex-wrap items-center rounded-xl sm:h-[400px] md:h-[390px] lg:h-[320px] hover:-translate-y-4   shadow-gray-400 shadow-sm  hover:shadow-lg  hover:shadow-cyan-200   duration-300 ease-in-out mt-3 p-5">
            <GiRunningShoe className="h-36 w-auto" />
            <p className="flex items-center gap-4">
              <span className="text-xl sm:ml-3 sm:text-5xl font-medium text-pink-400">
                Shoes Cleaning & Restoration
              </span>
            </p>
            <span className="text-xl font-normal">
              We offer cleaning, polishing, and restoration services for your
              shoes to bring them back to life. Our expert care restores their
              shine and extends their durability
            </span>
          </div>
        </div>
      </div>

      {/*11th service option*/}

      <div className="mt-16">
        <div className="flex justify-center ">
          <div className="drop-shadow-lg w-8/12 flex flex-wrap items-center rounded-xl sm:h-[400px] md:h-[390px] lg:h-[320px] hover:-translate-y-4  shadow-gray-400 shadow-sm  hover:shadow-lg  hover:shadow-cyan-200   duration-300 ease-in-out mt-3 p-5">
            <GiSchoolBag className="h-36 w-auto" />
            <p className="flex items-center gap-4">
              <span className="text-xl sm:ml-3 sm:text-5xl font-medium text-pink-400">
                Bag Cleaning & Restoration
              </span>
            </p>
            <span className="text-xl font-normal">
              We provide cleaning and restoration services for bags, from
              leather to fabric, keeping them in great shape. Our expert care
              preserves their quality and extends their lifespan.
            </span>
          </div>
        </div>
      </div>

      {/*12th service option*/}

      <div className="mt-16 mb-10">
        <div className="flex justify-center ">
          <div className="drop-shadow-lg w-8/12 flex flex-wrap items-center rounded-xl sm:h-[400px] md:h-[390px] lg:h-[320px] hover:-translate-y-4   shadow-gray-400 shadow-sm  hover:shadow-lg  hover:shadow-cyan-200   duration-300 ease-in-out mt-3 p-5">
            <TbHorseToy className="h-36 w-auto" />
            <p className="flex items-center gap-4">
              <span className="text-xl sm:ml-3 sm:text-5xl font-medium text-pink-400">
                Soft Toys Cleaning
              </span>
            </p>
            <span className="text-xl font-normal">
              We provide cleaning and restoration services for bags, from
              leather to fabric, keeping them in great shape. Our expert care
              preserves their quality and extends their lifespan.
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default service;
