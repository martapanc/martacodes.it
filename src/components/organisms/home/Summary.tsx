import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import ReactMarkdown from 'react-markdown';
import reactStringReplace from 'react-string-replace';

import jobs from '@/data/jobs.json';

import { HomePage } from '@/types/HomePage';

interface LinkProps {
  key: string;
  href: string;
  classes: string;
  image: string;
  alt: string;
  width: number;
  height: number;
}

function buildLink(link: LinkProps) {
  return (
    <Link href={link.href} target='_blank' rel='noopener noreferrer'>
      <Image
        className={link.classes}
        src={link.image}
        alt={link.alt}
        width={link.width}
        height={link.height}
      />
    </Link>
  );
}

export interface SummaryProps {
  homePage: HomePage;
}

const Summary = ({ homePage }: SummaryProps) => {
  const introduction_1 = reactStringReplace(
    homePage.introduction_1,
    jobs.resourcify.key,
    () => buildLink(jobs.resourcify),
  );

  let introduction_2 = reactStringReplace(
    homePage.introduction_2,
    jobs.bjss.key,
    () => buildLink(jobs.bjss),
  );
  introduction_2 = reactStringReplace(introduction_2, jobs.booking.key, () =>
    buildLink(jobs.booking),
  );

  return (
    <div className='text-base antialiased'>
      <p className='mb-4 md:mb-1'>{introduction_1}</p>
      <p className='mb-4'>{introduction_2}</p>
      <ReactMarkdown className='mb-4'>{homePage.introduction_3}</ReactMarkdown>
      <ReactMarkdown className='mb-4'>{homePage.introduction_4}</ReactMarkdown>
      <ReactMarkdown className='mb-4'>{homePage.introduction_5}</ReactMarkdown>
    </div>
  );
};

export default Summary;
