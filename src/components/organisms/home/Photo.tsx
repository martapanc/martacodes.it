import Image from 'next/image';
import React from 'react';

const Photo = () => {
  return (
    <div className='h-84 flex w-full justify-start md:w-1/2 md:justify-end'>
      <div className='mx-6 flex flex-row-reverse p-3 md:flex-row'>
        <Image
          className='rounded-full'
          src='https://cdn.sanity.io/images/lj8a3h3g/production/15c9b3d57800e2f07abb0f6971a9186f9ff54f68-553x553.png'
          alt='Avatar'
          width={190}
          height={0}
          style={{ height: '190px' }}
        />
      </div>
    </div>
  );
};

export default Photo;
