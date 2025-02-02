import React from "react";

const Delivary = () => {
  return (
    <div className="mt-28">
      <div className="flex flex-col sm:flex-row sm:pl-24 pl-20 pr-24 justify-center items-center">
        {/* Text Section */}
        <div className="flex flex-col text-center">
          <p className="text-black text-xl sm:text-3xl drop-shadow-2xl">
            <b>Experience Laundry Like Never Before </b>
            with
            <b> Free Pickup and Delivery </b>
            Across
            <b className="text-pink-600"> Dubai and Sharjah </b>
            All at Affordable Prices!
          </p>
        </div>

        {/* Image */}
        <img
          src="/Truck.png"
          alt="Tagline"
          className="w-28 h-auto sm:ml-20  sm:w-48 pb-10 ml-15"
        />
      </div>
    </div>
  );
};

export default Delivary;
