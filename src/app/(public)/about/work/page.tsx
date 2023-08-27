import Image from 'next/image';
import * as React from 'react';
import ReactMarkdown from 'react-markdown';

import Heading from '@/components/atoms/headings/Heading';
import Education from '@/components/organisms/about-work/Education';
import Intro from '@/components/organisms/about-work/Intro';
import Languages from '@/components/organisms/about-work/Languages';
import Publications from '@/components/organisms/about-work/Publications';
import WorkExperience from '@/components/organisms/about-work/WorkExperience';

import { queryJobs } from '@/queries/jobs';
import { queryLanguages } from '@/queries/languages';
import { queryPublications } from '@/queries/publications';
import { querySchools } from '@/queries/schools';
import { queryIntro } from '@/queries/short-texts';
import { querySkills } from '@/queries/skills';

import { Icon } from '@/types/Icon';
import { Skill } from '@/types/Skill';

export const metadata = {
  title: 'About my Work | MartaCodes.it',
  description: 'About page',
};

const queryData = async () => {
  const intro = await queryIntro();

  const jobs = await queryJobs();
  const languages = await queryLanguages();
  const publications = await queryPublications();
  const schools = await querySchools();
  const skills = await querySkills();

  return {
    intro,
    jobs,
    languages,
    publications,
    schools,
    skills,
  };
};

const AboutPage = async () => {
  const { intro, jobs, languages, publications, schools, skills } =
    await queryData();

  const iconDimension = 36;

  return (
    <main className='min-h-main'>
      <section className='dark:bg-dark bg-white'>
        <div className='layout relative flex flex-col py-12'>
          <Heading title='aboutWork.title' />

          <Intro intro={intro} />

          <div className='mb-10 grid grid-cols-1 gap-5 md:grid-cols-3 md:gap-6'>
            {skills.map((skill: Skill) => (
              <div
                key={skill.title}
                className='skill-container rounded p-4 shadow-md dark:bg-slate-900 dark:drop-shadow-md'
              >
                <div className='flex'>
                  {skill.icons.map((icon: Icon) => (
                    <Image
                      key={icon.id}
                      height={iconDimension}
                      width={iconDimension}
                      alt={icon.name}
                      src={icon.url}
                    />
                  ))}
                </div>

                <h3>{skill.title}</h3>

                <span className='skill-description text-justify font-light'>
                  <ReactMarkdown>{skill.description}</ReactMarkdown>
                </span>
              </div>
            ))}
          </div>

          <hr />

          <WorkExperience jobs={jobs} />

          <hr />

          <Education schools={schools} />

          <hr />

          <Languages languages={languages} />

          <hr />

          <Publications publications={publications} />
        </div>
      </section>
    </main>
  );
};

export default AboutPage;
