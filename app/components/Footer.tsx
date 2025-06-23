"use client";
import { usePathname } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { cn } from "../utils";
import { TvIcon } from "lucide-react";

const Footer = () => {
  const pathname = usePathname();
  return (
    <footer className="w-full bg-black text-white py-4 flex items-center justify-center">
      <section className="w-full max-w-screen-xl px-4">
        <div className="block text-action h-[4px] w-28 bg-action -mt-4 translate-8/12 md:translate-0"></div>
        <nav className="w-full flex flex-col md:flex-row gap-y-6 justify-between items-center md:justify-between max-w-screen-xl py-8 ">
          <Image
            src={"/logo.svg"}
            alt="logo"
            width={143}
            height={25}
            className="aspect-[144/25] object-cover max-h-[25px] h-fit max-w-[144px] w-fit"
          />
          <ul className="flex gap-10 flex-col md:flex-row items-center md:items-start">
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
        </nav>
        <div className="w-full text-white/75 flex flex-col lg:flex-row gap-5 space-y-5">
          <p className="w-full flex-1">
            Audiophile is an all in one stop to fulfill your audio needs. We're
            a small team of music lovers and sound specialists who are devoted
            to helping you get the most out of personal audio. Come and visit
            our demo facility - we’re open 7 days a week.
          </p>
          <div className="flex flex-row gap-3 flex-1 items-end justify-end w-full ">
            <TvIcon size={20} />
            <TvIcon size={20} />
            <TvIcon size={20} />
          </div>
        </div>
        <p className="text-white/75 w-full">
          Copyright {new Date().getFullYear()}. All rights reserved
        </p>
      </section>
    </footer>
  );
};

export default Footer;
