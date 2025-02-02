import React from "react";

const Delivary = () => {
  return (
    <div className="mt-28">
      <div className="flex flex-col sm:flex-row sm:pl-24 pl-20 pr-24 ">
        {/* Text Section */}
        <div className="flex flex-col">
          <p className="text-black text-xl sm:text-3xl drop-shadow-2xl">
            <b>Experience Laundry Like Never Before</b>
            <br />
            with Free Pickup and Delivery Across <br />
            <b className="text-pink-600">Dubai and Sharjah</b> <br />
            All at Affordable Prices!
          </p>
        </div>

        {/* Image */}
        <img
          src="/Truck.png"
          alt="Tagline"
          className="w-28 h-auto sm:ml-10 sm:w-48 pb-10"
        />
      </div>
    </div>
  );
};

export default Delivary;
