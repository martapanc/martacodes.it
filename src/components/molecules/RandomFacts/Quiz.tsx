import FormControl from '@mui/material/FormControl';
import FormControlLabel from '@mui/material/FormControlLabel';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import * as React from 'react';
import { useState } from 'react';

import Button from '@/components/buttons/Button';

const localStorageKey = 'alreadyPlayed';

export enum Option {
  A = 'a',
  B = 'b',
  C = 'c',
  D = 'd',
}

export interface QuizOption {
  headline: string;
  key: Option;
}

export interface QuizProps {
  options: QuizOption[];
  falseOption: Option;
}

const Quiz = ({ options, falseOption }: QuizProps) => {
  const [selectedAnswer, setSelectedAnswer] = useState('');

  const [submitted, setSubmitted] = useState(false);

  const isButtonDisabled = selectedAnswer === '';

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSelectedAnswer(event.target.value);
  };

  const submitAnswer = () => {
    localStorage.setItem(localStorageKey, 'true');

    setSubmitted(true);

    const answeredRight = falseOption === selectedAnswer;

    // eslint-disable-next-line no-console
    console.log(submitted && answeredRight ? 'Correct!' : 'Wrong!');
  };

  return (
    <div className='p4 rounded dark:bg-slate-900'>
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
              control={<Radio />}
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
