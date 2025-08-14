import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/autoplay";
import { PROJECTS } from "./project.constants";
import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import cn from "@/utils/cn";

const ProjectBox = ({
  className,
  href,
  image,
  name,
  width = 50,
  height = 50,
}: {
  className?: string;
  href: string;
  image?: string;
  name: string;
  width?: number;
  height?: number;
}) => {
  return (
    <Link
      href={href}
      className="flex items-center gap-3 h-[50px] font-bold text-neutral-600 hover:text-black dark:hover:text-white dark:text-neutral-300 text-2xl whitespace-nowrap transition-colors duration-300"
      key={"yatta-1"}
    >
      {image && (
        <Image
          src={`/assets/images/projects/${image}`}
          alt={`logo-${name}`}
          width={width}
          height={height}
          className={cn("dark:filter-none invert filter", className)}
        />
      )}
      {name}
    </Link>
  );
};

const ProjectMarquee = () => {
  const MARQUEE_PROJECTS = [...PROJECTS, ...PROJECTS];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.3, delay: 0.5 }}
      className="mt-5 xl:mt-0 py-5 rounded"
    >
      <Swiper
        modules={[Autoplay]}
        slidesPerView="auto"
        loop={true}
        loopAdditionalSlides={MARQUEE_PROJECTS.length}
        autoplay={{
          delay: 1,
          disableOnInteraction: false,
          pauseOnMouseEnter: true,
        }}
        speed={5000}
        allowTouchMove={false}
        freeMode={true}
        resistance={false}
        resistanceRatio={0}
        spaceBetween={20}
        className="w-full"
      >
        {MARQUEE_PROJECTS.map((item, index) => (
          <SwiperSlide key={index} className="px-4 !w-auto">
            <ProjectBox
              key={`${item.name}-${index}`}
              className={item.className}
              href={item.href}
              image={item.image}
              name={item.name}
              width={item.width}
              height={item.height}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </motion.div>
  );
};

export default ProjectMarquee;
