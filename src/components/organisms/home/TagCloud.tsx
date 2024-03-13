'use client';

import ReactWordcloud from '@cyberblast/react-wordcloud';
import React from 'react';

import 'tippy.js/dist/tippy.css';
import 'tippy.js/animations/scale.css';

import tags from '@/data/tags.json';

interface Options {
  colors?: string[];
  rotations?: number;
  rotationAngles?: [number, number];
  deterministic?: boolean;
  fontFamily?: string;
  fontSizes?: [number, number];
  padding?: number;
  randomSeed?: string;
  enableTooltip?: boolean;
}

const TagCloud = () => {
  const callbacks = {};

  const options: Options = {
    colors: ['#0d40a4', '#1A86D2', '#61c1f8', '#FFCE47'],
    rotations: 1,
    rotationAngles: [0, 0],
    fontFamily: 'verdana',
    fontSizes: [10, 42],
    deterministic: true,
    enableTooltip: false,
  };

  return (
    <div className='flex flex-col h-[500px] md:h-[300px] w-full justify-center mt-6 lg:h-[288px] lg:w-1/2 lg:justify-between items-end lg:mt-0 me-10 rounded-lg bg-gray-50 dark:bg-gray-900 p-1 drop-shadow-lg'>
      <ReactWordcloud callbacks={callbacks} options={options} words={tags} />
    </div>
  );
};

export default TagCloud;
