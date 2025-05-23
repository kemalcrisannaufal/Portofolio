import projectServices from "@/services/projects";
import { Project } from "@/types/project";
import { sortDataByDate } from "@/utils/sortData";
import { useQuery } from "@tanstack/react-query";

const useProjectsAdmin = () => {
  const getProjects = async (): Promise<Project[]> => {
    const { data } = await projectServices.getAllProjects();
    const sortedData = sortDataByDate(data.data, "createdAt");
    return sortedData;
  };

  const { data: dataProjects, isLoading: isLoadingProjects } = useQuery({
    queryKey: ["Projects"],
    queryFn: getProjects,
  });

  return { dataProjects, isLoadingProjects };
};

export default useProjectsAdmin;
