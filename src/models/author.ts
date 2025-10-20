import { createClient } from "@/utils/supabase/client";

export interface Author {
  id: string;
  name: string;
  initials: string;
  avatar?: string;
  bio?: string;
  role?: string;
}

export async function getAllAuthor() {
  const client = createClient();

  const author = await client.from("author").select();

  return author.data;
}

export async function getAuthorById(id: string) {
  const client = createClient();

  const author = await client.from("author").select().eq("id", id).single();

  return author.data;
}
