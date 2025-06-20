import Image from "next/image";
import React from "react";
import Button from "./button";

const SpeakerCard = () => {
  return (
    <div className="max-w-screen-xl rounded-2xl bg-action my-10 text-white flex flex-col lg:flex-row w-full gap-5 lg:gap-16 items-center justify-center">
      <div className="flex-1  pt-10 lg:pt-20 py-10 ps-10 lg:ps-20 max-h-[650px] overflow-hidden items-center justify-center w-fit">
        <Image
          src={"/image-speaker-desktop.png"}
          alt="image desktop"
          height={180}
          width={250}
          className="w-34 lg:w-full"
        />
      </div>
      <div className="flex flex-col items-center justify-center lg:justify-start lg:items-start flex-1 pb-10 lg:pb-5 gap-8">
        <h3 className="md:text-6xl text-center lg:text-start uppercase font-bold tracking-[.5rem] text-xl sm:text-2xl">
          ZX9
          <br /> Speaker
        </h3>
        <p className="text-white/70 text-center lg:text-start">
          Upgrade to premium speakers that are phenomenally
          <br /> built to deliver truly remarkable sound.
        </p>
        <Button className=" bg-black text-white mt-5">See product</Button>
      </div>
    </div>
  );
};

export default SpeakerCard;
