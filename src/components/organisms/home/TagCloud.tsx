'use client';

import ReactWordcloud, { AttributeValue } from '@cyberblast/react-wordcloud';
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
  svgAttributes?: Record<string, AttributeValue>;
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
    <div className='flex flex-col w-full mt-6 h-80 md:h-[260px] lg:h-[288px] lg:w-1/2 items-end lg:mt-0 rounded-lg bg-gray-50 dark:bg-gray-900 p-1 drop-shadow-lg'>
      <ReactWordcloud callbacks={callbacks} options={options} words={tags} />
    </div>
  );
};

export default TagCloud;
