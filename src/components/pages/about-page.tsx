'use client';

import * as React from 'react';

import Heading from '../atoms/headings/Heading';
import { QuizOption } from '../molecules/RandomFacts/Quiz';
import Books from '../organisms/about/Books';
import Music from '../organisms/about/Music';
import Podcasts from '../organisms/about/Podcasts';
import RandomFacts from '../organisms/about/RandomFacts';
import TvSeries from '../organisms/about/TvSeries';
import VideoGames from '../organisms/about/VideoGames';
import { shuffleArray } from '../../lib/helper';
import { Book } from '../../../../martacodes.it-restruct/src/types/Book';
import { Podcast } from '../../../../martacodes.it-restruct/src/types/Podcast';
import { RandomFact } from '../../../../martacodes.it-restruct/src/types/RandomFact';
import { TvShow } from '../../../../martacodes.it-restruct/src/types/TvShow';
import { VideoGame } from '../../../../martacodes.it-restruct/src/types/VideoGame';

type AboutPageProps = {
  books: Book[];
  podcasts: Podcast[];
  videoGames: VideoGame[];
  tvShows: TvShow[];
  randomFacts: RandomFact[];
};

export default function AboutPage({
  books,
  podcasts,
  videoGames,
  tvShows,
  randomFacts,
}: AboutPageProps) {
  function setupRandomFactsData() {
    const falseFacts = randomFacts.filter((fact) => !fact.isFactTrue);
    const trueFacts = randomFacts.filter((fact) => fact.isFactTrue);
    const selectedTrueFacts = trueFacts.filter(
      (fact) => !fact.name.includes('(True)'),
    );

    const oneFalseFact: RandomFact = shuffleArray(falseFacts)[0];
    const threeTrueFacts: RandomFact[] = shuffleArray(selectedTrueFacts).slice(
      0,
      3,
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
      (option) => option.headline === oneFalseFact.headline,
    )!.key!;

    return {
      options: preparedOptions,
      falseOption: falseOptionKey,
      trueFacts,
    };
  }

  const randomFactsData = setupRandomFactsData();

  return (
    <section>
      <div className='layout relative flex flex-col py-12'>
        <Heading title='about.title' />

        <div className='mb-5'>
          <p>
            Programming means great fun for me, but it&apos;s not the only
            activity I enjoy. <br />
            Here&apos;s an overview of non-computer related things I love doing
            in my free time :)
          </p>
        </div>

        <Books books={books} />

        <Podcasts podcasts={podcasts} />

        <VideoGames videoGames={videoGames} />

        <TvSeries tvShows={tvShows} />

        <Music />

        <RandomFacts
          options={randomFactsData.options}
          falseOption={randomFactsData.falseOption}
          trueFacts={randomFactsData.trueFacts}
        />
      </div>
    </section>
  );
}
