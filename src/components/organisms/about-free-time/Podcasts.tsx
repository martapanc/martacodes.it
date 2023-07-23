'use client';

import Image from 'next/image';
import * as React from 'react';

import { Podcast } from '@/types/Podcast';

export interface PodcastProps {
  podcasts: Podcast[];
}

const Podcasts = ({ podcasts }: PodcastProps) => {
  return (
    <div className=''>
      <div className='m-2 flex'>
        <h2>Podcasts I follow</h2>
      </div>

      <ul className='scroll-mandatory relative -mx-4 flex w-[100vw] snap-x gap-3 overflow-x-auto px-4 pb-14 md:mx-0 md:w-full md:px-0'>
        {podcasts.map((podcast) => (
          <li
            key={podcast._id}
            className='h-[136px] w-[136px] shrink-0 snap-center overflow-hidden rounded-lg bg-transparent p-1 transition-all hover:bg-gradient-to-r hover:from-orange-400 hover:to-orange-700'
          >
            <a
              href={podcast.mediaLink}
              target='_blank'
              rel='noopener noreferrer'
            >
              <Image
                alt={podcast.name}
                src={podcast.cover}
                width={130}
                height={130}
              />
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Podcasts;
