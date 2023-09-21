'use client';

import FormControl from '@mui/material/FormControl';
import FormControlLabel from '@mui/material/FormControlLabel';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import * as React from 'react';
import { useState } from 'react';

import { saveToLocalStorage } from '@/lib/helper';

import Button from '@/components/atoms/buttons/Button';
import { localStorageKey } from '@/components/organisms/about/RandomFacts';

import { RandomFact } from '@/types/RandomFact';

export interface QuizOption {
  headline: string;
  explanation?: string;
  key?: string;
}

export interface QuizData {
  options: QuizOption[];
  falseOption?: string;
  trueFacts: RandomFact[];
}

export interface QuizProps {
  options: QuizOption[];
  falseOption?: string;
  onAnswerSubmission: (isCorrect: boolean) => void;
}

const Quiz = ({ options, falseOption, onAnswerSubmission }: QuizProps) => {
  const [selectedAnswer, setSelectedAnswer] = useState('');

  const isButtonDisabled = selectedAnswer === '';

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSelectedAnswer(event.target.value);
  };

  const submitAnswer = () => {
    saveToLocalStorage(localStorageKey, 'true');

    onAnswerSubmission(falseOption === selectedAnswer);
  };

  return (
    <div className='rounded p-4 dark:bg-slate-900'>
      <FormControl>
        <RadioGroup
          className='mb-4'
          aria-labelledby='demo-radio-buttons-group-label'
          name='radio-buttons-group'
          value={selectedAnswer}
          onChange={handleChange}
        >
          {options.map((option) => (
            <FormControlLabel
              className='mb-2 md:mb-0'
              key={option.key}
              value={option.key}
              control={<Radio className='dark:quiz-radio-button' />}
              label={option.headline}
            />
          ))}
        </RadioGroup>

        <div className='flex flex-row justify-end md:justify-start'>
          <Button
            className='w-fit shadow-md'
            variant='primary'
            onClick={submitAnswer}
            disabled={isButtonDisabled}
          >
            Submit
          </Button>
        </div>
      </FormControl>
    </div>
  );
};

export default Quiz;
