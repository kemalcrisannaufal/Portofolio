export type Blog = {
  id?: string;
  title: string;
  slug: string;
  content: string;
  thumbnail: string;
  category: string[];
  visibility: string;
  topFeatured: boolean;
  createdAt: Date;
  updatedAt: Date;
};
