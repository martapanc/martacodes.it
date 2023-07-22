'use client';

import Image from 'next/image';
import * as React from 'react';

import { Language } from '@/types/Language';

export interface LanguageProps {
  languages: Language[];
}

const Languages = ({ languages }: LanguageProps) => {
  return (
    <div>
      <div className='m-2 flex'>
        <h2>Languages</h2>
      </div>

      <div className='flex flex-col md:w-full md:flex-row md:justify-between'>
        {languages.map((language) => (
          <div
            key={language.id}
            className='mb-4 flex flex-row items-center rounded-md p-4 shadow-md dark:bg-slate-900 md:w-64'
          >
            <Image
              src={language.flagUrl}
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
