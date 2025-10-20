import { BlogPost } from "@/models/post";
import { Author, getAuthorById } from "@/models/author";
import { BlogCardDTO } from "@/dtos/BlogCardDTO";
import { Category, getCategoryById } from "@/models/category";
import { createClient } from "@/utils/supabase/client";

const client = createClient();

// --- 1. Fetch tất cả bài viết kèm tác giả ---
export async function fetchBlogCards(): Promise<BlogCardDTO[]> {
  const { data, error } = await client.from("post_meta").select(`
    id,
    title,
    excerpt,
    date,
    readTime,
    image,
    likes,
    comments,
    featured,
    author_id,
    category_id
  `);

  if (error) throw error;
  const returning_data = await Promise.all(
    (data as any[]).map(async (row) => ({
      ...row,
      author: await getAuthorById(row.author_id),
      category: await getCategoryById(row.category_id),
    }))
  );

  return returning_data;
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
