import Button from "@/components/ui/Button";

const BlogCardSkeleton = () => {
  return (
    <div className="p-3 rounded-xl">
      <div className="flex justify-center">
        <div className="lg:hidden bg-gray-200 mb-3 w-[75%] h-6 animate-pulse" />
      </div>
      <div className="bg-gray-200 w-full h-48 md:h-64 lg:h-80 animate-pulse" />

      <div className="mt-5">
        <div className="hidden lg:block bg-gray-200 w-[75%] h-6 animate-pulse" />
        <div className="flex justify-between items-center mt-1">
          <div className="flex items-center gap-2">
            <div className="bg-gray-200 w-20 h-6 animate-pulse" />
          </div>
          <div>
            <div className="bg-gray-200 w-20 h-6 animate-pulse" />
          </div>
        </div>

        {Array(4)
          .fill(0)
          .map((_, index) => (
            <div
              key={index}
              className="bg-gray-200 mt-2 w-full h-4 animate-pulse"
            />
          ))}

        <div className="hidden md:flex justify-between items-center mt-5">
          <div className="flex items-center">
            <div className="flex justify-center items-center bg-gray-200 mr-3 rounded-full w-12 h-12 animate-pulse" />
            <div>
              <div className="bg-gray-200 mb-2 w-48 h-4 animate-pulse" />
              <div className="bg-gray-200 w-48 h-4 animate-pulse" />
            </div>
          </div>

          <div>
            <div className="p-2">
              <i className="bx-right-arrow-alt text-xl bx" />
            </div>
          </div>
        </div>

        <div className="md:hidden flex justify-center mt-5">
          <Button disabled>Read More</Button>
        </div>
      </div>
    </div>
  );
};

export default BlogCardSkeleton;
