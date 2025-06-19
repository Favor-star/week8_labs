"use client";
import { ShoppingCart } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "../utils";

const Navbar = () => {
  const pathname = usePathname();
  return (
    <section className="bg-black text-white  w-full flex justify-center items-center">
      <nav className="w-full flex justify-between max-w-screen-xl py-8 border-b border-b-white/75">
        <Image
          src={"/logo.svg"}
          alt="logo"
          width={143}
          height={25}
          className="aspect-[144/25] object-cover max-h-[25px] h-fit max-w-[144px] w-fit"
        />
        <ul className="flex gap-10">
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
            className={cn("navLink", pathname === "/speakers" && "text-action")}
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
        <button className="w-fit outline-none rounded-full">
          <ShoppingCart size={30} strokeWidth={1.5} />
        </button>
      </nav>
    </section>
  );
};

export default Navbar;
