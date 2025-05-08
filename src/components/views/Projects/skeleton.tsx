const ProjectsSkeletonView = () => {
  return (
    <>
      <div className="px-10 md:px-20 lg:px-48 pb-5 lg:pb-20">
        <div className="gap-5 gap-y-8 grid grid-cols-1 lg:grid-cols-3">
          {Array(9)
            .fill(0)
            .map((project) => {
              return (
                <div
                  key={project.id}
                  className="md:p-2 border-neutral-100 rounded overflow-hidden hover:scale-105 hover:transition duration-300"
                >
                  <div className="block relative rounded-t w-full h-48 overflow-hidden cursor-pointer">
                    <div className="bg-neutral-200 w-full h-full object-cover animate-pulse" />
                  </div>

                  <div className="flex flex-col mt-2 h-28">
                    <div className="flex-grow">
                      <span className="block bg-neutral-200 mb-2 h-8 font-libre animate-pulse" />
                      <span className="block bg-neutral-200 mb-2 h-4 font-libre animate-pulse" />
                      <span className="block bg-neutral-200 mb-1 h-4 font-libre animate-pulse" />
                    </div>
                    <button className="relative flex justify-between items-center mt-3 w-full cursor-pointer">
                      <span className="font-libre text-sm">See More</span>
                      <i className="bx-right-arrow-alt text-xl bx" />
                    </button>
                  </div>
                </div>
              );
            })}
        </div>
      </div>
    </>
  );
};

export default ProjectsSkeletonView;
