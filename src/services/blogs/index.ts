/* eslint-disable @typescript-eslint/no-explicit-any */
import instance from "@/lib/axios/instance";

const endpoint = "/api/blogs";

const blogsServices = {
  getAllBlogs: () => instance.get(endpoint),
  postBlog: (data: any) => instance.post(endpoint, { data }),
  updateBlog: (id: string, data: any) =>
    instance.put(`${endpoint}/${id}`, { data }),

  getBlogBySlug: (slug: string) => instance.get(`${endpoint}/blog/${slug}`),
};

export default blogsServices;
