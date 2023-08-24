'use client';

import * as React from 'react';
import ReactMarkdown from 'react-markdown';

import SectionHeading from '@/components/atoms/SectionHeading';

import { SoftwareDevIntro } from '@/types/ShortText';

interface IntroProps {
  intro: SoftwareDevIntro;
}

const Intro = ({ intro }: IntroProps) => {
  const noOfYears = (new Date().getFullYear() - 2015).toString();

  return (
    <div>
      <SectionHeading titlePrefix='aboutWork.softwareDevelopment' />

      <div className='mb-5'>
        <ReactMarkdown>{intro.content.replace('8', noOfYears)}</ReactMarkdown>
      </div>
    </div>
  );
};

export default Intro;
