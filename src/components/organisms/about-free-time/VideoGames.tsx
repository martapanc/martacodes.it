'use client';

import Image from 'next/image';
import * as React from 'react';

import { VideoGame } from '@/types/VideoGame';

export interface VideoGameProps {
  videoGames: VideoGame[];
}

const VideoGames = ({ videoGames }: VideoGameProps) => {
  return (
    <div className='mb-6'>
      <div className='m-2 flex'>
        <h2>Games I'm addicted to</h2>
      </div>

      <div className='rounded p-3 dark:bg-slate-900'>
        <ul className='scroll-mandatory relative -mx-4 flex w-[100vw] snap-x gap-3 overflow-x-auto px-4 pb-6 md:mx-0 md:w-full md:px-0'>
          {videoGames.map((game) => (
            <li
              key={game._id}
              className='h-[180px] w-[136px] shrink-0 snap-center overflow-hidden rounded-lg bg-transparent p-1 transition-all hover:bg-gradient-to-r hover:from-purple-300 hover:to-purple-700'
            >
              <a
                href={game.mediaLink}
                target='_blank'
                rel='noopener noreferrer'
              >
                <Image
                  className='rounded-md'
                  alt={game.title}
                  src={game.cover}
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

export default VideoGames;
