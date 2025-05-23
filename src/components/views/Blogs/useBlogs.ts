import blogsServices from "@/services/blogs";
import { Blog } from "@/types/blog";
import { useQuery } from "@tanstack/react-query";

const useBlogs = () => {
  const getBlogs = async (): Promise<Blog[]> => {
    const { data } = await blogsServices.getAllBlogs();
    return data.data;
  };

  const { data: dataBlogs, isLoading: isLoadingBlogs } = useQuery({
    queryKey: ["Blogs"],
    queryFn: getBlogs,
  });

  return { dataBlogs, isLoadingBlogs };
};

export default useBlogs;
