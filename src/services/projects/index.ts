/* eslint-disable @typescript-eslint/no-explicit-any */
import instance from "@/lib/axios/instance";
import endpoint from "../endpoint.constants";

const projectServices = {
  getAllProjects: () => instance.get(endpoint.PROJECT),
  getProject: (id: string) => instance.get(`${endpoint.PROJECT}/${id}`),
  addProject: (data: any) => instance.post(endpoint.PROJECT, { data }),
  updateProject: (id: string, data: any) =>
    instance.put(`${endpoint.PROJECT}/${id}`, { data }),
  deleteProject: (id: string) => instance.delete(`${endpoint.PROJECT}/${id}`),
};

export default projectServices;
