import React from 'react';
import ReactMarkdown from 'react-markdown';

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
    <div className='mb-6 flex h-fit flex-col pb-6 md:h-96'>
      <h1 className='pb-4 text-5xl antialiased'>
        <ReactMarkdown>{greeting}</ReactMarkdown>
      </h1>

      <div className='mt-8 flex flex-col md:flex-row'>
        <Code codeSnippets={shuffleArray(codeSnippets)} />

        <Photo />
      </div>
    </div>
  );
};

export default Intro;
