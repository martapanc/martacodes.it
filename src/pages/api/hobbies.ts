import { NextApiRequest, NextApiResponse } from 'next';

import { booksQuery } from '@/queries/books';
import { podcastsQuery } from '@/queries/podcasts';

import { sanityClient } from '../../../sanity/lib/client';

import { Book } from '@/types/Book';
import { Podcast } from '@/types/Podcast';

const hobbiesApi = async (req: NextApiRequest, res: NextApiResponse) => {
  const books: Book[] = await sanityClient.fetch(booksQuery);

  const podcasts: Podcast[] = await sanityClient.fetch(podcastsQuery);

  res.status(200).json({
    books,
    podcasts,
  });
};

export default hobbiesApi;
