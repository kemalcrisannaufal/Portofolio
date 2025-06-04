import Image from "next/image";
import { CiCircleChevLeft, CiCircleChevRight } from "react-icons/ci";
import useCarouselBlog from "./useCarouselBlog";
import Link from "next/link";
import { useEffect } from "react";
import { SiPinboard } from "react-icons/si";
import { motion, AnimatePresence } from "framer-motion";
import { Blog } from "@/types/blog";
import MarkdownText from "@/components/ui/MarkdownText";
import { getEstimatedReadingTime, getShortDescription } from "@/utils/blog";
import { getDate } from "@/utils/date";

interface Proptypes {
  dataBlogs: Blog[];
}

const CarouselBlog = (props: Proptypes) => {
  const { dataBlogs } = props;
  const { idx, setPrev, setNext, direction } = useCarouselBlog();

  const duration = 5000;

  useEffect(() => {
    const timeout = setTimeout(() => {
      setNext(dataBlogs.length);
    }, duration);
    return () => clearTimeout(timeout);
  }, [dataBlogs.length, idx, setNext]);

  return (
    <div className="hidden md:block relative shadow border-2 border-neutral-300 dark:border-neutral-600 rounded-xl w-full h-[250px] md:h-[350px] lg:h-[450px] overflow-hidden">
      <div className="top-3 left-3 z-20 absolute flex items-center bg-teal-700 dark:bg-cyan-700 px-3 py-1 rounded-xl">
        <SiPinboard className="mr-2 text-white" />
        <p className="text-white text-xs md:text-sm">Top Featured</p>
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
        href={`/blogs/${dataBlogs[idx].slug}`}
        className="block overflow-hidden"
      >
        <AnimatePresence mode="popLayout">
          <motion.div
            key={dataBlogs[idx].slug}
            initial={{ opacity: 0, x: direction === "left" ? -50 : 50 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: direction === "left" ? 50 : -50 }}
            transition={{ duration: 0.5 }}
          >
            <div
              className="absolute inset-0 bg-gradient-to-b from-black/15 via-black/60 to-black"
              aria-label="background gradient"
            />
            <Image
              src={dataBlogs[idx].thumbnail}
              alt={dataBlogs[idx].title || "Project Thumbnail"}
              width={500}
              height={500}
              className="w-full h-[250px] md:h-[350px] lg:h-[450px] object-center object-cover"
            />
            <div className="bottom-0 left-0 absolute flex flex-col p-5 w-full max-w-[80%] md:max-w-[90%] lg:max-w-full h-max transition-all duration-500 ease-in-out">
              <p className="font-libre font-semibold text-white lg:text-2xl">
                {dataBlogs[idx].title}
              </p>

              <MarkdownText
                content={getShortDescription(dataBlogs[idx].content, 50)}
                classname="mt-3 text-justify  line-clamp-2 text-white"
              />

              <div className="flex items-center gap-5 mt-2">
                {dataBlogs[idx].category.map((item, index) => {
                  return (
                    <span
                      key={index}
                      className="block bg-neutral-600/50 px-3 py-1 w-max font-libre text-white text-xs"
                    >
                      {item}
                    </span>
                  );
                })}

                <span className="bg-neutral-600/50 px-3 py-1 rounded font-libre text-white text-xs">
                  {getEstimatedReadingTime(dataBlogs[idx].content)} Min Read
                </span>

                <h6 className="bg-neutral-600/50 px-3 py-1 rounded font-libre text-white text-xs">
                  {getDate(new Date(dataBlogs[idx].createdAt))}
                </h6>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </Link>

      <div className="right-3 bottom-3 absolute flex justify-center items-center gap-1">
        <button
          aria-label="previous project"
          className="cursor-pointer"
          onClick={() => setPrev(dataBlogs.length)}
        >
          <CiCircleChevLeft className="text-white text-3xl" />
        </button>

        <button
          aria-label="next project"
          className="cursor-pointer"
          onClick={() => setNext(dataBlogs.length)}
        >
          <CiCircleChevRight className="text-white text-3xl" />
        </button>
      </div>
    </div>
  );
};
export default CarouselBlog;
