import { readMarkdown } from '@/lib/markdownUtils';

import jobs from '@/data/cv/jobs.json';
import languages from '@/data/cv/languages.json';
import publications from '@/data/cv/publications.json';
import schools from '@/data/cv/schools.json';
import skills from '@/data/cv/skills.json';

import CvPage from '@/components/pages/cv-page';

export const metadata = {
  title: 'My CV | MartaCodes.it',
  description: 'All about my software development skills and work experience.',
  keywords:
    'Marta Pancaldi,Software Engineer,CV,Resumé,Java,Kotlin,Booking.com,Resourcify,BJSS,UniBZ,University of Manchester',
};

async function getData() {
  const intro = readMarkdown('cv/intro.md');
  return {
    intro,
    skills,
    jobs,
    schools,
    languages,
    publications,
  };
}

export default async function Page() {
  const { intro, skills, jobs, schools, languages, publications } =
    await getData();
  return (
    <CvPage
      intro={intro}
      skills={skills}
      jobs={jobs}
      schools={schools}
      languages={languages}
      publications={publications}
    />
  );
}
