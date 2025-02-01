import Image from "next/image";
import Tagline from "./costomcomp/Tagline";
import Howitworks from "./costomcomp/Howitworks";

import FirstSection from "./costomcomp/FirstSection";
import SecondSection from "./costomcomp/SecondSection";
import Delivary from "./costomcomp/Delivary";

export default function Home() {
  return (
    <div className="bg-white">
      <Tagline />
      <Delivary />

      <Howitworks />
    </div>
  );
}
