import React from "react";

const Delivary = () => {
  return (
    <div className="mt-28 sm:mt-8 flex flex-col justify-center items-center">
      <div className="flex flex-col sm:flex-row sm:pl-24 pl-20 pr-24 justify-center items-center">
        {/* Text Section */}
        <div className="flex flex-col text-center">
          <p className="text-black w-full  text-xl sm:text-2xl sm:mt-4 md:3xl drop-shadow-2xl">
            <b>Experience Laundry Like Never Before </b>
            with
            <b> FREE PICKUP AND DELIVERY </b>
            Across
            <b className="text-pink-600"> Dubai and Sharjah </b>
            All at Affordable Prices!
          </p>
        </div>

        {/* Image */}
        <img
          src="/van.png"
          alt="Tagline"
          className="w-48 h-auto sm:ml-20  sm:w-48 pb-10 ml-15"
        />
      </div>
      <a href="https://wa.me/+971522372288">
        <button className="w-56 h-20 rounded-full bg-cyan-500 text-white text-lg font-bold shadow-xl transition duration-300 ease-in-out transform hover:bg-cyan-600 hover:shadow-2xl hover:scale-105 active:scale-95">
          Schedule Now
        </button>
      </a>
    </div>
  );
};

export default Delivary;
