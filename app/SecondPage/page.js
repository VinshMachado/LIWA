import React from "react";
import Navbar from "../costomcomp/Navbar";
import Service from "./secondPageComp/service";
const page = () => {
  return (
    <div className="bg-[url('/servicesbg.jpg')] bg-cover bg-center">
      <Service />
    </div>
  );
};

export default page;
