import React from 'react';

import Intro from '@/components/organisms/home/Intro';
import SkillSummary from '@/components/organisms/home/SkillSummary';
import Summary from '@/components/organisms/home/Summary';
import Updates from '@/components/organisms/home/Updates';

import Projects from '../organisms/home/Projects';

import { CodeSnippet } from '@/types/CodeSnippet';
import { HomePage } from '@/types/Homepage';
import { Project } from '@/types/Project';

type HomePageProps = {
  homePage: HomePage;
  codeSnippets: CodeSnippet[];
  projects: Project[];
};

export default function HomePage({
  homePage,
  codeSnippets,
  projects,
}: HomePageProps) {
  return (
    <section className='dark:bg-dark bg-white'>
      <div className='dark:bg-gradient-linear-dark bg-gradient-linear-light'>
        <div className='layout relative flex flex-col py-16 md:pt-24 pb-5 md:pb-16'>
          <Intro greeting={homePage.greeting} codeSnippets={codeSnippets} />
        </div>
      </div>

      <div className='angle angle-1 bg-blue-100 after:bg-white dark:bg-slate-900 after:dark:bg-dark'></div>

      <div className='bg-blue-100 dark:bg-slate-900'>
        <div className='layout relative flex py-8'>
          <Summary homePage={homePage} />
        </div>
      </div>

      <div className='angle angle-2 bg-home-section2 after:bg-blue-100 dark:bg-home-section3-dark after:dark:bg-slate-900'></div>

      <div className='bg-home-section2 dark:bg-home-section3-dark'>
        <div className='layout relative flex py-8'>
          <SkillSummary homePage={homePage} />
        </div>
      </div>

      <div className='angle angle-4 bg-home-section3 after:bg-home-section2 dark:bg-dark after:dark:bg-home-section3-dark'></div>

      <div className='bg-home-section3 dark:bg-dark'>
        <div className='layout relative flex py-8'>
          <Projects projects={projects} />
        </div>
      </div>

      <div className='angle angle-3 bg-white after:bg-home-section3 dark:bg-home-section4-dark after:dark:bg-dark'></div>

      <div className='bg-white dark:bg-home-section4-dark'>
        <div className='layout relative flex py-8'>
          <Updates />
        </div>
      </div>
    </section>
  );
}
