"use client";
import React from "react";
import Input from "./Input";
import { FieldErrors, UseFormRegister } from "react-hook-form";
import { FieldValues } from "react-hook-form";
import { CheckoutSchemaProps } from "../schema";

interface CheckoutInputFieldsProps {
  register: UseFormRegister<CheckoutSchemaProps>;
  errors: FieldErrors<CheckoutSchemaProps>;
}
const CheckoutInputFields: React.FC<CheckoutInputFieldsProps> = ({
  register,
  errors,
}) => {
  return (
    <div className="w-full bg-white rounded-xl p-4 md:p-6 space-y-4">
      <p className="text-xl md:text-3xl uppercase font-bold mb-5">checkout</p>
      <p className="uppercase font-bold tracking-widest text-action">
        billing details
      </p>
      <div className="w-full grid grid-cols-1 sm:grid-cols-2 gap-4">
        <Input
          label="Name"
          autoComplete="name"
          placeholder="Favor Eliab"
          {...register("name")}
          errorMessage={errors.name && errors.name.message}
        />
        <Input
          label="Email address"
          type="email"
          autoComplete="email"
          placeholder="favor@gmail.com"
          {...register("email")}
          errorMessage={errors.email && errors.email.message}
        />
        <Input
          label="Phone number"
          autoComplete="tel"
          placeholder="+250 787 922 900"
          {...register("phoneNumber")}
          errorMessage={errors.phoneNumber && errors.phoneNumber.message}
        />
      </div>

      <p className="uppercase font-bold tracking-widest text-action">
        shipping info
      </p>
      <Input
        label="Your address"
        placeholder="1137 William avenue"
        autoComplete="shipping address-level1"
        {...register("address")}
        errorMessage={errors.address && errors.address.message}
      />

      <div className="w-full flex flex-col sm:flex-row gap-4">
        <Input
          label="Zip Code"
          placeholder="10001"
          autoComplete="zip-code"
          {...register("zipCode")}
          errorMessage={errors.zipCode && errors.zipCode.message}
        />
        <Input
          label="City"
          placeholder="Kigali"
          autoComplete="City"
          {...register("city")}
          errorMessage={errors.city && errors.city.message}
        />
      </div>
      <Input
        label="Country"
        placeholder="Rwanda"
        autoComplete="country-name"
        {...register("country")}
        errorMessage={errors.country && errors.country.message}
      />
      <p className="uppercase font-bold tracking-widest text-action">
        payment details
      </p>
      <RadioGroup />
      <div className="w-full flex flex-col sm:flex-row gap-4">
        <Input
          label="e-Money number"
          placeholder="238521993"
          autoComplete="cc-number"
          {...register("eMoney")}
          errorMessage={errors.eMoney && errors.eMoney.message}
        />
        <Input
          label="e-Money PIN"
          placeholder="9831"
          autoComplete="number"
          {...register("pin")}
          errorMessage={errors.pin && errors.pin.message}
        />
      </div>
    </div>
  );
};

export default CheckoutInputFields;

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
