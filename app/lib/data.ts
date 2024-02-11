import { sql } from "@vercel/postgres";
import { unstable_noStore as noStore } from "next/cache";

export async function fetchRecipes() {
  noStore();

  try {
    const data = await sql<Recipe>`SELECT * FROM recipes`;
    return data.rows;
  } catch (error) {
    console.error("Database Error:", error);
    throw new Error("Failed to fetch revenue data.");
  }
}

export async function fetchRecipeBySlug(slug: string) {
    noStore();
  
    try {
      const data = await sql<Recipe>`SELECT * FROM recipes WHERE slug = ${slug}`;
      return data.rows[0]; 
    } catch (error) {
      console.error("Database Error:", error);
      throw new Error("Failed to fetch recipe by slug.");
    }
  }
