'use client';

import * as React from 'react';
import { useTranslation } from 'react-i18next';
import { FaDownload } from 'react-icons/fa';

import Button from '@/components/atoms/buttons/Button';

const CvCard = () => {
  const { t } = useTranslation();

  return (
    <div className='flex justify-center p-3 mt-6'>
      <a href='/downloads/cv.pdf' target='_blank' rel='noopener noreferrer'>
        <Button color='dark'>
          <FaDownload className='me-2' />
          {t('cv.download')}
        </Button>
      </a>
    </div>
  );
};

export default CvCard;
