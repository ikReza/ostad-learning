"use client";

import { Barriecito } from "next/font/google";
import Image from "next/image";
import { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import Navlink from "./Navlink";

const inter = Barriecito({
  weight: "400",
  subsets: ["latin"],
});

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <header className="w-full z-10 sticky top-0 drop-shadow-xl bg-slate-300 px-4">
      <nav className="p-4 md:p-2 flex flex-wrap items-center justify-between">
        <section className="flex items-center">
          <Image
            src="/logo.svg"
            alt="Logo"
            width={30}
            height={30}
            className="mr-4"
          />
          <h1
            className={`${inter.className} text-2xl tracking-widest text-red-500`}
          >
            Ash'<span className="text-sm text-black">s daily blog</span>
          </h1>
        </section>
        <button
          type="button"
          class="inline-flex items-center justify-center p-2 text-xl text-gray-800 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200"
          onClick={() => setOpen(!open)}
        >
          <GiHamburgerMenu />
        </button>

        <div
          className={`${
            open ? "" : "hidden"
          } w-full md:block md:w-auto mt-4 md:mt-0`}
        >
          <Navlink />
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
