import clsx from 'clsx';
import { Inder } from 'next/font/google';
import React from 'react';
import { FaLaptopCode, FaLightbulb } from 'react-icons/fa';
import { MdHomeWork } from 'react-icons/md';

const inder = Inder({ weight: '400', subsets: ['latin'] });

const Intro = () => {
  return (
    <div className='flex h-[500px] md:h-[300px] w-full justify-center mt-6 lg:h-[288px] lg:w-1/2 lg:justify-end lg:mt-0 me-10 rounded-md'>
      <div
        className={clsx(
          'flex flex-col items-end gap-2 text-xl w-[265px] justify-center',
          inder.className,
        )}
      >
        <div className='bg-[#97C1FF] dark:bg-[#004AB7] p-3 rounded-sm flex w-full justify-between drop-shadow-md'>
          <FaLaptopCode className='w-8 mt-1 me-3' />
          Full-Stack Engineer
        </div>
        <div className='bg-[#6DA7FF] dark:bg-[#003687] p-3 rounded-sm flex w-11/12 justify-between tracking-wide drop-shadow-md'>
          <FaLightbulb className='w-8 mt-1 me-3' />
          Lifelong Learner
        </div>
        <div className='bg-[#4791FF] dark:bg-[#00204F] p-3 rounded-sm flex w-10/12 justify-between text-[19px] drop-shadow-md'>
          <MdHomeWork className='w-7 mt-1 me-3' />
          WFH enthusiast
        </div>
      </div>
    </div>
  );
};

export default Intro;
