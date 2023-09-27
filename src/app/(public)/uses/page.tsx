import * as React from 'react';
import ReactMarkdown from 'react-markdown';

import './uses.css';

import Heading from '@/components/atoms/headings/Heading';

import { queryUsesPage } from '@/queries/uses-page';

export const metadata = {
  title: 'Uses | MartaCodes.it',
  description: 'Uses page',
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
        </div>
      </section>
    </main>
  );
};

export default UsesPage;
