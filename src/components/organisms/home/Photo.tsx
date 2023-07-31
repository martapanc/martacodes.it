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
            src='https://cdn.sanity.io/images/lj8a3h3g/production/15c9b3d57800e2f07abb0f6971a9186f9ff54f68-553x553.png'
            alt='Avatar'
            width={190}
            height={0}
            style={{ height: '190px' }}
          />
          <Image
            src='https://cdn.sanity.io/images/lj8a3h3g/production/b1fbe23d8efef11db38fd636e4035db81cfebdf6-941x189.webp'
            alt='Avatar'
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
