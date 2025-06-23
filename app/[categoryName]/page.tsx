import ItemCard from "../components/ItemCard";
import { productsData } from "../data";
import ProductCards from "../components/ProductCards";

const page = async ({
  params,
}: {
  params: Promise<{ categoryName: string }>;
}) => {
  const { categoryName } = await params;
  const data = productsData.products.filter(
    (product) => product.category === categoryName
  );

  return (
    <section className="w-full flex flex-col items-center justify-center">
      <div className="w-full bg-black py-24">
        <p className="text-5xl font-bold text-white uppercase text-center w-full">
          {categoryName}
        </p>
      </div>
      {data.map((item, i) => (
        <ItemCard
          item={item}
          key={item.id}
          imageOnRight={i % 2 !== 0}
          newProduct={i === 0}
        />
      ))}
      <ProductCards />
    </section>
  );
};

export default page;
