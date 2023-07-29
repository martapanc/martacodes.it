'use client';

import * as React from 'react';
import { useState } from 'react';

import GeneralView from '@/components/molecules/RandomFacts/GeneralView';
import Quiz, { QuizData } from '@/components/molecules/RandomFacts/Quiz';
import QuizAnswers from '@/components/molecules/RandomFacts/QuizAnswers';

const localStorageKey = 'alreadyPlayed';

const RandomFacts = ({ options, falseOption, trueFacts }: QuizData) => {
  const [submitted, setSubmitted] = useState(false);
  const [answerCorrect, setAnswerCorrect] = useState(false);

  const [alreadyPlayed, setAlreadyPlayed] = useState(() => {
    const alreadyPlayed = localStorage.getItem(localStorageKey);
    return alreadyPlayed ? JSON.parse(alreadyPlayed) : false;
  });

  const handleAnswerSubmission = (isCorrect: boolean) => {
    setSubmitted(true);
    setAnswerCorrect(isCorrect);

    if (!alreadyPlayed) {
      localStorage.setItem(localStorageKey, JSON.stringify(true));
      setAlreadyPlayed(true);
    }
  };

  return (
    <div className='mb-6'>
      <div className='mb-4 mt-2 flex'>
        <h2>Random facts about me</h2>
      </div>

      {!alreadyPlayed && (
        <div className='mb-3 font-serif font-semibold'>
          Here's a little game for you! Which of the following statements about
          me is{' '}
          <strong className='text-red-600 dark:text-red-400'>false</strong>?
        </div>
      )}

      {!submitted && !alreadyPlayed && (
        <Quiz
          options={options}
          falseOption={falseOption}
          onAnswerSubmission={handleAnswerSubmission}
        />
      )}
      {submitted && alreadyPlayed && (
        <QuizAnswers
          answers={options}
          falseOption={falseOption}
          answeredCorrectly={answerCorrect}
        />
      )}
      {!submitted && alreadyPlayed && <GeneralView randomFacts={trueFacts} />}
    </div>
  );
};

export default RandomFacts;
