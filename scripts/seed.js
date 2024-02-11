const { db } = require("@vercel/postgres");
const { recipes } = require("../scripts/data.js");

async function seedRecipes(client) {
  try {
    await client.sql`CREATE EXTENSION IF NOT EXISTS "uuid-ossp"`;
    // Create the "recipes" table if it doesn't exist
    const createTable = await client.sql`
      CREATE TABLE IF NOT EXISTS recipes (
        id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
        title TEXT NOT NULL,
        slug TEXT NOT NULL UNIQUE,
        image_url TEXT NOT NULL,
        ingredients TEXT[] NOT NULL,
        instructions TEXT[] NOT NULL,
        yield TEXT NOT NULL,
        date_added TEXT DEFAULT TO_CHAR(CURRENT_DATE, 'YYYY-MM-DD')
      );
    `;

    console.log(`Created "recipes" table`);

    // Insert data into the "recipes" table
    const insertedRecipes = await Promise.all(
      recipes.map(async (recipe) => {
        return client.sql`
          INSERT INTO recipes (title, slug, image_url, ingredients, instructions, yield)
          VALUES (
            ${recipe.title},
            ${recipe.slug},
            ${recipe.imageUrl},
            ${recipe.ingredients},
            ${recipe.instructions},
            ${recipe.yield}
          )
          ON CONFLICT (id) DO NOTHING;
        `;
      })
    );

    console.log(`Seeded ${insertedRecipes.length} recipes`);

    return {
      createTable,
      recipes: insertedRecipes,
    };
  } catch (error) {
    console.error("Error seeding recipes:", error);
    throw error;
  }
}

async function main() {
  const client = await db.connect();

  await seedRecipes(client);

  await client.end();
}

main().catch((err) => {
  console.error(
    "An error occurred while attempting to seed the database:",
    err
  );
});
