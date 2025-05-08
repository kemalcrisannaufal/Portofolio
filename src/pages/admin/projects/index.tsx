import { useProject } from "@/components/hooks/useProject";
import ProjectsAdminView from "@/components/views/Admin/Projects";
import Head from "next/head";

const ProjectsAdminPage = () => {
  const { projects, setProjects } = useProject();
  return (
    <>
      <Head>
        <title>Admin | Project</title>
      </Head>
      <ProjectsAdminView projects={projects} setProjects={setProjects} />
    </>
  );
};

export default ProjectsAdminPage;
