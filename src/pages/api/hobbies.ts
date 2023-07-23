import { NextApiRequest, NextApiResponse } from 'next';

import { booksQuery } from '@/queries/books';

import { sanityClient } from '../../../sanity/lib/client';

import { Book } from '@/types/Book';

const hobbiesApi = async (req: NextApiRequest, res: NextApiResponse) => {
  const books: Book[] = await sanityClient.fetch(booksQuery);

  res.status(200).json({
    books,
  });
};

export default hobbiesApi;
