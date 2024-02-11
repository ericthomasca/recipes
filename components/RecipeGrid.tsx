import { fetchRecipes } from "@/app/lib/data";
import RecipeCard from "./RecipeCard";

export default async function RecipeGrid() {
    const recipes = await fetchRecipes();
    const sortedRecipes = recipes.slice().sort((a: Recipe, b: Recipe) => a.title.localeCompare(b.title));

    return(
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-12">
        {sortedRecipes.map((recipe: Recipe) => (
          <div key={recipe.id} className="flex justify-center">
            <div className="w-full max-w-lg mx-auto">
              <RecipeCard recipe={recipe} />
            </div>
          </div>
        ))}
      </div>
    )
}
