import * as React from 'react';

import Books from '@/components/organisms/about-free-time/Books';
import Podcasts from '@/components/organisms/about-free-time/Podcasts';
import TvSeries from '@/components/organisms/about-free-time/TvSeries';
import VideoGames from '@/components/organisms/about-free-time/VideoGames';

import { booksQuery } from '@/queries/books';
import { podcastsQuery } from '@/queries/podcasts';
import { tvSeriesQuery } from '@/queries/tv-series';
import { videoGamesQuery } from '@/queries/video-games';

import { sanityClient } from '../../../../../sanity/lib/client';

import { Book } from '@/types/Book';
import { Podcast } from '@/types/Podcast';
import { TvShow } from '@/types/TvSeries';
import { VideoGame } from '@/types/VideoGame';

export const metadata = {
  title: 'About my Free Time | MartaCodes.it',
  description: 'About page',
};

const getData = async () => {
  const books: Book[] = await sanityClient.fetch(booksQuery);

  const podcasts: Podcast[] = await sanityClient.fetch(podcastsQuery);

  const tvSeries: TvShow[] = await sanityClient.fetch(tvSeriesQuery);

  const videoGames: VideoGame[] = await sanityClient.fetch(videoGamesQuery);

  return {
    books,
    podcasts,
    tvSeries,
    videoGames,
  };
};

const AboutFreeTimePage = async () => {
  const { books, podcasts, tvSeries, videoGames } = await getData();

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

          <VideoGames videoGames={videoGames} />

          <TvSeries tvSeries={tvSeries} />
        </div>
      </section>
    </main>
  );
};

export default AboutFreeTimePage;
