import { AuthorMeta } from "@/models/author";
import { CategoryMeta } from "@/models/category";
import { BlogPostMeta } from "@/models/post";
import { TagMeta } from "@/models/tag";

export type BlogPostWithRelations = BlogPostMeta & {
  author: AuthorMeta;
  category: CategoryMeta;
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
