"use cilent";
import React, { useEffect, useRef } from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Image from "next/image";
import Autoplay from "embla-carousel-autoplay";

const Tagline = () => {
  return (
    <div className="relative w-full h-[400px] ">
      <div className=" w-full h-full  absolute inset-0 flex items-center justify-center flex-wrap ">
        <div className="absolute inset-0 bg-gradient-to-t from-transparent  to-white" />

        <Carousel
          opts={{ align: "center", loop: true }}
          plugins={[
            Autoplay({
              delay: 2500, // Auto-scroll every 3 seconds
            }),
          ]}
          className="overflow-hidden"
        >
          <CarouselContent className="gap-4 flex-nowrap">
            <CarouselItem className="flex justify-center w-full">
              <div className="items-center justify-center flex flex-col ">
                <Image
                  src="/dryclean.jpeg"
                  width={340}
                  height={340}
                  className="w-full sm:w-80 h-auto object-contain rounded-sm drop-shadow-lg"
                  alt="Sofa's"
                />
                <h1 className="text-2xl sm:text-4xl font-bold text-pink-500 drop-shadow-xl mt-4">
                  Dry Clean
                </h1>
              </div>
            </CarouselItem>
            <CarouselItem className="flex justify-center w-full">
              <div className="items-center justify-center flex flex-col ">
                <Image
                  src="/pressing.jpeg"
                  width={340}
                  height={340}
                  className="w-full sm:w-80 h-auto object-contain rounded-sm drop-shadow-lg"
                />
                <h1 className="text-sm sm:text-2xl font-bold text-pink-500 drop-shadow-xl mt-4">
                  Expert Shirt Laundering & Pressing
                </h1>
              </div>
            </CarouselItem>
            <CarouselItem className="flex justify-center w-full">
              <div className="items-center justify-center flex flex-col ">
                <Image
                  src="/ladies.jpeg"
                  width={340}
                  height={340}
                  className="w-full sm:w-80 h-auto object-contain rounded-sm drop-shadow-lg"
                />
                <h1 className="text-lg sm:text-2xl font-bold text-pink-500 drop-shadow-xl mt-4">
                  Delicate Dress Cleaning & Steam Pressing
                </h1>
              </div>
            </CarouselItem>

            {/* Third Carousel Item */}
            <CarouselItem className="flex justify-center w-full">
              <div className="items-center justify-center flex flex-col">
                <Image
                  src="/bags.jpeg"
                  width={340}
                  height={340}
                  className="w-full sm:w-80 h-auto object-contain"
                />
                <h1 className="text-sm sm:text-xl font-bold text-pink-500 drop-shadow-xl mt-4">
                  Comprehensive Wash, Dry and Fold Service per bag
                </h1>
              </div>
            </CarouselItem>

            <CarouselItem className="flex justify-center w-full">
              <div className="items-center justify-center flex flex-col ">
                <Image
                  src="/sofa.jpeg"
                  width={340}
                  height={340}
                  className="w-full sm:w-80 h-auto object-contain rounded-sm drop-shadow-lg"
                />
                <h1 className="text-2xl sm:text-4xl font-bold text-pink-500 drop-shadow-xl mt-4">
                  Sofa Shampooing
                </h1>
              </div>
            </CarouselItem>
            <CarouselItem className="flex justify-center w-full">
              <div className="items-center justify-center flex flex-col ">
                <Image
                  src="/matress.jpeg"
                  width={340}
                  height={340}
                  className="w-full sm:w-80 h-auto object-contain rounded-sm drop-shadow-lg"
                />
                <h1 className="text-2xl sm:text-4xl font-bold text-pink-500 drop-shadow-xl mt-4">
                  Mattress Cleaning and Refreshment
                </h1>
              </div>
            </CarouselItem>
            <CarouselItem className="flex justify-center w-full">
              <div className="items-center justify-center flex flex-col ">
                <Image
                  src="/shoe.jpeg"
                  width={340}
                  height={340}
                  className="w-full sm:w-80 h-auto object-contain rounded-sm drop-shadow-lg"
                />
                <h1 className="text-2xl sm:text-4xl font-bold text-pink-500 drop-shadow-xl mt-4">
                  Shoe Cleaning
                </h1>
              </div>
            </CarouselItem>
            <CarouselItem className="flex justify-center w-full">
              <div className="items-center justify-center flex flex-col ">
                <Image
                  src="/alter.jpeg"
                  width={340}
                  height={340}
                  className="w-full sm:w-80 h-auto object-contain rounded-sm drop-shadow-lg"
                />
                <h1 className="text-2xl sm:text-4xl font-bold text-pink-500 drop-shadow-xl mt-4">
                  Alterations
                </h1>
              </div>
            </CarouselItem>
            <CarouselItem className="flex justify-center w-full">
              <div className="items-center justify-center flex flex-col ">
                <Image
                  src="/carpet.jpeg"
                  width={340}
                  height={340}
                  className="w-full sm:w-80 h-auto object-contain rounded-sm drop-shadow-lg"
                />
                <h1 className="text-2xl sm:text-4xl font-bold text-pink-500 drop-shadow-xl mt-4">
                  Carpet cleaning
                </h1>
              </div>
            </CarouselItem>

            <CarouselItem className="flex justify-center w-full">
              <div className="items-center justify-center flex flex-col ">
                <Image
                  width={340}
                  height={340}
                  src="/shoeref.jpeg"
                  className="w-full sm:w-80 h-auto object-contain rounded-sm drop-shadow-lg"
                />
                <h1 className="text-2xl sm:text-4xl font-bold text-pink-500 drop-shadow-xl mt-4">
                  Shoe refreshment
                </h1>
              </div>
            </CarouselItem>
            <CarouselItem className="flex justify-center w-full">
              <div className="items-center justify-center flex flex-col ">
                <Image
                  width={340}
                  height={340}
                  src="/steamiron.jpeg"
                  className="w-full sm:w-80 h-auto object-contain rounded-sm drop-shadow-lg"
                />
                <h1 className="text-sm sm:text-4xl font-bold text-pink-500 drop-shadow-xl mt-4">
                  Ladies' Garment Care & Precision Steam Ironing
                </h1>
              </div>
            </CarouselItem>
          </CarouselContent>
          <CarouselPrevious className="absolute left-2 top-1/2 -translate-y-1/2 z-10 bg-white p-2 rounded-full shadow-md hidden md:flex" />
          <CarouselNext className="absolute right-2 top-1/2 -translate-y-1/2 z-10 bg-white p-2 rounded-full shadow-md hidden md:flex" />
        </Carousel>
      </div>
    </div>
  );
};

export default Tagline;
