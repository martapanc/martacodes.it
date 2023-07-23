import * as React from 'react';

import Books from '@/components/organisms/about-free-time/Books';
import Podcasts from '@/components/organisms/about-free-time/Podcasts';

import { booksQuery } from '@/queries/books';
import { podcastsQuery } from '@/queries/podcasts';

import { sanityClient } from '../../../../../sanity/lib/client';

import { Book } from '@/types/Book';
import { Podcast } from '@/types/Podcast';

export const metadata = {
  title: 'About my Free Time | MartaCodes.it',
  description: 'About page',
};

const getData = async () => {
  const books: Book[] = await sanityClient.fetch(booksQuery);

  const podcasts: Podcast[] = await sanityClient.fetch(podcastsQuery);

  return {
    books,
    podcasts,
  };
};

const AboutFreeTimePage = async () => {
  const { books, podcasts } = await getData();

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

          <Podcasts podcasts={podcasts} />
        </div>
      </section>
    </main>
  );
};

export default AboutFreeTimePage;
