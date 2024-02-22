'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useTheme } from 'next-themes';
import React, { useEffect, useState } from 'react';
import ReactMarkdown from 'react-markdown';
import reactStringReplace from 'react-string-replace';
import rehypeRaw from 'rehype-raw';

import clsxm from '@/lib/clsxm';

import jobs from '@/data/jobs.json';

import { HomePage } from '@/types/Homepage';

interface LinkProps {
  key: string;
  href: string;
  classes: string;
  image: string;
  imageDark: string;
  alt: string;
  width: number;
  height: number;
}

function buildLink(link: LinkProps, logoVersion: string) {
  const logoUrl = logoVersion === 'dark' ? link.imageDark : link.image;

  return (
    <Link
      key={link.key}
      href={link.href}
      target='_blank'
      rel='noopener noreferrer'
    >
      <Image
        className={clsxm(link.classes, 'inline')}
        src={logoUrl}
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
  const { theme } = useTheme();

  const [logoVersion, setLogoVersion] = useState('light');

  useEffect(() => {
    setLogoVersion(theme === 'dark' ? 'dark' : 'light');
  }, [theme]);

  const introduction_1 = reactStringReplace(
    homePage.introduction.now,
    jobs.appetize.key,
    () => buildLink(jobs.appetize, logoVersion),
  );

  let introduction_2 = reactStringReplace(
    homePage.introduction.cv,
    jobs.bjss.key,
    () => buildLink(jobs.bjss, logoVersion),
  );
  introduction_2 = reactStringReplace(introduction_2, jobs.booking.key, () =>
    buildLink(jobs.booking, logoVersion),
  );
  introduction_2 = reactStringReplace(introduction_2, jobs.resourcify.key, () =>
    buildLink(jobs.resourcify, logoVersion),
  );

  const introductionParts = [
    homePage.introduction.skills,
    homePage.introduction.fullStack,
    homePage.introduction.freeTime,
  ];

  return (
    <div className='text-base antialiased'>
      <p className='mb-4 md:mb-1'>{introduction_1}</p>
      <p className='mb-4'>{introduction_2}</p>

      {introductionParts.map((introPart, id) => (
        <ReactMarkdown key={id} className='mb-4' rehypePlugins={[rehypeRaw]}>
          {introPart}
        </ReactMarkdown>
      ))}
    </div>
  );
};

export default Summary;
