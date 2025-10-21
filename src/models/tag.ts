export interface Tag {
  id: number;
  name: string;
  description?: string;
  category_id: number;
}

export type TagMeta = Omit<Tag, "id">;
