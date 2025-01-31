import Image from "next/image";
import FirstSection from "./costomcomp/FirstSection";
import SecondSection from "./costomcomp/SecondSection";
import Navbar from "./costomcomp/Navbar";
export default function Home() {
  return (
    <div>
      <Navbar />
      <FirstSection />
      <SecondSection />
    </div>
  );
}
