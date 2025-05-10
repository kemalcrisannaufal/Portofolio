import BlogCardSkeleton from "./BlogCard/skeleton";

const BlogsSkeletonView = () => {
  return (
    <div className="px-10 md:px-20 lg:px-48 pb-10 lg:pb-20">
      <div className="gap-2 grid grid-cols-1 md:grid-cols-2">
        {Array(6)
          .fill(0)
          .map((item, index) => {
            return <BlogCardSkeleton key={index} />;
          })}
      </div>
    </div>
  );
};

export default BlogsSkeletonView;
