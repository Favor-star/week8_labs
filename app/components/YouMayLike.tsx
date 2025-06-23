import Image from "next/image";
import Button from "./button";
import { FC } from "react";
import Link from "next/link";

interface YouMayLikeProps {
  others: {
    slug: string;
    name: string;
    image: {
      mobile: string;
      tablet: string;
      desktop: string;
    };
  }[];
}
const YouMayLike: FC<YouMayLikeProps> = ({ others }) => {
  return (
    <section className="w-full flex flex-col justify-center items-center mb-5">
      <p className="uppercase font-bold text-xl sm:text-2xl md:text-3xl w-full text-center mb-5">
        You may also like
      </p>
      <div className="flex max-w-screen-xl flex-col sm:flex-row w-full px-4 gap-6 sm:gap-4">
        {others.map(({ slug, name }, i) => (
          <div className="w-full flex flex-col items-center gap-6" key={slug}>
            <Image
              src={"/image-xx99-mark-one-headphones.jpg"}
              alt="image"
              height={500}
              width={500}
              className="max-w-full aspect-square rounded-xl"
            />
            <h3 className="font-bold text-black text-2xl uppercase">{name}</h3>
            <Link href={`/${slug}`}>
              <Button variant={"primary"}>see product</Button>
            </Link>
          </div>
        ))}
      </div>
    </section>
  );
};

export default YouMayLike;
