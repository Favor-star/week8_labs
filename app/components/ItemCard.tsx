import Image from "next/image";
import React from "react";
import Button from "./button";
import { cn } from "../utils";
import Link from "next/link";
interface SingleItemProp {
  id: number;
  slug: string;
  name: string;
  shortName: string;
  image: {
    mobile: string;
    tablet: string;
    desktop: string;
  };
  cartImage: string;
  category: string;
  categoryImage: {
    mobile: string;
    tablet: string;
    desktop: string;
  };
  new: boolean;
  price: number;
  description: string;
}
interface ItemCardProps {
  imageOnRight?: boolean;
  item: SingleItemProp;
}

const ItemCard: React.FC<ItemCardProps> = ({ imageOnRight = false, item }) => {
  return (
    <section
      className={cn(
        "flex max-w-screen-xl flex-col  gap-5 lg:gap-0 items-center justify-center overflow-hidden my-16",
        imageOnRight ? "lg:flex-row-reverse" : "lg:flex-row"
      )}
    >
      <div
        className={cn(
          "w-full flex-1   lg:max-h-[500px] h-full relative overflow-hidden rounded-xl",
          imageOnRight ? " ms-0 lg:ms-28" : "me-0 lg:me-28 "
        )}
      >
        <Image
          src={"/image-xx99-mark-two.jpg"}
          alt="Image speaker"
          height={1080}
          width={1120}
          //   sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className=""
        />
      </div>
      <div className="flex flex-col w-full  gap-5 max-w-[500px] items-center justify-center lg:items-start">
        <p className="tracking-[.5rem] text-action font-light uppercase">
          new product
        </p>
        <h3 className="text-4xl font-bold uppercase ">
          XX99 Mark II
          <br /> Headphones
        </h3>
        <p className="w-full text-sm text-black/60 text-center lg:text-start">
          The new XX99 Mark II headphones is the pinnacle of pristine audio. It
          redefines your premium headphone experience by reproducing the
          balanced depth and precision of studio-quality sound.
        </p>
        <Link href={`/${item.category}/${item.slug}`}>
          <Button className="text-white bg-action mt-2">See product</Button>
        </Link>
      </div>
    </section>
  );
};

export default ItemCard;
