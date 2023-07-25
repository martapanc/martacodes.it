import { NextApiRequest, NextApiResponse } from 'next';

import { booksQuery } from '@/queries/books';
import { podcastsQuery } from '@/queries/podcasts';
import { tvSeriesQuery } from '@/queries/tv-series';
import { videoGamesQuery } from '@/queries/video-games';

import { sanityClient } from '../../../sanity/lib/client';

import { Book } from '@/types/Book';
import { Podcast } from '@/types/Podcast';
import { TvShow } from '@/types/TvSeries';
import { VideoGame } from '@/types/VideoGame';

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
