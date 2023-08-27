"use client";

import Image from "next/image";
import ImgNavigation from "./components/homeComponents/ImgNavigation";
import FanAvatar from "./components/homeComponents/FanAvatar";

const Home = () => {
  return (
    <main className="h-full bg-white">
      <section className="w-full mx-auto">
        <Image
          className="rounded-full border-4 border-black dark:border-slate-500 drop-shadow-xl mx-auto mt-8 mb-4"
          src="/ash.png"
          alt="Ash"
          width={120}
          height={120}
          priority={true}
        />
        <p className="mx-auto mt-4 text-2xl px-6 text-center">
          Hi 👋,&nbsp;
          <span className="whitespace-nowrap block text-3xl">
            I am <span className="font-bold text-amber-600">Ash Ketchum</span>
          </span>
          <span className="whitespace-nowrap block">Front-end Developer</span>
        </p>
      </section>

      <section className="grid max-md:grid-rows-2 md:grid-cols-5 w-full border">
        <div className="max-w-md max-md:row-span-1 md:col-span-4 rounded shadow-lg overflow-hidden mx-auto my-5 border">
          <ImgNavigation />
        </div>

        <div className="max-md:w-3/5 max-md:row-span-1 md:cols-span-1 shadow-2xl bg-slate-100 rounded-xl p-4 my-5 mx-auto border">
          <h3 className="text-lg font-medium my-5">Top Fans</h3>
          <div className="flex items-center space-x-4 mb-4">
            <FanAvatar />
            <h5>Jane Doe</h5>
          </div>
          <div className="flex items-center space-x-4">
            <FanAvatar />
            <h5>William Smith</h5>
          </div>
        </div>
      </section>

      <section>
        <div class="w-full p-4">
          <h2 class="text-2xl font-bold tracking-tight">
            Subscribe to our newsletter.
          </h2>
          <p class="mt-4 text-lg leading-8 text-gray-500">
            Nostrud amet eu ullamco nisi aute in ad minim nostrud adipisicing
            velit quis. Duis tempor incididunt dolore.
          </p>
          <div class="mt-6 flex w-full gap-x-4">
            <label for="email-address" class="sr-only">
              Email address
            </label>
            <input
              id="email-address"
              name="email"
              type="email"
              autocomplete="email"
              required
              class="min-w-0 flex-auto rounded-md border-0 bg-slate-200 px-3.5 py-2 shadow-sm ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset focus:ring-indigo-500 sm:text-sm sm:leading-6"
              placeholder="Enter your email"
            />
            <button
              type="submit"
              class="flex-none rounded-md bg-indigo-500 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500"
            >
              Subscribe
            </button>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Home;
