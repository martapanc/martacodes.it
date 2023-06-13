import { Box, Slider } from '@mui/material';
import * as React from 'react';
import { useEffect, useState } from 'react';

export interface SalaryHappinessProps {
  salaryData: {
    min: number;
    median: number;
    max: number;
  };
}

const SalaryHappinessTool = ({ salaryData }: SalaryHappinessProps) => {
  const { median } = salaryData;

  const roundNum = (num: number) => {
    return Math.round(num / 5000) * 5000;
  };

  const minVisible = roundNum(median * 0.5);
  const minSad = roundNum(median * 0.6);
  const stillSad = roundNum(median * 0.7);
  const minAcceptable = roundNum(median * 0.8);
  const veryHappy = roundNum(median * 1.2);
  const overTheMoon = roundNum(median * 1.3);
  const maxVisible = roundNum(median * 1.5);

  const [selectedSalary, setSelectedSalary] = useState(minAcceptable);
  const [emoji, setEmoji] = useState('❓');
  const [title, setTitle] = useState('❓');

  useEffect(() => {
    if (selectedSalary < minSad) {
      setEmoji('🤬');
      setTitle('Are you serious?');
    } else if (selectedSalary >= minSad && selectedSalary < stillSad) {
      setEmoji('😭');
      setTitle('Way too low');
    } else if (selectedSalary >= stillSad && selectedSalary < minAcceptable) {
      setEmoji('😢');
      setTitle('Still low');
    } else if (selectedSalary >= minAcceptable && selectedSalary < median) {
      setEmoji('😏');
      setTitle('Getting there');
    } else if (selectedSalary >= median && selectedSalary < veryHappy) {
      setEmoji('🙂');
      setTitle('Pretty good');
    } else if (selectedSalary >= veryHappy && selectedSalary < overTheMoon) {
      setEmoji('😀');
      setTitle('Even better');
    } else if (selectedSalary >= overTheMoon && selectedSalary < maxVisible) {
      setEmoji('😃');
      setTitle("That's amazing");
    } else if (selectedSalary >= maxVisible) {
      setEmoji('🤑');
      setTitle('Make it rain!');
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [selectedSalary]);

  return (
    <Box width={300} className='m-2 '>
      <h3>Salary Happiness Tool</h3>

      <Slider
        className='mt-2'
        defaultValue={selectedSalary}
        min={minVisible}
        max={maxVisible}
        step={5_000}
        aria-label='Salary'
        data-testid='salaryValue'
        onChange={(e) =>
          setSelectedSalary(Number((e.target as HTMLInputElement).value))
        }
      />

      <label htmlFor='salaryValue'>
        {Intl.NumberFormat('en-GB', {
          style: 'currency',
          currency: 'EUR',
        }).format(selectedSalary)}
      </label>
      <p>
        <strong>Happiness Score:</strong>
        <span className='text-3xl' data-testid='emoji' title={title}>
          {` ${emoji}`}
        </span>
      </p>
    </Box>
  );
};

export { SalaryHappinessTool };
