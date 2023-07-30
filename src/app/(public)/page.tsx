import * as React from 'react';

import Intro from '@/components/organisms/home/Intro';
import Summary from '@/components/organisms/home/Summary';
import Seo from '@/components/Seo';

// import {homeContentQuery} from '@/queries/homeContent';
//
// import {sanityClient} from '../../../sanity/lib/client';
//
// import {HomeContent} from '@/types/HomeContent';

// const getData = async () => {
//   const homeData: HomeContent[] = await sanityClient.fetch(homeContentQuery);
//
//   return {
//     homeContent: homeData[0],
//   };
// };

const HomePage = async () => {
  // const {homeContent} = await getData();

  return (
    <main className='min-h-main'>
      <Seo templateTitle='Home' />

      <section className='dark:bg-dark bg-white'>
        <div className='layout relative flex flex-col py-16 md:py-24'>
          <Intro />

          <Summary />
        </div>
      </section>
    </main>
  );
};

export default HomePage;
