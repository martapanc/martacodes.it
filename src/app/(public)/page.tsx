import { PortableText } from '@portabletext/react';
import * as React from 'react';

import Intro from '@/components/organisms/home/Intro';
import Seo from '@/components/Seo';

import { homeContentQuery } from '@/queries/homeContent';

import { sanityClient } from '../../../sanity/lib/client';

import { HomeContent } from '@/types/HomeContent';

const getData = async () => {
  const homeData: HomeContent[] = await sanityClient.fetch(homeContentQuery);

  return {
    homeContent: homeData[0],
  };
};

const HomePage = async () => {
  const { homeContent } = await getData();

  return (
    <main className='min-h-main'>
      <Seo templateTitle='Home' />

      <section className='dark:bg-dark bg-white'>
        <div className='layout relative flex flex-col py-12'>
          <div className='pb-12'>
            <PortableText value={homeContent.threeLineSummary} />
          </div>

          <Intro />
        </div>
      </section>
    </main>
  );
};

export default HomePage;
