import * as React from 'react';

import Intro from '@/components/organisms/home/Intro';
import Summary from '@/components/organisms/home/Summary';
import Seo from '@/components/Seo';

import { queryCodeSnippets } from '@/queries/code-snippets';
import { queryHomePage } from '@/queries/home-page';

import { CodeSnippet } from '@/types/CodeSnippet';
import { HomePage } from '@/types/HomePage';

export const metadata = {
  title: 'Marta Pancaldi | Martacodes.it',
  description:
    "I'm a software engineer who writes code for work and for fun. I love learning, experimenting with new tech stacks and solving complex problems.",
};

const queryData = async () => {
  const codeSnippets: CodeSnippet[] = await queryCodeSnippets();

  const homePage: HomePage = await queryHomePage();

  return {
    codeSnippets,
    homePage,
  };
};

const HomePage = async () => {
  const { codeSnippets, homePage } = await queryData();

  return (
    <main className='min-h-main'>
      <Seo templateTitle='Home' />

      <section className='dark:bg-dark bg-white'>
        <div className='layout relative flex flex-col py-16 md:py-24'>
          <Intro greeting={homePage.greeting} codeSnippets={codeSnippets} />

          <Summary homePage={homePage} />
        </div>
      </section>
    </main>
  );
};

export default HomePage;
