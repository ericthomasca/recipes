import Link from "next/link";
import Image from "next/image";

interface RecipeCardProps {
  recipe: Recipe;
}

export default function RecipeCard({ recipe }: RecipeCardProps) {
  return (
    <Link href={`/recipes/${recipe.slug}`}>
      <div className='max-w-xs rounded overflow-hidden shadow-lg bg-white dark:bg-gray-700 text-gray-800 dark:text-gray-100 hover:shadow-xl transition duration-300 h-full'>
        <div className='relative h-56'>
          <Image
            src={recipe.image_url}
            alt={recipe.title}
            layout='fill'
            objectFit='cover'
            className="rounded-t-lg"
          />
        </div>
        <div className='p-4'>
          <div className='font-bold text-xl mb-2'>
            {recipe.title}
          </div>
        </div>
      </div>
    </Link>
  );
}
