import { AuthorMeta } from "@/models/author";
import { BlogCardDTO } from "@/dtos/BlogCardDTO";
import { CategoryMeta } from "@/models/category";
import { createClient } from "@/utils/supabase/client";
import {
  BlogPostDTO,
  BlogPostWithRelations,
  BlogTagDTo,
} from "@/dtos/BlogPostDTO";
import { TagMeta } from "@/models/tag";
import { unwrapSingle } from "@/utils/helper/data";

const client = createClient();

export async function fetchBlogCardsByCategory(
  categoryName: string
): Promise<BlogCardDTO[]> {
  const { data, error } = await client
    .from("post_meta")
    .select(
      `
        id,
        title,
        excerpt,
        date,
        readTime,
        image,
        likes,
        comments,
        featured,
        author:author_id (
          name,
          initials,
          avatar,
          bio,
          role
        ),
        category:category_id (
          name,
          description
        )
      `
    )
    .eq("category_id.name", categoryName);

  if (error) {
    console.error("Error fetching posts by category:", error);
    throw error;
  }

  if (!data) return [];

  return (data as any[])
    .filter((item) => item.category?.name) // phòng null
    .map((item) => item as BlogCardDTO);
}

// --- 1. Fetch tất cả bài viết kèm tác giả ---
export async function fetchBlogCards(): Promise<BlogCardDTO[]> {
  const { data, error } = await client.from("post_meta").select(
    `
      id,
      title,
      excerpt,
      date,
      readTime,
      image,
      likes,
      comments,
      featured,
      author: author_id(
        name,
        initials,
        avatar,
        bio,
        role
      ),
      category: category_id(
        name,
        description
      )
    `
  );

  if (error) throw error;

  return (data as any[]).map((row) => ({
    ...row,
    author: row.author as AuthorMeta,
    category: row.category as CategoryMeta,
  }));
}

export async function fetchFullBlogTagsById(id: number): Promise<BlogTagDTo[]> {
  const { data, error } = await client
    .from("post_tag")
    .select(
      `
        post_id,
        tag: tag_id(
          name,
          description
        )
      `
    )
    .eq("post_id", id);

  if (error) throw error;

  return (data as any[]).map((item) => ({
    ...item,
    tag: item.tag as TagMeta,
  }));
}

export async function fetchBlogCardsByAuthor(
  authorId: string
): Promise<BlogCardDTO[]> {
  const { data, error } = await client
    .from("post_meta")
    .select(
      `
        id,
        title,
        excerpt,
        date,
        readTime,
        image,
        likes,
        comments,
        featured,
        author:author_id(
          name,
          initials,
          avatar,
          bio,
          role
        ),
        category:category_id(
          name,
          description
        )
      `
    )
    .eq("author_id", authorId); // 🔹 lọc theo tác giả

  if (error) {
    console.error("Error fetching posts by author:", error);
    throw error;
  }

  if (!data) return [];

  return (data as any[]).map((row) => ({
    id: row.id,
    title: row.title,
    excerpt: row.excerpt,
    date: row.date,
    readTime: row.readTime,
    image: row.image,
    likes: row.likes ?? 0,
    comments: row.comments ?? 0,
    featured: row.featured ?? false,
    author: (Array.isArray(row.author)
      ? row.author[0]
      : row.author) as AuthorMeta,
    category: (Array.isArray(row.category)
      ? row.category[0]
      : row.category) as CategoryMeta,
  }));
}

export async function fetchFullBlogById(id: number): Promise<BlogPostDTO> {
  const { data, error } = await client
    .from("post_content")
    .select(
      `
        post_id,
        content,
        post_meta: post_id(
          title,
          excerpt,
          date,
          readTime,
          image,
          likes,
          comments,
          featured,
          author: author_id(
            id,
            name,
            initials,
            avatar,
            bio,
            role
          ),
          category: category_id(
            id,
            name,
            description
          )
        )
      `
    )
    .eq("post_id", id)
    .single();

  if (error) throw error;
  if (!data) throw new Error("No post found");

  // unwrap one-to-one relations safely
  const rawMeta = unwrapSingle(data.post_meta);
  if (!rawMeta) throw new Error("Post meta missing");

  const author = unwrapSingle(rawMeta.author);
  const category = unwrapSingle(rawMeta.category);

  const post_meta: BlogPostWithRelations = {
    ...rawMeta,
    author: author ?? {
      id: "none",
      name: "Unknown Author",
      initials: "??",
      avatar: null,
      bio: null,
      role: null,
    },
    category: category ?? {
      id: "none",
      name: "Uncategorized",
      description: null,
    },
  };

  const post: BlogPostDTO = {
    post_id: data.post_id,
    content: data.content,
    post_meta,
  };

  return post;
}

// --- 2. Fetch 1 bài cụ thể ---
// export async function fetchBlogCardById(
//   id: number
// ): Promise<BlogCardDTO | null> {
//   const { data, error } = await client
//     .from("post_meta")
//     .select(
//       `
//       id,
//       title,
//       excerpt,
//       category,
//       date,
//       readTime,
//       image,
//       likes,
//       comments,
//       featured,
//       author:author_id (id, name, initials, avatar, bio, role)
//       `
//     )
//     .eq("id", id)
//     .single();

//   if (error && error.code === "PGRST116") return null;
//   if (error) throw error;

//   return data as BlogCardDTO;
// }
