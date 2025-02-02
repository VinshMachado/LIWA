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
        <Carousel opts={{ align: "center", loop: true }}>
          <CarouselContent className="gap-4">
            <CarouselItem className="flex justify-center">
              <div className=" items-center justify-center flex flex-col">
                <img
                  src="/cloths.png"
                  className="sm:w-auto sm:h-96 w-70 h-56  "
                />
                <h1 className="text-4xl font-bold text-pink-500 drop-shadow-xl ">
                  Cloths
                </h1>
              </div>
            </CarouselItem>
            <CarouselItem className="flex justify-center">
              <div className=" items-center justify-center flex flex-col">
                <img
                  src="/pngtree-contemporary-linen-sofa-on-white-studio-background-a-png-image_10294836.png"
                  className="sm:w-96 sm:h-96 h-96 w-96   "
                />
                <h1 className="text-4xl font-bold text-pink-500 drop-shadow-xl">
                  Sofa's
                </h1>
              </div>
            </CarouselItem>
            <CarouselItem className="flex justify-center">
              <div className=" items-center justify-center flex flex-col">
                <img
                  src="/matres.png"
                  className=" sm:w-72 h-auto w-36 mt-7  "
                />
                <h1 className="text-4xl ml-5 font-bold text-pink-500 drop-shadow-xl">
                  Mattress
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
