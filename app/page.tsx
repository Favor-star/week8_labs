import Image from "next/image";
import Button from "./components/button";
import Hero from "./components/Hero";
import ItemCard from "./components/ItemCard";
import SpeakerCard from "./components/SpeakerCard";
import BestGear from "./components/BestGear";
import ProductCards from "./components/ProductCards";

export default function Home() {
  return (
    <section className="w-full ">
      {/* <Button className="text-white bg-action">The button</Button> */}
      <Hero />
      <section className="w-full flex flex-col items-center justify-center">
        <ProductCards />
        <section className="w-full flex flex-col items-center justify-center px-4">
          <SpeakerCard />
        </section>
        <section className="w-full flex flex-col items-center justify-center my-5 px-4">
          {/* <ItemCard />
          <ItemCard imageOnRight={true} /> */}
          <EarphonesHome />
        </section>
        <BestGear />
      </section>
    </section>
  );
}

const EarphonesHome = () => {
  return (
    <div className="w-full max-w-screen-xl flex flex-col sm:flex-row  gap-5 ">
      <div className="flex flex-1 w-full rounded-xl overflow-hidden">
        <Image
          src={"/image-earphones-yx1.jpg"}
          alt="image"
          height={320}
          width={320}
          className="w-full"
        />
      </div>
      <div className="flex-1 w-full flex items-start flex-col gap-5 justify-center ps-5 md:ps-10 py-10 bg-gray rounded-xl">
        <p className=" uppercase text-3xl">YX1 Earphones</p>
        <Button variant={"outline"}>See product</Button>
      </div>
    </div>
  );
};
