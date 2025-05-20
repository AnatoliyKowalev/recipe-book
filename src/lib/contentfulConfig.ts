import { TypeCategory } from "@/types/categories";
import { getClient } from "./client";

// export async function getCategories() {
//   const client = getClient();

//   const entries = await client.getEntries({
//     content_type: "category",
//   });

//   return entries.items as unknown as TypeCategory[];
// }

// export async function getCarById(id: string) {
//   try {
//     const client = getClient();
//     // Fetch the car entry by its unique ID
//     const entry = await client.getEntry(id);

//     return {
//       car: entry.fields as TypeCar,
//     };
//   } catch (error) {
//     console.error("Error fetching car by ID:", error);
//     return null; // Return null if there's an error
//   }
// }
