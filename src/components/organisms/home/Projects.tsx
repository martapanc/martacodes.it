'use client';

import { Inter } from 'next/font/google';
import React from 'react';

const font = Inter({ subsets: ['latin'] });

import Link from 'next/link';

import clsxm from '@/lib/clsxm';

import RecentProjectCard from '@/components/organisms/home/RecentProjectCard';

import { Project } from '@/types/Project';

interface ProjectsProps {
  projects: Project[];
}

const Projects = ({ projects }: ProjectsProps) => {
  return (
    <div className='flex flex-col'>
      <div className='tracking-widest text-sm font-semibold text-slate-500 mb-5'>
        RECENT PROJECTS
      </div>
      <div
        className={clsxm('flex flex-col gap-6 w-full', font.className)}
        style={font.style}
      >
        <RecentProjectCard project={projects[0]} reverse />
        <RecentProjectCard project={projects[1]} />
        <RecentProjectCard project={projects[2]} reverse />
      </div>

      <div className='text-lg text-blue-950 dark:text-blue-200'>
        Check out more of my projects{' '}
        <Link
          href='/projects'
          className='animated-underline-2 dark:animated-underline font-semibold'
          aria-label='Projects'
        >
          here
        </Link>
        ! 👀
      </div>
    </div>
  );
};

export default Projects;
