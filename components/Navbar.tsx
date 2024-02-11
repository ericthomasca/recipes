"use client";

import { useState, ChangeEvent } from "react";
import Link from "next/link";
import Image from "next/image";
import { fetchRecipes } from "@/app/lib/data";
import SearchResultItem from "@/components/SearchResultItem";

export default function Navbar() {
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [searchResults, setSearchResults] = useState<Recipe[]>([]);

  const handleSearchChange = async (event: ChangeEvent<HTMLInputElement>) => {
    const query = event.target.value;
    setSearchQuery(query);
    if (query.trim() !== "") {
      try {
        const recipes = await fetchRecipes();
        const filteredRecipes = recipes.filter((recipe) =>
          recipe.title.toLowerCase().includes(query.toLowerCase())
        );
        setSearchResults(filteredRecipes);
      } catch (error) {
        console.error("Error fetching recipes:", error);
      }
    } else {
      setSearchResults([]);
    }
  };

  const handleResultClick = () => {
    setSearchQuery("");
    setSearchResults([]);
  };

  return (
    <nav className='bg-white border-gray-200 dark:bg-gray-900'>
      <div className='max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4'>
        <div className='flex items-center justify-center w-full sm:w-auto mb-4 sm:mb-0'>
          <Link
            href='/'
            className='flex items-center space-x-3 rtl:space-x-reverse'
          >
            <Image src='/logo.png' alt='Recipes Logo' width={32} height={32} />
            <span className='self-center text-2xl font-semibold whitespace-nowrap dark:text-white'>
              Recipes
            </span>
          </Link>
        </div>
        <div className='flex md:order-2 w-full sm:w-auto relative'>
          <div className='relative w-full sm:w-auto'>
            <div className='absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none dark:text-gray-400'>
              {/* Search Icon */}
              <svg
                xmlns='http://www.w3.org/2000/svg'
                fill='none'
                viewBox='0 0 24 24'
                strokeWidth={1.5}
                stroke='currentColor'
                className='w-6 h-6'
              >
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  d='m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z'
                />
              </svg>
              <span className='sr-only'>Search icon</span>
            </div>
            <input
              type='text'
              id='search-navbar'
              className='block w-full sm:w-auto p-2 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'
              placeholder='Search...'
              value={searchQuery}
              onChange={handleSearchChange}
            />
          </div>
          {/* Search Results */}
          {searchResults.length > 0 && (
            <div className='absolute top-full left-0 w-full bg-white border border-gray-200 dark:bg-gray-800 dark:border-gray-600 rounded-b-lg z-10'>
              {searchResults.map((recipe: Recipe) => (
                <SearchResultItem
                  key={recipe.id}
                  recipe={recipe}
                  onClick={handleResultClick}
                />
              ))}
            </div>
          )}
        </div>
      </div>
    </nav>
  );
}
