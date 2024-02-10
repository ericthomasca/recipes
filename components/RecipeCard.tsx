import Link from 'next/link';
import { Recipe } from '../data';

interface RecipeCardProps {
  recipe: Recipe;
}

export default function RecipeCard({ recipe }: RecipeCardProps) {
  return (
    <Link href={`/recipes/${recipe.slug}`} legacyBehavior>
      <a className="block max-w-xs rounded overflow-hidden shadow-lg bg-gray-100 dark:bg-gray-800 text-gray-800 dark:text-gray-100 hover:bg-gray-200 dark:hover:bg-gray-700 transition duration-300">
        <img className="w-full" src={recipe.imageUrl} alt={recipe.title} />
        <div className="p-4">
          <div className="font-bold text-2xl mb-1">{recipe.title}</div>
        </div>
      </a>
    </Link>
  );
}
