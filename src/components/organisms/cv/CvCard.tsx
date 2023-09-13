'use client';

import Image from 'next/image';
import * as React from 'react';
import { useTranslation } from 'react-i18next';
import { FaDownload } from 'react-icons/fa';

import Button from '@/components/buttons/Button';

const CvCard = () => {
  const { t } = useTranslation();

  const width = 1200;

  return (
    <>
      <div className='flex justify-center p-3'>
        <a
          href='http://bit.ly/pancaldi_cv'
          target='_blank'
          rel='noopener noreferrer'
        >
          <Button color='dark'>
            <FaDownload className='me-2' />
            {t('cv.download')}
          </Button>
        </a>
      </div>

      <div className='md:p-4 drop-shadow-xl'>
        <Image
          src='https://res.cloudinary.com/dwrurydlt/image/upload/v1694635077/Pancaldi_CV_aug23_1_103473c4e7.webp'
          alt='CV Page 1'
          width={width}
          height={0}
        />
        <Image
          src='https://res.cloudinary.com/dwrurydlt/image/upload/v1694635671/Pancaldi_CV_aug23_77a1e29cab.webp'
          alt='CV Page 2'
          width={width}
          height={0}
        />
      </div>
    </>
  );
};

export default CvCard;
