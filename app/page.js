"use client";
import Tagline from "./costomcomp/Tagline";
import Howitworks from "./costomcomp/Howitworks";
import Head from "next/head";
import Delivary from "./costomcomp/Delivary";

export default function Home() {
  return (
    <div className="bg-[url('/mummy.jpg')] bg-cover bg-center">
      <Head>
        <title>Professional Laundry services with affordable prices!</title>
        <meta
          name="description"
          content="Liwa Laundry and Dry Cleaners offers premium laundry and dry cleaning services in Dubai. Quick service,free pick up and delivery at affordable rates!"
        />
        <meta name="robots" content="index, follow" />
      </Head>
      <Tagline />
      <Delivary />

      <Howitworks />
    </div>
  );
}
