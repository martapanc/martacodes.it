'use client';

import * as React from 'react';
import ReactMarkdown from 'react-markdown';
import rehypeRaw from 'rehype-raw';

import SectionHeading from '@/components/atoms/headings/SectionHeading';

interface IntroProps {
  intro: string;
}

const Intro = ({ intro }: IntroProps) => {
  const noOfYears = (new Date().getFullYear() - 2015).toString();

  return (
    <div>
      <SectionHeading titlePrefix='cv.softwareDevelopment' />

      <div className='mb-6 cv-intro-section'>
        <ReactMarkdown className='text-justify' rehypePlugins={[rehypeRaw]}>
          {intro.replace('8', noOfYears)}
        </ReactMarkdown>
      </div>
    </div>
  );
};

export default Intro;
