import BlogsView from "@/components/views/Blogs";
import Head from "next/head";

const BlogsPage = () => {
  return (
    <>
      <Head>
        <title>Blogs</title>
      </Head>
      <BlogsView />
    </>
  );
};

export default BlogsPage;
