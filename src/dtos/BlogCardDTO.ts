import { AuthorMeta } from "@/models/author";
import { CategoryMeta } from "@/models/category";

export interface BlogCardDTO {
  id: number;
  title: string;
  excerpt: string;
  author: AuthorMeta;
  category: CategoryMeta;
  date: string;
  readTime: string;
  image: string;
  likes?: number;
  comments?: number;
  featured?: boolean;
}
