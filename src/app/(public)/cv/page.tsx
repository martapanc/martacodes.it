import * as React from 'react';

import CvCard from '@/components/organisms/cv/CvCard';

export const metadata = {
  title: 'CV | MartaCodes.it',
  description: 'CV page',
};

const CVPage = async () => {
  return (
    <main className='min-h-main'>
      <section>
        <div className='layout relative flex flex-col py-12'>
          <h1 className='mb-5 text-center'>CV</h1>

          <CvCard />
        </div>
      </section>
    </main>
  );
};

export default CVPage;
