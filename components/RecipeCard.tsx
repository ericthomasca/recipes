import Link from "next/link";
import Image from "next/image";
import { Recipe } from "@/data";

interface RecipeCardProps {
  recipe: Recipe;
}

export default function RecipeCard({ recipe }: RecipeCardProps) {
  return (
    <Link href={`/recipes/${recipe.slug}`} legacyBehavior>
      <a className='block max-w-xs rounded overflow-hidden shadow-lg bg-white dark:bg-gray-700 text-gray-800 dark:text-gray-100 hover:shadow-xl transition duration-300'>
        <div className='relative h-56'>
          <Image
            src={recipe.imageUrl}
            alt={recipe.title}
            layout='fill'
            objectFit='cover'
          />
        </div>
        <div className='p-4'>
          <div className='font-bold text-xl mb-2 text-gray-800 dark:text-gray-100'>
            {recipe.title}
          </div>
        </div>
      </a>
    </Link>
  );
}
