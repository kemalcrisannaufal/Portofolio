import BlogCard from "./BlogCard";
import BlogsSkeleton from "./BlogsSkeleton";
import CarouselBlog from "./CarouselBlog";
import useBlogs from "./useBlogs";
import { motion } from "framer-motion";

const Blogs = () => {
  const {
    dataBlogs,
    isLoadingBlogs,
    getTopFeaturedBlog,
    getNotTopFeaturedBlog,
  } = useBlogs();
  return (
    <>
      {isLoadingBlogs ? (
        <BlogsSkeleton />
      ) : (
        <div>
          <CarouselBlog dataBlogs={getTopFeaturedBlog(dataBlogs!)} />
          <h3 className="mt-5 mb-5 font-libre font-semibold md:text-md dark:text-neutral-300 text-xs sm:text-sm lg:text-base">
            Featured Blogs{" "}
            <span className="bg-gray-200 dark:bg-neutral-300 px-2 py-1 rounded-full font-thin text-black">
              {getTopFeaturedBlog(dataBlogs!).length}
            </span>
          </h3>
          <div className="gap-5 grid grid-cols-1 md:grid-cols-2">
            {getTopFeaturedBlog(dataBlogs!).map((blog, index) => {
              return (
                <motion.div
                  initial={{ opacity: 0, y: 50 }}
                  animate={{
                    opacity: 1,
                    y: 0,
                    transition: {
                      duration: 0.5,
                      delay: index * 0.5,
                      ease: "easeInOut",
                    },
                  }}
                  key={blog.id}
                >
                  <BlogCard blog={blog} />
                </motion.div>
              );
            })}
          </div>
          <h3 className="mt-5 mb-5 font-libre font-semibold md:text-md dark:text-neutral-300 text-xs sm:text-sm lg:text-base">
            Latest Blogs{" "}
            <span className="bg-gray-200 dark:bg-neutral-300 px-2 py-1 rounded-full font-thin text-black">
              {getNotTopFeaturedBlog(dataBlogs!).length}
            </span>
          </h3>
          <div className="gap-5 grid grid-cols-1 md:grid-cols-2">
            {getNotTopFeaturedBlog(dataBlogs!).map((blog, index) => {
              return (
                <motion.div
                  initial={{ opacity: 0, y: 50 }}
                  animate={{
                    opacity: 1,
                    y: 0,
                    transition: {
                      duration: 0.5,
                      delay: index * 0.5,
                      ease: "easeInOut",
                    },
                  }}
                  key={blog.id}
                >
                  <BlogCard blog={blog} />
                </motion.div>
              );
            })}
          </div>
        </div>
      )}
    </>
  );
};

export default Blogs;
