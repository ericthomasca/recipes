"use client";

import { useState, ChangeEvent } from "react";
import recipes, { Recipe } from "@/data";
import Link from "next/link";
import Image from "next/legacy/image";

export default function Navbar() {
  const [searchQuery, setSearchQuery] = useState<string>("");

  const handleSearchChange = (event: ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(event.target.value);
  };

  const handleResultClick = () => {
    setSearchQuery("");
  };

  const filteredRecipes =
    searchQuery.trim() !== ""
      ? recipes.filter((recipe: Recipe) => {
          return recipe.title.toLowerCase().includes(searchQuery.toLowerCase());
        })
      : [];

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
          {filteredRecipes.length > 0 && (
            <div className='absolute top-full left-0 w-full bg-white border border-gray-200 dark:bg-gray-800 dark:border-gray-600 rounded-b-lg z-10'>
              {filteredRecipes.map((recipe: Recipe) => (
                <Link key={recipe.id} href={`/recipes/${recipe.slug}`} passHref>
                  <div
                    className='flex items-center p-2 border-b border-gray-200 cursor-pointer hover:bg-gray-100 dark:hover:bg-gray-700'
                    onClick={handleResultClick}
                  >
                    <Image
                      src={recipe.imageUrl}
                      alt={recipe.title}
                      width={48}
                      height={48}
                    />
                    <span className='text-sm text-gray-900 dark:text-white'>
                      {recipe.title}
                    </span>
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
