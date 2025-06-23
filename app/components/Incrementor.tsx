"use client";

import React, { useState } from "react";

const Incrementor = () => {
  const [quantity, setQuantity] = useState<number>(1);
  const handleDecrement = () => setQuantity((prev) => Math.max(1, prev - 1));
  const handleIncrement = () => setQuantity((prev) => prev + 1);
  return (
    <div className="w-fit flex flex-row justify-center gap-0 items-center">
      <button
        className="w-12 h-12 flex items-center justify-center bg-black/5 hover:bg-black/10 text-black hover:text-action transition-all"
        onClick={handleDecrement}
      >
        -
      </button>
      <div className="w-6 px-1  bg-black/5 h-12 flex items-center justify-center text-sm">
        {quantity}
      </div>
      <button
        className="w-12 h-12 flex items-center justify-center bg-black/5 hover:bg-black/10 text-black hover:text-action transition-all"
        onClick={handleIncrement}
      >
        +
      </button>
    </div>
  );
};

export default Incrementor;
