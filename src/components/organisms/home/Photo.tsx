'use client';

import Image from 'next/image';
import { useTheme } from 'next-themes';
import React from 'react';

import './home.css';

const Photo = () => {
  const { theme } = useTheme();

  const avatar = `avatar-${theme}`;

  const signatureUrl =
    theme === 'dark'
      ? 'https://res.cloudinary.com/dwrurydlt/image/upload/v1693556940/signature_white_60dbdcd21f.webp'
      : 'https://res.cloudinary.com/dwrurydlt/image/upload/v1693066829/signature_b64d54de16.webp';

  return (
    <div className='flex h-[480px] w-full justify-center mt-6 md:h-[280px] md:w-1/2 md:justify-end md:mt-0'>
      <div className='flex items-center flex-col-reverse p-3 md:ms-3 md:flex-row'>
        <div className='flex flex-col items-center md:me-6 md:items-end text-lg'>
          <div className='mt-10 md:my-5'>Software Engineer</div>
          <div className='mt-10 md:my-5'>Lifelong learner</div>
          <div className='mt-10 md:my-5'>Remote work enthusiast</div>
        </div>
        <div className='flex flex-col items-center'>
          <Image
            className={`mb-4 rounded-full ${avatar}`}
            src='https://res.cloudinary.com/dwrurydlt/image/upload/v1694699676/avatar_md_nobg_ef5553f75b.png'
            alt='Avatar'
            width={190}
            height={0}
            style={{ height: '190px' }}
          />
          <Image
            src={signatureUrl}
            alt='Signature'
            width={250}
            height={0}
            style={{ height: '46px' }}
          />
        </div>
      </div>
    </div>
  );
};

export default Photo;
