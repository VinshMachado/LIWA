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
      <div className="bg-[url('/tagline.jpeg')] bg-cover bg-center w-full h-full  absolute inset-0 flex items-center justify-center flex-wrap ">
        <Carousel opts={{ align: "center", loop: true }}>
          <CarouselContent className="gap-4">
            <CarouselItem className="flex justify-center">
              <img
                src="/cloths.png"
                className="sm:w-auto sm:h-96 w-70 h-70  "
              />
            </CarouselItem>
            <CarouselItem className="flex justify-center">
              <img
                src="/pngtree-contemporary-linen-sofa-on-white-studio-background-a-png-image_10294836.png"
                className="sm:w-96 sm:h-96 w-70 h-auto   "
              />
            </CarouselItem>
            <CarouselItem className="flex justify-center">
              <img src="/matres.png" className=" sm:h-72 w-auto h-72 mt-7  " />
            </CarouselItem>
            <CarouselItem className="flex justify-center">
              <img src="/toys.png" className=" sm:h-72 w-auto h-64 pt-20 " />
            </CarouselItem>
          </CarouselContent>
        </Carousel>
      </div>
    </div>
  );
  matress.png;
};

export default Tagline;
