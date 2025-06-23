"use client";
import { FC, useState } from "react";
import { cn } from "../utils";
import Image from "next/image";
import Button from "./button";
import Link from "next/link";
import { useRouter } from "next/navigation";

interface CheckoutPopUpProps {
  open: boolean;
  handleClosePopup: () => void;
}
const CheckoutPopUp: FC<CheckoutPopUpProps> = ({ open, handleClosePopup }) => {
  const [quantity, setQuantity] = useState<number>(1);
  const router = useRouter();
  const handleIncrement = () => setQuantity((prev) => prev + 1);
  const handleDecrement = () => setQuantity((prev) => Math.max(1, prev - 1));
  const handleNavigate = () => {
    handleClosePopup();
    router.push("/checkout");
  };
  return (
    <section
      className={cn(
        " fixed w-screen h-screen bg-black/50 top-0 left-0 z-[99] transition-all duration-500 origin-top-right px-4",
        open ? "scale-100 opacity-100" : "scale-0 opacity-0"
      )}
      onClick={handleClosePopup}
    >
      <div
        className=" absolute w-9/12 max-w-[400px] min-h-52 rounded-lg space-y-4 bg-white p-8 top-10 md:top-20 right-10  md:right-20"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex w-full justify-between">
          <p className="uppercase text-lg font-bold">Cart(1)</p>
          <button className="underline text-black/60">Remove all</button>
        </div>
        <div className="flex flex-row justify-between items-center">
          <div className="flex gap-2 items-center">
            <Image
              src={"/image-earphones-yx1.jpg"}
              alt="Checkout image"
              height={200}
              width={200}
              className="w-16 h-16 aspect-square object-cover rounded-lg"
            />
            <div className="flex flex-col gap-1">
              <p className="font-bold text-sm uppercase">zx59</p>
              <p className="text-black/60">$ 4,500</p>
            </div>
          </div>

          <div className="w-fit flex flex-row justify-center gap-0 items-center">
            <button
              className="w-8 h-8 flex items-center justify-center bg-black/5 hover:bg-black/10 text-black hover:text-action transition-all"
              onClick={handleDecrement}
            >
              -
            </button>
            <div className="w-8 px-1  bg-black/5 h-8 flex items-center justify-center text-sm">
              {quantity}
            </div>
            <button
              className="w-8 h-8 flex items-center justify-center bg-black/5 hover:bg-black/10 text-black hover:text-action transition-all"
              onClick={handleIncrement}
            >
              +
            </button>
          </div>
        </div>
        <p className="uppercase flex items-center justify-between w-full mt-10">
          <span className="text-black/50">total</span>
          <span className="font-bold">$ 1,760</span>
        </p>
        <Button
          className="w-full items-center justify-center"
          onClick={handleNavigate}
        >
          checkout
        </Button>
      </div>
    </section>
  );
};

export default CheckoutPopUp;
