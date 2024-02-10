import Image from "next/image";
import recipes, { Recipe } from "../../../data";
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
    <main className=" mx-auto px-4 py-8 bg-gray-800 min-h-screen">
      <div className="max-w-4xl mx-auto w-full">
        <h1 className="text-3xl font-bold mb-4 text-white">{recipe.title}</h1>
        <Image
          className="rounded-lg mb-4"
          src={recipe.imageUrl}
          alt={recipe.title}
          width={600}
          height={400}
        />
        <div className="mb-4 text-white">
          <h2 className="text-xl font-bold mb-2">Ingredients</h2>
          <ul className="list-disc pl-5">
            {recipe.ingredients.map((ingredient, index) => (
              <li key={index} className="mb-1">
                {ingredient}
              </li>
            ))}
          </ul>
        </div>
        <div className="mb-4 text-white">
          <h2 className="text-xl font-bold mb-2">Instructions</h2>
          <ol className="list-decimal pl-5">
            {recipe.instructions.map((instruction, index) => (
              <li key={index} className="mb-1">
                {instruction}
              </li>
            ))}
          </ol>
        </div>
        <p className="text-lg text-white">
          <strong>Yield:</strong> {recipe.yield}
        </p>
      </div>
    </main>
  );
}
