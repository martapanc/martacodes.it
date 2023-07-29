'use client';

import { PortableText } from '@portabletext/react';
import Image from 'next/image';
import * as React from 'react';

import { School } from '@/types/School';

export interface EducationProps {
  schools: School[];
}

const Education = ({ schools }: EducationProps) => {
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
            {/* Start School Header - Desktop */}
            <div className='hidden border-b-2 border-slate-200 pb-2 md:flex'>
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
            {/* End School Header - Desktop */}

            {/* Start School Header - Mobile */}
            <div className='flex flex-col border-b-2 border-slate-200 pb-2 md:hidden'>
              <div className='flex'>
                <Image
                  className='me-3 rounded-sm'
                  src={school.schoolIcon}
                  alt={school.schoolName}
                  width={60}
                  height={60}
                />

                <div className='flex w-full justify-between'>
                  <div className='flex flex-col'>
                    <div className='flex flex-row justify-between'>
                      <h4 className='me-4'>
                        <a href={school.degreeUrl}>{school.schoolName}</a>
                      </h4>

                      <Image
                        src={school.flagUrl}
                        alt={school.schoolName}
                        width={20}
                        height={20}
                      />
                    </div>

                    <h5 className='font-medium'>{school.degreeName}</h5>
                  </div>
                </div>
              </div>

              <div className='-mt-1 flex flex-row justify-end'>
                <span className='me-8 text-sm font-normal'>{school.grade}</span>

                <span className='text-sm font-normal'>
                  {school.startYear}&nbsp; — &nbsp;{school.endYear}
                </span>
              </div>
            </div>
            {/* End School Header - Mobile */}

            {/* Start School Content */}
            <div className='job-content pt-4'>
              <div className='sm-skill-description md:skill-description pb-2 text-justify font-light'>
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