import { useProject } from "@/components/hooks/useProject";
import ProjectsView from "@/components/views/Projects";
import ProjectsSkeletonView from "@/components/views/Projects/skeleton";
import Head from "next/head";

const ProjectPage = () => {
  const { projects, isLoading } = useProject();

  return (
    <>
      <Head>
        <title>Projects</title>
      </Head>
      {isLoading ? (
        <ProjectsSkeletonView />
      ) : (
        <ProjectsView projects={projects} />
      )}
    </>
  );
};

export default ProjectPage;
