"use client";
import { Check } from "lucide-react";
import React, { FC, useState } from "react";
import { CheckoutElement } from "./CheckoutForm";
import Button from "./button";
import { useAppSelector } from "../hooks";
import { cn } from "../utils";
import { useRouter } from "next/navigation";

const SuccessPopup: FC<{ open: boolean; handleClosePopup?: () => void }> = ({
  open,
  handleClosePopup,
}) => {
  const router = useRouter();
  const { items, total, shipping } = useAppSelector((state) => state.cart);
  const [boughtItems, setBoughtItems] = useState(items.slice(0, 1));
  const handleShowMore = () => {
    boughtItems.length === 1
      ? setBoughtItems(items.slice(0))
      : setBoughtItems(items.slice(0, 1));
  };
  return (
    <section
      className={cn(
        "fixed top-0 right-0 w-screen h-screen bg-black/30 z-[99] flex items-center justify-start flex-col pt-14 transition-all duration-500 overflow-y-scroll",
        open ? "scale-100 opacity-100" : "scale-0 opacity-0"
      )}
      onClick={handleClosePopup}
    >
      <div
        className="flex flex-col w-full max-w-[600px] bg-white p-10 rounded-lg gap-3"
        onClick={(e) => e.stopPropagation()}
      >
        <Check
          size={50}
          strokeWidth={1.4}
          className="p-2 bg-action rounded-full text-white"
        />
        <p className="text-4xl font-bold uppercase">
          thank you <br /> for your order
        </p>
        <p className="text-black/50">
          You will receive a confirmation email shortly.
        </p>
        <div className="flex gap-0 rounded-lg w-full overflow-hidden ">
          <div className="flex flex-col p-5 bg-gray gap-1 w-full">
            {boughtItems.map((item) => (
              <CheckoutElement
                name={item.name}
                quantity={item.quantity}
                price={item.price}
                key={item.id}
              />
            ))}
            {items.length > 1 && (
              <button
                className="text-sm text-black/50 hover:underline transition-all"
                onClick={handleShowMore}
              >
                {boughtItems.length === 1
                  ? `and ${items.length - 1} other item(s)`
                  : "Show less"}
              </button>
            )}
          </div>
          <div className="bg-black space-y-3 p-5 w-full">
            <p className="font-bold text-white/50 uppercase">grand total</p>
            <p className="font-bold text-white uppercase">
              $ {total + (total + shipping) * 0.2}
            </p>
          </div>
        </div>
        <Button
          className="w-full flex justify-center mt-5"
          onClick={() => {
            handleClosePopup && handleClosePopup();
            router.push("/");
          }}
        >
          Back To home
        </Button>
      </div>
    </section>
  );
};

export default SuccessPopup;
