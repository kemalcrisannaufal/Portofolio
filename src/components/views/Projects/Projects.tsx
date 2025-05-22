import { sortedProjects } from "@/utils/sortData";
import ProjectCard from "./ProjectCard";
import ProjectsSkeleton from "./ProjectsSkeleton";
import useProject from "./useProjects";
import { motion } from "framer-motion";

const Projects = () => {
  const { dataProjects, isLoadingProjects } = useProject();

  return (
    <>
      {isLoadingProjects ? (
        <ProjectsSkeleton />
      ) : (
        dataProjects && (
          <div className="gap-5 lg:gap-y-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
            {sortedProjects(dataProjects).map((project, index) => (
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
            ))}
          </div>
        )
      )}
    </>
  );
};

export default Projects;
