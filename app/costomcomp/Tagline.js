import React from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const Tagline = () => {
  return (
    <div className="relative w-full h-[400px] ">
      <div className=" w-full h-full  absolute inset-0 flex items-center justify-center flex-wrap ">
        <div className="absolute inset-0 bg-gradient-to-t from-transparent  to-white" />
        ladies dress
        <Carousel
          opts={{ align: "center", loop: true }}
          className="overflow-hidden"
        >
          <CarouselContent className="gap-4 flex-nowrap">
            <CarouselItem className="flex justify-center w-full">
              <div className="items-center justify-center flex flex-col ">
                <img
                  src="/dryclean.jpeg"
                  className="w-full sm:w-80 h-auto object-contain rounded-sm drop-shadow-lg"
                  alt="Sofa's"
                />
                <h1 className="text-2xl sm:text-4xl font-bold text-pink-500 drop-shadow-xl mt-4">
                  Dry Clean
                </h1>
              </div>
            </CarouselItem>

            {/* Third Carousel Item */}
            <CarouselItem className="flex justify-center w-full">
              <div className="items-center justify-center flex flex-col">
                <img
                  src="/bags.jfif"
                  className="w-full sm:w-80 h-auto object-contain"
                />
                <h1 className="text-sm sm:text-xl font-bold text-pink-500 drop-shadow-xl mt-4">
                  Comprehensive Wash, Dry and fold Service per bag
                </h1>
              </div>
            </CarouselItem>
            <CarouselItem className="flex justify-center w-full">
              <div className="items-center justify-center flex flex-col ">
                <img
                  src="/ladies.jpeg"
                  className="w-full sm:w-80 h-auto object-contain rounded-sm drop-shadow-lg"
                />
                <h1 className="text-lg sm:text-2xl font-bold text-pink-500 drop-shadow-xl mt-4">
                  Delicate Dress Cleaning & Steam Pressing
                </h1>
              </div>
            </CarouselItem>
            <CarouselItem className="flex justify-center w-full">
              <div className="items-center justify-center flex flex-col ">
                <img
                  src="/sofa.jpeg"
                  className="w-full sm:w-80 h-auto object-contain rounded-sm drop-shadow-lg"
                />
                <h1 className="text-2xl sm:text-4xl font-bold text-pink-500 drop-shadow-xl mt-4">
                  Sofa Shampooing
                </h1>
              </div>
            </CarouselItem>
            <CarouselItem className="flex justify-center w-full">
              <div className="items-center justify-center flex flex-col ">
                <img
                  src="/matress.jpeg"
                  className="w-full sm:w-80 h-auto object-contain rounded-sm drop-shadow-lg"
                />
                <h1 className="text-2xl sm:text-4xl font-bold text-pink-500 drop-shadow-xl mt-4">
                  Mattress cleaning, and refreshment
                </h1>
              </div>
            </CarouselItem>
            <CarouselItem className="flex justify-center w-full">
              <div className="items-center justify-center flex flex-col ">
                <img
                  src="/shoe.jpeg"
                  className="w-full sm:w-80 h-auto object-contain rounded-sm drop-shadow-lg"
                />
                <h1 className="text-2xl sm:text-4xl font-bold text-pink-500 drop-shadow-xl mt-4">
                  Mattress cleaning, and refreshment
                </h1>
              </div>
            </CarouselItem>
            <CarouselItem className="flex justify-center w-full">
              <div className="items-center justify-center flex flex-col ">
                <img
                  src="/alter.jpeg"
                  className="w-full sm:w-80 h-auto object-contain rounded-sm drop-shadow-lg"
                />
                <h1 className="text-2xl sm:text-4xl font-bold text-pink-500 drop-shadow-xl mt-4">
                  Alterations
                </h1>
              </div>
            </CarouselItem>
            <CarouselItem className="flex justify-center w-full">
              <div className="items-center justify-center flex flex-col ">
                <img
                  src="/carpet.jpeg"
                  className="w-full sm:w-80 h-auto object-contain rounded-sm drop-shadow-lg"
                />
                <h1 className="text-2xl sm:text-4xl font-bold text-pink-500 drop-shadow-xl mt-4">
                  Carpet cleaning
                </h1>
              </div>
            </CarouselItem>
            <CarouselItem className="flex justify-center w-full">
              <div className="items-center justify-center flex flex-col ">
                <img
                  src="/pressing.jpeg"
                  className="w-full sm:w-80 h-auto object-contain rounded-sm drop-shadow-lg"
                />
                <h1 className="text-2xl sm:text-4xl font-bold text-pink-500 drop-shadow-xl mt-4">
                  Expert Shirt Laundering & Pressing
                </h1>
              </div>
            </CarouselItem>
            <CarouselItem className="flex justify-center w-full">
              <div className="items-center justify-center flex flex-col ">
                <img
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
                <img
                  src="/steamiron.jpeg"
                  className="w-full sm:w-80 h-auto object-contain rounded-sm drop-shadow-lg"
                />
                <h1 className="text-sm sm:text-4xl font-bold text-pink-500 drop-shadow-xl mt-4">
                  Ladies' Garment Care & Precision Steam Ironing
                </h1>
              </div>
            </CarouselItem>
          </CarouselContent>
        </Carousel>
      </div>
    </div>
  );
  matress.png;
};

export default Tagline;
