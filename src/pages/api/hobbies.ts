import { NextApiRequest, NextApiResponse } from 'next';

import { booksQuery } from '@/queries/books';
import { podcastsQuery } from '@/queries/podcasts';
import { tvSeriesQuery } from '@/queries/tv-series';
import { videoGamesQuery } from '@/queries/video-games';
import { Book } from '@/sanityTypes/Book';
import { Podcast } from '@/sanityTypes/Podcast';
import { TvShow } from '@/sanityTypes/TvSeries';
import { VideoGame } from '@/sanityTypes/VideoGame';

import { sanityClient } from '../../../sanity/lib/client';

const hobbiesApi = async (req: NextApiRequest, res: NextApiResponse) => {
  const books: Book[] = await sanityClient.fetch(booksQuery);

  const podcasts: Podcast[] = await sanityClient.fetch(podcastsQuery);

  const tvSeries: TvShow[] = await sanityClient.fetch(tvSeriesQuery);

  const videoGames: VideoGame[] = await sanityClient.fetch(videoGamesQuery);

  res.status(200).json({
    books,
    podcasts,
    tvSeries,
    videoGames,
  });
};

export default hobbiesApi;
