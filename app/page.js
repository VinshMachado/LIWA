import Image from "next/image";
import Tagline from "./costomcomp/Tagline";
import Navbar from "./costomcomp/Navbar";

export default function Home() {
  return (
    <div>
      <Navbar />
      <Tagline />
    </div>
  );
}
