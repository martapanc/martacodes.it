import Image from 'next/image';
import * as React from 'react';
import ReactMarkdown from 'react-markdown';

import './uses.css';

import Heading from '@/components/atoms/headings/Heading';
import UpdateTimestamp from '@/components/molecules/UpdateTimestamp/UpdateTimestamp';

import { queryUsesPage } from '@/queries/uses-page';

export const metadata = {
  title: 'Uses | MartaCodes.it',
  description: 'A list of tech equipment and software I use.',
};

const queryData = async () => {
  const usesPage = await queryUsesPage();

  return {
    usesPage,
  };
};

const UsesPage = async () => {
  const { usesPage } = await queryData();

  const sections = [
    usesPage.hardware,
    usesPage.programmingTools,
    usesPage.productivity,
    usesPage.security,
    usesPage.media,
  ];

  return (
    <main className='min-h-main'>
      <section>
        <div className='layout relative flex flex-col py-12'>
          <Heading title='uses.title' />

          <div className='flex items-center flex-col my-3'>
            <Image
              className='mb-2'
              src='https://res.cloudinary.com/dwrurydlt/image/upload/v1698432934/current_setup.jpg'
              alt='Current setup'
              width={540}
              height={400}
            />
            <span className='italic'>My current workstation setup</span>
          </div>

          {sections.map((section) => (
            <div
              className='uses-section mb-2'
              aria-label={section.title}
              key={section.title}
            >
              <h2 className='my-4'>{section.title}</h2>
              <ReactMarkdown>{section.content}</ReactMarkdown>
            </div>
          ))}

          <hr className='my-8' />

          <UpdateTimestamp updatedAt={usesPage.updatedAt} />
        </div>
      </section>
    </main>
  );
};

export default UsesPage;
