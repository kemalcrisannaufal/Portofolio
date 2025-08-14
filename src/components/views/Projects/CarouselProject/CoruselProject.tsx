import { useRef } from "react";
import { Project } from "@/types/project";
import Image from "next/image";
import Link from "next/link";
import { SiPinboard } from "react-icons/si";
import { CiCircleChevLeft, CiCircleChevRight } from "react-icons/ci";
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
          <SwiperSlide key={`slider-${project.id}`} className="overflow-hidden">
            <Link
              href={`/projects/${project.slug}`}
              className="overflow-hidden"
            >
              <div className="top-3 left-3 z-20 absolute flex items-center bg-teal-600 px-3 py-1 rounded-xl text-white">
                <SiPinboard className="mr-2" />
                <p className="text-xs md:text-sm">Top Featured</p>
              </div>
              <div className="absolute inset-0 bg-gradient-to-b from-black/15 via-black/30 dark:via-black/60 to-black/75 dark:to-black" />
              <Image
                src={project.thumbnail}
                alt={project.name || "Project Thumbnail"}
                width={500}
                height={500}
                className="rounded-lg w-full h-[250px] md:h-[300px] lg:h-[350px] object-cover"
              />

              <div className="bottom-0 left-0 absolute flex flex-col p-5 w-full max-w-[80%] md:max-w-[90%] lg:max-w-full h-max transition-all duration-500 ease-in-out">
                <p className="font-semibold text-white text-xl lg:text-2xl">
                  {project.name}
                </p>
                <p className="text-white text-sm md:text-base line-clamp-2 md:line-clamp-1">
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
                className="text-white hover:text-[var(--color-neon)] transition-colors duration-300 cursor-pointer"
                onClick={() => swiperRef.current?.slidePrev()}
              >
                <CiCircleChevLeft className="text-3xl" />
              </button>
              <button
                aria-label="next project"
                className="text-white hover:text-[var(--color-neon)] transition-colors duration-300 cursor-pointer"
                onClick={() => swiperRef.current?.slideNext()}
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

export default CarouselProject;
