"use client";

import { useRef } from "react";
import { Project } from "@/types/project";
import Image from "next/image";
import Link from "next/link";
import { SiPinboard } from "react-icons/si";
import { CiCircleChevLeft, CiCircleChevRight } from "react-icons/ci";
import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import { Swiper as SwiperClass } from "swiper";
import { Pagination, Autoplay } from "swiper/modules";
import { TECH_STACK } from "@/constants/list.constanst";

import "swiper/css";
import "swiper/css/pagination";

interface Proptypes {
  dataProjects: Project[];
}

const CarouselProject = ({ dataProjects }: Proptypes) => {
  const swiperRef = useRef<SwiperClass>(null);

  return (
    <div className="relative shadow rounded-xl w-full h-[250px] md:h-[300px] lg:h-[350px] overflow-hidden">
      <div className="top-3 left-3 z-20 absolute flex items-center bg-teal-700 dark:bg-cyan-700 px-3 py-1 rounded-lg">
        <SiPinboard className="mr-2 text-white" />
        <p className="text-white text-xs md:text-sm">Top Featured</p>
      </div>

      <div
        className="top-3 right-3 z-20 absolute bg-neutral-300 rounded-full w-6 md:w-10 h-2 md:h-3 overflow-hidden"
        aria-label="progress bar"
      >
        <motion.div
          key={dataProjects.length}
          initial={{ width: 0 }}
          animate={{ width: "100%" }}
          transition={{ duration: 5, ease: "linear" }}
          className="bg-teal-700 dark:bg-cyan-700 h-full"
        />
      </div>

      <Swiper
        onSwiper={(swiper) => {
          swiperRef.current = swiper;
        }}
        pagination={{ dynamicBullets: true, clickable: true }}
        spaceBetween={30}
        loop
        modules={[Pagination, Autoplay]}
        className="w-full h-full"
        autoplay={{ delay: 5000, disableOnInteraction: false }}
      >
        {dataProjects.map((project) => (
          <SwiperSlide key={`slider-${project.id}`}>
            <Link
              href={`/projects/${project.slug}`}
              className="block overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-b from-black/15 via-black/60 to-black" />

              <Image
                src={project.thumbnail}
                alt={project.name || "Project Thumbnail"}
                width={500}
                height={500}
                className="rounded-lg w-full h-[250px] md:h-[300px] lg:h-[350px] object-cover"
              />

              <div className="bottom-0 left-0 absolute flex flex-col p-5 w-full max-w-[80%] md:max-w-[90%] lg:max-w-full h-max transition-all duration-500 ease-in-out">
                <p className="font-libre font-semibold text-white lg:text-2xl">
                  {project.name}
                </p>
                <p className="font-libre text-white lg:text-md text-xs line-clamp-1">
                  {project.description}
                </p>

                <div className="hidden lg:flex items-center gap-2 mt-2">
                  {project.techStacks.map((tech, index) => {
                    const techStack = TECH_STACK.find(
                      (item) => item.name === tech
                    );
                    return (
                      <div
                        key={index}
                        className="bg-neutral-600/50 px-2 py-1 rounded-full font-thin text-white"
                      >
                        {techStack && <techStack.icon />}
                      </div>
                    );
                  })}
                </div>
              </div>
            </Link>

            <div className="right-4 bottom-3 z-30 absolute flex justify-center items-center gap-1">
              <button
                aria-label="previous project"
                className="cursor-pointer"
                onClick={() => swiperRef.current?.slidePrev()}
              >
                <CiCircleChevLeft className="text-white text-3xl" />
              </button>
              <button
                aria-label="next project"
                className="cursor-pointer"
                onClick={() => swiperRef.current?.slideNext()}
              >
                <CiCircleChevRight className="text-white text-3xl" />
              </button>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default CarouselProject;
