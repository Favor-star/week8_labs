"use client";
import React, { PropsWithChildren, ReactNode } from "react";
import { cn } from "../utils";
import { ClassValue } from "clsx";
import { cva, type VariantProps } from "class-variance-authority";
// type ButtonProps = PropsWithChildren<{ className: ClassValue }>;
const buttonVariants = cva(
  "px-8 py-3 uppercase h-12 text - sm h - fit w - fit font - bold space - x - 1 text - center  align - middle flex items - center justify - center transition - all",
  {
    variants: {
      variant: {
        primary: "bg-action text-white hover:bg-action/70",
        secondary: "bg-black text-white hover:bg-black/70",
        outline:
          "bg-inherit text-black border border-black hover:text-white hover:bg-black",
      },
    },
    defaultVariants: {
      variant: "primary",
    },
  }
);
type ButtonsProp = React.ComponentProps<"button"> &
  VariantProps<typeof buttonVariants>;

const Button = ({ children, className, variant, ...props }: ButtonsProp) => {
  return (
    <button className={cn(buttonVariants({ variant, className }))} {...props}>
      {children}
    </button>
  );
};

export default Button;
