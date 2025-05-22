import projectServices from "@/services/projects";
import { Project } from "@/types/project.type";
import { sortDataByDate } from "@/utils/sortData";
import { useQuery } from "@tanstack/react-query";

const useProject = () => {
  const getProjects = async (): Promise<Project[]> => {
    const { data } = await projectServices.getAllProjects();
    const sortedData = sortDataByDate(data.data, "createdAt");
    return sortedData;
  };

  const { data: dataProjects, isLoading: isLoadingProjects } = useQuery({
    queryKey: ["Projects"],
    queryFn: getProjects,
  });

  const getTopFeaturedProject = (dataProjects: Project[]) => {
    return dataProjects.filter((project) => project.isTopFeatured);
  };

  const getNotTopFeaturedProject = (dataProjects: Project[]) => {
    return dataProjects.filter((project) => !project.isTopFeatured);
  };

  return {
    dataProjects,
    getNotTopFeaturedProject,
    getTopFeaturedProject,
    isLoadingProjects,
  };
};

export default useProject;
