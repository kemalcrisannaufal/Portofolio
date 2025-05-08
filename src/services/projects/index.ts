/* eslint-disable @typescript-eslint/no-explicit-any */
import instance from "@/lib/axios/instance";

const endpoint = "/api/projects";

const projectServices = {
  getAllProjects: () => instance.get(endpoint),
  getProject: (id: string) => instance.get(`${endpoint}/${id}`),
  addProject: (data: any) => instance.post(endpoint, { data }),
  updateProject: (id: string, data: any) =>
    instance.put(`${endpoint}/${id}`, { data }),
  deleteProject: (id: string) => instance.delete(`${endpoint}/${id}`),
};

export default projectServices;
