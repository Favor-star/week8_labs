import React from "react";

const Input = () => {
  return (
    <fieldset className="w-full space-y-1">
      <div className="w-full flex justify-between items-end gap-2 px-1">
        <label htmlFor="" className="font-bold text-sm">
          Email address
        </label>
        <p className="inline text-xs text-red">this is the error in the hood</p>
      </div>
      <input
        type="text"
        name="input"
        id="input"
        placeholder="text@favor.com"
        className="w-full ps-4 py-4 rounded-lg block border border-black/50 focus:outline-action focus:outline-2 transition-all font-medium placeholder:font-medium"
      />
    </fieldset>
  );
};

export default Input;
