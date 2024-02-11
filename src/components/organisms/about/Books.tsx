'use client';

import Image from 'next/image';
import * as React from 'react';

import { Book } from '../../../../../martacodes.it-restruct/src/types/Book';
import { sortBy } from '../../../lib/objecUtils';

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

      <ul className='scroll-mandatory relative -mx-4 flex w-[100vw] snap-x gap-3 overflow-x-auto px-4 pb-6 dark:bg-slate-900 md:mx-0 md:w-full md:px-0'>
        {books.map((book, id) => (
          <li
            key={id}
            className='mt-2 h-[168px] w-[120px] shrink-0 snap-center overflow-hidden rounded-lg bg-transparent p-1 transition-all hover:bg-gradient-to-r hover:from-blue-300 hover:to-blue-600'
          >
            <a
              href={book.goodreadsLink}
              target='_blank'
              rel='noopener noreferrer'
            >
              <Image
                className='rounded-md'
                alt={book.title}
                src={book.cover}
                width={114}
                height={114}
              />
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Books;
