import BlogCardSkeleton from "../BlogCard/BlogCardSkeleton/BlogCardSkeleton";

const BlogsSkeleton = () => {
  return (
    <>
      <div className="hidden md:block bg-gray-200 dark:bg-neutral-600 rounded-lg w-full h-[250px] md:h-[350px] lg:h-[450px] animate-pulse" />
      <div>
        <h3 className="mt-10 mb-5 font-libre font-semibold md:text-md dark:text-neutral-300 text-xs sm:text-sm lg:text-base">
          Featured Blogs{" "}
          <span className="bg-gray-200 dark:bg-neutral-300 px-2 py-1 rounded-full font-thin text-black">
            {0}
          </span>
        </h3>
      </div>
      <div className="gap-5 grid grid-cols-1 md:grid-cols-2">
        {Array(2)
          .fill(0)
          .map((item, index) => {
            return <BlogCardSkeleton key={index} />;
          })}
      </div>
      <div>
        <h3 className="mt-10 mb-5 font-libre font-semibold md:text-md dark:text-neutral-300 text-xs sm:text-sm lg:text-base">
          Latest Blogs{" "}
          <span className="bg-gray-200 dark:bg-neutral-300 px-2 py-1 rounded-full font-thin text-black">
            {0}
          </span>
        </h3>
      </div>
      <div className="gap-5 grid grid-cols-1 md:grid-cols-2">
        {Array(2)
          .fill(0)
          .map((item, index) => {
            return <BlogCardSkeleton key={index} />;
          })}
      </div>
    </>
  );
};

export default BlogsSkeleton;
