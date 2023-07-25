'use client';

import FormControl from '@mui/material/FormControl';
import FormControlLabel from '@mui/material/FormControlLabel';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import * as React from 'react';
import { useState } from 'react';

import Button from '@/components/buttons/Button';

const localStorageKey = 'alreadyPlayed';

const RandomFacts = () => {
  const [selectedAnswer, setSelectedAnswer] = useState('');

  const [submitted, setSubmitted] = useState(false);

  const [alreadyPlayed, setAlreadyPlayed] = useState(() => {
    const alreadyPlayed = localStorage.getItem(localStorageKey);
    return alreadyPlayed ? JSON.parse(alreadyPlayed) : false;
  });

  const isButtonDisabled = selectedAnswer === '';

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSelectedAnswer(event.target.value);
  };

  const submitAnswer = () => {
    localStorage.setItem(localStorageKey, 'true');

    setSubmitted(true);
    setAlreadyPlayed(true);
  };

  return (
    <div className='mb-6'>
      <div className='mb-6 mt-2 flex'>
        <h2>Random facts about me</h2>
      </div>

      {!submitted && !alreadyPlayed && (
        <div className='rounded dark:bg-slate-900'>
          <FormControl>
            <RadioGroup
              aria-labelledby='demo-radio-buttons-group-label'
              name='radio-buttons-group'
              value={selectedAnswer}
              onChange={handleChange}
            >
              <FormControlLabel value='a' control={<Radio />} label='A' />
              <FormControlLabel value='b' control={<Radio />} label='B' />
              <FormControlLabel value='c' control={<Radio />} label='C' />
              <FormControlLabel value='d' control={<Radio />} label='D' />
            </RadioGroup>

            <Button
              className='shadow-md'
              variant='primary'
              onClick={submitAnswer}
              disabled={isButtonDisabled}
            >
              Submit
            </Button>
          </FormControl>
        </div>
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
