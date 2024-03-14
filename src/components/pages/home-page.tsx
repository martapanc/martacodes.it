import React from 'react';

import Intro from '@/components/organisms/home/Intro';
import SkillSummary from '@/components/organisms/home/SkillSummary';
import Summary from '@/components/organisms/home/Summary';

import { CodeSnippet } from '@/types/CodeSnippet';
import { HomePage } from '@/types/Homepage';

type HomePageProps = {
  homePage: HomePage;
  codeSnippets: CodeSnippet[];
};
export default function HomePage({ homePage, codeSnippets }: HomePageProps) {
  return (
    <section className='dark:bg-dark bg-white'>
      <div className='dark:bg-gradient-linear-dark bg-gradient-linear-light'>
        <div className='layout relative flex flex-col py-16 md:pt-24 pb-5 md:pb-16'>
          <Intro greeting={homePage.greeting} codeSnippets={codeSnippets} />
        </div>
      </div>

      <div className='angle angle-1 bg-blue-100 after:bg-white dark:bg-slate-900 after:dark:bg-dark'></div>

      <div className='bg-blue-100 dark:bg-slate-900'>
        <div className='layout relative flex py-8'>
          <Summary homePage={homePage} />
        </div>
      </div>

      <div className='angle angle-2 bg-home-section2 after:bg-blue-100 dark:bg-dark after:dark:bg-slate-900'></div>

      <div className='bg-home-section2 dark:bg-dark'>
        <div className='layout relative flex py-8'>
          <SkillSummary homePage={homePage} />
        </div>
      </div>

      <div className='angle angle-4 bg-blue-100 after:bg-home-section2 dark:bg-slate-800 after:dark:bg-dark'></div>
    </section>
  );
}
