'use client';

import * as React from 'react';
import { BsFillCheckCircleFill, BsFillXSquareFill } from 'react-icons/bs';

export interface QuizAnswer {
  headline: string;
  key?: string;
}

export interface QuizAnswersProps {
  answers: QuizAnswer[];
  falseOption?: string;
  answeredCorrectly: boolean;
}

const QuizAnswers = ({
  answers,
  falseOption,
  answeredCorrectly,
}: QuizAnswersProps) => {
  return (
    <div className='p4 rounded dark:bg-slate-900'>
      <ul>
        {answers.map((answer) => (
          <li className='mb-4 flex flex-row' key={answer.key}>
            <span className='me-3 text-xl'>
              {answer.key == falseOption ? (
                <BsFillXSquareFill className='fill-current text-red-600' />
              ) : (
                <BsFillCheckCircleFill className='fill-current text-green-600' />
              )}
            </span>
            {answer.headline}
          </li>
        ))}
      </ul>

      <div className='rounded bg-gray-200 p-4'>
        <p className='text-gray-800'>
          {answeredCorrectly
            ? "You're correct! 🥳"
            : 'Too bad, better luck next time ✌️'}
        </p>
      </div>
    </div>
  );
};

export default QuizAnswers;
