import blogsServices from "@/services/blogs";
import { Blog } from "@/types/blog.type";
import { useQuery } from "@tanstack/react-query";
import { useRouter } from "next/router";

const useBlogDetail = () => {
  const { query, isReady } = useRouter();

  const getBlogBySlug = async (): Promise<Blog> => {
    const { data } = await blogsServices.getBlogBySlug(query.slug as string);
    return data.data[0];
  };

  const { data: dataBlog, isLoading: isLoadingBlog } = useQuery({
    queryKey: ["BlogDetail", query.slug],
    queryFn: getBlogBySlug,
    enabled: isReady,
  });

  return { dataBlog, isLoadingBlog };
};

export default useBlogDetail;
