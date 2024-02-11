'use client';

import * as React from 'react';
import { useTranslation } from 'react-i18next';

import styles from './styles.module.css';

import clsxm from '../../../lib/clsxm';

interface HeadingProps {
  title: string;
}

const Heading = ({ title }: HeadingProps) => {
  const { t } = useTranslation();

  return (
    <h1
      className={clsxm(
        styles.heading,
        'drop-shadow-lg mb-4 text-5xl font-bold',
      )}
    >
      {t(title)}
    </h1>
  );
};

export default Heading;
