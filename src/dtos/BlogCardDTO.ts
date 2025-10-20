import { Author } from "@/models/author";

export interface BlogCardDTO {
  id: number;
  title: string;
  excerpt: string;
  author: Author;
  category: string;
  date: string;
  readTime: string;
  image: string;
  likes?: number;
  comments?: number;
  featured?: boolean;
}
