'use client';

import Image from 'next/image';
import * as React from 'react';

import SectionHeading from '@/components/atoms/headings/SectionHeading';

import { Language } from '@/types/Language';

export interface LanguageProps {
  languages: Language[];
}

const Languages = ({ languages }: LanguageProps) => {
  return (
    <div className='mb-6 mt-4'>
      <SectionHeading titlePrefix='aboutWork.languages' />

      <div className='mt-4 grid grid-cols-1 gap-3 md:grid-cols-4 md:gap-6'>
        {languages.map((language) => (
          <div
            key={language.id}
            className='flex flex-row items-center rounded-md p-4 shadow-md dark:bg-slate-900 md:w-64'
          >
            <Image
              src={language.flag.url}
              alt={language.name}
              width={40}
              height={40}
            />

            <span className='ms-4 font-semibold'>{language.level}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Languages;
