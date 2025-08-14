import Button from "@/components/ui/Button";
import MarkdownText from "@/components/ui/MarkdownText";
import { Blog } from "@/types/blog";
import { getEstimatedReadingTime, getShortDescription } from "@/utils/blog";
import { getDate } from "@/utils/date";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import useBlogCard from "./useBlogCard";
import { AnimatePresence, motion } from "framer-motion";
import { FaArrowRight } from "react-icons/fa";
import { SiPinboard } from "react-icons/si";

interface Proptypes {
  blog: Blog;
}
const BlogCard = (props: Proptypes) => {
  const { blog } = props;
  const { push } = useRouter();
  const { showProfileImage, setProfileImage } = useBlogCard();

  return (
    <div className="group lg:dark:bg-gradient-to-b lg:dark:from-[var(--color-secondary-dark)] lg:dark:via-neutral-800 lg:dark:to-[var(--color-primary-dark)] p-2 rounded-lg dark:text-white hover:scale-105 hover:transition hover:duration-300">
      <div className="md:hidden flex-grow mb-3 md:h-14">
        <h2 className="font-medium text-xl text-center line-clamp-2">
          {blog.title}
        </h2>
      </div>

      <Link
        href={`/blogs/${blog.slug}`}
        className="block relative shadow h-[200px] md:h-[200px] lg:h-[300px] overflow-hidden cursor-pointer"
      >
        <Image
          className="h-[200px] md:h-[200px] lg:h-[300px] object-cover object-top aspect-video"
          src={blog.thumbnail}
          width={1920}
          height={800}
          alt={blog.title}
        />
        {blog.topFeatured && (
          <div className="top-0 right-0 z-20 absolute flex items-center bg-cyan-700 px-3 py-1 rounded-bl">
            <SiPinboard className="mr-2 text-white" />
            <p className="text-white text-sm">Top Featured</p>
          </div>
        )}
        <div className="z-10 absolute inset-0 flex justify-center items-center bg-black/80 opacity-0 group-hover:opacity-100 w-full h-full translate-y-full group-hover:translate-y-0 duration-300 transform">
          <h2 className="mr-2 text-white text-xl">View Blog</h2>
          <i className="bx-right-arrow-alt text-white text-2xl bx" />
        </div>
      </Link>

      <div className="mt-3">
        <div className="hidden md:block">
          <h2 className="font-medium dark:text-white text-xl line-clamp-1">
            {blog.title}
          </h2>
        </div>
        <div className="flex justify-between items-center mt-1">
          <div className="flex items-center gap-2">
            {blog.category.map((item, index) => {
              return (
                <span
                  key={index}
                  className="block bg-gray-200 dark:bg-neutral-600 px-3 py-1 dark:border dark:border-neutral-700 rounded w-max dark:text-[var(--color-neon)] text-sm"
                >
                  {item}
                </span>
              );
            })}
          </div>
          <div>
            <span className="font-semibold text-gray-600 dark:text-neutral-300 text-sm">
              {getEstimatedReadingTime(blog.content)} Min Read
            </span>
          </div>
        </div>
        <div>
          <MarkdownText
            content={getShortDescription(blog.content)}
            classname="mt-3 text-justify line-clamp-3 dark:text-neutral-300 text-sm"
          />
        </div>

        <div className="hidden md:flex justify-between items-center mt-5">
          <div className="flex items-center">
            <div
              className="flex justify-center items-center bg-gray-200 dark:bg-[var(--color-secondary-dark)] mr-3 border border-gray-200 dark:border-neutral-800 rounded-full w-12 h-12 overflow-hidden cursor-pointer"
              onMouseEnter={() => setProfileImage(true)}
              onMouseLeave={() => setProfileImage(false)}
            >
              <AnimatePresence>
                {showProfileImage ? (
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{
                      opacity: 1,
                      transition: { duration: 0.5 },
                    }}
                  >
                    <Image
                      className="w-full"
                      src={"/assets/images/home/foto_fix.jpg"}
                      width={500}
                      height={500}
                      alt={"Kemal Crisannaufal"}
                      priority
                    />
                  </motion.div>
                ) : (
                  <span className="text-xl">K</span>
                )}
              </AnimatePresence>
            </div>

            <div>
              <h5 className="font-medium text-sm">Kemal Crisannaufal</h5>
              <h6 className="dark:text-neutral-300 text-xs">
                {getDate(new Date(blog.createdAt))}
              </h6>
            </div>
          </div>

          <div>
            <button
              className="p-2 cursor-pointer"
              onClick={() => push(`/blogs/${blog.slug}`)}
            >
              <FaArrowRight className="text-sm group-hover:transition group-hover:translate-x-2 group-hover:duration-300" />
            </button>
          </div>
        </div>

        <div className="md:hidden flex justify-center mt-5 w-full">
          <Button onClick={() => push(`/blogs/${blog.slug}`)}>Read More</Button>
        </div>
      </div>
    </div>
  );
};

export default BlogCard;
