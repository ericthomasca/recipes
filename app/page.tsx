import Image from "next/image";

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-between p-24">
      {/* Top Menu Bar */}
      <div className="flex w-full justify-between items-center mb-8">
        <h1 className="text-3xl font-semibold">Recipes</h1>
      </div>
    </main>
  );
}
