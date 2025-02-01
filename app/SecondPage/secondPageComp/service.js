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
        <span className="flex justify-center text-2xl font-bold text-blue-500">
          Our Services:
        </span>
        <div className="flex justify-center ">
          <div className="border-4 border-solid border-pink-500 w-8/12 rounded-xl sm:h-[400px] md:h-[390px] lg:h-[320px] mt-3 p-5">
            <p>
              <MdOutlineDryCleaning size={160} />
              <span className="text-2xl font-medium ">
                {" "}
                1) Dry Cleaning:
              </span>{" "}
              <br />
              <span className="text-xl font-normal ">
                At our laundry service, we take pride in caring for your
                clothes, leaving them fresh, pressed, and as good as new. Our
                fast, reliable, and eco-friendly service makes laundry day
                effortless, so you can enjoy more free time while we handle the
                work.
              </span>
            </p>
          </div>
        </div>
      </div>
      {/*2nd service option*/}

      <div className="mt-16">
        <div className="flex justify-center ">
          <div className="border-4 border-solid border-pink-500 w-8/12 rounded-xl sm:h-[400px] md:h-[390px] lg:h-[320px] mt-3 p-5 mb-3">
            <p>
              <GiWashingMachine size={160} />
              <span className="text-2xl font-medium ">
                {" "}
                2) Washing Services
              </span>{" "}
              <br />
              <span className="text-xl font-normal ">
                We offer professional washing services for all types of clothing
                and fabrics. Whether it's delicate garments or everyday wear, we
                ensure your items are cleaned with the utmost care. Our
                eco-friendly process guarantees freshness and quality every
                time. Trust us to handle your laundry with precision and
                expertise.
              </span>
            </p>
          </div>
        </div>
      </div>
      {/*3rd service option*/}

      <div className="mt-16">
        <div className="flex justify-center ">
          <div className="border-4 border-solid border-pink-500 w-8/12 rounded-xl sm:h-[400px] md:h-[390px] lg:h-[320px] mt-3 p-5 mb-3">
            <p>
              <TbIroningSteamFilled size={160} />
              <span className="text-2xl font-medium ">
                {" "}
                3) Steam Ironing
              </span>{" "}
              <br />
              <span className="text-xl font-normal ">
                Experience fast and efficient steam ironing to remove wrinkles
                and refresh your clothes. We ensure your garments look crisp and
                polished. Perfect for a smooth, wrinkle-free finish every time!
              </span>
            </p>
          </div>
        </div>
      </div>

      {/*4th service option*/}

      <div className="mt-16">
        <div className="flex justify-center ">
          <div className="border-4 border-solid border-pink-500 w-8/12 rounded-xl sm:h-[400px] md:h-[390px] lg:h-[320px] mt-3 p-5 mb-3">
            <p>
              <FaRug size={160} />
              <span className="text-2xl font-medium ">
                {" "}
                4) Carpet Cleaning
              </span>{" "}
              <br />
              <span className="text-xl font-normal ">
                We offer deep cleaning and effective stain removal for all types
                of carpets and rugs. Our expert service restores freshness and
                vibrancy to your floors. Trust us to tackle even the toughest
                stains!
              </span>
            </p>
          </div>
        </div>
      </div>

      {/*5th service option*/}

      <div className="mt-16">
        <div className="flex justify-center ">
          <div className="border-4 border-solid border-pink-500 w-8/12 rounded-xl sm:h-[400px] md:h-[390px] lg:h-[320px] mt-3 p-5 mb-3">
            <p>
              <GiTheaterCurtains size={160} />
              <span className="text-2xl font-medium ">
                {" "}
                5) Curtain Cleaning
              </span>{" "}
              <br />
              <span className="text-xl font-normal ">
                We provide thorough cleaning for curtains, drapes, and blinds,
                ensuring they’re fresh, dust-free, and looking like new. Our
                service restores their beauty and extends their lifespan.
              </span>
            </p>
          </div>
        </div>
      </div>

      {/*6th service option*/}

      <div className="mt-16">
        <div className="flex justify-center ">
          <div className="border-4 border-solid border-pink-500 w-8/12 rounded-xl sm:h-[400px] md:h-[390px] lg:h-[320px] mt-3 p-5 mb-3">
            <p>
              <GiSofa size={160} />
              <span className="text-2xl font-medium ">
                {" "}
                6) Sofa Cleaning
              </span>{" "}
              <br />
              <span className="text-xl font-normal ">
                We offer professional upholstery cleaning to maintain the
                cleanliness and appearance of your sofas and chairs. Our service
                removes dirt and stains, keeping your furniture looking fresh
                and vibrant.
              </span>
            </p>
          </div>
        </div>
      </div>

      {/*7th service option*/}

      <div className="mt-16">
        <div className="flex justify-center ">
          <div className="border-4 border-solid border-pink-500 w-8/12 rounded-xl sm:h-[400px] md:h-[390px] lg:h-[320px] mt-3 p-5 mb-3">
            <p>
              <FaMattressPillow size={160} />
              <span className="text-2xl font-medium ">
                {" "}
                7)Mattress Shampooing
              </span>{" "}
              <br />
              <span className="text-xl font-normal ">
                We provide deep cleaning and refreshing for your mattress,
                removing dust, allergens, and stains. Our service ensures a
                cleaner, healthier sleep environment for you.
              </span>
            </p>
          </div>
        </div>
      </div>

      {/*8th service option*/}

      <div className="mt-16">
        <div className="flex justify-center ">
          <div className="border-4 border-solid border-pink-500 w-8/12 rounded-xl sm:h-[400px] md:h-[390px] lg:h-[320px] mt-3 p-5 mb-3">
            <p>
              <GiHanger size={160} />
              <span className="text-2xl font-medium ">
                {" "}
                8)Mending & Alteration Services
              </span>{" "}
              <br />
              <span className="text-xl font-normal ">
                We offer professional mending, repairs, and alterations for all
                your clothing and garments. Our expert service ensures a perfect
                fit and extends the life of your wardrobe.
              </span>
            </p>
          </div>
        </div>
      </div>
      {/*9th service option*/}

      <div className="mt-16">
        <div className="flex justify-center ">
          <div className="border-4 border-solid border-pink-500 w-8/12 rounded-xl sm:h-[400px] md:h-[390px] lg:h-[320px] mt-3 p-5 mb-3">
            <p>
              <FaUserTie size={160} />
              <span className="text-2xl font-medium ">
                {" "}
                9)Wedding Clothes Cleaning
              </span>{" "}
              <br />
              <span className="text-xl font-normal ">
                We provide special care cleaning for wedding gowns and bridal
                wear to preserve their beauty. Our delicate process ensures your
                dress remains pristine and ready for treasured memories.
              </span>
            </p>
          </div>
        </div>
      </div>

      {/*10th service option*/}

      <div className="mt-16">
        <div className="flex justify-center ">
          <div className="border-4 border-solid border-pink-500 w-8/12 rounded-xl sm:h-[400px] md:h-[390px] lg:h-[320px] mt-3 p-5 mb-3">
            <p>
              <GiRunningShoe size={160} />
              <span className="text-2xl font-medium ">
                {" "}
                10) Shoes Cleaning & Restoration
              </span>{" "}
              <br />
              <span className="text-xl font-normal ">
                We offer cleaning, polishing, and restoration services for your
                shoes to bring them back to life. Our expert care restores their
                shine and extends their durability.
              </span>
            </p>
          </div>
        </div>
      </div>

      {/*11th service option*/}

      <div className="mt-16">
        <div className="flex justify-center ">
          <div className="border-4 border-solid border-pink-500 w-8/12 rounded-xl sm:h-[400px] md:h-[390px] lg:h-[320px] mt-3 p-5 mb-3">
            <p>
              <GiSchoolBag size={160} />
              <span className="text-2xl font-medium ">
                {" "}
                11) Bag Cleaning & Restoration
              </span>{" "}
              <br />
              <span className="text-xl font-normal ">
                We provide cleaning and restoration services for bags, from
                leather to fabric, keeping them in great shape. Our expert care
                preserves their quality and extends their lifespan.
              </span>
            </p>
          </div>
        </div>
      </div>

      {/*12th service option*/}

      <div className="mt-16">
        <div className="flex justify-center ">
          <div className="border-4 border-solid border-pink-500 w-8/12 rounded-xl sm:h-[400px] md:h-[390px] lg:h-[320px] mt-3 p-5 mb-3">
            <p>
              <TbHorseToy size={160} />
              <span className="text-2xl font-medium ">
                {" "}
                12) Soft Toys Cleaning
              </span>{" "}
              <br />
              <span className="text-xl font-normal ">
                We provide safe and gentle cleaning of soft toys, ensuring
                they’re hygienic and kid-friendly. Our care keeps them soft,
                clean, and safe for children to enjoy.
              </span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default service;
