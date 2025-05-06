import instance from "@/lib/axios/instance";

const projectServices = {
  getAllProjects: () => instance.get("/api/hello"),
};

export default projectServices;
