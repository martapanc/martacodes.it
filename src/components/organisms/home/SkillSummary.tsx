'use client';

import { Inter } from 'next/font/google';
import Image from 'next/image';
import React from 'react';
import ReactMarkdown from 'react-markdown';
import rehypeRaw from 'rehype-raw';

const font = Inter({ weight: '400', subsets: ['latin'] });

import clsxm from '@/lib/clsxm';

import { HomepageContent } from '@/types/HomepageContent';

interface SkillsProps {
  homePage: HomepageContent;
}

const SkillSummary = ({ homePage }: SkillsProps) => {
  return (
    <div className='flex flex-col'>
      <div className='tracking-widest text-sm font-semibold text-slate-500 mb-5 text-end'>
        SOFTWARE DEVELOPMENT
      </div>
      <div
        className={clsxm(
          'flex md:flex-row flex-col-reverse gap-6 w-full',
          font.className,
        )}
      >
        <div className='md:w-1/4 flex items-center justify-center dark:bg-transparent rounded-3xl'>
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
    </div>
  );
};

export default SkillSummary;
