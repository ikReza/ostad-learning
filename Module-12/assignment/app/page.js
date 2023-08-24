"use client";

import Image from "next/image";
import blogData from "../_data/blogData.json";
import { Swiper, SwiperSlide } from "swiper/react";
import { AiOutlineDoubleRight } from "react-icons/ai";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

// import required modules
import { Autoplay, Navigation } from "swiper/modules";
import Link from "next/link";

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

      <section className="flex w-full">
        <div className="max-w-md basis-4/5 rounded shadow-lg overflow-hidden text-justify mx-auto my-5">
          <Swiper
            slidesPerView={1}
            navigation={true}
            loop={true}
            autoplay={{
              delay: 2500,
              disableOnInteraction: false,
            }}
            modules={[Autoplay, Navigation]}
            className="mySwiper w-full"
          >
            {blogData.map((post) => (
              <SwiperSlide key={post.id}>
                <Image
                  src={post.img}
                  alt="yoga"
                  width={0}
                  height={0}
                  sizes="100vw"
                  className="w-full"
                  priority
                />
                {/* AiOutlineDoubleRight */}
                <div className="px-6 py-4">
                  <h3 className="font-bold text-lg mb-2">{post.title}</h3>
                  <p>{post.content.split(" ").slice(0, 25).join(" ")} ...</p>
                  <Link
                    href={`/blog/${post.id}`}
                    className="flex items-center justify-end gap-2 text-xs text-slate-500 italic mt-4"
                  >
                    Read more <AiOutlineDoubleRight />
                  </Link>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        <div className="basis-1/5 shadow-2xl bg-slate-100 rounded-xl px-4 my-5">
          <h3 className="text-lg font-medium my-5">Top Fans</h3>
          <div className="flex items-center space-x-4 mb-4">
            <div class="relative w-10 h-10 overflow-hidden bg-gray-100 rounded-full dark:bg-gray-600">
              <svg
                class="absolute w-12 h-12 text-gray-400 -left-1"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z"
                  clip-rule="evenodd"
                ></path>
              </svg>
            </div>
            <h5>John Doe</h5>
          </div>
          <div className="flex items-center space-x-4">
            <div class="relative w-10 h-10 overflow-hidden bg-gray-100 rounded-full dark:bg-gray-600">
              <svg
                class="absolute w-12 h-12 text-gray-400 -left-1"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z"
                  clip-rule="evenodd"
                ></path>
              </svg>
            </div>
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
