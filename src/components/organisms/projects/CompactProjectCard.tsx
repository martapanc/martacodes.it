'use client';

import * as React from 'react';
import ReactMarkdown from 'react-markdown';

import { LinkIcons, ToolIcons, projectYear } from './ProjectMeta';

import type { Project } from '@/types/Project';

interface CompactProjectCardProps {
  project: Project;
  onReadMore: (project: Project) => void;
}

const CompactProjectCard = ({ project, onReadMore }: CompactProjectCardProps) => (
  <article className='flex h-full flex-col rounded-lg border border-slate-200 bg-white p-4 transition-colors hover:border-primary-300 dark:border-slate-800 dark:bg-slate-900 dark:hover:border-primary-700'>
    <div className='mb-2 flex items-baseline justify-between gap-3'>
      <h3 className='text-base'>{project.title}</h3>
      <span className='shrink-0 font-mono text-xs text-slate-500 dark:text-slate-400'>
        {projectYear(project.date)}
      </span>
    </div>

    <div className='mb-4 text-sm font-light text-slate-600 dark:text-slate-400'>
      <ReactMarkdown>{project.shortDescription}</ReactMarkdown>
    </div>

    <div className='mt-auto flex flex-wrap items-center justify-between gap-3'>
      <ToolIcons tools={project.tools} size='1.15em' />
      <div className='flex items-center gap-3'>
        <LinkIcons links={project.links} size='1.15em' />
        {project.longDescription && (
          <button
            type='button'
            onClick={() => onReadMore(project)}
            className='cursor-pointer text-sm font-medium text-primary-600 hover:underline dark:text-primary-400'
          >
            Details
          </button>
        )}
      </div>
    </div>
  </article>
);

export default CompactProjectCard;
