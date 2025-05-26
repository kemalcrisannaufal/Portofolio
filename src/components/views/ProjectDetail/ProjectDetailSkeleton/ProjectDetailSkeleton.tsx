const ProjectDetailSkeleton = () => {
  return (
    <>
      <div className="flex flex-col items-center">
        <div className="bg-gray-200 dark:bg-neutral-600 w-[50%] h-16 animate-pulse" />
        <div className="bg-gray-200 dark:bg-neutral-600 mt-3 w-[80%] h-6 animate-pulse" />
        <div className="bg-gray-200 dark:bg-neutral-600 mt-3 w-[80%] h-6 animate-pulse" />
      </div>
      <div className="flex lg:flex-row flex-col-reverse gap-2 mt-5 h-[300px] lg:h-[400px]">
        <div className="scrollbar-hidden flex lg:flex-col items-center gap-3 pb-2 w-full lg:w-[15%] overflow-x-auto lg:overflow-y-auto">
          {Array(5)
            .fill(0)
            .map((_, index) => (
              <div
                key={index}
                className="flex-shrink-0 bg-gray-200 dark:bg-neutral-600 shadow border border-gray-300 rounded w-32 h-20 animate-pulse"
              />
            ))}
        </div>

        <div className="bg-gray-200 dark:bg-neutral-600 w-full lg:w-[85%] h-[300px] lg:h-full animate-pulse" />
      </div>

      <div className="mt-10">
        <div>
          <h3 className="font-libre text-lg">Details</h3>
          <ul className="list-disc">
            {Array(5)
              .fill(0)
              .map((detail, index) => (
                <li key={index} className="mb-2 ml-5">
                  <span className="block bg-gray-200 dark:bg-neutral-600 w-full lg:w-[75%] h-6 animate-pulse" />
                </li>
              ))}
          </ul>
        </div>

        <div>
          <h3 className="mt-5 font-libre text-lg">Links</h3>
          <div className="flex gap-5 my-3">
            <a
              className={`hover:bg-black p-2 border hover:text-white text-sm md:text-base cursor-pointer`}
            >
              <div className="flex items-center">
                <i className="mr-2 bx bxl-github" />
                <h3 className="font-libre">Github</h3>
              </div>
            </a>
            <a
              className={`hover:bg-black p-2 border hover:text-white text-sm md:text-base cursor-pointer `}
            >
              <div className="flex items-center">
                <i className="mr-2 bx bx-link" />
                <h3 className="font-libre">Visit Project</h3>
              </div>
            </a>
          </div>
        </div>

        <div>
          <h3 className="mt-5 font-libre text-lg">Tech Stack</h3>
          <div className="flex flex-wrap gap-x-3 gap-y-2 mt-3">
            {Array(5)
              .fill(0)
              .map((stack, index) => {
                return (
                  <div
                    key={index}
                    className="bg-gray-200 dark:bg-neutral-600 rounded w-10 h-10 animate-pulse"
                  />
                );
              })}
          </div>
        </div>
      </div>
    </>
  );
};

export default ProjectDetailSkeleton;
