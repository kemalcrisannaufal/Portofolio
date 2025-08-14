import { useRef } from "react";
import { Blog } from "@/types/blog";
import Image from "next/image";
import Link from "next/link";
import { SiPinboard } from "react-icons/si";
import { CiCircleChevLeft, CiCircleChevRight } from "react-icons/ci";
import { Swiper, SwiperSlide } from "swiper/react";
import { Swiper as SwiperClass } from "swiper";
import { Pagination, Autoplay } from "swiper/modules";
import MarkdownText from "@/components/ui/MarkdownText";
import { getEstimatedReadingTime, getShortDescription } from "@/utils/blog";
import { getDate } from "@/utils/date";

import "swiper/css";
import "swiper/css/pagination";

interface Props {
  dataBlogs: Blog[];
}

const CarouselBlog = ({ dataBlogs }: Props) => {
  const swiperRef = useRef<SwiperClass>(null);

  return (
    <div className="hidden md:block relative shadow border-2 border-neutral-300 dark:border-neutral-800 rounded-xl w-full h-[250px] md:h-[350px] lg:h-[450px] overflow-hidden">
      {/* Swiper */}
      <Swiper
        onSwiper={(swiper) => (swiperRef.current = swiper)}
        pagination={{ dynamicBullets: true, clickable: true }}
        spaceBetween={30}
        loop
        modules={[Pagination, Autoplay]}
        autoplay={{ delay: 5000, disableOnInteraction: false }}
        className="w-full h-full"
      >
        {dataBlogs.map((blog) => (
          <SwiperSlide key={`blog-${blog.slug}`}>
            <Link
              href={`/blogs/${blog.slug}`}
              className="block overflow-hidden"
            >
              {/* Badge Featured */}
              <div className="top-3 left-3 z-20 absolute flex items-center bg-cyan-700 px-3 py-1 rounded-xl">
                <SiPinboard className="mr-2 text-white" />
                <p className="text-white text-xs md:text-sm">Top Featured</p>
              </div>
              {/* Background gradient */}
              <div className="absolute inset-0 bg-gradient-to-b from-black/15 via-black/30 dark:via-black/60 to-black/75 dark:to-black" />

              {/* Thumbnail */}
              <Image
                src={blog.thumbnail}
                alt={blog.title || "Blog Thumbnail"}
                width={500}
                height={500}
                className="z-10 w-full h-[250px] md:h-[350px] lg:h-[450px] object-center object-cover"
              />

              {/* Blog Info */}
              <div className="bottom-0 left-0 absolute flex flex-col p-5 w-full max-w-[80%] md:max-w-[90%] lg:max-w-full h-max transition-all duration-500 ease-in-out">
                <p className="font-semibold text-white lg:text-2xl">
                  {blog.title}
                </p>

                <MarkdownText
                  content={getShortDescription(blog.content, 50)}
                  classname="mt-3 text-justify line-clamp-2 text-white"
                />

                <div className="flex flex-wrap items-center gap-5 mt-2">
                  {blog.category.map((item, index) => (
                    <span
                      key={index}
                      className="bg-neutral-600/50 px-3 py-1 rounded text-white text-xs"
                    >
                      {item}
                    </span>
                  ))}
                  <span className="bg-neutral-600/50 px-3 py-1 rounded text-white text-xs">
                    {getEstimatedReadingTime(blog.content)} Min Read
                  </span>
                  <span className="bg-neutral-600/50 px-3 py-1 rounded text-white text-xs">
                    {getDate(new Date(blog.createdAt))}
                  </span>
                </div>
              </div>
            </Link>

            {/* Tombol Navigasi */}
            <div className="right-3 bottom-3 z-30 absolute flex justify-center items-center gap-1">
              <button
                aria-label="previous blog"
                onClick={() => swiperRef.current?.slidePrev()}
                className="text-white hover:text-[var(--color-neon)] transition-colors duration-300 cursor-pointer"
              >
                <CiCircleChevLeft className="text-3xl" />
              </button>
              <button
                aria-label="next blog"
                onClick={() => swiperRef.current?.slideNext()}
                className="text-white hover:text-[var(--color-neon)] transition-colors duration-300 cursor-pointer"
              >
                <CiCircleChevRight className="text-3xl" />
              </button>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default CarouselBlog;
