import Image from "next/image";
import Tagline from "./costomcomp/Tagline";
import Navbar from "./costomcomp/Navbar";
import FirstSection from "./costomcomp/FirstSection";
import SecondSection from "./costomcomp/SecondSection";
import Delivary from "./costomcomp/Delivary";

export default function Home() {
  return (
    <div>
      <Navbar />
      <Tagline />
      <Delivary />
      <FirstSection />
    </div>
  );
}
