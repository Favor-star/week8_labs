import Image from "next/image";
import React from "react";

const BestGear = () => {
  return (
    <div className="max-w-screen-xl px-4 flex flex-col md:flex-row-reverse items-center justify-center gap-12 my-20">
      <Image
        src={"/image-best-gear.jpg"}
        alt="best gear image"
        width={654}
        height={600}
        className="hidden md:block flex-1 rounded-2xl"
      />
      <Image
        src={"/image-best-gear-tablet.jpg"}
        alt="best gear image"
        width={1378}
        height={600}
        className="block md:hidden flex-1 rounded-2xl"
      />
      <div className="flex flex-col gap-10 w-full md:max-w-6/12 max-w-full">
        <p className="uppercase text-black font-bold text-2xl md:text-4xl">
          bringing you the <span className="text-action">best</span> audio gear
        </p>
        <p className="text-black/50">
          Located at the heart of New York City, Audiophile is the premier store
          for high end headphones, earphones, speakers, and audio accessories.
          We have a large showroom and luxury demonstration rooms available for
          you to browse and experience a wide range of our products. Stop by our
          store to meet some of the fantastic people who make Audiophile the
          best place to buy your portable audio equipment.
        </p>
      </div>
    </div>
  );
};

export default BestGear;
