import * as React from 'react';

import '@/styles/globals.css';

import UnstyledLink from '@/components/links/UnstyledLink';

export default function NotFoundPage() {
  return (
    <>
      <div className='layout min-h-no-header flex flex-col items-center justify-center text-center dark:text-white'>
        <h1 className='mt-8'>Page Not Found</h1>
        <UnstyledLink
          href='/'
          className='animated-underline dark:animated-underline mt-4 rounded-sm font-medium text-slate-950 dark:text-blue-50'
        >
          Back to Home
        </UnstyledLink>
      </div>
    </>
  );
}
