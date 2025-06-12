const ProjectsSkeleton = () => {
  return (
    <>
      <div className="bg-gray-200 dark:bg-neutral-600 rounded-lg w-full h-[250px] md:h-[300px] lg:h-[350px] animate-pulse" />
      <div>
        <h3 className="mt-10 mb-5 font-libre font-semibold md:text-md dark:text-neutral-300 text-xs sm:text-sm lg:text-base">
          Featured Projects{" "}
          <span className="bg-gray-200 dark:bg-neutral-300 px-2 py-1 rounded-full font-thin text-black">
            {0}
          </span>
        </h3>
      </div>
      <div className="gap-5 gap-y-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {Array(2)
          .fill(0)
          .map((_, index) => {
            return (
              <div
                key={index}
                className="md:p-2 border-gray-100 rounded-md overflow-hidden hover:scale-105 hover:transition duration-300"
              >
                <div className="block relative rounded-md w-full h-48 overflow-hidden cursor-pointer">
                  <div className="bg-gray-200 dark:bg-neutral-600 w-full h-full object-cover animate-pulse" />
                </div>

                <div className="flex flex-col mt-2 h-28">
                  <div className="flex-grow">
                    <span className="block bg-gray-200 dark:bg-neutral-600 mb-2 rounded-md h-6 font-libre animate-pulse" />
                    <span className="block bg-gray-200 dark:bg-neutral-600 mb-2 rounded-md h-5 font-libre animate-pulse" />
                    <span className="block bg-gray-200 dark:bg-neutral-600 mb-1 rounded-md h-5 font-libre animate-pulse" />
                  </div>
                  <button className="relative flex justify-between items-center mt-3 w-full cursor-pointer">
                    <span className="font-libre text-sm">See More</span>
                    <i className="bx-right-arrow-alt text-xl bx" />
                  </button>
                </div>
              </div>
            );
          })}
        <div className="hidden lg:block md:p-2 border-gray-100 rounded-md overflow-hidden hover:scale-105 hover:transition duration-300">
          <div className="block relative rounded-md w-full h-48 overflow-hidden cursor-pointer">
            <div className="bg-gray-200 dark:bg-neutral-600 w-full h-full object-cover animate-pulse" />
          </div>

          <div className="flex flex-col mt-2 h-28">
            <div className="flex-grow">
              <span className="block bg-gray-200 dark:bg-neutral-600 mb-2 rounded-md h-6 font-libre animate-pulse" />
              <span className="block bg-gray-200 dark:bg-neutral-600 mb-2 rounded-md h-5 font-libre animate-pulse" />
              <span className="block bg-gray-200 dark:bg-neutral-600 mb-1 rounded-md h-5 font-libre animate-pulse" />
            </div>
            <button className="relative flex justify-between items-center mt-3 w-full cursor-pointer">
              <span className="font-libre text-sm">See More</span>
              <i className="bx-right-arrow-alt text-xl bx" />
            </button>
          </div>
        </div>
      </div>
      <div>
        <h3 className="mt-10 mb-5 font-libre font-semibold md:text-md dark:text-neutral-300 text-xs sm:text-sm lg:text-base">
          Latest Projects{" "}
          <span className="bg-gray-200 dark:bg-neutral-300 px-2 py-1 rounded-full font-thin text-black">
            {0}
          </span>
        </h3>
      </div>
      <div className="gap-5 gap-y-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {Array(2)
          .fill(0)
          .map((_, index) => {
            return (
              <div
                key={index}
                className="md:p-2 border-gray-100 rounded-md overflow-hidden hover:scale-105 hover:transition duration-300"
              >
                <div className="block relative rounded-md w-full h-48 overflow-hidden cursor-pointer">
                  <div className="bg-gray-200 dark:bg-neutral-600 w-full h-full object-cover animate-pulse" />
                </div>

                <div className="flex flex-col mt-2 h-28">
                  <div className="flex-grow">
                    <span className="block bg-gray-200 dark:bg-neutral-600 mb-2 rounded-md h-6 font-libre animate-pulse" />
                    <span className="block bg-gray-200 dark:bg-neutral-600 mb-2 rounded-md h-5 font-libre animate-pulse" />
                    <span className="block bg-gray-200 dark:bg-neutral-600 mb-1 rounded-md h-5 font-libre animate-pulse" />
                  </div>
                  <button className="relative flex justify-between items-center mt-3 w-full cursor-pointer">
                    <span className="font-libre text-sm">See More</span>
                    <i className="bx-right-arrow-alt text-xl bx" />
                  </button>
                </div>
              </div>
            );
          })}
        <div className="hidden lg:block md:p-2 border-gray-100 rounded-md overflow-hidden hover:scale-105 hover:transition duration-300">
          <div className="block relative rounded-md w-full h-48 overflow-hidden cursor-pointer">
            <div className="bg-gray-200 dark:bg-neutral-600 w-full h-full object-cover animate-pulse" />
          </div>

          <div className="flex flex-col mt-2 h-28">
            <div className="flex-grow">
              <span className="block bg-gray-200 dark:bg-neutral-600 mb-2 rounded-md h-6 font-libre animate-pulse" />
              <span className="block bg-gray-200 dark:bg-neutral-600 mb-2 rounded-md h-5 font-libre animate-pulse" />
              <span className="block bg-gray-200 dark:bg-neutral-600 mb-1 rounded-md h-5 font-libre animate-pulse" />
            </div>
            <button className="relative flex justify-between items-center mt-3 w-full cursor-pointer">
              <span className="font-libre text-sm">See More</span>
              <i className="bx-right-arrow-alt text-xl bx" />
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProjectsSkeleton;
