import React from 'react';

import Intro from '../organisms/home/Intro';
import Summary from '../organisms/home/Summary';
import { CodeSnippet } from '../../../../martacodes.it-restruct/src/types/CodeSnippet';
import { HomePage } from '../../../../martacodes.it-restruct/src/types/Homepage';

type HomePageProps = {
  homePage: HomePage;
  codeSnippets: CodeSnippet[];
};
export default function HomePage({ homePage, codeSnippets }: HomePageProps) {
  return (
    <section className='dark:bg-dark bg-white'>
      <div className='layout relative flex flex-col py-16 md:py-24'>
        <Intro greeting={homePage.greeting} codeSnippets={codeSnippets} />

        <Summary homePage={homePage} />
      </div>
    </section>
  );
}
