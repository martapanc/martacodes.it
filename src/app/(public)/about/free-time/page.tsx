import * as React from 'react';

import Books from '@/components/organisms/about-free-time/Books';

import { booksQuery } from '@/queries/books';

import { sanityClient } from '../../../../../sanity/lib/client';

import { Book } from '@/types/Book';

export const metadata = {
  title: 'About my Free Time | MartaCodes.it',
  description: 'About page',
};

const getData = async () => {
  const books: Book[] = await sanityClient.fetch(booksQuery);

  return {
    books,
  };
};

const AboutFreeTimePage = async () => {
  const { books } = await getData();

  return (
    <main className='min-h-main'>
      <section className='dark:bg-dark bg-white'>
        <div className='layout relative flex flex-col py-12'>
          <h1 className='mb-5'>Free Time</h1>

          <div className='mb-5'>
            <p>
              Programming means great fun for me, but it's not the only activity
              I enjoy. <br />
              Here's an overview of non-computer related things I love doing in
              my free time :)
            </p>
          </div>

          <Books books={books} />
        </div>
      </section>
    </main>
  );
};

export default AboutFreeTimePage;
