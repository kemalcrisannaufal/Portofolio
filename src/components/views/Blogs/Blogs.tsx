import BlogCard from "./BlogCard";
import BlogsSkeleton from "./BlogsSkeleton";
import useBlogs from "./useBlogs";
import { motion } from "framer-motion";

const Blogs = () => {
  const { dataBlogs, isLoadingBlogs } = useBlogs();
  return (
    <>
      {isLoadingBlogs ? (
        <BlogsSkeleton />
      ) : (
        <div className="gap-5 grid grid-cols-1 md:grid-cols-2">
          {dataBlogs!.map((blog, index) => {
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
      )}
    </>
  );
};

export default Blogs;
