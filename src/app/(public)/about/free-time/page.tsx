import * as React from 'react';

import { shuffleArray } from '@/lib/helper';

import { QuizData, QuizOption } from '@/components/molecules/RandomFacts/Quiz';
import Books from '@/components/organisms/about-free-time/Books';
import Music from '@/components/organisms/about-free-time/Music';
import Podcasts from '@/components/organisms/about-free-time/Podcasts';
import RandomFacts from '@/components/organisms/about-free-time/RandomFacts';
import TvSeries from '@/components/organisms/about-free-time/TvSeries';
import VideoGames from '@/components/organisms/about-free-time/VideoGames';

import { booksQuery } from '@/queries/books';
import { podcastsQuery } from '@/queries/podcasts';
import {
  falseRandomFactsQuery,
  trueRandomFactsQuery,
} from '@/queries/random-facts';
import { tvSeriesQuery } from '@/queries/tv-series';
import { videoGamesQuery } from '@/queries/video-games';

import { sanityClient } from '../../../../../sanity/lib/client';

import { Book } from '@/types/Book';
import { Podcast } from '@/types/Podcast';
import { RandomFact } from '@/types/RandomFact';
import { TvShow } from '@/types/TvSeries';
import { VideoGame } from '@/types/VideoGame';

export const metadata = {
  title: 'About my Free Time | MartaCodes.it',
  description: 'About page',
};

export enum Option {
  A = 'a',
  B = 'b',
  C = 'c',
  D = 'd',
}

const getData = async () => {
  const books: Book[] = await sanityClient.fetch(booksQuery);

  const podcasts: Podcast[] = await sanityClient.fetch(podcastsQuery);

  const tvSeries: TvShow[] = await sanityClient.fetch(tvSeriesQuery);

  const videoGames: VideoGame[] = await sanityClient.fetch(videoGamesQuery);

  const randomFacts: QuizData = await loadRandomFactsForQuiz();

  return {
    books,
    podcasts,
    tvSeries,
    videoGames,
    randomFacts,
  };
};

const loadRandomFactsForQuiz = async () => {
  const falseFacts: RandomFact[] = await sanityClient.fetch(
    falseRandomFactsQuery
  );
  const trueFacts: RandomFact[] = await sanityClient.fetch(
    trueRandomFactsQuery
  );

  const oneFalseFact: RandomFact = shuffleArray(falseFacts)[0];
  const threeTrueFacts: RandomFact[] = shuffleArray(trueFacts).slice(0, 3);

  const options: QuizOption[] = threeTrueFacts.map((fact) => ({
    headline: fact.headline,
    explanation: fact.explanation,
  }));

  options.push({
    headline: oneFalseFact.headline,
    explanation: oneFalseFact.explanation,
  });

  const shuffledOptions = shuffleArray(options);

  const keys = ['a', 'b', 'c', 'd'];
  const preparedOptions: QuizOption[] = [];
  for (let i = 0; i < 4; i++) {
    preparedOptions.push({
      headline: shuffledOptions[i].headline,
      explanation: shuffledOptions[i].explanation,
      key: keys[i],
    });
  }

  const falseOptionKey: string = preparedOptions.find(
    (option) => option.headline === oneFalseFact.headline
  )!.key!;

  return {
    options: preparedOptions,
    falseOption: falseOptionKey,
  };
};

const AboutFreeTimePage = async () => {
  const { books, podcasts, tvSeries, videoGames, randomFacts } =
    await getData();

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

          <Music />

          <RandomFacts
            options={randomFacts.options}
            falseOption={randomFacts.falseOption}
          />
        </div>
      </section>
    </main>
  );
};

export default AboutFreeTimePage;
