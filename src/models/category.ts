import { createClient } from "@/utils/supabase/client";

export interface Category {
  id: string;
  name: string;
  description?: string;
}

export type CategoryMeta = Omit<Category, "id">;

export async function getAllCategory() {
  const client = createClient();

  const category = await client.from("category").select("*");

  return category.data;
}

export async function getCategoryById(id: number) {
  const client = createClient();

  const category = await client.from("category").select().eq("id", id).single();

  return category.data;
}
