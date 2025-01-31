import React from "react";

const Tagline = () => {
  return (
    <div className="relative w-full h-[400px] ">
      <div className="bg-[url('/tagline.jpeg')] bg-cover bg-center w-full h-full  absolute inset-0 flex items-center justify-center flex-wrap ">
        <img src="/cloths.png" className="sm:w-96 sm:h-96 w-70 h-70" />
        <h1 className="drop-shadow-2xl text-2xl sm:text-8xl font-sans shadow-black font-bold text-gray-900 m-3 animate-fadeIn">
          Your first look!
        </h1>
      </div>
    </div>
  );
};

export default Tagline;
