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
      <div className="bg-[url('/bgedit.png')] bg-cover bg-center w-full h-full  absolute inset-0 flex items-center justify-center flex-wrap ">
        <div className="absolute inset-0 bg-gradient-to-t from-transparent  to-white" />
        <Carousel
          opts={{ align: "center", loop: true }}
          className="overflow-hidden"
        >
          <CarouselContent className="gap-4 flex-nowrap">
            {/* First Carousel Item */}
            <CarouselItem className="flex justify-center w-full">
              <div className="items-center justify-center flex flex-col">
                <img
                  src="/cloths.png"
                  className="w-full sm:w-80 h-auto object-contain"
                  alt="Cloths"
                />
                <h1 className="text-2xl sm:text-4xl font-bold text-pink-500 drop-shadow-xl mt-4">
                  Cloths
                </h1>
              </div>
            </CarouselItem>

            {/* Second Carousel Item */}
            <CarouselItem className="flex justify-center w-full">
              <div className="items-center justify-center flex flex-col">
                <img
                  src="/sofa.png"
                  className="w-full sm:w-80 h-auto object-contain"
                  alt="Sofa's"
                />
                <h1 className="text-2xl sm:text-4xl font-bold text-pink-500 drop-shadow-xl mt-4">
                  Sofa's
                </h1>
              </div>
            </CarouselItem>

            {/* Third Carousel Item */}
            <CarouselItem className="flex justify-center w-full">
              <div className="items-center justify-center flex flex-col">
                <img
                  src="/matres2.png"
                  className="w-full sm:w-80 h-auto object-contain"
                  alt="Mattress"
                />
                <h1 className="text-2xl sm:text-4xl font-bold text-pink-500 drop-shadow-xl mt-4">
                  Mattress
                </h1>
              </div>
            </CarouselItem>
            <CarouselItem className="flex justify-center w-full">
              <div className="items-center justify-center flex flex-col">
                <img
                  src="/Toys.png"
                  className="w-full sm:w-80 h-auto object-contain"
                  alt="Mattress"
                />
                <h1 className="text-2xl sm:text-4xl font-bold text-pink-500 drop-shadow-xl mt-4">
                  Toys
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
