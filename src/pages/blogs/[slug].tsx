import BlogDetailView from "@/components/views/BlogDetail";
import BlogDetailSkeletonView from "@/components/views/BlogDetail/skeleton";
import blogsServices from "@/services/blogs";
import { Blog } from "@/types/blog.type";
import Head from "next/head";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

const BlogDetailPage = () => {
  const { slug } = useRouter().query;
  const [blog, setBlog] = useState<Blog>({} as Blog);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const getBlog = async () => {
      setIsLoading(true);
      if (slug) {
        const { data } = await blogsServices.getBlogBySlug(slug as string);
        console.log(data.data);
        if (data) {
          setBlog(data.data[0]);
          setIsLoading(false);
        }
      }
    };
    getBlog();
  }, [slug]);

  return (
    <>
      <Head>
        <title>{blog.title}</title>
      </Head>
      {isLoading ? <BlogDetailSkeletonView /> : <BlogDetailView blog={blog} />}
    </>
  );
};

export default BlogDetailPage;
