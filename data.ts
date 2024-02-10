export interface Recipe {
    id: number;
    title: string;
    slug: string;
    imageUrl: string;
    ingredients: string[];
    instructions: string[];
    yield: string;
  }
  
  const recipes: Recipe[] = [
    {
      id: 1,
      title: 'Seed Cookies',
      slug: 'seed-cookies',
      imageUrl: '/img/seed-cookies.jpg',
      ingredients: [
        "2 cups unbleached flour",
        "2 teaspoons baking powder",
        "2 teaspoons baking soda",
        "1 cup raisins",
        "1/2 cup sesame seeds",
        "1 cup flax seed",
        "1/2 cup sunflower seeds",
        "1/2 cup pumpkin seeds",
        "1/2 cup poppy seeds",
        "1 1/2 cups rolled oats",
        "1/2 cup shredded coconut",
        "1 1/2 cups chocolate chips",
        "2 cups brown sugar",
        "1 cup unsalted butter, melted",
        "2 large eggs",
        "1 teaspoon vanilla extract"
      ],
      instructions: [
        "Preheat the oven to 350°F (175°C) and line baking sheets with parchment paper.",
        "In a large mixing bowl, combine the first 12 ingredients.",
        "In another large bowl, beat together the brown sugar, melted butter, eggs, and vanilla extract until smooth.",
        "Gradually add the dry ingredients into the wet mixture, stirring until evenly combined.",
        "Roll the cookie dough into balls and place them on the prepared baking sheets. Flatten each ball with a fork or the bottom of a glass dipped in granulated sugar.",
        "Bake the cookies for 10 to 12 minutes, or until they are lightly golden brown.",
        "Allow the cookies to cool on the baking sheets for a few minutes before transferring them to a wire rack to cool completely."
      ],
      yield: "Approximately 7 dozen cookies"
    },
    {
      id: 2,
      title: 'Chocolate Chip Cookies',
      slug: 'chocolate-chip-cookies',
      imageUrl: '/img/chocolate-chip-cookies.jpg',
      ingredients: [
        "1 cup (2 sticks) unsalted butter, softened",
        "3/4 cup granulated sugar",
        "3/4 cup packed brown sugar",
        "2 large eggs",
        "1 teaspoon vanilla extract",
        "2 1/4 cups all-purpose flour",
        "1 teaspoon baking soda",
        "1/2 teaspoon salt",
        "2 cups semisweet chocolate chips"
      ],
      instructions: [
        "Preheat your oven to 375°F (190°C). Line baking sheets with parchment paper.",
        "In a large mixing bowl, cream together the softened butter, granulated sugar, and brown sugar until light and fluffy.",
        "Beat in the eggs one at a time, then stir in the vanilla extract.",
        "In a separate bowl, whisk together the flour, baking soda, and salt.",
        "Gradually add the dry ingredients to the wet ingredients, mixing until well combined.",
        "Fold in the chocolate chips until evenly distributed throughout the dough.",
        "Drop rounded tablespoons of dough onto the prepared baking sheets, spacing them about 2 inches apart.",
        "Bake in the preheated oven for 8 to 10 minutes, or until the edges are lightly golden.",
        "Allow the cookies to cool on the baking sheet for a few minutes before transferring them to a wire rack to cool completely.",
        "Enjoy your delicious homemade chocolate chip cookies!"
      ],
      yield: "About 3 dozen cookies"
    },
    {
      id: 3,
      title: 'Chicken Noodle Soup',
      slug: 'chicken-noodle-soup',
      imageUrl: '/img/chicken-noodle-soup.jpg',
      ingredients: [
        "8 cups chicken broth",
        "2 cups chopped cooked chicken",
        "1 cup chopped carrots",
        "1/2 cup chopped celery",
        "1/4 cup chopped onion",
        "1 teaspoon dried thyme",
        "1/2 teaspoon dried rosemary",
        "1/2 teaspoon salt",
        "1/4 teaspoon black pepper",
        "2 cups uncooked egg noodles"
      ],
      instructions: [
        "In a large pot, combine chicken broth, chicken, carrots, celery, onion, thyme, rosemary, salt, and pepper.",
        "Bring to a boil, then reduce heat and simmer for 20 minutes.",
        "Stir in the egg noodles and simmer for an additional 10 minutes, or until noodles are tender.",
        "Serve hot and enjoy!"
      ],
      yield: "4 servings"
    },
    {
      id: 4,
      title: 'Meatloaf',
      slug: 'meatloaf',
      imageUrl: '/img/meatloaf.jpg',
      ingredients: [
        "1 1/2 pounds ground beef",
        "1 egg",
        "1 onion, chopped",
        "1 cup milk",
        "1 cup dried bread crumbs",
        "salt and pepper to taste",
        "2 tablespoons brown sugar",
        "2 tablespoons prepared mustard",
        "1/3 cup ketchup"
      ],
      instructions: [
        "Preheat oven to 350 degrees F (175 degrees C).",
        "In a large bowl, combine the beef, egg, onion, milk and bread crumbs. Season with salt and pepper to taste and place in a lightly greased 5x9 inch loaf pan, or form into a loaf and place in a lightly greased 9x13 inch baking dish.",
        "In a separate small bowl, combine the brown sugar, mustard and ketchup. Mix well and pour over the meatloaf.",
        "Bake at 350 degrees F (175 degrees C) for 1 hour."
      ],
      yield: "6 servings"
    }
  ];
  
  export default recipes;
  