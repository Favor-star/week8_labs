import React from "react";
import Image from "next/image";
import { cn } from "@/app/utils";
import Button from "@/app/components/button";
import { productsData } from "@/app/data";
import ProductCard from "@/app/components/ProductCard";
const page = ({ params }: { params: { productSlug: string } }) => {
  const { productSlug } = params;
  console.log(productSlug);
  const data = productsData.products.find(
    (product) => product.slug === productSlug
  );
  const featuresText = data?.features
    .split("\n")
    .filter((el) => el.length !== 0);
  console.log(featuresText);
  return (
    <>
      <div className="w-full max-w-screen-xl text-black py-6 px-4">Go back</div>
      <div
        className={cn(
          "flex max-w-screen-xl flex-col  gap-5 lg:gap-0 items-center justify-center overflow-hidden my-0 px-4",
          "lg:flex-row"
        )}
      >
        <div
          className={cn(
            "w-full flex-1   lg:max-h-[500px] h-full relative overflow-hidden rounded-xl",
            "me-0 lg:me-28 "
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
            {data?.description}
          </p>
          <div className="flex gap-2">
            <div className="flex gap-1 items-center justify-center">
              <Button className="text-black bg-gray mt-2 px-5">-</Button>
              <div className="w-10 flex items-center justify-center text-sm">
                1
              </div>
              <Button className="text-black bg-gray mt-2 px-5">+</Button>
            </div>
            <Button variant={"primary"}>Add to cart</Button>
          </div>
        </div>
      </div>
      <div className="w-full max-w-screen-xl py-20 flex flex-col md:flex-row px-4 gap-5">
        <div className="w-full md:flex-7/12 ">
          <p className="uppercase font-bold text-3xl">Features</p>
          <p className="mt-2 text-black/50 text-sm">
            {featuresText?.map((text, i) => (
              <React.Fragment key={i}>
                {i === featuresText.length - 1 ? (
                  text
                ) : (
                  <React.Fragment>
                    {text} <br />
                    <br />
                  </React.Fragment>
                )}
                {}
              </React.Fragment>
            ))}
          </p>
        </div>
        <div className=" w-full md:flex-3/12">
          <p className="uppercase font-bold text-3xl">In the box</p>
          <p className=""></p>
        </div>
      </div>
      <div className="w-full max-w-screen-xl grid  grid-rows-3 sm:grid-rows-2  grid-flow-col place-items-center items-center px-4 mb-10 pb-24 gap-4 h-fit">
        <Image
          src={"/image-gallery-1.jpg"}
          alt="gallery image 1"
          width={654}
          height={348}
          className="w-full h-full object-cover rounded-2xl"
        />
        <Image
          src={"/image-gallery-2.jpg"}
          alt="gallery image 2"
          width={654}
          height={348}
          className="w-full h-full object-cover rounded-2xl"
        />
        <Image
          src={"/image-gallery-3.jpg"}
          alt="gallery image 3"
          width={654}
          height={736}
          className="row-span-1 sm:row-span-2 w-full h-full object-cover rounded-2xl"
        />
      </div>
      <YouMayLike />
      <section className="w-full flex items-center justify-center">
        <div className="w-full flex flex-col sm:flex-row gap-0 -space-y-10 sm:-space-y-0 sm:gap-4 items-center justify-center mb-10 max-w-screen-xl px-4">
          {Array(3)
            .fill(null)
            .map((_, i) => (
              <ProductCard key={i} />
            ))}
        </div>
      </section>
    </>
  );
};

export default page;

const YouMayLike = () => {
  return (
    <section className="w-full flex flex-col justify-center items-center mb-5">
      <p className="uppercase font-bold text-xl sm:text-2xl md:text-3xl w-full text-center mb-5">
        You may also like
      </p>
      <div className="flex max-w-screen-xl flex-col sm:flex-row w-full px-4 gap-6 sm:gap-4">
        {Array(3)
          .fill(null)
          .map((_, i) => (
            <div className="w-full flex flex-col items-center gap-6" key={i}>
              <Image
                src={"/image-xx99-mark-one-headphones.jpg"}
                alt="image"
                height={500}
                width={500}
                className="max-w-full aspect-square rounded-xl"
              />
              <h3 className="font-bold text-black text-2xl uppercase">
                ZX9 Speaker
              </h3>
              <Button variant={"primary"}>see product</Button>
            </div>
          ))}
      </div>
    </section>
  );
};
