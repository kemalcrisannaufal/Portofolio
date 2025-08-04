const ProjectDetailSkeleton = () => {
  return (
    <>
      <div className="flex flex-col items-center">
        <div className="bg-gray-200 dark:bg-neutral-700 rounded-xl w-[50%] h-12 animate-pulse" />
        <div className="bg-gray-200 dark:bg-neutral-700 mt-3 rounded-lg w-[80%] h-7 animate-pulse" />
        <div className="bg-gray-200 dark:bg-neutral-700 mt-3 rounded-lg w-[80%] h-7 animate-pulse" />
      </div>
      <div className="flex lg:flex-row flex-col-reverse gap-2 mt-5 h-[300px] lg:h-[400px]">
        <div className="flex lg:flex-col items-center gap-3 pb-2 w-full lg:w-[15%] overflow-x-auto lg:overflow-y-auto hide-scrollbar">
          {Array(5)
            .fill(0)
            .map((_, index) => (
              <div
                key={index}
                className="flex-shrink-0 bg-gray-200 dark:bg-neutral-700 shadow rounded w-32 h-20 animate-pulse"
              />
            ))}
        </div>

        <div className="bg-gray-200 dark:bg-neutral-700 rounded-lg w-full lg:w-[85%] h-[300px] lg:h-full animate-pulse" />
      </div>

      <div className="mt-10">
        <div>
          <h3 className="font-libre text-lg">Details</h3>
          <ul className="list-disc">
            {Array(5)
              .fill(0)
              .map((detail, index) => (
                <li key={index} className="mb-2 ml-5">
                  <span className="block bg-gray-200 dark:bg-neutral-700 rounded-lg w-full h-7 animate-pulse" />
                </li>
              ))}
          </ul>
        </div>

        <div>
          <h3 className="mt-5 font-libre text-lg">Links</h3>
          <div className="flex gap-5 my-3">
            <div
              className={` py-2 px-3 border dark:border-neutral-600  text-sm md:text-base cursor-pointer dark:text-neutral-300  rounded-lg`}
            >
              <div className="flex items-center">
                <i className="mr-2 bx bxl-github" />
                <h3 className="font-libre">Github</h3>
              </div>
            </div>
            <div
              className={` py-2 px-3 border dark:border-neutral-600  text-sm md:text-base cursor-pointer dark:text-neutral-300  rounded-lg`}
            >
              <div className="flex items-center">
                <i className="mr-2 bx bx-link" />
                <h3 className="font-libre">Visit Project</h3>
              </div>
            </div>
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
                    className="bg-gray-200 dark:bg-neutral-700 rounded w-10 h-10 animate-pulse"
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
