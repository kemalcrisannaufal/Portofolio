import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/autoplay";
import { PROJECTS } from "./project.constants";
import { motion } from "framer-motion";

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
            {item}
          </SwiperSlide>
        ))}
      </Swiper>
    </motion.div>
  );
};

export default ProjectMarquee;
