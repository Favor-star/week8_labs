"use client";
import React from "react";
import CheckoutInputFields from "./CheckoutInputFields";
import Button from "./button";
import Image from "next/image";
import { SubmitHandler, useForm } from "react-hook-form";
import { checkoutSchema, CheckoutSchemaProps } from "../schema";
import { zodResolver } from "@hookform/resolvers/zod";

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
  return (
    <form
      className="w-full flex flex-col gap-5 md:flex-row mb-20"
      onSubmit={handleSubmit(onSubmit)}
    >
      <CheckoutInputFields register={register} errors={errors} />
      <div className="w-full bg-white rounded-xl max-w-4/12 p-4 space-y-3 h-fit">
        <CheckoutElement />
        <CheckoutElement />
        <br />
        <br />
        <p className="w-full flex justify-between">
          <span className="uppercase text-black/50">Total</span>
          <span className="font-bold">$ 1,554</span>
        </p>
        <p className="w-full flex justify-between">
          <span className="uppercase text-black/50">Shipping</span>
          <span className="font-bold">$ 1,554</span>
        </p>
        <p className="w-full flex justify-between">
          <span className="uppercase text-black/50">VAT (included)</span>
          <span className="font-bold">$ 1,554</span>
        </p>
        <br />
        <p className="w-full flex justify-between ">
          <span className="uppercase text-black/50">Grand total</span>
          <span className="font-bold">$ 1,554</span>
        </p>
        <Button variant={"primary"}>Checkout & pay</Button>
      </div>
    </form>
  );
};

export default CheckoutForm;

const CheckoutElement = () => {
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
          <p className="font-bold mb-1">YX1</p>
          <p className="font-bold text-black/50 text-sm">$500</p>
        </div>
        <p className="inline text-nowrap text-black/50 font-bold">X 1</p>
      </div>
    </div>
  );
};
