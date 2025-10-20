// services/blogService.ts
import { createClient } from "@supabase/supabase-js";
import { BlogPost } from "@/models/post";
import { Author } from "@/models/author";
import { BlogCardDTO } from "@/dtos/BlogCardDTO";

const client = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
);

// --- 1. Fetch tất cả bài viết kèm tác giả ---
export async function fetchBlogCards(): Promise<BlogCardDTO[]> {
  const { data, error } = await client.from("blog_post").select(
    `
      id,
      title,
      excerpt,
      category,
      date,
      readTime,
      image,
      likes,
      comments,
      featured,
      author:author_id (id, name, initials, avatar, bio, role)
      `
  );

  if (error) throw error;

  return (data as any[]).map((row) => ({
    ...row,
    author: row.author as Author,
  }));
}

// --- 2. Fetch 1 bài cụ thể ---
// export async function fetchBlogCardById(
//   id: number
// ): Promise<BlogCardDTO | null> {
//   const { data, error } = await client
//     .from("blog_post")
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
