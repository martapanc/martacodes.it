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

const SalaryHappinessTool = ({ salaryData, config }: SalaryHappinessProps) => {
  let { median } = salaryData;
  median = median * config.forexMultiplier;

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
    let emoji;
    let title;

    switch (true) {
      case selectedSalary < minSad:
        emoji = '🤬';
        title = 'Are you serious?';
        break;
      case selectedSalary >= minSad && selectedSalary < stillSad:
        emoji = '😭';
        title = 'Way too low';
        break;
      case selectedSalary >= stillSad && selectedSalary < minAcceptable:
        emoji = '😢';
        title = 'Still low';
        break;
      case selectedSalary >= minAcceptable && selectedSalary < median:
        emoji = '😏';
        title = 'Getting there';
        break;
      case selectedSalary >= median && selectedSalary < veryHappy:
        emoji = '🙂';
        title = 'Pretty good';
        break;
      case selectedSalary >= veryHappy && selectedSalary < overTheMoon:
        emoji = '😀';
        title = 'Even better';
        break;
      case selectedSalary >= overTheMoon && selectedSalary < maxVisible:
        emoji = '😃';
        title = "That's amazing";
        break;
      case selectedSalary >= maxVisible:
        emoji = '🤑';
        title = 'Make it rain!';
        break;
      default:
        emoji = '';
        title = '';
        break;
    }

    setEmoji(emoji);
    setTitle(title);
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
        <span className='text-3xl' data-testid='emoji' title={title}>
          {` ${emoji}`}
        </span>
      </p>
    </Box>
  );
};

export { SalaryHappinessTool };
