import { Author, AuthorMeta } from "@/models/author";
import { Category, CategoryMeta } from "@/models/category";
import { BlogPostMeta } from "@/models/post";
import { TagMeta } from "@/models/tag";

export type BlogPostWithRelations = BlogPostMeta & {
  author: Author;
  category: Category;
};

export interface BlogPostDTO {
  post_id: number;
  content: string;
  post_meta: BlogPostWithRelations;
}

export interface BlogTagDTo {
  post_id: number;
  tag: TagMeta;
}
