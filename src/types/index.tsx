export type Project = {
  id?: string;
  name: string;
  thumbnail: string;
  images?: string[];
  category: string;
  description: string;
  link?: string;
  github?: string;
  details?: string[];
  techStacks: string[];
  createdAt?: Date;
  updatedAt?: Date;
};
