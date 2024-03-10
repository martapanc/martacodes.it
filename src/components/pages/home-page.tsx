import React from 'react';

import Intro2 from '@/components/organisms/home/Intro2';
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
      <div className='layout relative flex flex-col py-16 md:py-24'>
        <Intro2 greeting={homePage.greeting} codeSnippets={codeSnippets} />

        <Summary homePage={homePage} />
      </div>
    </section>
  );
}
