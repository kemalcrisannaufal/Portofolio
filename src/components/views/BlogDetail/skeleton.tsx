const BlogDetailSkeletonView = () => {
  return (
    <div className="px-10 md:px-20 lg:px-48 pb-10 lg:pb-20">
      <div className="flex flex-col items-center">
        <div className="bg-neutral-200 w-[75%] h-10 animate-pulse" />
        <div className="flex justify-center items-center gap-5 lg:gap-10 mt-2 overflow-hidden">
          <div className="bg-neutral-200 w-16 md:w-40 h-6 animate-pulse" />
          <span className="text-neutral-600">|</span>
          <div className="bg-neutral-200 w-16 md:w-40 h-6 animate-pulse" />
          <span className="text-neutral-600">|</span>
          <div className="bg-neutral-200 w-16 md:w-40 h-6 animate-pulse" />
        </div>
      </div>

      <div className="lg:px-20">
        <div className="bg-neutral-200 mt-5 w-full h-[25vh] md:h-[45vh] lg:h-[70vh] animate-pulse" />
      </div>

      <div className="mt-10">
        {Array(12)
          .fill(0)
          .map((item, index) => (
            <div
              key={index}
              className={`bg-neutral-200 mt-2 w-full h-6 ${
                (index + 1) % 4 === 0 ? "mb-5 lg:mb-10" : " animate-pulse"
              }`}
            />
          ))}
      </div>
    </div>
  );
};

export default BlogDetailSkeletonView;
