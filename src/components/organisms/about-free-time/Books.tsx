'use client';

import Image from 'next/image';
import * as React from 'react';

import { Book } from '@/types/Book';

export interface BookProps {
  books: Book[];
}

const Books = ({ books }: BookProps) => {
  return (
    <div className=''>
      <div className='m-2 flex'>
        <h2>Best books ever written</h2>
      </div>

      <ul className='scroll-mandatory relative -mx-4 flex w-[100vw] snap-x gap-4 overflow-x-auto px-4 pb-14 md:mx-0 md:w-full md:px-0'>
        {books.map((book) => (
          <li
            key={book._id}
            className='h-[128px] w-[100px] shrink-0 snap-center overflow-hidden rounded-lg bg-transparent p-1 transition-all hover:bg-gradient-to-r hover:from-blue-400 hover:to-blue-700'
          >
            <a
              href={book.goodreadsLink}
              target='_blank'
              rel='noopener noreferrer'
            >
              <Image alt={book.title} src={book.cover} width={90} height={90} />
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Books;
