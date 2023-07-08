import { PortableText } from '@portabletext/react';
import Image from 'next/image';
import * as React from 'react';

import WorkExperience from '@/components/organisms/WorkExperience/WorkExperience';

import { jobsQuery } from '@/queries/jobs';
import { shortTextQuery } from '@/queries/short-texts';
import { skillQuery } from '@/queries/skills';

import { sanityClient } from '../../../../sanity/lib/client';

import { Job } from '@/types/Job';
import { ShortText } from '@/types/ShortText';
import { Skill } from '@/types/Skill';
import { SkillIcon } from '@/types/SkillIcon';

export const metadata = {
  title: 'About | MartaCodes.it',
  description: 'About page',
};

const getData = async () => {
  const jobs: Job[] = await sanityClient.fetch(jobsQuery);

  const skills: Skill[] = await sanityClient.fetch(skillQuery);

  const shortTexts: ShortText[] = await sanityClient.fetch(shortTextQuery);

  return {
    jobs,
    shortTexts,
    skills,
  };
};

const AboutPage = async () => {
  const { jobs, shortTexts, skills } = await getData();

  const softwareDevelopment: ShortText | undefined = shortTexts.find(
    (item) => item.name === 'software-development'
  );

  const noOfYears = new Date().getFullYear() - 2015;

  const iconDimension = 36;
  const titleIconDimension = 42;

  return (
    <main className='min-h-main'>
      <section className='dark:bg-dark bg-white'>
        <div className='layout relative flex flex-col py-12'>
          <h1 className='mb-5'>About</h1>

          {softwareDevelopment && (
            <div>
              <div className='m-2 flex'>
                <Image
                  className='mr-2 h-auto'
                  src={softwareDevelopment.iconUrl}
                  alt={softwareDevelopment.title}
                  width={titleIconDimension}
                  height={titleIconDimension}
                />

                <h2>{softwareDevelopment.title}</h2>
              </div>

              <div className='mb-5'>
                <p>
                  Software development has been both my passion and my work for{' '}
                  {noOfYears} years. Below is a quick overview of my main
                  technical skill sets and technologies I use. Want to find out
                  more about my experience? Check out my{' '}
                  <a href='/cv'>online CV</a> and{' '}
                  <a href='/projects'>project portfolio</a>.
                </p>
              </div>
            </div>
          )}

          <div className='mb-10 grid grid-cols-1 gap-5 md:grid-cols-3 md:gap-6'>
            {skills.map((skill: Skill) => (
              <div
                key={skill.name}
                className='skill-container rounded p-4 shadow-md dark:bg-slate-900 dark:drop-shadow-md'
              >
                <div className='flex'>
                  {skill.icons.map((icon: SkillIcon) => (
                    <Image
                      key={icon._id}
                      height={iconDimension}
                      width={iconDimension}
                      alt={icon.title}
                      src={icon.url}
                    />
                  ))}
                </div>

                <h3>{skill.title}</h3>

                <span className='skill-description text-justify font-light'>
                  <PortableText value={skill.description} />
                </span>
              </div>
            ))}
          </div>

          <WorkExperience jobs={jobs} />
        </div>
      </section>
    </main>
  );
};

export default AboutPage;
