import React from "react";
import Image from "next/image";
import { productsData } from "@/app/data";
import ProductCards from "@/app/components/ProductCards";
import YouMayLike from "@/app/components/YouMayLike";
import AddToCartCard from "@/app/components/AddToCartCard";

const page = async ({
  params,
}: {
  params: Promise<{ productSlug: string }>;
}) => {
  const { productSlug } = await params;
  const data = productsData.products.find(
    (product) => product.slug === productSlug
  );
  const featuresText = data?.features
    .split("\n")
    .filter((el) => el.length !== 0);
  return (
    <>
      <div className="w-full max-w-screen-xl text-black py-6 px-4">Go back</div>
      <AddToCartCard data={data} />
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
