'use client';

import { Handlee, Inter, Reenie_Beanie, Square_Peg } from 'next/font/google';
import React from 'react';

const font = Inter({ weight: '400', subsets: ['latin'] });
const font1 = Reenie_Beanie({ weight: '400', subsets: ['latin'] });
const font2 = Handlee({ weight: '400', subsets: ['latin'] });
const font3 = Square_Peg({ weight: '400', subsets: ['latin'] });

import clsxm from '@/lib/clsxm';

import { Updates } from '@/types/HomepageContent';

interface UpdatesProps {
  updates: Updates;
}

const UpdatesSummary = ({ updates }: UpdatesProps) => {
  return (
    <div className='flex flex-col w-full'>
      <div className='tracking-widest text-sm font-semibold text-slate-500 mb-5 text-end'>
        UPDATES
      </div>
      <div
        className={clsxm(
          'flex md:flex-row flex-col gap-6 w-full justify-between',
          font.className,
        )}
      >
        <div className='text-lg antialiased flex-row'>
          <div
            className={clsxm(
              font1.className,
              'text-3xl text-[#003e16] dark:text-[#5fff98] mb-1',
            )}
          >
            I'm currently learning...
          </div>
          <ul>
            {updates.learning?.map((item, index) => (
              <li
                key={'learning-' + index}
                className='text-[16px] md:text-base'
              >
                🌱 {item}
              </li>
            ))}
          </ul>
        </div>

        <div className='text-lg antialiased flex-row'>
          <div
            className={clsxm(
              font2.className,
              'text-2xl text-[#1e5dbf] dark:text-[#5fccff] mb-1',
            )}
          >
            I'm looking to learn...
          </div>
          <ul>
            {updates.willLearn?.map((item, index) => (
              <li
                key={'will-learn-' + index}
                className='text-[16px] md:text-base'
              >
                💡 {item}
              </li>
            ))}
          </ul>
        </div>

        <div className='text-lg antialiased flex-row'>
          <div
            className={clsxm(
              font3.className,
              'text-[34px] text-[#bf6e00] dark:text-[#fba42d] mb-1',
            )}
          >
            Latest books I've read...
          </div>
          <ul>
            {updates.reading?.map((item, index) => (
              <li key={'reading-' + index} className='text-[16px] md:text-base'>
                📖 {item}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default UpdatesSummary;
