import React from "react";
import Image from "next/image";
import { cn } from "@/app/utils";
import Button from "@/app/components/button";
import { productsData } from "@/app/data";
import ProductCards from "@/app/components/ProductCards";
import Incrementor from "@/app/components/Incrementor";
import YouMayLike from "@/app/components/YouMayLike";

const page = ({ params }: { params: { productSlug: string } }) => {
  const { productSlug } = params;
  console.log(productSlug);
  const data = productsData.products.find(
    (product) => product.slug === productSlug
  );
  const featuresText = data?.features
    .split("\n")
    .filter((el) => el.length !== 0);
  console.log(data);
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
          <p className="font-bold ">$ {data?.price.toLocaleString()}</p>
          <div className="flex gap-2">
            <Incrementor />
            <Button variant={"primary"}>Add to cart</Button>
          </div>
        </div>
      </div>
      <div className="w-full max-w-screen-xl py-20 flex flex-col md:flex-row px-4 gap-12">
        <div className="w-full md:flex-7/12 ">
          <p className="uppercase font-bold text-3xl">Features</p>
          <p className="mt-6 text-black/50 text-sm">
            {featuresText?.map((text, i) => (
              <React.Fragment key={text.slice(0, 5)}>
                {i === featuresText.length - 1 ? (
                  text
                ) : (
                  <React.Fragment key={text.slice(0, 5)}>
                    {text} <br />
                    <br />
                  </React.Fragment>
                )}
                {}
              </React.Fragment>
            ))}
          </p>
        </div>
        <div className=" w-full md:flex-3/12 flex justify-start gap-20 md:gap-1 md:justify-start md:flex-col me-0 md:me-20">
          <p className="uppercase font-bold text-3xl">In the box</p>
          <div className=" flex flex-col gap-2 justify-start items-start md:pt-6">
            {data?.includedItems.map(({ quantity, item }) => (
              <p
                className="flex gap-3 items-center justify-center text-black/50"
                key={item.split(" ").join("-")}
              >
                <span className="text-action">{quantity}x</span>
                <span>{item}</span>
              </p>
            ))}
          </div>
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
      <YouMayLike others={data?.others ?? []} />
      <section className="w-full flex items-center justify-center">
        <ProductCards />
      </section>
    </>
  );
};

export default page;
