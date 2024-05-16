"use client";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";

import Link from "next/link";

export const Navbar: React.FC = () => {
  const pathname = usePathname();
  return (
    <nav className="text-white bg-blue-500 top-0 left-0 w-full flex justify-between items-center px-5 py-2">
      <Link href="/" className="font-bold text-xl">
        TRAVELLO
      </Link>
      <div className="hidden md:flex space-x-4">
        <Link
          href="/"
          className={cn({ "underline underline-offset-2": pathname === "/" })}
        >
          Home
        </Link>
        <Link
          href="/tours"
          className={cn({
            "underline underline-offset-2": pathname === "/tours",
          })}
        >
          Tours
        </Link>
        <Link
          href="/about-us"
          className={cn({
            "underline underline-offset-2": pathname === "/about-us",
          })}
        >
          About Us
        </Link>
        <Link
          href="/contact-us"
          className={cn({
            "underline underline-offset-2": pathname === "/contact-us",
          })}
        >
          Contact Us
        </Link>
      </div>
      <div>
        <Link href="#" className=" mr-4">
          Sign In
        </Link>
        <Link href="#" className="">
          Sign Up
        </Link>
      </div>
    </nav>
  );
};
