/* eslint-disable @typescript-eslint/no-explicit-any */
import instance from "@/lib/axios/instance";
import endpoint from "../endpoint.constants";
import { BlogComment } from "@/types/comment";

const blogsServices = {
  getAllBlogs: () => instance.get(endpoint.BLOG),
  postBlog: (data: any) => instance.post(endpoint.BLOG, { data }),
  updateBlog: (id: string, data: any) =>
    instance.put(`${endpoint.BLOG}/${id}`, { data }),
  getBlogBySlug: (slug: string) =>
    instance.get(`${endpoint.BLOG}/blog/${slug}`),

  addComment: (id: string, data: { comments: BlogComment[] }) =>
    instance.put(`${endpoint.BLOG}/blog/${id}`, { data }),
};

export default blogsServices;
