import { getClient } from "../client";
import { TypeContentfulRecipe } from "@/types/recipes";

export async function getRecipesByCategoryId(
  categoryId: string
): Promise<TypeContentfulRecipe[]> {
  const client = getClient();

  try {
    const entries = await client.getEntries({
      content_type: "recipe",
      "fields.category.sys.id": categoryId,
    });

    return entries.items as unknown as TypeContentfulRecipe[];
  } catch (error) {
    console.error("Error fetching recipes by category id:", error);
    return [];
  }
}

export async function getRecipeById(
  recipeId: string
): Promise<TypeContentfulRecipe | null> {
  const client = getClient();

  try {
    const recipe = await client.getEntry(recipeId);

    return recipe as unknown as TypeContentfulRecipe;
  } catch (error) {
    console.error("Error fetching recipes by category id:", error);
    return null;
  }
}
