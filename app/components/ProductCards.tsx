import { ChevronRightIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React, { FC } from "react";

const ProductCards = () => {
  return (
    <div className="w-full flex flex-col sm:flex-row gap-0 -space-y-10 sm:-space-y-0 sm:gap-4 items-center justify-center py-10 max-w-screen-xl px-4">
      {productCardData.map(({ name, slug }) => (
        <ProductCard name={name} slug={slug} key={name} />
      ))}
    </div>
  );
};

export default ProductCards;

const ProductCard: FC<(typeof productCardData)[0]> = ({ name, slug }) => {
  return (
    <div className="w-full relative flex items-center flex-col">
      <Image
        src={"/image-speakers.png"}
        alt="speaker image"
        height={140}
        width={140}
        className="relative top-16"
      />
      <Link
        href={`/${slug}`}
        className=" w-full  bg-gray p-5 pt-16 space-y-4 rounded-xl group"
      >
        <h3 className="w-full text-center uppercase font-bold text-lg">
          {name}
        </h3>
        <div className="flex items-center justify-center  w-full gap-0 group-hover:text-action transition-all ">
          Shop
          <ChevronRightIcon
            size={24}
            strokeWidth={1.5}
            className="text-action"
          />
        </div>
      </Link>
    </div>
  );
};
const productCardData = [
  {
    name: "Speakers",
    slug: "speakers",
  },
  {
    name: "headphones",
    slug: "headphones",
  },
  {
    name: "earphones",
    slug: "earphones",
  },
];
