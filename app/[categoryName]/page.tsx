import React from "react";
import ItemCard from "../components/ItemCard";
import { productsData } from "../data";

const page = async ({
  params,
}: {
  params: Promise<{ categoryName: string }>;
}) => {
  const { categoryName } = await params;
  const data = productsData.products.filter(
    (product) => product.category === categoryName
  );
  console.log(data);
  return (
    <section className="w-full flex flex-col items-center justify-center">
      <div className="w-full bg-black py-24">
        <p className="text-5xl font-bold text-white uppercase text-center w-full">
          {categoryName}
        </p>
      </div>
      {data.map((item) => (
        <ItemCard item={item} />
      ))}
      {/* <ItemCard item={data} /> */}
    </section>
  );
};

export default page;
