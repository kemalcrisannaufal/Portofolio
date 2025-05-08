/* eslint-disable @typescript-eslint/no-explicit-any */
import instance from "@/lib/axios/instance";

const endpoint = "/api/blogs";

const blogsServices = {
  postBlog: (data: any) => instance.post(endpoint, { data }),
  updateBlog: (id: string, data: any) =>
    instance.put(`${endpoint}/${id}`, { data }),
};

export default blogsServices;
