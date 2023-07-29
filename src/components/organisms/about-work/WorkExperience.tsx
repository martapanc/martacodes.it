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
            {/* Start Job Header - Desktop */}
            <div className='hidden border-b-2 border-slate-200 pb-2 md:flex'>
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
                    {job.company} {job.location && `~`} {job.location}
                  </h4>
                  <h5 className='font-medium'>{job.jobTitle}</h5>
                </div>

                <div className='flex flex-col justify-center'>
                  <span className='text-lg font-semibold'>
                    <>
                      {format(job.startDate)}
                      &nbsp; — &nbsp;
                      {job.isCurrentJob ? `present` : format(job.endDate)}
                    </>
                  </span>
                </div>
              </div>
            </div>
            {/* End Job Header - Desktop*/}

            {/* Start Job Header - Mobile */}
            <div className='flex flex-col border-b-2 border-slate-200 pb-2 md:hidden'>
              <div className='flex'>
                <Image
                  className='me-3 rounded-sm'
                  src={job.iconUrl}
                  alt={job.company}
                  width={60}
                  height={60}
                />

                <div className='flex w-full justify-between'>
                  <div className='flex flex-col'>
                    <span className='text-sm font-semibold'>
                      {job.company} {job.location && `~`} {job.location}
                    </span>

                    <span className='text-sm'>{job.jobTitle}</span>
                  </div>
                </div>
              </div>

              <div className='flex justify-end'>
                <span className='text-xs font-medium'>
                  {format(job.startDate)}
                  &nbsp; — &nbsp;
                  {job.isCurrentJob ? `present` : format(job.endDate)}
                </span>
              </div>
            </div>
            {/* End Job Header - Mobile*/}

            {/* Start Job Content */}
            <div className='job-content pt-4'>
              <div className='skill-description pb-2 text-justify font-light'>
                <PortableText value={job.description} />
              </div>

              <div className='mb-2 flex flex-wrap justify-end md:w-full'>
                {job.technologies.map((tech) => (
                  <div
                    key={tech}
                    style={{
                      backgroundColor:
                        theme === 'dark' ? job.darkColor : job.mainColor,
                    }}
                    className='mb-1 ms-1 rounded-sm px-1 py-0.5 text-xs text-white dark:text-black md:ms-2 md:rounded-md md:px-2 md:text-base'
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

function format(inputDate: string): string {
  const date = new Date(inputDate);
  return Intl.DateTimeFormat('en', {
    year: 'numeric',
    month: 'short',
  }).format(date);
}

export default WorkExperience;