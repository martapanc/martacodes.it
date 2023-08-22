import { PortableText } from '@portabletext/react';
import Image from 'next/image';
import * as React from 'react';

import { flattenToArray } from '@/lib/graphqlUtils';

import Education from '@/components/organisms/about-work/Education';
import Languages from '@/components/organisms/about-work/Languages';
import Publications from '@/components/organisms/about-work/Publications';
import WorkExperience from '@/components/organisms/about-work/WorkExperience';

import { jobsQueryQL } from '@/queries/jobs';
import { languagesQueryQL } from '@/queries/languages';
import { publicationQuery } from '@/queries/publications';
import { schoolsQuery, schoolsQueryQL } from '@/queries/schools';
import { shortTextQuery } from '@/queries/short-texts';
import { skillQuery } from '@/queries/skills';
import { Icon } from '@/sanityTypes/Icon';
import { Publication } from '@/sanityTypes/Publication';
import { ShortText } from '@/sanityTypes/ShortText';
import { Skill } from '@/sanityTypes/Skill';

import apolloClient from '../../../../../apollo/apollo-client';
import { sanityClient } from '../../../../../sanity/lib/client';

import { Job } from '@/types/Job';
import { Language } from '@/types/Language';
import { School } from '@/types/School';

export const metadata = {
  title: 'About my Work | MartaCodes.it',
  description: 'About page',
};

const getData = async () => {
  const publications: Publication[] = await sanityClient.fetch(
    publicationQuery
  );

  const schools: School[] = await sanityClient.fetch(schoolsQuery);

  const skills: Skill[] = await sanityClient.fetch(skillQuery);

  const shortTexts: ShortText[] = await sanityClient.fetch(shortTextQuery);

  return {
    publications,
    schools,
    shortTexts,
    skills,
  };
};

async function queryJobs() {
  const { data } = await apolloClient.query({
    query: jobsQueryQL,
  });

  return flattenToArray<Job>(data.jobs);
}

async function querySchools() {
  const { data } = await apolloClient.query({
    query: schoolsQueryQL,
  });

  return flattenToArray<School>(data.schools);
}

async function queryLanguages() {
  const { data } = await apolloClient.query({
    query: languagesQueryQL,
  });

  return flattenToArray<Language>(data.languages);
}

const queryData = async () => {
  const jobs = await queryJobs();
  const languages = await queryLanguages();
  const schools = await querySchools();

  return {
    jobs,
    languages,
    schools,
  };
};

const AboutPage = async () => {
  const { publications, shortTexts, skills } = await getData();

  const { jobs, languages, schools } = await queryData();

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
