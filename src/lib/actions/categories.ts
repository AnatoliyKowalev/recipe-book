import { TypeContentfulCategory } from "@/types/categories";
import { getClient } from "../client";

export async function getCategories() {
  const client = getClient();

  const entries = await client.getEntries({
    content_type: "category",
  });

  return entries.items as unknown as TypeContentfulCategory[];
}
