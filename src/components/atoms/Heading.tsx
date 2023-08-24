'use client';

import * as React from 'react';
import { useTranslation } from 'react-i18next';

interface HeadingProps {
  title: string;
}

const Heading = ({ title }: HeadingProps) => {
  const { t } = useTranslation();

  return <h1 className='mb-5'>{t(title)}</h1>;
};

export default Heading;
