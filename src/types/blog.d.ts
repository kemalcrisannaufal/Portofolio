import { BlogComment } from "./comment";

export interface Blog {
  id?: string;
  title: string;
  slug: string;
  content: string;
  thumbnail: string;
  category: string[];
  visibility: string;
  topFeatured: boolean;
  comments: BlogComment[];
  createdAt: Date;
  updatedAt: Date;
}
