import Image from 'next/image';
import React from 'react';

const Photo = () => {
  return (
    <div className='flex h-80 w-full justify-start md:h-[280px] md:w-1/2 md:justify-end'>
      <div className='ms-3 flex flex-row-reverse p-3 md:flex-row'>
        <div className='me-6 flex flex-col items-end text-lg'>
          <div className='mt-10'>Software Engineer</div>
          <div className='mt-10'>Lifelong learner</div>
          <div className='mt-10'>Remote work enthusiast</div>
        </div>
        <div className='flex flex-col items-center'>
          <Image
            className='mb-3 rounded-full'
            src='https://res.cloudinary.com/dwrurydlt/image/upload/v1693038096/avatar_md_292b112d97.png'
            alt='Avatar'
            width={190}
            height={0}
            style={{ height: '190px' }}
          />
          <Image
            src='https://res.cloudinary.com/dwrurydlt/image/upload/v1693066829/signature_b64d54de16.webp'
            alt='Signature'
            width={250}
            height={0}
            style={{ height: '50px' }}
          />
        </div>
      </div>
    </div>
  );
};

export default Photo;
