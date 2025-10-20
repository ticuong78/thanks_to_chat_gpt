import { Author } from "@/models/author";
import { Category } from "@/models/category";

export interface BlogCardDTO {
  id: number;
  title: string;
  excerpt: string;
  author: Author;
  category: Category;
  date: string;
  readTime: string;
  image: string;
  likes?: number;
  comments?: number;
  featured?: boolean;
}
