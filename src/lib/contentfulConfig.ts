import { TypeCar, TypeContentfulCar } from "@/types/cars";
import { getClient } from "./client";

export async function getCars(
  brand?: string,
  fuelTypes?: string[],
  page: number = 1,
  limit: number = 3
) {
  const client = getClient();

  const skip = (page - 1) * limit;

  const entries = await client.getEntries({
    content_type: "car",
    limit,
    skip,
    ...(brand && { "fields.brand": brand }),
    ...(fuelTypes?.length && { "fields.fuelType[in]": fuelTypes.join(",") }),
  });

  return {
    cars: entries.items as unknown as TypeContentfulCar[],
    total: entries.total,
    hasMore: skip + limit < entries.total,
  };
}

export async function getCarById(id: string) {
  try {
    const client = getClient();
    // Fetch the car entry by its unique ID
    const entry = await client.getEntry(id);

    return {
      car: entry.fields as TypeCar,
    };
  } catch (error) {
    console.error("Error fetching car by ID:", error);
    return null; // Return null if there's an error
  }
}
