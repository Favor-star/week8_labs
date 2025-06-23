"use client";
import Image from "next/image";
import Incrementor from "./Incrementor";
import Button from "./button";
import { cn } from "../utils";
import { FC } from "react";
import { productsData } from "../data";
import { useAppDispatch } from "../hooks";
import { addToCart, calculateTotals } from "../utils/slices/cartSlice";
import { useState } from "react";
import toast from "react-hot-toast";
import { X } from "lucide-react";
interface AddToCartCardProps {
  data: (typeof productsData.products)[0] | undefined;
}
const AddToCartCard: FC<AddToCartCardProps> = ({ data }) => {
  const [quantity, setQuantity] = useState<number>(1);
  const handleDecrement = () => setQuantity((prev) => Math.max(1, prev - 1));
  const handleIncrement = () => setQuantity((prev) => prev + 1);
  const dispatch = useAppDispatch();
  const handleAddToCart = () => {
    if (!data) return;
    dispatch(
      addToCart({
        id: String(data.id),
        quantity: quantity,
        name: data.shortName,
        price: data.price,
      })
    );
    dispatch(calculateTotals());
    toast(
      (t) => (
        <span className="text-nowrap max-w-[500px]  flex flex-row justify-start gap-2 items-center">
          Item '{data.name}' was added to the cart.
          <button
            className="p-1 rounded-sm  flex items-center justify-center"
            onClick={() => toast.dismiss(t.id)}
          >
            <X size={15} />
          </button>
        </span>
      ),
      {
        style: {
          backgroundColor: "#228B22",
          color: "#fff",
          padding: "2px",
          borderRadius: "5px",
          minWidth: "fit-content",
        },
        position: "top-left",
      }
    );
  };
  return (
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
        />
      </div>
      <div className="flex flex-col w-full  gap-5 max-w-[500px] items-center justify-center lg:items-start">
        <p className="tracking-[.5rem] text-action text-sm font-light uppercase">
          new product
        </p>
        <h3 className="text-4xl font-bold uppercase max-w-[240px] w-full">
          {data?.name}
        </h3>
        <p className="w-full text-sm text-black/60 text-center lg:text-start">
          {data?.description}
        </p>
        <p className="font-bold ">$ {data?.price.toLocaleString()}</p>
        <div className="flex gap-2">
          <Incrementor
            quantity={quantity}
            handleDecrement={handleDecrement}
            handleIncrement={handleIncrement}
          />
          <Button variant={"primary"} onClick={handleAddToCart}>
            Add to cart
          </Button>
        </div>
      </div>
    </div>
  );
};

export default AddToCartCard;
