'use client';

import { useState, ChangeEvent } from "react";
import recipes, { Recipe } from "@/data";
import Link from "next/link";

export default function Navbar() {
  const [searchQuery, setSearchQuery] = useState<string>('');

  const handleSearchChange = (event: ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(event.target.value);
  };

  const handleResultClick = () => {
    setSearchQuery('');
  };

  const filteredRecipes = searchQuery.trim() !== '' ? recipes.filter((recipe: Recipe) => {
    return recipe.title.toLowerCase().includes(searchQuery.toLowerCase());
  }) : [];

  return (
    <nav className='bg-white border-gray-200 dark:bg-gray-900'>
      <div className='max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4'>
        <div className="flex items-center justify-center w-full sm:w-auto mb-4 sm:mb-0">
          <Link
            href='/'
            className='flex items-center space-x-3 rtl:space-x-reverse'
          >
            <img src='/logo.png' className='h-8' alt='Recipes Logo' />
            <span className='self-center text-2xl font-semibold whitespace-nowrap dark:text-white'>
              Recipes
            </span>
          </Link>
        </div>
        <div className='flex md:order-2 w-full sm:w-auto relative'>
          <div className='relative w-full sm:w-auto'>
            <div className='absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none'>
              {/* Search Icon */}
              <svg
                className='w-4 h-4 text-gray-500 dark:text-gray-400'
                aria-hidden='true'
                xmlns='http://www.w3.org/2000/svg'
                fill='none'
                viewBox='0 0 20 20'
              >
                <path
                  stroke='currentColor'
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  strokeWidth='2'
                  d='m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z'
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
          {filteredRecipes.length > 0 && (
            <div className='absolute top-full left-0 w-full bg-white border border-gray-200 dark:bg-gray-800 dark:border-gray-600 rounded-b-lg z-10'>
              {filteredRecipes.map((recipe: Recipe) => (
                <Link key={recipe.id} href={`/recipes/${recipe.slug}`} passHref>
                  <div className='flex items-center p-2 border-b border-gray-200 cursor-pointer hover:bg-gray-100 dark:hover:bg-gray-700' onClick={handleResultClick}>
                    <img src={recipe.imageUrl} className='w-12 h-12 mr-4' alt={recipe.title} />
                    <span className='text-sm text-gray-900 dark:text-white'>{recipe.title}</span>
                  </div>
                </Link>
              ))}
            </div>
          )}
        </div>
      </div>
    </nav>
  );
}
