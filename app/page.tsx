import { Recipe } from '../data'; 
import recipes from '../data'; 
import RecipeCard from '../components/RecipeCard'; 

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-between p-12 h-screen bg-gray-800">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-12">
        {recipes.map((recipe: Recipe) => (
          <RecipeCard key={recipe.id} recipe={recipe} />
        ))}
      </div>
    </main>
  );
}
