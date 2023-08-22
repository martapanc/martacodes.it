import * as React from 'react';

import Intro from '@/components/organisms/home/Intro';
import Summary from '@/components/organisms/home/Summary';
import Seo from '@/components/Seo';

import { codeSnippetsQuery } from '@/queries/codeSnippets';
import { CodeSnippet } from '@/sanityTypes/CodeSnippet';

import { sanityClient } from '../../../sanity/lib/client';

const getData = async () => {
  // const homeData: HomeContent[] = await sanityClient.fetch(homeContentQuery);
  const codeSnippets: CodeSnippet[] = await sanityClient.fetch(
    codeSnippetsQuery
  );

  return {
    codeSnippets,
    // homeContent: homeData[0],
  };
};

const HomePage = async () => {
  const { codeSnippets } = await getData();

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
