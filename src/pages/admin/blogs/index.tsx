import BlogsAdminView from "@/components/views/Admin/Blogs";
import Head from "next/head";

const ProjectsAdminPage = () => {
  return (
    <>
      <Head>
        <title>Admin | Blogs</title>
      </Head>
      <BlogsAdminView />
    </>
  );
};

export default ProjectsAdminPage;
