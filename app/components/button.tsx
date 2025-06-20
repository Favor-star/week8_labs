"use client";
import React, { PropsWithChildren, ReactNode } from "react";
import { cn } from "../utils";
import { ClassValue } from "clsx";

type ButtonProps = PropsWithChildren<{ className: ClassValue }>;

const Button: React.FC<ButtonProps> = ({ children, className }) => {
  return (
    <button
      className={cn(
        "px-8 py-3 uppercase text-sm h-fit w-fit font-bold space-x-1 text-center  align-middle flex items-center justify-center",
        className
      )}
    >
      {children}
    </button>
  );
};

export default Button;
