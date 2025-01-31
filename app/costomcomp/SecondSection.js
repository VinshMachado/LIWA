import React from "react";

const FirstSection = () => {
  return (
    <div className="mt-28">
      <div className="flex flex-col sm:flex-row sm:pl-24 pl-20  pr-24 justify-center">
        {/* Text Section */}
        <div className="flex flex-col">
          <span className="pb-5 text-slate-600 text-4xl text-center sm:text-start">
            Finest Garment Care
          </span>
          <p className="text-black text-lg ">
            We offer a full range of laundry services, including washing,
            pressing, dry cleaning, curtain cleaning, sofa shampooing, mattress
            cleaning, carpet care, and shoe and bag cleaning. Whatever your
            laundry needs, we’ve got you covered with quality and care.
          </p>
        </div>

        {/* Image */}
        <img
          src="garment.png"
          width={300}
          height={300}
          className="ml-1 flex justify-center sm:flex-grow"
          alt="Garment Care"
        />
      </div>
    </div>
  );
};

export default FirstSection;
