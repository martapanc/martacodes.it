'use client';

import * as React from 'react';
import { useTranslation } from 'react-i18next';

import './headings.css';

interface HeadingProps {
  title: string;
}

const Heading = ({ title }: HeadingProps) => {
  const { t } = useTranslation();

  return (
    <h1 className='heading drop-shadow-lg mb-3 text-5xl font-bold'>
      {t(title)}
    </h1>
  );
};

export default Heading;
