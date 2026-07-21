'use client';

import React from 'react';

import clsxm from '@/lib/clsxm';

import RecentProjectCard from '@/components/organisms/home/RecentProjectCard';

import type { Project } from '@/types/Project';

interface ProjectsProps {
  projects: Project[];
}

// The projects showcased on the home page, in display order. Titles must match
// `src/data/projects/projects.json` — anything unmatched is simply skipped.
const FEATURED_TITLES = [
  'FlexInvoice',
  'LinkedIn Job Filter',
  'Language Transfer Companion',
];

const Projects = ({ projects }: ProjectsProps) => {
  const featured = FEATURED_TITLES.map((title) =>
    projects.find((project) => project.title === title),
  ).filter((project): project is Project => Boolean(project));

  return (
    <div className='flex flex-col'>
      <h2 className='tracking-widest text-sm font-semibold text-slate-600 dark:text-slate-400 mb-5'>
        RECENT PROJECTS
      </h2>
      <div className='flex flex-col gap-6 w-full'>
        {featured.map((project, index) => (
          <RecentProjectCard
            key={project.title}
            project={project}
            reverse={index % 2 === 0}
          />
        ))}
      </div>

      <div className='text-lg text-blue-950 dark:text-blue-200'>
        <a
          href='/projects'
          className='animated-underline-2 dark:animated-underline font-semibold'
        >
          See all my projects
        </a>
        ! 👀
      </div>
    </div>
  );
};

export default Projects;
