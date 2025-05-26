const BlogDetailSkeleton = () => {
  return (
    <>
      <div className="flex flex-col items-center">
        <div className="bg-gray-200 dark:bg-neutral-600 w-[75%] h-10 animate-pulse" />
        <div className="flex justify-center items-center gap-5 lg:gap-10 mt-2 overflow-hidden">
          <div className="bg-gray-200 dark:bg-neutral-600 w-16 md:w-40 h-6 animate-pulse" />
          <span className="text-gray-600">|</span>
          <div className="bg-gray-200 dark:bg-neutral-600 w-16 md:w-40 h-6 animate-pulse" />
          <span className="text-gray-600">|</span>
          <div className="bg-gray-200 dark:bg-neutral-600 w-16 md:w-40 h-6 animate-pulse" />
        </div>
      </div>

      <div className="lg:px-20">
        <div className="bg-gray-200 dark:bg-neutral-600 mt-5 w-full h-[250px] md:h-[350px] lg:h-[500px] animate-pulse" />
      </div>

      <div className="mt-10">
        {Array(12)
          .fill(0)
          .map((_, index) => (
            <div
              key={index}
              className={`bg-gray-200 dark:bg-neutral-600 mt-2 w-full h-6 ${
                (index + 1) % 4 === 0 ? "mb-5 lg:mb-10" : " animate-pulse"
              }`}
            />
          ))}
      </div>
    </>
  );
};

export default BlogDetailSkeleton;
