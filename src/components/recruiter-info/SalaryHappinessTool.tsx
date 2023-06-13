import { Box, Slider } from '@mui/material';
import * as React from 'react';
import { useEffect, useState } from 'react';

export interface SalaryHappinessProps {
  salaryData: {
    min: number;
    median: number;
    max: number;
  };
  config: {
    displayTitle: boolean;
    currency: string;
    forexMultiplier: number;
  };
}

const roundNum = (num: number) => {
  return Math.round(num / 5000) * 5000;
};

const SalaryHappinessTool = ({ salaryData, config }: SalaryHappinessProps) => {
  const { median } = salaryData;
  const medianInCurrency = median * config.forexMultiplier;

  const minVisible = roundNum(medianInCurrency * 0.5);
  const minSad = roundNum(medianInCurrency * 0.6);
  const stillSad = roundNum(medianInCurrency * 0.7);
  const minAcceptable = roundNum(medianInCurrency * 0.8);
  const veryHappy = roundNum(medianInCurrency * 1.2);
  const overTheMoon = roundNum(medianInCurrency * 1.3);
  const maxVisible = roundNum(medianInCurrency * 1.5);

  const [selectedSalary, setSelectedSalary] = useState(minAcceptable);
  const [happinessScore, setHappinessScore] = useState({
    emoji: '❓',
    title: '',
  });

  useEffect(() => {
    let emoji;
    let title;

    if (selectedSalary < minSad) {
      emoji = '🤬';
      title = 'Are you serious?';
    } else if (selectedSalary < stillSad) {
      emoji = '😭';
      title = 'Way too low';
    } else if (selectedSalary < minAcceptable) {
      emoji = '😢';
      title = 'Still low';
    } else if (selectedSalary < median) {
      emoji = '😏';
      title = 'Getting there';
    } else if (selectedSalary < veryHappy) {
      emoji = '🙂';
      title = 'Pretty good';
    } else if (selectedSalary < overTheMoon) {
      emoji = '😀';
      title = 'Even better';
    } else if (selectedSalary < maxVisible) {
      emoji = '😃';
      title = "That's amazing";
    } else {
      emoji = '🤑';
      title = 'Make it rain!';
    }

    setHappinessScore({ emoji, title });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [selectedSalary]);

  return (
    <Box width={300} className='m-2 '>
      {config.displayTitle && <h3>Salary Happiness Tool</h3>}

      <Slider
        className='mt-2'
        defaultValue={selectedSalary}
        min={minVisible}
        max={maxVisible}
        step={5_000}
        aria-label='Salary'
        data-testid='salaryValue'
        onChange={(event) =>
          setSelectedSalary(Number((event.target as HTMLInputElement).value))
        }
      />

      <label htmlFor='salaryValue'>
        {Intl.NumberFormat('en-GB', {
          style: 'currency',
          currency: config.currency,
        }).format(selectedSalary)}
      </label>

      <p>
        <strong>Happiness Score:</strong>
        <span
          className='text-3xl'
          data-testid='emoji'
          title={happinessScore.title}
        >
          {` ${happinessScore.emoji}`}
        </span>
      </p>
    </Box>
  );
};

export { SalaryHappinessTool };
