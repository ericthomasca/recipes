import Link from "next/link";
import Image from "next/legacy/image";
import { Recipe } from "@/data";

interface SearchResultItemProps {
  recipe: Recipe;
  onClick: () => void;
}

export default function SearchResultItem({ recipe, onClick }: SearchResultItemProps) {
  return (
    <Link key={recipe.id} href={`/recipes/${recipe.slug}`} legacyBehavior>
      <div
        className='flex items-center p-2 border-b border-gray-200 cursor-pointer hover:bg-gray-100 dark:hover:bg-gray-700'
        onClick={onClick}
      >
        <Image
          src={recipe.imageUrl}
          alt={recipe.title}
          width={48}
          height={48}
          className='p-2 rounded'
        />
        <span className='px-4 text-sm text-gray-900 dark:text-white'>
          {recipe.title}
        </span>
      </div>
    </Link>
  );
}
