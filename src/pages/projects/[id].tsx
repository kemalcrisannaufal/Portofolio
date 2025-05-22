import MainLayout from "@/components/layouts/MainLayout";
import ProjectDetail from "@/components/views/ProjectDetail";
import { PAGE_DESCRIPTION } from "@/constants/list.constanst";

const ProjectDetailPage = () => {
  return (
    <MainLayout
      title="Project Detail"
      description={PAGE_DESCRIPTION.PROJECT_DETAIL}
    >
      <ProjectDetail />
    </MainLayout>
  );
};

export default ProjectDetailPage;
