"use client";

import { Barriecito } from "next/font/google";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";

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
          <ul className="flex flex-col border border-gray-100 p-4 rounded-lg md:flex-row md:space-x-8 md:border-0">
            <li>
              <Link
                href="/"
                className="block py-2 rounded hover:bg-gray-50 px-3 md:p-0 md:hover:bg-transparent md:border-0 md:hover:text-blue-700"
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                href="/about"
                className="block py-2 rounded hover:bg-gray-50 px-3 md:p-0 md:hover:bg-transparent md:border-0 md:hover:text-blue-700"
              >
                About
              </Link>
            </li>
            <li>
              <Link
                href="/blog"
                className="block py-2 rounded hover:bg-gray-50 px-3 md:p-0 md:hover:bg-transparent md:border-0 md:hover:text-blue-700"
              >
                Blog
              </Link>
            </li>
            <li>
              <Link
                href="/contact"
                className="block py-2 rounded hover:bg-gray-50 px-3 md:p-0 md:hover:bg-transparent md:border-0 md:hover:text-blue-700"
              >
                Contact
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
