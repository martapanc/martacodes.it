import { NextApiRequest, NextApiResponse } from 'next';

import { booksQueryQL } from '@/queries/books';
import { podcastsQueryQL } from '@/queries/podcasts';
import { tvShowsQueryQL } from '@/queries/tv-shows';
import { videoGamesQueryQL } from '@/queries/video-games';
import { Book } from '@/sanityTypes/Book';
import { Podcast } from '@/sanityTypes/Podcast';
import { TvShow } from '@/sanityTypes/TvSeries';
import { VideoGame } from '@/sanityTypes/VideoGame';

import { sanityClient } from '../../../sanity/lib/client';

const hobbiesApi = async (req: NextApiRequest, res: NextApiResponse) => {
  const books: Book[] = await sanityClient.fetch(booksQueryQL);

  const podcasts: Podcast[] = await sanityClient.fetch(podcastsQueryQL);

  const tvShows: TvShow[] = await sanityClient.fetch(tvShowsQueryQL);

  const videoGames: VideoGame[] = await sanityClient.fetch(videoGamesQueryQL);

  res.status(200).json({
    books,
    podcasts,
    tvShows,
    videoGames,
  });
};

export default hobbiesApi;
