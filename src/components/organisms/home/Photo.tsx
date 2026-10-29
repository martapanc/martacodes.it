'use client';

import React, { useEffect, useState } from 'react';

import { useTheme } from '@/hooks/useTheme';

import styles from './home.module.css';

import clsxm from '@/lib/clsxm';

const blackSignature =
  'https://res.cloudinary.com/dwrurydlt/image/upload/f_auto,q_auto,w_350/v1793284774/signature_marta_p_black_k0qw53.webp';
const whiteSignature =
  'https://res.cloudinary.com/dwrurydlt/image/upload/f_auto,q_auto,w_350/v1793284774/signature_marta_p_white_xjvpwt.webp';

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
    <div className='flex h-75 w-full justify-center items-center lg:h-70 lg:w-1/2 lg:justify-end mt-0 md:mt-8 rounded-md'>
      <div className='flex flex-col items-center mb-6 md:mb-0'>
        <img
          className={clsxm('mb-4 rounded-full', avatar)}
          src='https://res.cloudinary.com/dwrurydlt/image/upload/f_auto,q_auto,w_390/v1694699676/avatar_md_nobg_ef5553f75b.png'
          alt='Avatar'
          width={190}
          style={{ height: '190px' }}
        />
        <img
          src={signatureUrl}
          alt='Signature'
          width={250}
          height={50}
        />
      </div>
    </div>
  );
};

export default Photo;
