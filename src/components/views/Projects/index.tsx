import { Project } from "@/types";
import ProjectCard from "./ProjectCard";

type Proptypes = {
  projects: Project[];
};

const ProjectsView = (props: Proptypes) => {
  const { projects } = props;

  return (
    <>
      <div className="px-10 md:px-20 lg:px-48 pb-10 lg:pb-20">
        <div className="gap-5 gap-y-8 grid grid-cols-1 lg:grid-cols-3">
          {projects.map((project) => {
            return <ProjectCard key={project.id} project={project} />;
          })}
        </div>
      </div>
    </>
  );
};

export default ProjectsView;
