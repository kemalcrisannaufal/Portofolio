import { useBlog } from "@/components/hooks/useBlog";
import BlogsView from "@/components/views/Blogs";
import BlogsSkeletonView from "@/components/views/Blogs/skeleton";
import Head from "next/head";

const BlogsPage = () => {
  const { blogs, isLoading } = useBlog();

  return (
    <>
      <Head>
        <title>Blogs</title>
      </Head>
      {isLoading ? <BlogsSkeletonView /> : <BlogsView blogs={blogs} />}
    </>
  );
};

export default BlogsPage;
