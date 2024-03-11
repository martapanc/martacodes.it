'use client';

// import {Inder} from 'next/font/google';
import React from 'react';
import ReactWordcloud from 'react-wordcloud';

import 'tippy.js/dist/tippy.css';
import 'tippy.js/animations/scale.css';

import tags from '@/data/tags.json';

// const inder = Inder({weight: '400', subsets: ['latin']});

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
  const callbacks = {
    // getWordColor: (tag: Tag) => tag.value > 10 ? "blue" : "lightblue",
    // onWordClick: console.log,
    // onWordMouseOver: console.log,
    // getWordTooltip: (tag: Tag) => `${tag.text} (${tag.value}) [${tag.value > 50 ? "good" : "bad"}]`,
  };
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
    <div className='flex flex-col h-[500px] md:h-[300px] w-full justify-center mt-6 lg:h-[288px] lg:w-1/2 lg:justify-between items-end lg:mt-0 me-10 rounded-md bg-gray-50 p-1'>
      <ReactWordcloud callbacks={callbacks} options={options} words={tags} />
    </div>
  );
};

export default TagCloud;
