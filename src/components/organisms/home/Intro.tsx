import React from 'react';

import Code from '@/components/organisms/home/Code';
import Photo from '@/components/organisms/home/Photo';

const Intro = () => {
  return (
    <div className='mb-12 flex h-96 flex-col pb-12'>
      <h1 className='pb-4 text-5xl antialiased'>Hey there, I'm Marta 👋🏻</h1>

      <div className='mt-8 flex flex-col md:flex-row'>
        <Code />

        <Photo />
      </div>
    </div>
  );
};

export default Intro;
