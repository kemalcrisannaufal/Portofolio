/* eslint-disable @typescript-eslint/no-explicit-any */
import instance from "@/lib/axios/instance";
import endpoint from "../endpoint.constants";

const blogsServices = {
  getAllBlogs: () => instance.get(endpoint.BLOG),
  postBlog: (data: any) => instance.post(endpoint.BLOG, { data }),
  updateBlog: (id: string, data: any) =>
    instance.put(`${endpoint.BLOG}/${id}`, { data }),

  getBlogBySlug: (slug: string) =>
    instance.get(`${endpoint.BLOG}/blog/${slug}`),
};

export default blogsServices;
