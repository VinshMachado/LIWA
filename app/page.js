"use client";
import Tagline from "./costomcomp/Tagline";
import Howitworks from "./costomcomp/Howitworks";

import Delivary from "./costomcomp/Delivary";

export default function Home() {
  return (
    <div className="bg-[url('/bgedit.png')] bg-cover bg-center">
      <Tagline />
      <Delivary />

      <Howitworks />
    </div>
  );
}
