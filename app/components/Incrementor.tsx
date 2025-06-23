"use client";

import React, { useState, FC } from "react";

interface IncrementorProps {
  quantity: number;
  handleDecrement: () => void;
  handleIncrement: () => void;
}
const Incrementor: FC<IncrementorProps> = ({
  quantity,
  handleDecrement,
  handleIncrement,
}) => {
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
