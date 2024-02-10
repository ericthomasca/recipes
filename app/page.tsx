import recipes, { Recipe } from '@/data';
import RecipeCard from '@/components/RecipeCard';

export default function Home() {
  const sortedRecipes = recipes.slice().sort((a: Recipe, b: Recipe) => a.title.localeCompare(b.title));

  return (
    <main className="flex flex-col items-center justify-between p-12 lg:h-screen bg-gray-800">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-12">
        {sortedRecipes.map((recipe: Recipe) => (
          <RecipeCard key={recipe.id} recipe={recipe} />
        ))}
      </div>
    </main>
  );
}
