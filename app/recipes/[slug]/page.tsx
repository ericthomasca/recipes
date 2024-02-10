import recipes, { Recipe } from "@/data";
import { notFound } from "next/navigation";

export default async function Page({ params }: { params: { slug: string } }) {
  const slug = params.slug;

  const recipe: Recipe | undefined = recipes.find(
    (recipe) => recipe.slug === slug
  );

  if (!recipe) {
    notFound();
  }

  return (
    <main className='container mx-auto px-4 py-8'>
      <div className='max-w-4xl mx-auto'>
        <h1 className='text-3xl font-bold mb-4'>{recipe.title}</h1>
        <img
          className='w-full rounded-lg mb-4'
          src={recipe.imageUrl}
          alt={recipe.title}
        />
        <div className='mb-4'>
          <h2 className='text-xl font-bold mb-2'>Ingredients</h2>
          <ul className='list-disc pl-5'>
            {recipe.ingredients.map((ingredient, index) => (
              <li key={index} className='mb-1'>
                {ingredient}
              </li>
            ))}
          </ul>
        </div>
        <div className='mb-4'>
          <h2 className='text-xl font-bold mb-2'>Instructions</h2>
          <ol className='list-decimal pl-5'>
            {recipe.instructions.map((instruction, index) => (
              <li key={index} className='mb-1'>
                {instruction}
              </li>
            ))}
          </ol>
        </div>
        <p className='text-lg'>
          <strong>Yield:</strong> {recipe.yield}
        </p>
      </div>
    </main>
  );
}
