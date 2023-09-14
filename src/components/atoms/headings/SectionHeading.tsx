'use client';

import Image from 'next/image';
import * as React from 'react';
import { useTranslation } from 'react-i18next';

interface SectionHeadingProps {
  titlePrefix: string;
}

const SectionHeading = ({ titlePrefix }: SectionHeadingProps) => {
  const { t } = useTranslation();

  const titleIconDimension = 36;

  return (
    <div className='m-2 mb-3 flex flex-col items-center'>
      <Image
        className='h-auto'
        src={t(`${titlePrefix}.icon`)}
        alt={t(`${titlePrefix}.title`)}
        width={titleIconDimension}
        height={titleIconDimension}
      />

      <h2 className='-mt-0.5 underline decoration-1 underline-offset-4 md:decoration-2'>
        {t(`${titlePrefix}.title`)}
      </h2>
    </div>
  );
};

export default SectionHeading;
