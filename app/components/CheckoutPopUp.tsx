"use client";
import { FC, useState } from "react";
import { cn } from "../utils";
import Image from "next/image";
import Button from "./button";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useAppDispatch, useAppSelector } from "../hooks";
import { ShoppingCart } from "lucide-react";
import { clearCart, updateQuantity } from "../utils/slices/cartSlice";

interface CheckoutPopUpProps {
  open: boolean;
  handleClosePopup: () => void;
}
const CheckoutPopUp: FC<CheckoutPopUpProps> = ({ open, handleClosePopup }) => {
  const [quantity, setQuantity] = useState<number>(1);
  const dispatch = useAppDispatch();

  const router = useRouter();
  const handleIncrement = () => {
    setQuantity((prev) => prev + 1);
  };
  const handleDecrement = () => setQuantity((prev) => Math.max(1, prev - 1));
  const handleNavigate = () => {
    handleClosePopup();
    router.push("/checkout");
  };
  const handleRemoveAll = () => {
    dispatch(clearCart());
  };
  const { items, total } = useAppSelector((state) => state.cart);

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
        {items.length !== 0 && (
          <>
            <div className="flex w-full justify-between">
              <p className="uppercase text-lg font-bold">Cart(1)</p>
              <button
                className="underline text-black/60"
                onClick={handleRemoveAll}
              >
                Remove all
              </button>
            </div>
            {items.map((item) => (
              <CartItem
                handleDecrement={handleDecrement}
                handleIncrement={handleIncrement}
                quantity={item.quantity}
                name={item.name}
                price={item.price}
                key={item.id}
              />
            ))}
            <p className="uppercase flex items-center justify-between w-full mt-10">
              <span className="text-black/50">total</span>
              <span className="font-bold">$ {total}</span>
            </p>
            <Button
              className="w-full items-center justify-center"
              onClick={handleNavigate}
            >
              checkout
            </Button>
          </>
        )}
        {items.length === 0 && (
          <div className="w-full flex flex-col items-center">
            <p className="font-bold text-lg">Your cart list is empty</p>
            <ShoppingCart size={120} strokeWidth={1.2} />
          </div>
        )}
      </div>
    </section>
  );
};

export default CheckoutPopUp;

interface CartItemProps {
  handleIncrement: () => void;
  handleDecrement: () => void;
  name: string;
  price: number;
  quantity: number;
}
const CartItem: FC<CartItemProps> = ({
  handleDecrement,
  handleIncrement,
  name,
  price,
  quantity,
}) => {
  return (
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
          <p className="font-bold text-sm uppercase">{name}</p>
          <p className="text-black/60">$ {price.toLocaleString()}</p>
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
  );
};
