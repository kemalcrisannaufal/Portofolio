import projectServices from "@/services/projects";
import { Project } from "@/types/project";
import { sortDataByDate } from "@/utils/sortData";
import { useQuery } from "@tanstack/react-query";
import { useState } from "react";

const useProject = () => {
  const [categoryFilters, setCategoryFilters] = useState<string[]>([]);

  const fetchProjects = async (): Promise<Project[]> => {
    const { data } = await projectServices.getAllProjects();
    const sortedData = sortDataByDate(data.data, "createdAt");
    return sortedData;
  };

  const { data: dataProjects, isLoading: isLoadingProjects } = useQuery({
    queryKey: ["Projects"],
    queryFn: fetchProjects,
  });

  const getTopFeaturedProject = (dataProjects: Project[]) => {
    return dataProjects.filter((project) => project.isTopFeatured);
  };

  const getNotTopFeaturedProject = (dataProjects: Project[]) => {
    return dataProjects.filter((project) => !project.isTopFeatured);
  };

  const handleCategoryFilter = (categoryFilter: string) => {
    if (categoryFilters.includes(categoryFilter)) {
      setCategoryFilters(
        categoryFilters.filter((category) => category !== categoryFilter)
      );
    } else {
      setCategoryFilters([...categoryFilters, categoryFilter]);
    }
  };

  const isInCategoryFilter = (categoryName: string) => {
    return categoryFilters.includes(categoryName);
  };

  const getFilteredProjects = (dataProjects: Project[]) => {
    if (!dataProjects) return [];
    if (categoryFilters.length === 0) return dataProjects;

    const projects = dataProjects.map((project) => {
      if (categoryFilters.includes(project.category)) {
        return project;
      }
    });

    return projects.filter((project) => project !== undefined);
  };

  return {
    dataProjects,
    getFilteredProjects,
    getNotTopFeaturedProject,
    getTopFeaturedProject,
    isLoadingProjects,

    handleCategoryFilter,
    isInCategoryFilter,
    categoryFilters,
  };
};

export default useProject;
