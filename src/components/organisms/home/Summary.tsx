import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import ReactMarkdown from 'react-markdown';
import reactStringReplace from 'react-string-replace';

import { HomePage } from '@/types/HomePage';

export interface SummaryProps {
  homePage: HomePage;
}

interface LinkProps {
  url: string;
  classes: string;
  image: string;
  alt: string;
  width: number;
  height: number;
}

function _buildLink(link: LinkProps) {
  return (
    <Link href={link.url} target='_blank' rel='noopener noreferrer'>
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

const Summary = ({ homePage }: SummaryProps) => {
  const resourcifyLogo = (
    <Link
      href='https://resourcify.com/'
      target='_blank'
      rel='noopener noreferrer'
    >
      <Image
        className='ms-1 inline'
        src='https://res.cloudinary.com/dwrurydlt/image/upload/v1693067033/resourcify_69f3b5b70d.webp'
        alt='Resourcify'
        width='106'
        height='21'
      />
    </Link>
  );

  const bjssLogo = (
    <Link href='https://bjss.com/' target='_blank' rel='noopener noreferrer'>
      <Image
        className='mx-1 inline'
        src='https://res.cloudinary.com/dwrurydlt/image/upload/v1692645367/bjss_180dc7fdd7.webp'
        alt='BJSS'
        width='45'
        height='25'
      />
    </Link>
  );

  const bookingLogo = (
    <Link href='https://booking.com/' target='_blank' rel='noopener noreferrer'>
      <Image
        className='ms-1 inline'
        src='https://res.cloudinary.com/dwrurydlt/image/upload/v1693067075/bookingcom_91b7aa2e36.svg'
        alt='Booking.com'
        width='115'
        height='25'
      />
    </Link>
  );

  const part1 = reactStringReplace(
    homePage.introduction_1,
    '{Resourcify}',
    () => resourcifyLogo,
  );

  let part2 = reactStringReplace(
    homePage.introduction_2,
    '{BJSS}',
    () => bjssLogo,
  );
  part2 = reactStringReplace(part2, '{Booking}', () => bookingLogo);

  return (
    <div className='text-base antialiased'>
      <p className='mb-4 md:mb-1'>{part1}</p>
      <p className='mb-4'>{part2}</p>
      <ReactMarkdown className='mb-4'>{homePage.introduction_3}</ReactMarkdown>
      <ReactMarkdown className='mb-4'>{homePage.introduction_4}</ReactMarkdown>
      <ReactMarkdown className='mb-4'>{homePage.introduction_5}</ReactMarkdown>
    </div>
  );
};

export default Summary;
