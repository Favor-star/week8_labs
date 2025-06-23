"use client";
import React, { FC } from "react";
import CheckoutInputFields from "./CheckoutInputFields";
import Button from "./button";
import Image from "next/image";
import { SubmitHandler, useForm } from "react-hook-form";
import { checkoutSchema, CheckoutSchemaProps } from "../schema";
import { zodResolver } from "@hookform/resolvers/zod";
import { useAppSelector } from "../hooks";

const CheckoutForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<CheckoutSchemaProps>({
    resolver: zodResolver(checkoutSchema),
  });
  const onSubmit: SubmitHandler<CheckoutSchemaProps> = (data) => {
    console.log(data);
    console.log(errors);
  };
  const { items, shipping, total } = useAppSelector((state) => state.cart);
  const vatValue = (total + shipping) * 0.2;
  return (
    <form
      className="w-full flex flex-col gap-5 md:flex-row mb-20"
      onSubmit={handleSubmit(onSubmit)}
    >
      <CheckoutInputFields register={register} errors={errors} />
      <div className="w-full bg-white rounded-xl max-w-4/12 p-4 space-y-3 h-fit">
        {items.map((item) => (
          <CheckoutElement
            name={item.name}
            price={item.price}
            quantity={item.quantity}
            key={item.id}
          />
        ))}
        <br />
        <br />
        <p className="w-full flex justify-between">
          <span className="uppercase text-black/50">Total</span>
          <span className="font-bold">$ {total.toLocaleString()}</span>
        </p>
        <p className="w-full flex justify-between">
          <span className="uppercase text-black/50">Shipping</span>
          <span className="font-bold">$ {shipping}</span>
        </p>
        <p className="w-full flex justify-between">
          <span className="uppercase text-black/50">VAT (included)</span>
          <span className="font-bold">$ {vatValue.toLocaleString()}</span>
        </p>
        <br />
        <p className="w-full flex justify-between ">
          <span className="uppercase text-black/50">Grand total</span>
          <span className="font-bold">
            $ {(total + vatValue).toLocaleString()}
          </span>
        </p>
        <Button variant={"primary"} className="w-full flex  justify-center">
          Checkout & pay
        </Button>
      </div>
    </form>
  );
};

export default CheckoutForm;

const CheckoutElement: FC<{
  quantity: number;
  price: number;
  name: string;
}> = ({ quantity, price, name }) => {
  return (
    <div className="flex w-full gap-3 items-center justify-center">
      <Image
        src={"/image-earphones-yx1.jpg"}
        alt="Checkout image"
        height={200}
        width={200}
        className="w-16 h-16 aspect-square object-cover rounded-lg"
      />
      <div className="w-full flex justify-between pe-2">
        <div className="inline-block w-full">
          <p className="font-bold mb-1">{name}</p>
          <p className="font-bold text-black/50 text-sm">
            $ {price.toLocaleString()}
          </p>
        </div>
        <p className="inline text-nowrap text-black/50 font-bold">
          X {quantity}
        </p>
      </div>
    </div>
  );
};
