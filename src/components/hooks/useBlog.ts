import blogsServices from "@/services/blogs";
import { Blog } from "@/types/blog.type";
import { sortDataByDate } from "@/utils/sortData";
import { useEffect, useState } from "react";

export const useBlog = () => {
  const [blogs, setBlogs] = useState<Blog[]>([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const getAllBlogs = async () => {
      setIsLoading(true);
      const { data } = await blogsServices.getAllBlogs();
      if (data) {
        const sortedBlogs = sortDataByDate(data.data, "createdAt");
        setBlogs(sortedBlogs);
        setIsLoading(false);
      }
    };
    getAllBlogs();
  }, []);

  return { blogs, setBlogs, isLoading };
};
