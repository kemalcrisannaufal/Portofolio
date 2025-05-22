import BlogCardSkeleton from "../BlogCard/BlogCardSkeleton/BlogCardSkeleton";

const BlogsSkeleton = () => {
  return (
    <div className="gap-5 grid grid-cols-1 md:grid-cols-2">
      {Array(6)
        .fill(0)
        .map((item, index) => {
          return <BlogCardSkeleton key={index} />;
        })}
    </div>
  );
};

export default BlogsSkeleton;
