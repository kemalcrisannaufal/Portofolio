import { Project } from "@/types/project";

/* eslint-disable @typescript-eslint/no-explicit-any */
const sortDataByDate = (data: any[], key: string) =>
  data.sort(
    (a: any, b: any) => new Date(a[key]).getTime() - new Date(b[key]).getTime()
  );

const sortedProjects = (dataProjects: Project[]) => {
  return (
    dataProjects
      ?.slice()
      .sort((a, b) => Number(b.isTopFeatured) - Number(a.isTopFeatured)) || []
  );
};

export { sortDataByDate, sortedProjects };
