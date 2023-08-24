import * as React from 'react';

import { flattenToArray } from '@/lib/graphqlUtils';

import Intro from '@/components/organisms/home/Intro';
import Summary from '@/components/organisms/home/Summary';
import Seo from '@/components/Seo';

import { codeSnippetsQueryQL } from '@/queries/codeSnippets';

import apolloClient from '../../../apollo/apollo-client';

import { CodeSnippet } from '@/types/CodeSnippet';

async function queryCodeSnippets() {
  const { data } = await apolloClient.query({ query: codeSnippetsQueryQL });

  return flattenToArray<CodeSnippet>(data.codeSnippets);
}

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
