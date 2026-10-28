'use client';

import * as React from 'react';
import { useEffect, useState } from 'react';

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';

export interface SalaryHappinessProps {
  salaryData: {
    min: number;
    median: number;
    max: number;
  };
  config: {
    displayTitle: boolean;
    // Currency salaryData is expressed in
    currency: string;
  };
}

const CURRENCIES = ['EUR', 'GBP', 'USD', 'CHF', 'SEK', 'PLN', 'RON'];

// Daily ECB reference rates, no API key needed
const RATES_URL = 'https://api.frankfurter.dev/v1/latest';

const roundTo = (num: number, step: number) => Math.round(num / step) * step;

const roundNum = (num: number) => roundTo(num, 5000);

const formatMoney = (amount: number, currency: string) =>
  Intl.NumberFormat('en-GB', {
    style: 'currency',
    currency,
    currencyDisplay: 'narrowSymbol',
    maximumFractionDigits: 0,
  }).format(amount);

const getHappinessScore = (
  salary: number,
  thresholds: Record<string, number>,
) => {
  if (salary < thresholds.minSad) {
    return { emoji: '🤬', title: 'Are you serious?' };
  } else if (salary < thresholds.stillSad) {
    return { emoji: '😭', title: 'Way too low' };
  } else if (salary < thresholds.minAcceptable) {
    return { emoji: '😢', title: 'Still low' };
  } else if (salary < thresholds.median) {
    return { emoji: '😏', title: 'Getting there' };
  } else if (salary < thresholds.veryHappy) {
    return { emoji: '🙂', title: 'Pretty good' };
  } else if (salary < thresholds.overTheMoon) {
    return { emoji: '😀', title: 'Even better' };
  } else if (salary < thresholds.maxVisible) {
    return { emoji: '😃', title: "That's amazing" };
  }
  return { emoji: '🤑', title: 'Make it rain!' };
};

const SalaryHappinessTool = ({ salaryData, config }: SalaryHappinessProps) => {
  const [currency, setCurrency] = useState(config.currency);
  const [rates, setRates] = useState<Record<string, number>>({
    [config.currency]: 1,
  });
  const [ratesDate, setRatesDate] = useState<string>();

  useEffect(() => {
    const symbols = CURRENCIES.filter((c) => c !== config.currency).join(',');

    fetch(`${RATES_URL}?base=${config.currency}&symbols=${symbols}`)
      .then((res) => (res.ok ? res.json() : Promise.reject(res.status)))
      .then((data) => {
        setRates({ ...data.rates, [config.currency]: 1 });
        setRatesDate(data.date);
      })
      // Without rates the selector only offers the base currency
      .catch(() => undefined);
  }, [config.currency]);

  const { median } = salaryData;

  const thresholds = {
    minVisible: roundNum(median * 0.4),
    minSad: roundNum(median * 0.53),
    stillSad: roundNum(median * 0.67),
    minAcceptable: roundNum(median * 0.8),
    median,
    veryHappy: roundNum(median * 1.1),
    overTheMoon: roundNum(median * 1.35),
    maxVisible: roundNum(median * 2.25),
  };

  // The slider always works in the base currency; other currencies are shown
  // as an approximate conversion next to it
  const [selectedSalary, setSelectedSalary] = useState(roundNum(median * 1.1));

  const happinessScore = getHappinessScore(selectedSalary, thresholds);
  const rate = rates[currency];
  const isConverted = currency !== config.currency && rate !== undefined;

  return (
    <div className='my-4 w-full max-w-sm rounded-xl border border-slate-200 bg-white/60 p-5 shadow-sm dark:border-slate-800 dark:bg-slate-900/40'>
      <div className='flex items-center justify-between gap-4'>
        {config.displayTitle && (
          <h3 className='m-0 text-base'>Salary &rArr; Happiness</h3>
        )}

        <Select value={currency} onValueChange={setCurrency}>
          <SelectTrigger size='sm' aria-label='Currency' className='ml-auto'>
            <SelectValue />
          </SelectTrigger>
          <SelectContent>
            {CURRENCIES.filter((c) => rates[c]).map((c) => (
              <SelectItem key={c} value={c}>
                {c}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>

      <label
        htmlFor='salaryValue'
        className='mt-4 flex flex-wrap items-baseline gap-x-2'
      >
        <span className='text-2xl font-semibold tabular-nums'>
          {formatMoney(selectedSalary, config.currency)}
        </span>
        {isConverted && (
          <span className='text-slate-500 tabular-nums dark:text-slate-400'>
            ~ {formatMoney(roundTo(selectedSalary * rate, 1000), currency)}
          </span>
        )}
      </label>

      <input
        type='range'
        className='mt-3 w-full accent-primary-600'
        value={selectedSalary}
        min={thresholds.minVisible}
        max={thresholds.maxVisible}
        step={5_000}
        id='salaryValue'
        data-testid='salaryValue'
        onChange={(event) => setSelectedSalary(Number(event.target.value))}
      />

      <div className='mt-3 flex items-center gap-3'>
        <span
          className='text-4xl leading-none'
          data-testid='emoji'
          title={happinessScore.title}
          aria-hidden
        >
          {happinessScore.emoji}
        </span>
        <div>
          <p className='m-0 text-xs uppercase tracking-wide text-slate-500 dark:text-slate-400'>
            Happiness score
          </p>
          <p className='m-0 font-medium'>{happinessScore.title}</p>
        </div>
      </div>

      {isConverted && ratesDate && (
        <p className='mt-4 mb-0 text-xs text-slate-500 dark:text-slate-400'>
          1 {config.currency} = {rate} {currency} &middot; ECB rate of{' '}
          {new Date(ratesDate).toLocaleDateString('en-GB', {
            day: 'numeric',
            month: 'short',
            year: 'numeric',
          })}
        </p>
      )}
    </div>
  );
};

export { SalaryHappinessTool };
