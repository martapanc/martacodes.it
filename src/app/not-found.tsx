import React from 'react';

import Heading from '@/components/atoms/headings/Heading';
import UnstyledLink from '@/components/atoms/links/UnstyledLink';

export default async function NotFound() {
  return (
    <section className='dark:bg-dark bg-white'>
      <div className='layout relative flex flex-col py-16 md:py-24 items-center justify-center'>
        <div className='p-4'>
          <Heading title='404.title' />
        </div>

        <span className='text-3xl text-center'>
          Whoopsie, this page could not be found.
        </span>

        <div className='my-32 text-2xl'>
          <UnstyledLink
            className='decoration-2 animated-underline-2 dark:animated-underline'
            href='/'
          >
            Go back home
          </UnstyledLink>
        </div>
      </div>
    </section>
  );
}
