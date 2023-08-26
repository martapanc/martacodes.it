import * as React from 'react';

import { shuffleArray } from '@/lib/helper';

import { QuizData, QuizOption } from '@/components/molecules/RandomFacts/Quiz';
import Books from '@/components/organisms/about-free-time/Books';
import Music from '@/components/organisms/about-free-time/Music';
import Podcasts from '@/components/organisms/about-free-time/Podcasts';
import RandomFacts from '@/components/organisms/about-free-time/RandomFacts';
import TvSeries from '@/components/organisms/about-free-time/TvSeries';
import VideoGames from '@/components/organisms/about-free-time/VideoGames';

import { queryBooks } from '@/queries/books';
import { queryPodcasts } from '@/queries/podcasts';
import {
  falseRandomFactsQuery,
  queryRandomFacts,
  selectedTrueRandomFactsQuery,
  trueRandomFactsQuery,
} from '@/queries/random-facts';
import { queryTvShows } from '@/queries/tv-shows';
import { queryVideoGames } from '@/queries/video-games';

import { RandomFact } from '@/types/RandomFact';

export const metadata = {
  title: 'About my Free Time | MartaCodes.it',
  description: 'About page',
};

const getData = async () => {
  const randomFacts: QuizData = await loadRandomFactsForQuiz();

  return {
    randomFacts,
  };
};

const queryData = async () => {
  const books = await queryBooks();
  const podcasts = await queryPodcasts();
  const tvShows = await queryTvShows();
  const videoGames = await queryVideoGames();

  return {
    books,
    podcasts,
    tvShows,
    videoGames,
  };
};

const loadRandomFactsForQuiz = async () => {
  const falseFacts: RandomFact[] = await queryRandomFacts(
    falseRandomFactsQuery
  );

  const selectedTrueFacts: RandomFact[] = await queryRandomFacts(
    selectedTrueRandomFactsQuery
  );

  const trueFacts: RandomFact[] = await queryRandomFacts(trueRandomFactsQuery);

  const oneFalseFact: RandomFact = shuffleArray(falseFacts)[0];
  const threeTrueFacts: RandomFact[] = shuffleArray(selectedTrueFacts).slice(
    0,
    3
  );

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
    trueFacts,
  };
};

const AboutFreeTimePage = async () => {
  const { randomFacts } = await getData();

  const { books, podcasts, tvShows, videoGames } = await queryData();

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

          <TvSeries tvShows={tvShows} />

          <Music />

          <RandomFacts
            options={randomFacts.options}
            falseOption={randomFacts.falseOption}
            trueFacts={randomFacts.trueFacts}
          />
        </div>
      </section>
    </main>
  );
};

export default AboutFreeTimePage;
