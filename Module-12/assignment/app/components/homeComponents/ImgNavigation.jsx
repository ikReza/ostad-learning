import Image from "next/image";
import blogData from "@/_data/blogData.json";
import { Swiper, SwiperSlide } from "swiper/react";
import { AiOutlineDoubleRight } from "react-icons/ai";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

// import required modules
import { Autoplay, Navigation } from "swiper/modules";
import Link from "next/link";

const ImgNavigation = () => {
  return (
    <Swiper
      slidesPerView={1}
      navigation={true}
      loop={true}
      autoplay={{
        delay: 2500,
        disableOnInteraction: false,
      }}
      modules={[Autoplay, Navigation]}
      className="mySwiper w-screen"
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
  );
};

export default ImgNavigation;
