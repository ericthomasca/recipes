import RecipeGrid from '@/components/RecipeGrid';

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-between p-12 lg:h-screen bg-gray-800">
      <RecipeGrid />
    </main>
  );
}
