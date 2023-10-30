import * as React from 'react';

import '@/components/organisms/cv/cv.css';

import Heading from '@/components/atoms/headings/Heading';
import CvCard from '@/components/organisms/cv/CvCard';
import Education from '@/components/organisms/cv/Education';
import Intro from '@/components/organisms/cv/Intro';
import Languages from '@/components/organisms/cv/Languages';
import Publications from '@/components/organisms/cv/Publications';
import Skills from '@/components/organisms/cv/Skills';
import WorkExperience from '@/components/organisms/cv/WorkExperience';

import { queryJobs } from '@/queries/jobs';
import { queryLanguages } from '@/queries/languages';
import { queryPublications } from '@/queries/publications';
import { querySchools } from '@/queries/schools';
import { queryIntro } from '@/queries/short-texts';
import { querySkills } from '@/queries/skills';

export const metadata = {
  title: 'My CV | MartaCodes.it',
  description: 'All about my software development skills and work experience.',
  keywords:
    'Marta Pancaldi,Software Engineer,CV,Resumé,Java,Kotlin,Booking.com,Resourcify,BJSS,UniBZ,University of Manchester',
};

const queryData = async () => {
  const intro = await queryIntro();
  const jobs = await queryJobs('en');
  const languages = await queryLanguages();
  const publications = await queryPublications('en');
  const schools = await querySchools('en');
  const skills = await querySkills('en');

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

  return (
    <main className='min-h-main'>
      <section className='dark:bg-dark bg-white'>
        <div className='layout relative flex flex-col py-12'>
          <Heading title='cv.title' />

          <Intro intro={intro} />

          <Skills skills={skills} />

          <hr />

          <WorkExperience jobs={jobs} />

          <hr />

          <Education schools={schools} />

          <hr />

          <Languages languages={languages} />

          <hr />

          <Publications publications={publications} />

          <hr />

          <CvCard />
        </div>
      </section>
    </main>
  );
};

export default AboutPage;
