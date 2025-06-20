import { ChevronRightIcon } from "lucide-react";
import Image from "next/image";
import React from "react";

const ProductCard = () => {
  return (
    <div className="w-full relative flex items-center flex-col">
      <Image
        src={"/image-speakers.png"}
        alt="speaker image"
        height={140}
        width={140}
        className="relative top-16"
      />
      <div className=" w-full  bg-gray p-5 pt-16 space-y-4 rounded-xl">
        <h3 className="w-full text-center uppercase font-bold text-lg">
          Speakers
        </h3>
        <div className="flex items-center justify-center  w-full gap-1 ">
          Shop
          <ChevronRightIcon
            size={24}
            strokeWidth={1.5}
            className="text-action"
          />
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
