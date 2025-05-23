import projectServices from "@/services/projects";
import { Project } from "@/types/project";
import { useQuery } from "@tanstack/react-query";
import { useRouter } from "next/router";
import { useState } from "react";

const useProjectDetail = () => {
  const { query, isReady } = useRouter();
  const [selectedImage, setSelectedImage] = useState<number>(0);

  const getProjectById = async (): Promise<Project> => {
    const { data } = await projectServices.getProject(query.id as string);
    return data.data;
  };

  const { data: dataProject, isLoading: isLoadingProject } = useQuery({
    queryKey: ["ProjectDetail", query.id],
    queryFn: getProjectById,
    enabled: isReady,
  });

  return { dataProject, isLoadingProject, selectedImage, setSelectedImage };
};

export default useProjectDetail;
