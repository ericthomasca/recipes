export {};

declare global {
  interface Recipe {
    id: string;
    title: string;
    slug: string;
    image_url: string;
    ingredients: string[];
    instructions: string[];
    yield: string;
    date_added: string;
  }
}
