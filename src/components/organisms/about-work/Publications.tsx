'use client';

import * as React from 'react';
import { AiOutlineFilePdf } from 'react-icons/ai';

import SectionHeading from '@/components/atoms/headings/SectionHeading';
import UnstyledLink from '@/components/links/UnstyledLink';

import { Publication } from '@/types/Publication';

export interface PublicationProps {
  publications: Publication[];
}

const Publications = ({ publications }: PublicationProps) => {
  return (
    <div className='mb-6 mt-4'>
      <SectionHeading titlePrefix='aboutWork.publications' />

      <div className='mt-4 grid grid-cols-1 gap-3 md:grid-cols-3 md:gap-8'>
        {publications.map((publication) => (
          <div
            key={publication.id}
            className='flex h-32 flex-col justify-between rounded-md p-4 shadow-md dark:bg-slate-900 md:h-40'
          >
            <span className='font-semibold'>{publication.title}</span>

            <div className='flex flex-row justify-between'>
              <div className='flex flex-col'>
                <span className='font-light'>{publication.description}</span>
                <span className='font-light'>
                  {publication.publisher}, {publication.year}
                </span>
              </div>

              <div className='flex flex-col self-end'>
                <UnstyledLink
                  key={publication.id}
                  className='focus-visible:ring-primary-300 inline-flex items-center justify-center rounded-sm focus:outline-none focus-visible:ring'
                  href={publication.file.url}
                >
                  <AiOutlineFilePdf className='hover:text-primary-500 dark:hover:text-primary-300 my-auto h-6 w-6 align-middle text-blue-900 transition-colors dark:text-gray-300' />
                </UnstyledLink>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Publications;
