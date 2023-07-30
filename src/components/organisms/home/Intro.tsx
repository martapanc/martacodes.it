import React from 'react';

import { shuffleArray } from '@/lib/helper';

import Code, { CodeSnippetsProps } from '@/components/organisms/home/Code';
import Photo from '@/components/organisms/home/Photo';

const Intro = ({ codeSnippets }: CodeSnippetsProps) => {
  return (
    <div className='mb-12 flex h-fit flex-col pb-12 md:h-96'>
      <h1 className='pb-4 text-5xl antialiased'>Hey there, I'm Marta 👋🏻</h1>

      <div className='mt-8 flex flex-col md:flex-row'>
        <Code codeSnippets={shuffleArray(codeSnippets)} />

        <Photo />
      </div>
    </div>
  );
};

export default Intro;
