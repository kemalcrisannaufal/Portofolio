import ProjectDetailView from "@/components/views/ProjectDetail";
import ProjectDetailSkeletonView from "@/components/views/ProjectDetail/skeleton";
import projectServices from "@/services/projects";
import { Project } from "@/types/project.type";
import Head from "next/head";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

const ProjectDetailPage = () => {
  const { id } = useRouter().query;
  const [project, setProject] = useState<Project>({} as Project);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const getProject = async () => {
      if (!id || typeof id !== "string") return;
      setIsLoading(true);
      const { data } = await projectServices.getProject(id as string);
      if (data) {
        setProject(data.data);
        setIsLoading(false);
      }
    };
    getProject();
  }, [id]);

  return (
    <>
      <Head>
        <title>{project.name}</title>
      </Head>
      {isLoading ? (
        <ProjectDetailSkeletonView />
      ) : (
        <ProjectDetailView project={project} isLoading={isLoading} />
      )}
    </>
  );
};

export default ProjectDetailPage;
