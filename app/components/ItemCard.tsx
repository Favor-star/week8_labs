import Image from "next/image";
import {FC} from "react";
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
  newProduct?: boolean;
  item: SingleItemProp;
}

const ItemCard: FC<ItemCardProps> = ({
  imageOnRight = false,
  newProduct = false,
  item,
}) => {
  console.log("Provided item => ", item);
  const { name, description, category, slug } = item;
  return (
    <section
      className={cn(
        "flex max-w-screen-xl flex-col px-4  gap-5 lg:gap-0 items-center justify-center overflow-hidden my-16",
        imageOnRight ? "sm:flex-row-reverse" : "sm:flex-row"
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
        />
      </div>
      <div className="flex flex-col w-full  gap-5 max-w-[500px] items-center justify-center lg:items-start">
        {newProduct && (
          <p className="tracking-[.5rem] text-action text-sm font-light uppercase">
            new product
          </p>
        )}
        <h3 className="text-3xl font-bold uppercase w-full max-w-[240px]">
          {name}
        </h3>
        <p className="w-full text-sm text-black/60 text-center lg:text-start">
          {description}
        </p>
        <Link href={`/${category}/${slug}`}>
          <Button variant={"primary"}>See product</Button>
        </Link>
      </div>
    </section>
  );
};

export default ItemCard;
