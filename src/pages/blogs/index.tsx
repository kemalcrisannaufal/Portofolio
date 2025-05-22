import MainLayout from "@/components/layouts/MainLayout";
import Blogs from "@/components/views/Blogs";
import { PAGE_DESCRIPTION } from "@/constants/list.constanst";

const BlogsPage = () => {
  return (
    <MainLayout title="Blogs" description={PAGE_DESCRIPTION.BLOG}>
      <Blogs />
    </MainLayout>
  );
};

export default BlogsPage;
