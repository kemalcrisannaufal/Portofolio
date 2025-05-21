import BlogCard from "./BlogCard";
import BlogsSkeleton from "./BlogsSkeleton";

import useBlogs from "./useBlogs";

const Blogs = () => {
  const { dataBlogs, isLoadingBlogs } = useBlogs();
  return (
    <>
      {isLoadingBlogs ? (
        <BlogsSkeleton />
      ) : (
        <div className="gap-5 grid grid-cols-1 md:grid-cols-2">
          {dataBlogs!.map((blog) => {
            return <BlogCard blog={blog} key={blog.id} />;
          })}
        </div>
      )}
    </>
  );
};

export default Blogs;
