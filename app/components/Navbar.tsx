"use client";
import { MenuIcon, ShoppingCart } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "../utils";
import CheckoutPopUp from "./CheckoutPopUp";
import { SyntheticEvent, useState } from "react";
import { useAppSelector } from "../hooks";

const Navbar = () => {
  const pathname = usePathname();
  const [open, setOpen] = useState<boolean>(false);
  const handleClosePopup = () => setOpen(false);
  const { items } = useAppSelector((state) => state.cart);
  return (
    <>
      <section className="bg-black text-white  w-full flex justify-center items-center relative z-50">
        <nav className="w-full flex justify-between max-w-screen-xl px-4 py-8 border-b border-b-white/75">
          <div className="inline-flex gap-3">
            <MenuIcon className="md:hidden text-white " size={24} />
            <Link href={"/"}>
              <Image
                src={"/logo.svg"}
                alt="logo"
                width={143}
                height={25}
                className="aspect-[144/25] object-cover max-h-[25px] h-fit max-w-[144px] w-fit"
              />
            </Link>
          </div>
          <ul className="md:flex gap-10 hidden ">
            <li className={cn("navLink", pathname === "/" && "text-action")}>
              <Link href={"/"}> Home</Link>
            </li>
            <li
              className={cn(
                "navLink",
                pathname === "/headphones" && "text-action"
              )}
            >
              <Link href={"/headphones"}> Headphones</Link>
            </li>
            <li
              className={cn(
                "navLink",
                pathname === "/speakers" && "text-action"
              )}
            >
              <Link href={"/speakers"}> Speakers</Link>
            </li>
            <li
              className={cn(
                "navLink",
                pathname === "/earphones" && "text-action"
              )}
            >
              <Link href={"/earphones"}>earphones</Link>
            </li>
          </ul>
          <button
            className="w-fit outline-none rounded-full relative"
            onClick={() => setOpen(true)}
          >
            <ShoppingCart size={30} strokeWidth={1.5} />
            {items.length !== 0 && (
              <div className="absolute -top-3 -right-3 aspect-square w-6 h-6 text-sm flex items-center justify-center bg-action text-white p-1 rounded-full">
                {items.length}
              </div>
            )}
          </button>
        </nav>
      </section>
      <CheckoutPopUp open={open} handleClosePopup={handleClosePopup} />
    </>
  );
};

export default Navbar;
