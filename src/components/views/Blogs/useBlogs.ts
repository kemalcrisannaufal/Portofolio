import blogsServices from "@/services/blogs";
import { Blog } from "@/types/blog";
import { sortDataByDate } from "@/utils/sortData";
import { useQuery } from "@tanstack/react-query";

const useBlogs = () => {
  const getBlogs = async (): Promise<Blog[]> => {
    const { data } = await blogsServices.getAllBlogs();
    const sortedData = sortDataByDate(data.data, "createdAt");
    return sortedData;
  };

  const { data: dataBlogs, isLoading: isLoadingBlogs } = useQuery({
    queryKey: ["Blogs"],
    queryFn: getBlogs,
  });

  const getTopFeaturedBlog = (dataBlog: Blog[]) => {
    return dataBlog.filter((blog) => blog.topFeatured);
  };

  const getNotTopFeaturedBlog = (dataBlog: Blog[]) => {
    return dataBlog.filter((blog) => !blog.topFeatured);
  };

  return {
    dataBlogs,
    isLoadingBlogs,
    getTopFeaturedBlog,
    getNotTopFeaturedBlog,
  };
};

export default useBlogs;
