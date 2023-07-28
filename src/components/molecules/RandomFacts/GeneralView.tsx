'use client';

import { PortableText } from '@portabletext/react';
import * as React from 'react';

import { shuffleArray } from '@/lib/helper';

import Button from '@/components/buttons/Button';

import { RandomFact } from '@/types/RandomFact';

export interface QuizAnswer {
  headline: string;
  key?: string;
}

export interface GeneralViewProps {
  facts: RandomFact[];
}

const GeneralView = ({ facts }: GeneralViewProps) => {
  const randomFact = shuffleArray(facts)[0];

  return (
    <div className='p4 rounded dark:bg-slate-900'>
      <div className='mb-5'>
        <PortableText value={randomFact.description} />
      </div>

      <div className='flex justify-center'>
        <Button>Load another random fact</Button>
      </div>
    </div>
  );
};

export default GeneralView;
