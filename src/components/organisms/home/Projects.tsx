'use client';

import React from 'react';

import clsxm from '@/lib/clsxm';
import { slugify } from '@/lib/slug';

import RecentProjectCard from '@/components/organisms/home/RecentProjectCard';

import type { Project } from '@/types/Project';

interface ProjectsProps {
  projects: Project[];
}

/**
 * Chosen by title slug rather than by position, so adding a project to
 * projects.json can't silently change what the homepage shows. A slug that no
 * longer matches (renamed, drafted or wip) is simply skipped.
 */
const HOMEPAGE_PROJECTS = ['flextag', 'appetize-io-2-0', 'conju-gat'];

const Projects = ({ projects }: ProjectsProps) => {
  const picked = HOMEPAGE_PROJECTS.map((slug) =>
    projects.find((project) => slugify(project.title) === slug),
  ).filter((project): project is Project => project !== undefined);

  return (
    <div className='flex flex-col'>
      <h2 className='tracking-widest text-sm font-semibold text-slate-600 dark:text-slate-400 mb-5'>
        RECENT PROJECTS
      </h2>
      <div className='flex flex-col gap-6 w-full'>
        {picked.map((project, index) => (
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
