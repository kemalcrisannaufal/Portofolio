import MainLayout from "@/components/layouts/MainLayout";
import Projects from "@/components/views/Projects";
import { PAGE_DESCRIPTION } from "@/constants/list.constanst";

const ProjectPage = () => {
  return (
    <MainLayout title="Projects" description={PAGE_DESCRIPTION.PROJECTS}>
      <Projects />
    </MainLayout>
  );
};

export default ProjectPage;
