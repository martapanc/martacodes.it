import * as React from 'react';

import Intro from '@/components/organisms/home/Intro';
import Summary from '@/components/organisms/home/Summary';
import Seo from '@/components/Seo';

import { queryCodeSnippets } from '@/queries/codeSnippets';

import { CodeSnippet } from '@/types/CodeSnippet';

const queryData = async () => {
  const codeSnippets: CodeSnippet[] = await queryCodeSnippets();

  return {
    codeSnippets,
  };
};

const HomePage = async () => {
  const { codeSnippets } = await queryData();

  return (
    <main className='min-h-main'>
      <Seo templateTitle='Home' />

      <section className='dark:bg-dark bg-white'>
        <div className='layout relative flex flex-col py-16 md:py-24'>
          <Intro codeSnippets={codeSnippets} />

          <Summary />
        </div>
      </section>
    </main>
  );
};

export default HomePage;
