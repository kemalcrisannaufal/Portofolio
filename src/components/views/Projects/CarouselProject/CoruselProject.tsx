import { Project } from "@/types/project";
import Image from "next/image";
import { CiCircleChevLeft, CiCircleChevRight } from "react-icons/ci";
import useCarouselProject from "./useCarouselProject";
import { TECH_STACK } from "@/constants/list.constanst";
import Link from "next/link";
import { useEffect } from "react";
import { SiPinboard } from "react-icons/si";
import { motion, AnimatePresence } from "framer-motion";

interface Proptypes {
  dataProjects: Project[];
}

const CarouselProject = (props: Proptypes) => {
  const { dataProjects } = props;
  const { idx, setPrev, setNext, direction } = useCarouselProject();

  const duration = 5000;

  useEffect(() => {
    const timeout = setTimeout(() => {
      setNext(dataProjects.length);
    }, duration);
    return () => clearTimeout(timeout);
  }, [dataProjects.length, idx, setNext]);

  return (
    <div className="relative shadow border border-neutral-300 rounded-xl w-full h-[200px] md:h-[300px] lg:h-[350px] overflow-hidden">
      <div className="top-3 left-3 z-20 absolute flex items-center bg-teal-700 dark:bg-cyan-700 px-3 py-1 rounded-xl">
        <SiPinboard className="mr-2 text-white" />
        <p className="text-white text-sm">Top Featured</p>
      </div>

      <div
        className="top-3 right-3 z-20 absolute bg-neutral-300 rounded-full w-6 md:w-10 h-2 md:h-3 overflow-hidden 0"
        aria-label="progress bar"
      >
        <motion.div
          key={idx}
          initial={{ width: 0 }}
          animate={{ width: "100%" }}
          transition={{ duration: 5, ease: "linear" }}
          className="bg-teal-700 dark:bg-cyan-700 h-full"
        />
      </div>

      <Link
        href={`/projects/${dataProjects[idx].slug}`}
        className="block rounded-xl overflow-hidden"
      >
        <AnimatePresence mode="popLayout">
          <motion.div
            key={dataProjects[idx].slug}
            initial={{ opacity: 0, x: direction === "left" ? -50 : 50 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: direction === "left" ? 50 : -50 }}
            transition={{ duration: 0.5 }}
          >
            <div
              className="absolute inset-0 bg-gradient-to-b from-black/15 via-black/60 to-black rounded-xl"
              aria-label="background gradient"
            />
            <Image
              src={dataProjects[idx].thumbnail}
              alt={dataProjects[idx].name || "Project Thumbnail"}
              width={500}
              height={500}
              className="w-full h-[200px] md:h-[300px] lg:h-[350px] object-cover"
            />
            <div className="bottom-0 left-0 absolute flex flex-col p-5 w-full max-w-[80%] md:max-w-[90%] lg:max-w-full h-max transition-all duration-500 ease-in-out">
              <p className="font-libre font-semibold text-white lg:text-2xl">
                {dataProjects[idx].name}
              </p>
              <p className="font-libre text-white lg:text-md text-xs line-clamp-1">
                {dataProjects[idx].description}
              </p>
              <div className="hidden lg:flex items-center gap-2 mt-2">
                {dataProjects[idx].techStacks.map((tech, index) => {
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
          </motion.div>
        </AnimatePresence>
      </Link>

      <div className="right-4 bottom-3 absolute flex justify-center items-center gap-1">
        <button
          aria-label="previous project"
          className="cursor-pointer"
          onClick={() => setPrev(dataProjects.length)}
        >
          <CiCircleChevLeft className="text-white text-3xl" />
        </button>

        <button
          aria-label="next project"
          className="cursor-pointer"
          onClick={() => setNext(dataProjects.length)}
        >
          <CiCircleChevRight className="text-white text-3xl" />
        </button>
      </div>
    </div>
  );
};
export default CarouselProject;
