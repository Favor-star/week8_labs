import Image from "next/image";
import Button from "./button";

const Hero = () => {
  return (
    <section className="relative">
      <div
        className="max-h-[700px] h-fit aspect-square md:aspect-[1440/730] w-full bg-left relative pb-3 bg-black object-bottom -mt-6 "
        //   style={{ backgroundImage: "url('/image-hero.jpeg')" }}
      >
        <Image
          src={"/image-hero.jpeg"}
          alt="hero image"
          fill
          className="w-full  object-cover bg-bottom object-bottom hidden md:flex"
        />
        <Image
          src={"/image-hero.tablet.jpg"}
          alt="hero image tablet mode"
          fill
          className="w-full aspect-square md:hidden object-bottom bg-bottom"
        />
        <div className=""></div>
      </div>
      <div className="absolute top-1/2 -translate-y-1/2 w-full flex items-center justify-center text-white ">
        <div className="max-w-screen-xl flex flex-col items-center md:items-start gap-8  w-full  px-4">
          <div className="space-y-2">
            <p className="uppercase text-white/75 tracking-[.5rem] text-sm font-bol text-center md:text-start">
              NEW PRODUCT
            </p>
            <h3 className="font-bold text-white text-xl md:text-5xl lg:text-3xl uppercase tracking-widest text-center md:text-start">
              XX99 Mark II
              <br /> Headphones
            </h3>
          </div>
          <div className="text-white/75 text-center md:text-start">
            Experience natural, lifelike audio and exceptional <br /> build
            quality made for the passionate music
            <br /> enthusiast.
          </div>
          <Button className="bg-action text-white">See product</Button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
