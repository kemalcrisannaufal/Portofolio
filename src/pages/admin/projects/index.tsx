import MainLayout from "@/components/layouts/MainLayout";
import ProjectsAdmin from "@/components/views/Admin/Projects";

const ProjectsAdminPage = () => {
  return (
    <MainLayout title="Admin | Projects">
      <ProjectsAdmin />
    </MainLayout>
  );
};

export default ProjectsAdminPage;
