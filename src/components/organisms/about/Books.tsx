'use client';


import * as React from 'react';

import { sortBy } from '@/lib/objecUtils';

import type { Book } from '@/types/Book';

export interface BookProps {
  books: Book[];
}

const Books = ({ books }: BookProps) => {
  books.sort(sortBy<Book>('author'));

  return (
    <div className='mb-6'>
      <div className='my-2 flex'>
        <h2>Best books ever written</h2>
      </div>

      <ul className='scroll-mandatory relative -mx-4 flex w-screen snap-x gap-3 overflow-x-auto px-4 pb-6 dark:bg-slate-900 md:mx-0 md:w-full md:px-0'>
        {books.map((book, id) => (
          <li
            key={id}
            className='mt-2 h-41.5 w-30 shrink-0 snap-center overflow-hidden rounded-lg bg-transparent p-1 transition-all hover:bg-linear-to-r hover:from-blue-300 hover:to-blue-600'
          >
            <a
              href={book.goodreadsLink}
              target='_blank'
              rel='noopener noreferrer'
              className='block'
            >
              <img
                className='aspect-5/7 w-full rounded-md object-cover'
                alt={book.title}
                src={book.cover}
                width={112}
                height={160}
              />
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Books;
