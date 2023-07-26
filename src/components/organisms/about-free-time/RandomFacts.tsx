'use client';

import * as React from 'react';
import { useState } from 'react';

import Quiz, { QuizProps } from '@/components/molecules/RandomFacts/Quiz';

const localStorageKey = 'alreadyPlayed';

const RandomFacts = ({ options, falseOption }: QuizProps) => {
  const [submitted] = useState(false);

  const [alreadyPlayed] = useState(() => {
    const alreadyPlayed = localStorage.getItem(localStorageKey);
    return alreadyPlayed ? JSON.parse(alreadyPlayed) : false;
  });

  return (
    <div className='mb-6'>
      <div className='mb-6 mt-2 flex'>
        <h2>Random facts about me</h2>
      </div>

      {!submitted && !alreadyPlayed && (
        <Quiz options={options} falseOption={falseOption} />
      )}
      {submitted && alreadyPlayed && (
        <div className='rounded bg-gray-200 p-4'>
          <p className='text-gray-800'>Thank you for your submission!</p>
        </div>
      )}
      {!submitted && alreadyPlayed && <div>Already played :)</div>}
    </div>
  );
};

export default RandomFacts;
