import React from 'react';

import styles from './home.module.css';

import Code from './Code';
import Photo from './Photo';
import { CodeSnippet } from '../../../../../martacodes.it-restruct/src/types/CodeSnippet';
import clsxm from '../../../lib/clsxm';
import { shuffleArray } from '../../../lib/helper';

export interface IntroProps {
  codeSnippets: CodeSnippet[];
  greeting: string;
}

const Intro = ({ greeting, codeSnippets }: IntroProps) => {
  return (
    <div className='mb-6 flex h-fit flex-col pb-6'>
      <h1 className='pb-4 text-5xl antialiased'>
        <span className={clsxm(styles.greeting, 'drop-shadow-lg')}>
          {greeting}
        </span>{' '}
        👋🏻
      </h1>

      <div className='mt-8 flex flex-col lg:flex-row'>
        <Code codeSnippets={shuffleArray(codeSnippets)} />

        <Photo />
      </div>
    </div>
  );
};

export default Intro;
