import React from "react";

const Delivary = () => {
  return (
    <div className="mt-28">
      <div className="flex flex-col sm:flex-row sm:pl-24 pl-20 pr-24 ">
        {/* Text Section */}
        <div className="flex flex-col">
          <span className="pb-5 text-slate-600 text-4xl text-center sm:text-start drop-shadow-lg font-bold text-pink-400">
            Delivery
          </span>
          <p className="text-black text-3xl drop-shadow-2xl">
            Experience Laundry Like Never Before <br /> with Free Pickup and
            Delivery Across <br /> <b>Dubai and Sharjah!</b>
          </p>
        </div>

        {/* Image */}
        <img src="/Truck.png" alt="Tagline" className="w-48 h-auto sm:ml-10" />
      </div>
    </div>
  );
};

export default Delivary;
