'use client';

import Image from 'next/image';
import * as React from 'react';

import { TvShow } from '@/types/TvSeries';

export interface TvSeriesProps {
  tvSeries: TvShow[];
}

const TvSeries = ({ tvSeries }: TvSeriesProps) => {
  return (
    <div className='mb-6'>
      <div className='my-2 flex'>
        <h2>Favourite TV Series</h2>
      </div>

      <div className='rounded p-3 dark:bg-slate-900'>
        <ul className='scroll-mandatory relative -mx-4 flex w-[100vw] snap-x gap-3 overflow-x-auto px-4 pb-6 md:mx-0 md:w-full md:px-0'>
          {tvSeries.map((tvSeries) => (
            <li
              key={tvSeries._id}
              className='h-[200px] w-[136px] shrink-0 snap-center overflow-hidden rounded-lg bg-transparent p-1 transition-all hover:bg-gradient-to-r hover:from-yellow-300 hover:to-yellow-700'
            >
              <a
                href={tvSeries.mediaLink}
                target='_blank'
                rel='noopener noreferrer'
              >
                <Image
                  className='rounded-md'
                  alt={tvSeries.title}
                  src={tvSeries.poster}
                  width={130}
                  height={130}
                />
              </a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default TvSeries;
