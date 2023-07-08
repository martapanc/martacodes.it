'use client';

import { PortableText } from '@portabletext/react';
import Image from 'next/image';
import { useTheme } from 'next-themes';
import * as React from 'react';

import { Job } from '@/types/Job';

export interface WorkExperienceProps {
  jobs: Job[];
}

const WorkExperience = ({ jobs }: WorkExperienceProps) => {
  const { theme } = useTheme();

  return (
    <div className=''>
      <div className='m-2 flex'>
        <h2>Work Experience</h2>
      </div>

      <div>
        {jobs.map((job) => (
          <div
            key={job._id}
            className='mb-4 rounded-md p-4 shadow-md dark:bg-slate-900'
          >
            {/* Start Job Header */}
            <div className='flex border-b-2 border-slate-200 pb-2'>
              <Image
                className='me-3 rounded-sm'
                src={job.iconUrl}
                alt={job.company}
                width={60}
                height={60}
              />

              <div className='flex w-full justify-between'>
                <div className='flex flex-col'>
                  <h4>
                    {job.company} ~ {job.location}
                  </h4>
                  <h5 className='font-medium'>{job.jobTitle}</h5>
                </div>

                <div className='flex flex-col justify-center'>
                  <h4>
                    {job.startYear} –{' '}
                    {job.isCurrentJob ? ` present` : job.endYear}
                  </h4>
                </div>
              </div>
            </div>
            {/* End Job Header */}

            {/* Start Job Content */}
            <div className='job-content pt-4'>
              <div className='skill-description pb-2 text-justify font-light'>
                <PortableText value={job.description} />
              </div>

              <div className='mb-2 flex justify-end'>
                {job.technologies.map((tech) => (
                  <div
                    key={tech}
                    style={{
                      backgroundColor:
                        theme === 'dark' ? job.darkColor : job.mainColor,
                    }}
                    className='ms-2 rounded-md px-2 py-0.5 text-white dark:text-black'
                  >
                    {tech}
                  </div>
                ))}
              </div>
            </div>
            {/* End Job Content */}
          </div>
        ))}
      </div>
    </div>
  );
};

export default WorkExperience;
