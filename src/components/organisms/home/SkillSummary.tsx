'use client';

import { Inter } from 'next/font/google';
import Image from 'next/image';
import React from 'react';
import ReactMarkdown from 'react-markdown';
import rehypeRaw from 'rehype-raw';

const font = Inter({ weight: '400', subsets: ['latin'] });

import clsxm from '@/lib/clsxm';

import { HomePage } from '@/types/Homepage';

interface SkillsProps {
  homePage: HomePage;
}

const SkillSummary = ({ homePage }: SkillsProps) => {
  return (
    <div
      className={clsxm(
        'flex md:flex-row flex-col-reverse gap-6 w-full',
        font.className,
      )}
    >
      <div className='md:w-1/4 flex items-center justify-center md:bg-amber-100/75 dark:bg-transparent rounded-3xl'>
        <Image
          src='https://res.cloudinary.com/dwrurydlt/image/upload/v1710444087/full-stack-developer.png'
          height={0}
          width={375}
          alt='full-stack development'
        />
      </div>
      <div className='text-lg antialiased md:w-3/4'>
        <ReactMarkdown className='mb-4' rehypePlugins={[rehypeRaw]}>
          {homePage.skills.fullStack}
        </ReactMarkdown>

        <ReactMarkdown className='mb-4' rehypePlugins={[rehypeRaw]}>
          {homePage.skills.languages}
        </ReactMarkdown>

        <ReactMarkdown className='mb-4' rehypePlugins={[rehypeRaw]}>
          {homePage.skills.latest}
        </ReactMarkdown>
      </div>
    </div>
  );
};

export default SkillSummary;
