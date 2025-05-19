import { db } from "@/firebaseConfig";
import { TypeCategory } from "@/types/categories";
import { collection, getDocs } from "firebase/firestore";

export async function GET() {
  try {
    const categoriesCollection = collection(db, "categories");
    const categoriesSnapshot = await getDocs(categoriesCollection);

    const categories = categoriesSnapshot.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
    })) as TypeCategory[];

    return new Response(JSON.stringify(categories), { status: 200 });
  } catch {
    return new Response(
      JSON.stringify({ error: "Failed to fetch categories" }),
      {
        status: 500,
      }
    );
  }
}
