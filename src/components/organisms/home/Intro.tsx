import React from 'react';

import { shuffleArray } from '@/lib/helper';

import Code from '@/components/organisms/home/Code';
import Photo from '@/components/organisms/home/Photo';

import { CodeSnippet } from '@/types/CodeSnippet';

export interface IntroProps {
  codeSnippets: CodeSnippet[];
  greeting: string;
}

const Intro = ({ greeting, codeSnippets }: IntroProps) => {
  return (
    <div className='mb-6 flex h-fit flex-col pb-6'>
      <h1 className='pb-4 text-5xl antialiased'>
        <span className='greeting drop-shadow-lg'>{greeting}</span> 👋🏻
      </h1>

      <div className='mt-8 flex flex-col lg:flex-row'>
        <Code codeSnippets={shuffleArray(codeSnippets)} />

        <Photo />
      </div>
    </div>
  );
};

export default Intro;
