'use client';

import * as React from 'react';

import Heading from '../atoms/headings/Heading';
import CvCard from '../organisms/cv/CvCard';
import Education from '../organisms/cv/Education';
import Intro from '../organisms/cv/Intro';
import Languages from '../organisms/cv/Languages';
import Publications from '../organisms/cv/Publications';
import Skills from '../organisms/cv/Skills';
import WorkExperience from '../organisms/cv/WorkExperience';
import { Job } from '../../../../martacodes.it-restruct/src/types/Job';
import { Language } from '../../../../martacodes.it-restruct/src/types/Language';
import { Publication } from '../../../../martacodes.it-restruct/src/types/Publication';
import { School } from '../../../../martacodes.it-restruct/src/types/School';
import { Skill } from '../../../../martacodes.it-restruct/src/types/Skill';

type CvPageProps = {
  intro: string;
  skills: Skill[];
  jobs: Job[];
  schools: School[];
  languages: Language[];
  publications: Publication[];
};

export default function CvPage({
  intro,
  skills,
  jobs,
  schools,
  languages,
  publications,
}: CvPageProps) {
  return (
    <section>
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
  );
}
