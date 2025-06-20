import React from "react";
import Input from "../components/Input";
import Image from "next/image";
import Button from "../components/button";
const page = () => {
  return (
    <section className="w-full max-w-screen-xl px-4 justify-self-center">
      <p className="w-full py-10 text-black/50 text-lg px-4">Go back</p>
      <section className="w-full flex flex-col gap-5 md:flex-row mb-20">
        <div className="w-full bg-white rounded-xl p-4 md:p-6 space-y-4">
          <p className="text-xl md:text-3xl uppercase font-bold mb-5">
            checkout
          </p>
          <p className="uppercase font-bold tracking-widest text-action">
            billing details
          </p>
          <div className="w-full flex flex-col sm:flex-row gap-4">
            <Input />
            <Input />
          </div>
          <p className="uppercase font-bold tracking-widest text-action">
            shipping info
          </p>
          <Input />
          <div className="w-full flex flex-col sm:flex-row gap-4">
            <Input />
            <Input />
          </div>
          <Input />
          <p className="uppercase font-bold tracking-widest text-action">
            payment details
          </p>
          <RadioGroup />
          <div className="w-full flex flex-col sm:flex-row gap-4">
            <Input />
            <Input />
          </div>
        </div>
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
          <Button className="text-white bg-action w-full">
            Checkout & pay
          </Button>
        </div>
      </section>
    </section>
  );
};

export default page;

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
const RadioGroup = () => {
  return (
    <div className="w-full flex flex-col md:flex-row gap-4">
      <p className="text-sm font-bold w-full">Payment method</p>
      <div className="w-full flex flex-col justify-start gap-4 items-end">
        <label
          htmlFor="e-money"
          className="flex p-4 border border-black/50 justify-start items-center gap-4 rounded-lg w-full"
        >
          <input
            type="radio"
            name="paymentMode"
            id="e-money"
            className="accent-action"
          />
          e-money
        </label>
        <label
          htmlFor="cashOn"
          className="flex p-4 border border-black/50 justify-start items-center gap-4 rounded-lg w-full "
        >
          <input
            type="radio"
            name="paymentMode"
            id="cashOn"
            className="accent-action"
          />
          cash-on delivery
        </label>
      </div>
    </div>
  );
};
