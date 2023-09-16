import * as React from 'react';

import Heading from '@/components/atoms/headings/Heading';

export const metadata = {
  title: 'Uses | MartaCodes.it',
  description: 'Uses page',
};

const UsesPage = async () => {
  return (
    <main className='min-h-main'>
      <section>
        <div className='layout relative flex flex-col py-12'>
          <Heading title='uses.title' />
        </div>
      </section>
    </main>
  );
};

export default UsesPage;
