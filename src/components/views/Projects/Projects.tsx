import ProjectCard from "./ProjectCard";
import ProjectsSkeleton from "./ProjectsSkeleton";
import useProject from "./useProjects";

const Projects = () => {
  const { dataProjects, isLoadingProjects } = useProject();

  return (
    <>
      {isLoadingProjects ? (
        <ProjectsSkeleton />
      ) : (
        <div className="gap-5 gap-y-8 grid grid-cols-1 lg:grid-cols-3">
          {dataProjects!.map((project) => {
            return <ProjectCard key={project.id} project={project} />;
          })}
        </div>
      )}
    </>
  );
};

export default Projects;
