import ProjectCard from "./ProjectCard";
import ProjectsSkeleton from "./ProjectsSkeleton";
import useProject from "./useProjects";
import { motion } from "framer-motion";
import CarouselProject from "./CarouselProject";
import { PROJECT_CATEGORIES } from "@/constants/list.constanst";
import { CiCircleRemove } from "react-icons/ci";

const Projects = () => {
  const {
    dataProjects,
    isLoadingProjects,
    getNotTopFeaturedProject,
    getTopFeaturedProject,

    handleCategoryFilter,
    isInCategoryFilter,
    getFilteredProjects,
  } = useProject();

  return (
    <>
      {isLoadingProjects ? (
        <ProjectsSkeleton />
      ) : (
        dataProjects && (
          <div>
            <CarouselProject
              dataProjects={getTopFeaturedProject(dataProjects)}
            />

            <div className="flex md:flex-row md:justify-between md:items-center gap-2 mt-10 mb-5 md:">
              <h3 className="font-libre font-semibold md:text-md dark:text-neutral-300 text-xs sm:text-sm lg:text-base">
                Latest Projects{" "}
                <span className="bg-gray-200 dark:bg-neutral-300 px-2 py-1 rounded-full font-thin text-black">
                  {
                    getFilteredProjects(getNotTopFeaturedProject(dataProjects))
                      .length
                  }
                </span>
              </h3>
              <div className="hidden md:flex items-center gap-1 lg:gap-2">
                {PROJECT_CATEGORIES.map((category) => (
                  <button
                    className={`flex items-center px-2 py-2 mb-1 rounded-full font-thin font-libre shadow cursor-pointer
                      ${
                        isInCategoryFilter(category.value)
                          ? "bg-neutral-700 text-white dark:bg-neutral-600"
                          : "bg-gray-200 text-black dark:bg-neutral-800 dark:text-neutral-300 hover:bg-neutral-300 dark:hover:bg-neutral-600"
                      }`}
                    key={category.name}
                    onClick={() => handleCategoryFilter(category.value)}
                  >
                    <p className="text-xs">{category.name}</p>

                    {isInCategoryFilter(category.value) && (
                      <CiCircleRemove
                        aria-label="remove"
                        className="ml-1 text-lg"
                      />
                    )}
                  </button>
                ))}
              </div>
            </div>

            <div className="gap-5 lg:gap-y-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
              {getFilteredProjects(getNotTopFeaturedProject(dataProjects)).map(
                (project, index) => (
                  <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    animate={{
                      opacity: 1,
                      y: 0,
                      transition: {
                        duration: 0.5,
                        delay: index * 0.2,
                        ease: "easeInOut",
                      },
                    }}
                    key={project.id}
                  >
                    <ProjectCard project={project} />
                  </motion.div>
                )
              )}
            </div>
          </div>
        )
      )}
    </>
  );
};

export default Projects;
