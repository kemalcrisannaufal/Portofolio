import projectServices from "@/services/projects";
import { Project } from "@/types";
import { useEffect, useState } from "react";

export const useProject = () => {
  const [projects, setProjects] = useState<Project[]>([]);

  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const getAllProjects = async () => {
      setIsLoading(true);
      const { data } = await projectServices.getAllProjects();
      if (data) {
        const sortedProjects = data.data.sort((a: Project, b: Project) => {
          const dateA = new Date(a.createdAt || 0);
          const dateB = new Date(b.createdAt || 0);
          return dateB.getTime() - dateA.getTime();
        });
        setProjects(sortedProjects);
        setIsLoading(false);
      }
    };

    getAllProjects();
  }, []);

  return { projects, setProjects, isLoading };
};
