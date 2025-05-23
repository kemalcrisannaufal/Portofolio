export interface Project {
  id?: string;
  name: string;
  slug: string;
  thumbnail: string;
  images?: string[];
  category: string;
  description: string;
  link?: string;
  github?: string;
  details?: string[];
  techStacks: string[];
  isTopFeatured: boolean;
  createdAt?: Date;
  updatedAt?: Date;
}
