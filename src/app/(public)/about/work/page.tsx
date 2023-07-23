import { PortableText } from '@portabletext/react';
import Image from 'next/image';
import * as React from 'react';

import Education from '@/components/organisms/about-work/Education';
import Languages from '@/components/organisms/about-work/Languages';
import Publications from '@/components/organisms/about-work/Publications';
import WorkExperience from '@/components/organisms/about-work/WorkExperience';

import { jobsQuery } from '@/queries/jobs';
import { languageQuery } from '@/queries/languages';
import { publicationQuery } from '@/queries/publications';
import { schoolsQuery } from '@/queries/schools';
import { shortTextQuery } from '@/queries/short-texts';
import { skillQuery } from '@/queries/skills';

import { sanityClient } from '../../../../../sanity/lib/client';

import { Icon } from '@/types/Icon';
import { Job } from '@/types/Job';
import { Language } from '@/types/Language';
import { Publication } from '@/types/Publication';
import { School } from '@/types/School';
import { ShortText } from '@/types/ShortText';
import { Skill } from '@/types/Skill';

export const metadata = {
  title: 'About my Work | MartaCodes.it',
  description: 'About page',
};

const getData = async () => {
  const jobs: Job[] = await sanityClient.fetch(jobsQuery);

  const languages: Language[] = await sanityClient.fetch(languageQuery);

  const publications: Publication[] = await sanityClient.fetch(
    publicationQuery
  );

  const schools: School[] = await sanityClient.fetch(schoolsQuery);

  const skills: Skill[] = await sanityClient.fetch(skillQuery);

  const shortTexts: ShortText[] = await sanityClient.fetch(shortTextQuery);

  return {
    jobs,
    languages,
    publications,
    schools,
    shortTexts,
    skills,
  };
};

const AboutPage = async () => {
  const { jobs, languages, publications, schools, shortTexts, skills } =
    await getData();

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
          <h1 className='mb-5'>Work & Career</h1>

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
                  {skill.icons.map((icon: Icon) => (
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

          <Education schools={schools} />

          <Languages languages={languages} />

          <Publications publications={publications} />
        </div>
      </section>
    </main>
  );
};

export default AboutPage;
