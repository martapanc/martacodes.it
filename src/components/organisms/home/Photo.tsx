'use client';

import Image from 'next/image';
import { useTheme } from 'next-themes';
import React, { useEffect, useState } from 'react';

import styles from './home.module.css';

import clsxm from '@/lib/clsxm';

const blackSignature =
  'https://res.cloudinary.com/dwrurydlt/image/upload/v1693066829/signature_b64d54de16.webp';
const whiteSignature =
  'https://res.cloudinary.com/dwrurydlt/image/upload/v1693556940/signature_white_60dbdcd21f.webp';

const Photo = () => {
  const { theme } = useTheme();

  const [avatar, setAvatar] = useState('avatar-light');
  const [signatureUrl, setSignatureUrl] = useState(blackSignature);

  useEffect(() => {
    const url = theme === 'dark' ? whiteSignature : blackSignature;

    setSignatureUrl(url);

    setAvatar(styles[`avatar-${theme}`]);
  }, [theme]);

  return (
    <div className='flex h-[300px] w-full justify-center lg:h-[280px] lg:w-1/2 lg:justify-end lg:mt-0 rounded-md'>
      <div className='flex flex-col items-center mb-2'>
        <Image
          className={clsxm('mb-4 rounded-full', avatar)}
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
  );
};

export default Photo;
