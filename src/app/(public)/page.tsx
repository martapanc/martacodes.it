import * as React from 'react';

import Seo from '@/components/Seo';

const HomePage = async () => {
  return (
    <main className='min-h-main'>
      <Seo templateTitle='Home' />

      <section className='dark:bg-dark bg-white'>
        <div className='layout relative flex flex-col items-center justify-center py-12 text-center'>
          Homepage :)
        </div>
      </section>
    </main>
  );
};

export default HomePage;
