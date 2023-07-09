'use client';

import { PortableText } from '@portabletext/react';
import Image from 'next/image';
// import {useTheme} from "next-themes";
import * as React from 'react';

import { School } from '@/types/School';

export interface EducationProps {
  schools: School[];
}

const Education = ({ schools }: EducationProps) => {
  // const { theme } = useTheme();

  return (
    <div className=''>
      <div className='m-2 flex'>
        <h2>Education</h2>
      </div>

      <div>
        {schools.map((school) => (
          <div
            key={school._id}
            className='mb-4 rounded-md p-4 shadow-md dark:bg-slate-900'
          >
            {/* Start School Header */}
            <div className='flex border-b-2 border-slate-200 pb-2'>
              <Image
                className='me-3 rounded-sm'
                src={school.schoolIcon}
                alt={school.schoolName}
                width={60}
                height={60}
              />

              <div className='flex w-full justify-between'>
                <div className='flex flex-col'>
                  <div className='flex flex-row'>
                    <h4 className='me-4'>
                      <a href={school.degreeUrl}>{school.schoolName}</a>
                    </h4>

                    <Image
                      src={school.flagUrl}
                      alt={school.schoolName}
                      width={28}
                      height={28}
                    />
                  </div>

                  <h5 className='font-medium'>{school.degreeName}</h5>
                </div>

                <div className='flex'>
                  <div className='me-20 flex flex-col justify-center'>
                    <span className='text-lg font-semibold'>
                      {school.grade}
                    </span>
                  </div>

                  <div className='flex flex-col justify-center'>
                    <span className='text-lg font-semibold'>
                      {school.startYear}&nbsp; — &nbsp;{school.endYear}
                    </span>
                  </div>
                </div>
              </div>
            </div>
            {/* End School Header */}

            {/* Start School Content */}
            <div className='job-content pt-4'>
              <div className='skill-description pb-2 text-justify font-light'>
                <PortableText value={school.description} />
              </div>
            </div>
            {/* End School Content */}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Education;
