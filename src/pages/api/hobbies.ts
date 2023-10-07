import { NextApiRequest, NextApiResponse } from 'next';

import { queryBooks } from '@/queries/books';
import { queryPodcasts } from '@/queries/podcasts';
import { queryTvShows } from '@/queries/tv-shows';
import { queryVideoGames } from '@/queries/video-games';

import { Book } from '@/types/Book';
import { Podcast } from '@/types/Podcast';
import { TvShow } from '@/types/TvShow';
import { VideoGame } from '@/types/VideoGame';

const hobbiesApi = async (req: NextApiRequest, res: NextApiResponse) => {
  const books: Book[] = await queryBooks();

  const podcasts: Podcast[] = await queryPodcasts();

  const tvShows: TvShow[] = await queryTvShows();

  const videoGames: VideoGame[] = await queryVideoGames();

  res.status(200).json({
    books,
    podcasts,
    tvShows,
    videoGames,
  });
};

export default hobbiesApi;
