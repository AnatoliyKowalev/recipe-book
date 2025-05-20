import { TypeContentfulCategory } from "@/types/categories";
import { getClient } from "../client";

export async function getCategories() {
  try {
    const client = getClient();

    const entries = await client.getEntries({
      content_type: "category",
    });

    return entries.items as unknown as TypeContentfulCategory[];
  } catch (err) {
    console.error("Error fetching categories:", err);

    return [];
  }
}

// export async function getCategory(
//   id: string
// ): Promise<TypeContentfulCategory | null> {
//   const client = getClient();

//   try {
//     const entry = await client.getEntry(id);

//     return entry as unknown as TypeContentfulCategory;
//   } catch (error) {
//     console.error("Error fetching category by id:", error);
//     return null;
//   }
// }
